import { useState } from 'react';
import { motion } from 'framer-motion';

type Tier = {
  id: string;
  name: string;
  visits: string;
  baseDiscount: number;
  returnBonus: { '24h': number; '3d': number; '5d': number };
  features: string[];
};

const LoyaltyEngagement = () => {
  const tiers: Tier[] = [
    {
      id: 'bronze',
      name: 'Bronze',
      visits: '1-5',
      baseDiscount: 5,
      returnBonus: { '24h': 15, '3d': 10, '5d': 5 },
      features: ['Base discount on all orders', 'Return incentives', 'Birthday special']
    },
    {
      id: 'silver',
      name: 'Silver',
      visits: '6-15',
      baseDiscount: 10,
      returnBonus: { '24h': 20, '3d': 15, '5d': 10 },
      features: ['Increased base discount', 'Enhanced return bonuses', 'Birthday special', 'Skip-the-line privileges']
    },
    {
      id: 'gold',
      name: 'Gold',
      visits: '16-30',
      baseDiscount: 15,
      returnBonus: { '24h': 25, '3d': 20, '5d': 15 },
      features: ['Premium base discount', 'Maximum return bonuses', 'Birthday special', 'Skip-the-line privileges', 'Exclusive menu items']
    },
    {
      id: 'platinum',
      name: 'Platinum',
      visits: '31+',
      baseDiscount: 20,
      returnBonus: { '24h': 30, '3d': 25, '5d': 20 },
      features: ['Maximum discount tier', 'Premium return bonuses', 'Birthday special', 'Skip-the-line privileges', 'Exclusive menu items', 'Special event invitations']
    }
  ];

  const [activeTier, setActiveTier] = useState(0);
  const [calculatorState, setCalculatorState] = useState({ visits: 3, daysSinceLastVisit: 4, orderTotal: 50 });

  const calculateTier = (visits: number): number => {
    if (visits >= 31) return 3;
    if (visits >= 16) return 2;
    if (visits >= 6) return 1;
    return 0;
  };

  const calculateDiscount = (visits: number, daysSinceLastVisit: number): number => {
    const tierIndex = calculateTier(visits);
    const currentTier = tiers[tierIndex];

    let discount = currentTier.baseDiscount;

    if (daysSinceLastVisit <= 1) {
      discount += currentTier.returnBonus['24h'];
    } else if (daysSinceLastVisit <= 3) {
      discount += currentTier.returnBonus['3d'];
    } else if (daysSinceLastVisit <= 5) {
      discount += currentTier.returnBonus['5d'];
    }

    return discount;
  };

  const handleCalculatorChange = (field: string, value: string) => {
    setCalculatorState((prev) => ({
      ...prev,
      [field]: parseInt(value, 10)
    }));
  };

  const currentDiscount = calculateDiscount(calculatorState.visits, calculatorState.daysSinceLastVisit);
  const discountAmount = (calculatorState.orderTotal * currentDiscount / 100).toFixed(2);

  const journeySteps = [
    {
      id: 'first-visit',
      title: 'First Visit',
      description: 'New customer receives 10% welcome discount'
    },
    {
      id: 'quick-return',
      title: 'Quick Return',
      description: 'Return within 5 days to activate return discount'
    },
    {
      id: 'tier-upgrade',
      title: 'Tier Upgrade',
      description: 'Reach 6 visits to upgrade to Silver tier'
    },
    {
      id: 'ongoing-rewards',
      title: 'Ongoing Rewards',
      description: 'Continue enjoying increasing rewards with each visit'
    },
    {
      id: 'referral-bonus',
      title: 'Referral Bonus',
      description: 'Earn additional discounts by referring friends'
    }
  ];

  return (
    <section id="loyalty" className="relative overflow-hidden bg-black py-20 text-white md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(97,6,235,0.23),transparent_48%)]" />
      <div className="container-custom relative z-10">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="section-heading"
          >
            Innovative Loyalty & Engagement
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="section-subheading text-white/75"
          >
            Drive repeat business and optimize revenue with our unique loyalty and pricing tools.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 lg:col-span-8"
          >
            <h3 className="mb-6 text-2xl font-bold">Loyalty Tier Progression</h3>

            <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {tiers.map((tier, index) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(index)}
                  className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                    activeTier === index
                      ? 'border-primary bg-primary/20 text-white'
                      : 'border-white/20 bg-black/30 text-white/75 hover:text-white'
                  }`}
                >
                  <p className="text-sm font-semibold tracking-[0.18em] text-primary">{`0${index + 1}`}</p>
                  <p className="mt-1 text-lg font-bold">{tier.name}</p>
                  <p className="text-xs text-white/65">{tier.visits} visits</p>
                </button>
              ))}
            </div>

            <div className="mb-6">
              <div className="relative h-1.5 rounded-full bg-white/15">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-primary transition-all duration-300"
                  style={{ width: `${(activeTier / (tiers.length - 1)) * 100}%` }}
                />
                {tiers.map((tier, index) => (
                  <span
                    key={tier.id}
                    className={`absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${
                      index <= activeTier ? 'border-primary bg-primary' : 'border-white/40 bg-black'
                    }`}
                    style={{ left: `${(index / (tiers.length - 1)) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/15 bg-black/45 p-5">
                <h4 className="mb-2 text-xl font-bold">{tiers[activeTier].name} Tier</h4>
                <p className="mb-4 text-white/70">{tiers[activeTier].visits} visits</p>
                <p className="mb-3 text-lg">
                  Base Discount: <span className="font-bold text-primary">{tiers[activeTier].baseDiscount}%</span>
                </p>
                <ul className="space-y-2 text-sm text-white/85">
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Within 24 hours</span>
                    <span>+{tiers[activeTier].returnBonus['24h']}%</span>
                  </li>
                  <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Within 3 days</span>
                    <span>+{tiers[activeTier].returnBonus['3d']}%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Within 5 days</span>
                    <span>+{tiers[activeTier].returnBonus['5d']}%</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/45 p-5">
                <h4 className="mb-3 text-xl font-bold">Tier Benefits</h4>
                <ul className="space-y-2 text-sm text-white/85">
                  {tiers[activeTier].features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="rounded-3xl border border-primary/35 bg-primary/[0.1] p-6 lg:col-span-4"
          >
            <h3 className="mb-6 text-2xl font-bold">Discount Calculator</h3>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Total Visits</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={calculatorState.visits}
                    onChange={(e) => handleCalculatorChange('visits', e.target.value)}
                    className="w-full accent-primary"
                  />
                  <span className="w-10 text-right font-bold">{calculatorState.visits}</span>
                </div>
                <p className="mt-1 text-xs text-white/65">Tier: {tiers[calculateTier(calculatorState.visits)].name}</p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Days Since Last Visit</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={calculatorState.daysSinceLastVisit}
                    onChange={(e) => handleCalculatorChange('daysSinceLastVisit', e.target.value)}
                    className="w-full accent-primary"
                  />
                  <span className="w-10 text-right font-bold">{calculatorState.daysSinceLastVisit}</span>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-white">Order Total ($)</label>
                <div className="flex items-center gap-3">
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="5"
                    value={calculatorState.orderTotal}
                    onChange={(e) => handleCalculatorChange('orderTotal', e.target.value)}
                    className="w-full accent-primary"
                  />
                  <span className="w-14 text-right font-bold">${calculatorState.orderTotal}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-white/15 bg-black/50 p-5">
              <p className="text-sm text-white/70">Your Discount</p>
              <p className="text-4xl font-bold text-primary">{currentDiscount}%</p>
              <div className="mt-4 space-y-2 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Order Total</span>
                  <span>${calculatorState.orderTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Savings</span>
                  <span className="text-primary">-${discountAmount}</span>
                </div>
                <div className="flex justify-between border-t border-white/15 pt-2 text-base font-bold">
                  <span>Final Price</span>
                  <span>${(calculatorState.orderTotal - parseFloat(discountAmount)).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mt-8 rounded-3xl border border-white/12 bg-white/[0.04] p-6"
        >
          <h3 className="mb-6 text-2xl font-bold">Customer Loyalty Journey</h3>
          <div className="relative">
            <div className="absolute left-4 right-4 top-4 hidden h-px bg-white/15 lg:block" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {journeySteps.map((step, index) => (
                <article key={step.id} className="rounded-2xl border border-white/12 bg-black/45 p-4 lg:border-none lg:bg-transparent lg:p-0">
                  <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/55 bg-primary/20 text-xs font-bold text-primary">
                    {index + 1}
                  </div>
                  <h4 className="mb-1.5 text-lg font-semibold">{step.title}</h4>
                  <p className="text-sm text-white/75">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoyaltyEngagement;
