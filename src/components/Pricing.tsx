import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { API_BASE_URL } from '../config/api';
import {
  getDefaultSubscriptionConfig,
  getPublicSubscriptionConfig,
  PricingCurrency,
  PublicSubscriptionConfig,
} from '../services/subscriptionConfigService';

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || 'http://localhost:5173';

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

const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.floor(amount));
};

const formatCurrency = (currency: PricingCurrency, amount: number): string => {
  if (currency === 'USD') {
    return `$${formatAmount(amount)}`;
  }
  return `${formatAmount(amount)} ${currency}`;
};

function buildPlans(gates: FeatureGate[], subscriptionConfig: PublicSubscriptionConfig) {
  const starterGated = gates.filter((g) => g.starter).map((g) => g.label);
  const proOnly = gates.filter((g) => g.pro && !g.starter).map((g) => g.label);

  const entryPlan = subscriptionConfig.plans.find((p) => p.tier === 'entry');
  const proPlan = subscriptionConfig.plans.find((p) => p.tier === 'mid');
  const customPlan = subscriptionConfig.plans.find((p) => p.tier === 'custom');

  return [
    {
      name: entryPlan?.planName || 'Starter',
      description:
        entryPlan?.description ||
        'Everything you need to launch contactless dining.',
      tier: 'entry' as const,
      pricing: entryPlan?.pricing,
      annualDiscountPercent: entryPlan?.annualDiscountPercent || 0,
      features: [...BASE_FEATURES, ...starterGated],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: proPlan?.planName || 'Pro',
      description:
        proPlan?.description ||
        'For restaurants scaling operations and customer loyalty.',
      tier: 'mid' as const,
      pricing: proPlan?.pricing,
      annualDiscountPercent: proPlan?.annualDiscountPercent || 0,
      features: ['Everything in Starter, plus:', ...proOnly],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: customPlan?.planName ? `Custom ${customPlan.planName}` : 'Custom Enterprise',
      description:
        customPlan?.description ||
        'For multi-location or deeply customized rollout needs.',
      tier: 'custom' as const,
      pricing: customPlan?.pricing,
      annualDiscountPercent: customPlan?.annualDiscountPercent || 0,
      features: ['Everything in Pro, plus:', ...ENTERPRISE_EXTRAS],
      cta: 'Contact Sales',
      popular: false,
    },
  ];
}

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState<PricingCurrency>('USD');
  const [featureGates, setFeatureGates] = useState<FeatureGate[]>([]);
  const [subscriptionConfig, setSubscriptionConfig] = useState<PublicSubscriptionConfig>(
    getDefaultSubscriptionConfig()
  );

  // Fetch feature gates from backend
  useEffect(() => {
    fetch(`${API_BASE_URL}/businesses/feature-gates/public`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && Array.isArray(data.data)) {
          setFeatureGates(data.data);
        }
      })
      .catch(() => {
        // Silently fail — plans will use defaults via buildPlans([])
      });
  }, []);

  useEffect(() => {
    getPublicSubscriptionConfig().then(setSubscriptionConfig);
  }, []);

  const plans = useMemo(
    () => buildPlans(featureGates, subscriptionConfig),
    [featureGates, subscriptionConfig]
  );

  const currencies =
    subscriptionConfig.currencies?.length > 0
      ? subscriptionConfig.currencies
      : (['USD', 'AED', 'ETB'] as PricingCurrency[]);

  return (
    <section id="pricing" className="py-20 md:py-28 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
            Choose the plan that fits your restaurant. All plans include a 7-day free trial.
          </p>
          <p className="text-sm font-semibold text-primary mb-5">No credit card required</p>

          {/* Billing toggle + currency */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Billing toggle */}
            <div className="flex items-center gap-3">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-secondary' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${isAnnual ? 'bg-primary' : 'bg-gray-300'}`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-secondary' : 'text-gray-400'}`}>
                Annual
              </span>
            </div>

            {/* Currency picker */}
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
              {currencies.map((code) => (
                <button
                  key={code}
                  onClick={() => setCurrency(code)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold transition-colors ${currency === code
                      ? 'bg-primary text-white'
                      : 'text-gray-500 hover:text-secondary'
                    }`}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const pricingPoint = plan.pricing?.[currency];
            const isCustom = plan.tier === 'custom' || !pricingPoint || pricingPoint.monthly <= 0;
            const displayedPrice = isAnnual
              ? pricingPoint?.annualMonthly ?? 0
              : pricingPoint?.monthly ?? 0;

            return (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative rounded-2xl p-7 flex flex-col transition-shadow ${plan.popular
                    ? 'bg-primary text-white shadow-xl shadow-primary/20 ring-2 ring-primary'
                    : 'bg-white text-secondary shadow-sm border border-gray-100 hover:shadow-md'
                  }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-primary text-xs font-bold px-4 py-1 rounded-full shadow">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className={`text-sm mb-5 ${plan.popular ? 'text-white/70' : 'text-gray-400'}`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  {isCustom ? (
                    <span className="text-3xl font-bold">Custom</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">
                        {formatCurrency(currency, displayedPrice)}
                      </span>
                      <span className={`text-sm ml-1 ${plan.popular ? 'text-white/60' : 'text-gray-400'}`}>
                        /outlet/month
                      </span>
                    </>
                  )}
                  {!isCustom && isAnnual && (
                    <p className={`text-xs mt-1 ${plan.popular ? 'text-white/60' : 'text-gray-500'}`}>
                      Billed yearly ({formatCurrency(currency, pricingPoint.annualTotal)}/year)
                      {plan.annualDiscountPercent > 0
                        ? ` · Save ${plan.annualDiscountPercent}%`
                        : ''}
                    </p>
                  )}
                  {!isCustom && (
                    <p className={`text-xs mt-1 ${plan.popular ? 'text-white/50' : 'text-gray-400'}`}>
                      7-day free trial
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={plan.popular ? 'text-white/90' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {isCustom ? (
                  <a
                    href="/#demo"
                    className="block w-full py-3 rounded-xl font-semibold text-center text-sm bg-gray-100 text-secondary hover:bg-gray-200 transition-colors"
                  >
                    {plan.cta}
                  </a>
                ) : (
                  <a
                    href={`${ADMIN_URL}/register?plan=${plan.tier}`}
                    className={`block w-full py-3 rounded-xl font-semibold text-center text-sm transition-colors ${plan.popular
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-primary text-white hover:bg-primary/90'
                      }`}
                  >
                    {plan.cta}
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-400 text-sm mt-10"
        >
          Cancel anytime · 7-day free trial on all plans
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
