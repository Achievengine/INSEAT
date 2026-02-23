import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Pricing', url: 'https://inseat.achievengine.com/pricing' }
  ];

  const faqs = [
    {
      question: 'Do you have a plan for small restaurants?',
      answer: 'Yes. Bronze Launch is $50/month and is designed for single-location restaurants launching their website storefront and online ordering.'
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
      answer: 'Yes. You can start on Bronze Launch and move to Silver Growth as your restaurant grows.'
    }
  ];

  const plans = [
    {
      name: 'Bronze Launch',
      description: 'Best for first-time launch of a branded restaurant website.',
      monthlyPrice: 50,
      annualPrice: 40,
      features: [
        'Website builder with branded homepage',
        'Menu sync from INSEAT menu',
        'Single payment gateway connection',
        'Basic checkout and order capture',
        'Publish & domain setup',
        'Email support'
      ],
      limitations: [
        'Single location',
        'Single gateway'
      ],
      cta: 'Start Bronze Launch',
      popular: false
    },
    {
      name: 'Silver Growth',
      description: 'For restaurants scaling online orders and payment options.',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Everything in Bronze Launch, plus:',
        'Multiple gateway setup (Stripe/MPGS/Chapa/Telebirr)',
        'Gateway verification workflow',
        'Advanced website sections and merchandising',
        'Enhanced analytics',
        'Priority support'
      ],
      limitations: [],
      cta: 'Start Silver Growth',
      popular: true
    },
    {
      name: 'Custom Enterprise',
      description: 'For multi-location or deeply customized rollout needs.',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      features: [
        'Everything in Silver Growth, plus:',
        'Unlimited locations',
        'Custom integrations',
        'Dedicated onboarding',
        'SLA and support options',
        'Custom billing terms'
      ],
      limitations: [
        'Sales-assisted setup required'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const comparisonFeatures = [
    { name: 'Website Builder', starter: true, professional: true, enterprise: true },
    { name: 'Menu Sync', starter: true, professional: true, enterprise: true },
    { name: 'Online Ordering Checkout', starter: true, professional: true, enterprise: true },
    { name: 'Gateway Count', starter: '1', professional: 'Multiple', enterprise: 'Custom' },
    { name: 'Telebirr / Chapa Setup', starter: false, professional: true, enterprise: true },
    { name: 'Advanced Merchandising', starter: false, professional: true, enterprise: true },
    { name: 'Dedicated Onboarding', starter: false, professional: false, enterprise: true },
    { name: 'Multi-location', starter: false, professional: false, enterprise: true },
    { name: 'Support', starter: 'Email', professional: 'Priority', enterprise: 'Dedicated' },
  ];

  return (
    <>
      <SEOHead
        title="Pricing - Website Builder and Ordering Plans"
        description="Simple subscription pricing for INSEAT website builder and restaurant online ordering. Bronze Launch at $50, Silver Growth at $99, and Custom Enterprise."
        keywords="restaurant website builder pricing, online ordering pricing, telebirr stripe chapa integration pricing, INSEAT subscription plans"
        url="https://inseat.achievengine.com/pricing"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        softwareApplication={{
          name: 'Inseat',
          description: 'Restaurant website builder and online ordering platform with flat-rate subscription tiers.',
          features: ['Website Builder', 'Menu Sync', 'Online Checkout', 'Gateway Onboarding', 'Analytics'],
          price: '50',
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
              <div className="flex items-center justify-center gap-4 mb-8">
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
                    Save 20%
                  </span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
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
                    {(() => {
                      const displayedPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
                      const isCustom = displayedPrice === 'Custom';
                      const annualPriceNumber = typeof plan.annualPrice === 'number' ? plan.annualPrice : 0;
                      return (
                        <>
                          <span className="text-4xl font-bold">
                            {isCustom ? 'Custom' : `$${displayedPrice}`}
                          </span>
                          {!isCustom && (
                            <span className={plan.popular ? 'text-primary-100' : 'text-gray-500'}>
                              /month
                            </span>
                          )}
                          {isAnnual && annualPriceNumber > 0 && !isCustom && (
                            <p className={`text-sm mt-1 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>
                              Billed annually (${annualPriceNumber * 12}/year)
                            </p>
                          )}
                        </>
                      );
                    })()}
                  </div>

                  <Link
                    to="/#demo"
                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center mb-8 transition-colors ${
                      plan.popular
                        ? 'bg-white text-primary hover:bg-gray-100'
                        : 'bg-primary text-white hover:bg-primary/90'
                    }`}
                  >
                    {plan.cta}
                  </Link>

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
              ))}
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
                    <th className="text-center py-4 px-4 font-semibold text-secondary">Bronze Launch</th>
                    <th className="text-center py-4 px-4 font-semibold text-primary bg-primary/5">Silver Growth</th>
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
              Try Inseat Professional free for 14 days. No credit card required. Cancel anytime.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/#demo" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block">
                Start Free Trial
              </Link>
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
