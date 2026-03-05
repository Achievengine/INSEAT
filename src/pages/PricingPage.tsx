import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { API_BASE_URL } from '../config/api';
import {
  getDefaultSubscriptionConfig,
  getPublicSubscriptionConfig,
  PricingCurrency,
  PublicSubscriptionConfig,
} from '../services/subscriptionConfigService';

interface FeatureGate {
  featureKey: string;
  label: string;
  starter: boolean;
  pro: boolean;
  enterprise: boolean;
}

// Base platform features always included in every plan (not gated)
const BASE_FEATURES = [
  'QR-code contactless ordering',
  'Full menu management & modifiers',
  'Table & venue management',
  'Real-time order tracking',
  'Multi-gateway payments (Stripe, Chapa, Telebirr)',
  'Basic analytics & reports',
  'Email support',
];

// Enterprise-only extras (not in feature gates)
const ENTERPRISE_EXTRAS = [
  'Unlimited locations & venues',
  'Custom integrations & API access',
  'Dedicated onboarding manager',
  'SLA-backed support & uptime guarantee',
];

// Base comparison rows (always true for all plans)
const BASE_COMPARISON = [
  { name: 'QR-Code Ordering', starter: true, professional: true, enterprise: true },
  { name: 'Menu Management & Modifiers', starter: true, professional: true, enterprise: true },
  { name: 'Table & Venue Management', starter: true, professional: true, enterprise: true },
  { name: 'Real-Time Order Tracking', starter: true, professional: true, enterprise: true },
  { name: 'Multi-Gateway Payments', starter: true, professional: true, enterprise: true },
];

function buildPlansFromConfig(gates: FeatureGate[], subscriptionConfig: PublicSubscriptionConfig) {
  const starterGated = gates.filter(g => g.starter).map(g => g.label);
  const proOnly = gates.filter(g => g.pro && !g.starter).map(g => g.label);
  const entryPlan = subscriptionConfig.plans.find((p) => p.tier === 'entry');
  const proPlan = subscriptionConfig.plans.find((p) => p.tier === 'mid');
  const customPlan = subscriptionConfig.plans.find((p) => p.tier === 'custom');

  return [
    {
      name: entryPlan?.planName || 'Starter',
      description:
        entryPlan?.description || 'Everything you need to launch contactless dining.',
      monthlyPrice: entryPlan?.pricing?.USD?.monthly ?? 0,
      annualPrice: entryPlan?.pricing?.USD?.annualMonthly ?? 0,
      tier: 'entry',
      features: [...BASE_FEATURES, ...starterGated],
      limitations: ['Single location'],
      cta: 'Start Free Trial',
      popular: false,
      annualDiscountPercent: entryPlan?.annualDiscountPercent || 0,
      pricing: entryPlan?.pricing,
    },
    {
      name: proPlan?.planName || 'Pro',
      description:
        proPlan?.description || 'For restaurants scaling operations and customer loyalty.',
      monthlyPrice: proPlan?.pricing?.USD?.monthly ?? 0,
      annualPrice: proPlan?.pricing?.USD?.annualMonthly ?? 0,
      tier: 'mid',
      features: ['Everything in Starter, plus:', ...proOnly],
      limitations: [] as string[],
      cta: 'Start Free Trial',
      popular: true,
      annualDiscountPercent: proPlan?.annualDiscountPercent || 0,
      pricing: proPlan?.pricing,
    },
    {
      name: customPlan?.planName ? `Custom ${customPlan.planName}` : 'Custom Enterprise',
      description:
        customPlan?.description || 'For multi-location or deeply customized rollout needs.',
      monthlyPrice: 'Custom' as string | number,
      annualPrice: 'Custom' as string | number,
      tier: 'custom',
      features: ['Everything in Pro, plus:', ...ENTERPRISE_EXTRAS, 'Custom billing terms'],
      limitations: ['Sales-assisted setup required'],
      cta: 'Contact Sales',
      popular: false,
      annualDiscountPercent: customPlan?.annualDiscountPercent || 0,
      pricing: customPlan?.pricing,
    },
  ];
}

function buildComparison(gates: FeatureGate[]) {
  const gatedRows = gates.map(g => ({
    name: g.label,
    starter: g.starter,
    professional: g.pro,
    enterprise: g.enterprise,
  }));

  return [
    ...BASE_COMPARISON,
    ...gatedRows,
    { name: 'Multi-Location', starter: false, professional: false, enterprise: true },
    { name: 'Dedicated Onboarding', starter: false, professional: false, enterprise: true },
    { name: 'Support', starter: 'Email' as boolean | string, professional: 'Priority' as boolean | string, enterprise: 'Dedicated' as boolean | string },
  ];
}

// Map country code → currency
const COUNTRY_CURRENCY: Record<string, PricingCurrency> = {
  AE: 'AED',  // UAE
  ET: 'ETB',  // Ethiopia
};

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || 'http://localhost:5173';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState<PricingCurrency>('USD');
  const [featureGates, setFeatureGates] = useState<FeatureGate[]>([]);
  const [subscriptionConfig, setSubscriptionConfig] = useState<PublicSubscriptionConfig>(
    getDefaultSubscriptionConfig()
  );

  // Fetch feature gates from backend
  useEffect(() => {
    fetch(`${API_BASE_URL}/businesses/feature-gates/public`)
      .then(res => res.json())
      .then(data => {
        if (data.success && Array.isArray(data.data)) {
          setFeatureGates(data.data);
        }
      })
      .catch(() => {
        // Silently fail — plans will use defaults
      });
  }, []);

  useEffect(() => {
    getPublicSubscriptionConfig().then(setSubscriptionConfig);
  }, []);

  const plans = useMemo(
    () => buildPlansFromConfig(featureGates, subscriptionConfig),
    [featureGates, subscriptionConfig]
  );
  const comparisonFeatures = useMemo(() => buildComparison(featureGates), [featureGates]);

  // Detect user's country via IP geolocation
  useEffect(() => {
    const detectLocation = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          const countryCode = data?.country_code || data?.country;
          if (countryCode && COUNTRY_CURRENCY[countryCode]) {
            setCurrency(COUNTRY_CURRENCY[countryCode]);
          }
        }
      } catch (err) {
        console.warn('Location detection failed, defaulting to USD');
      }
    };
    detectLocation();
  }, []);

  const formatPrice = (amount: number) => {
    const hasDecimals = Math.abs(amount % 1) > 0.001;
    const formatted = new Intl.NumberFormat(undefined, {
      minimumFractionDigits: hasDecimals ? 2 : 0,
      maximumFractionDigits: hasDecimals ? 2 : 0,
    }).format(amount);

    if (currency === 'USD') {
      return `$${formatted}`;
    }
    return `${formatted} ${currency}`;
  };

  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Pricing', url: 'https://inseat.achievengine.com/pricing' }
  ];

  const starterPlan = plans.find((plan) => plan.tier === 'entry');
  const proPlan = plans.find((plan) => plan.tier === 'mid');
  const annualDiscountLabel = Math.max(
    ...(plans
      .filter((plan) => plan.tier !== 'custom')
      .map((plan) => plan.annualDiscountPercent || 0))
  );
  const starterPriceForFaq =
    starterPlan?.pricing?.[currency]?.monthly ?? 0;
  const starterSeoPrice =
    starterPlan?.pricing?.USD?.monthly ?? 0;
  const proSeoPrice =
    proPlan?.pricing?.USD?.monthly ?? 0;
  const availableCurrencies =
    subscriptionConfig.currencies?.length > 0
      ? subscriptionConfig.currencies
      : (['USD', 'AED', 'ETB'] as PricingCurrency[]);

  const faqs = [
    {
      question: 'Do you have a plan for small restaurants?',
      answer: `Yes. Starter starts at ${formatPrice(starterPriceForFaq)}/outlet/month and is designed for single-location restaurants launching contactless QR ordering.`
    },
    {
      question: 'Do you charge per order or reservation?',
      answer: 'No. We use fixed subscription tiers instead of per-cover billing.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your account will remain active until the end of your billing period.'
    },
    {
      question: 'Which checkout gateways can I enable for my storefront?',
      answer: 'You can configure Stripe, MPGS, Chapa, and Telebirr from the Website Builder payment setup. Gateway availability depends on your region and credentials.'
    },
    {
      question: 'What is included in the Custom Enterprise plan?',
      answer: 'Custom Enterprise is for tailored onboarding, advanced integrations, and multi-location setups. Pricing is handled through sales.'
    },
    {
      question: 'Can I upgrade later?',
      answer: 'Yes. You can start on Starter and move to Pro as your restaurant grows.'
    }
  ];

  // plans and comparisonFeatures are now computed dynamically via useMemo above

  return (
    <>
      <SEOHead
        title="Pricing - Website Builder and Ordering Plans"
        description={`Simple subscription pricing for INSEAT restaurant ordering platform. Starter at $${starterSeoPrice}, Pro at $${proSeoPrice}, and Custom Enterprise.`}
        keywords="restaurant ordering pricing, contactless QR ordering pricing, telebirr stripe chapa integration pricing, INSEAT subscription plans"
        url="https://inseat.achievengine.com/pricing"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        softwareApplication={{
          name: 'Inseat',
          description: 'Restaurant contactless ordering platform with flat-rate subscription tiers.',
          features: ['QR Ordering', 'Menu Management', 'Payment Gateways', 'Loyalty Program', 'Analytics'],
          price: String(starterSeoPrice),
          priceCurrency: 'USD'
        }}
      />

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-indigo-50 pt-20 pb-16">
          <div className="container-custom">
            <Breadcrumbs items={breadcrumbs} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mt-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Launch a full branded restaurant website with online ordering and grow into advanced payment onboarding as your business scales.
              </p>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className={`font-medium ${!isAnnual ? 'text-secondary' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setIsAnnual(!isAnnual)}
                  className={`relative w-14 h-7 rounded-full transition-colors ${isAnnual ? 'bg-primary' : 'bg-gray-300'}`}
                >
                  <span
                    className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${isAnnual ? 'left-8' : 'left-1'}`}
                  />
                </button>
                <span className={`font-medium ${isAnnual ? 'text-secondary' : 'text-gray-500'}`}>
                  Annual
                  <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    {annualDiscountLabel > 0 ? `Save up to ${annualDiscountLabel}%` : 'Annual billing'}
                  </span>
                </span>
              </div>

              {/* Currency selector */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <span className="text-sm text-gray-500">Prices in:</span>
                {availableCurrencies.map((code) => (
                  <button
                    key={code}
                    onClick={() => setCurrency(code)}
                    className={`text-sm px-3 py-1 rounded-full font-medium transition-colors ${currency === code
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {code}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => {
                const pricePoint = plan.pricing?.[currency];
                const isCustom = plan.tier === 'custom' || !pricePoint || pricePoint.monthly <= 0;
                const displayedPrice = isAnnual
                  ? pricePoint?.annualMonthly || 0
                  : pricePoint?.monthly || 0;
                const annualPriceTotal = pricePoint?.annualTotal || 0;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative rounded-2xl p-8 ${plan.popular
                      ? 'bg-primary text-white ring-4 ring-primary/20'
                      : 'bg-gray-50 text-secondary'
                      }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </div>
                    )}

                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm mb-6 ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        {isCustom ? 'Custom' : formatPrice(displayedPrice)}
                      </span>
                      {!isCustom && (
                        <span className={plan.popular ? 'text-primary-100' : 'text-gray-500'}>
                          /outlet/month
                        </span>
                      )}
                      {isAnnual && annualPriceTotal > 0 && !isCustom && (
                        <p className={`text-sm mt-1 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>
                          Billed annually ({formatPrice(annualPriceTotal)}/year)
                          {plan.annualDiscountPercent > 0 ? ` · Save ${plan.annualDiscountPercent}%` : ''}
                        </p>
                      )}
                      {!isCustom && (
                        <p className={`text-xs mt-2 font-medium ${plan.popular ? 'text-white/80' : 'text-green-600'}`}>
                          7-day free trial included
                        </p>
                      )}
                    </div>

                    {plan.tier === 'custom' ? (
                      <Link
                        to="/#demo"
                        className={`block w-full py-3 px-6 rounded-lg font-semibold text-center mb-8 transition-all hover:scale-[1.02] active:scale-[0.98] ${plan.popular
                          ? 'bg-white text-primary hover:bg-gray-100'
                          : 'bg-primary text-white hover:bg-primary/90'
                          }`}
                      >
                        {plan.cta}
                      </Link>
                    ) : (
                      <a
                        href={`${ADMIN_URL}/register?plan=${plan.tier}`}
                        className={`block w-full py-3 px-6 rounded-lg font-semibold text-center mb-8 transition-all cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${plan.popular
                          ? 'bg-white text-primary hover:bg-gray-100'
                          : 'bg-primary text-white hover:bg-primary/90'
                          }`}
                      >
                        {plan.cta}
                      </a>
                    )}

                    <ul className="space-y-3">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <svg
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-green-500'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                        </li>
                      ))}
                      {plan.limitations.map((limitation, lIndex) => (
                        <li key={lIndex} className="flex items-start gap-2">
                          <svg
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary-200' : 'text-gray-400'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className={plan.popular ? 'text-primary-200' : 'text-gray-500'}>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Compare Plans
              </h2>
              <p className="text-xl text-gray-600">
                See exactly what's included in each plan
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 font-semibold text-secondary">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-secondary">Starter</th>
                    <th className="text-center py-4 px-4 font-semibold text-primary bg-primary/5">Pro</th>
                    <th className="text-center py-4 px-4 font-semibold text-secondary">Custom Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <tr key={index} className="border-b last:border-b-0">
                      <td className="py-4 px-6 text-gray-700">{feature.name}</td>
                      <td className="text-center py-4 px-4">
                        {renderFeatureValue(feature.starter)}
                      </td>
                      <td className="text-center py-4 px-4 bg-primary/5">
                        {renderFeatureValue(feature.professional)}
                      </td>
                      <td className="text-center py-4 px-4">
                        {renderFeatureValue(feature.enterprise)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-secondary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container-custom text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Start Your Free Trial Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Try INSEAT free for 7 days. No credit card required. Cancel anytime.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href={`${ADMIN_URL}/register?plan=mid`}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] inline-block"
              >
                Start Free Trial
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

// Helper function to render feature values
const renderFeatureValue = (value: boolean | string) => {
  if (value === true) {
    return (
      <svg className="w-5 h-5 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    );
  }
  if (value === false) {
    return (
      <svg className="w-5 h-5 text-gray-300 mx-auto" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  }
  return <span className="text-gray-700 text-sm">{value}</span>;
};

export default PricingPage;
