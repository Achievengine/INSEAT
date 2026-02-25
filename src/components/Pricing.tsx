import { useState } from 'react';
import { motion } from 'framer-motion';

const ADMIN_URL = import.meta.env.VITE_ADMIN_URL || 'http://localhost:5174';

type CurrencyCode = 'USD' | 'AED' | 'ETB';

const currencyConfig: Record<CurrencyCode, { symbol: string; rate: number }> = {
  USD: { symbol: '$', rate: 1 },
  AED: { symbol: 'AED ', rate: 3.67 },
  ETB: { symbol: 'ETB ', rate: 155 },
};

const plans = [
  {
    name: 'Starter',
    description: 'Best for first-time launch of a branded restaurant website.',
    monthlyPrice: 50,
    annualPrice: 40,
    tier: 'entry',
    features: [
      'Website builder with branded homepage',
      'Menu sync from INSEAT menu',
      'Single payment gateway connection',
      'Basic checkout and order capture',
      'Email support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Pro',
    description: 'For restaurants scaling online orders and payment options.',
    monthlyPrice: 99,
    annualPrice: 79,
    tier: 'mid',
    features: [
      'Everything in Starter, plus:',
      'Multiple gateway setup',
      'Advanced website sections',
      'Enhanced analytics',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Custom Enterprise',
    description: 'For multi-location or deeply customized rollout needs.',
    monthlyPrice: 0,
    annualPrice: 0,
    tier: 'custom',
    features: [
      'Everything in Pro, plus:',
      'Unlimited locations',
      'Custom integrations',
      'Dedicated onboarding',
      'SLA and support options',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');

  const formatPrice = (usd: number) => {
    const { symbol, rate } = currencyConfig[currency];
    const converted = Math.round(usd * rate);
    return `${symbol}${converted}`;
  };

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

          {/* Billing toggle + currency */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Billing toggle */}
            <div className="flex items-center gap-3">
              <span className={`text-sm font-medium ${!isAnnual ? 'text-secondary' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-12 h-6 rounded-full transition-colors ${isAnnual ? 'bg-primary' : 'bg-gray-300'}`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`}
                />
              </button>
              <span className={`text-sm font-medium ${isAnnual ? 'text-secondary' : 'text-gray-400'}`}>
                Annual <span className="text-primary text-xs font-semibold">Save 20%</span>
              </span>
            </div>

            {/* Currency picker */}
            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
              {(Object.keys(currencyConfig) as CurrencyCode[]).map((code) => (
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
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isCustom = plan.tier === 'custom';

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
                      <span className="text-4xl font-bold">{formatPrice(price)}</span>
                      <span className={`text-sm ml-1 ${plan.popular ? 'text-white/60' : 'text-gray-400'}`}>/month</span>
                    </>
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
                    href={plan.cta === 'Start Free Trial' ? '#' : `${ADMIN_URL}/register?plan=${plan.tier}`}
                    onClick={plan.cta === 'Start Free Trial' ? (event) => event.preventDefault() : undefined}
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
          No credit card required · Cancel anytime · 7-day free trial on all plans
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
