import { motion } from 'framer-motion';

const highlights = [
  {
    label: 'Tiered Rewards',
    description: 'Automatic loyalty tiers that unlock bigger discounts as customers visit more often.',
  },
  {
    label: 'Streak Bonuses',
    description: 'Customers earn bonus points for consecutive visits, encouraging repeat business.',
  },
  {
    label: 'Smart Campaigns',
    description: 'Send targeted promotions based on purchase history and dining preferences.',
  },
];

const LoyaltyEngagement = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-4">
              Loyalty & Engagement
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-5">
              Keep customers coming back
            </h2>
            <p className="text-gray-500 text-lg mb-10 max-w-lg">
              A built-in loyalty engine that rewards repeat visits, tracks streaks, and drives engagement — no third-party tool needed.
            </p>

            <div className="space-y-6">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-1">{item.label}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual side — clean card mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="rounded-2xl bg-black p-8 shadow-2xl shadow-black/10">
              {/* Loyalty card mockup */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">Gold Member</p>
                  <p className="text-white/40 text-xs">12 visits this month</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-primary font-bold text-xl">2,450</p>
                  <p className="text-white/40 text-xs">points</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-white/40 mb-2">
                  <span>Gold tier</span>
                  <span>Platinum at 3,000 pts</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '82%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </div>

              {/* Recent rewards */}
              <div className="space-y-3">
                {['5% off next order', 'Free dessert unlocked', '2x points weekend'].map((reward, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm text-white/70">{reward}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyEngagement;
