import { motion } from 'framer-motion';

const features = [
  {
    title: 'QR Ordering that Turns Tables Faster',
    description:
      'Guests scan, order, and pay from their seats. Your servers deliver great service instead of chasing tickets.',
    iconBg: 'from-[#6106eb] to-[#8a4dff]',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M14 14h3v3h-3zM20 14v3M17 20h4M14 20v1" />
      </svg>
    ),
  },
  {
    title: 'AI Menu Import in Minutes',
    description:
      'Scan your paper menu. Our AI extracts every item, price, and modifier — your digital menu is ready before your next shift.',
    iconBg: 'from-[#ff8a3d] to-[#ffb86b]',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7a3 3 0 0 1 3-3h7l6 6v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
        <path d="M14 4v4a2 2 0 0 0 2 2h4" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'One Menu. Every Location. Live.',
    description:
      'Update prices, 86 items, or push new specials once — every outlet syncs instantly, so nobody sells what you&apos;re out of.',
    iconBg: 'from-[#06b6d4] to-[#3fe0e8]',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: 'Reservations, Walk-Ins, Waitlist — One View',
    description:
      'Keep your floor plan, bookings and live availability in sync so the front of house stays calm during every rush.',
    iconBg: 'from-[#6106eb] to-[#b388ff]',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M3 11h18M8 15h2M14 15h2M8 18h2" />
      </svg>
    ),
  },
  {
    title: 'Smart Pricing & Promotions',
    description:
      'Run happy hours, combos, and location-specific offers with guardrails — grow revenue without eroding margin.',
    iconBg: 'from-[#f59e0b] to-[#fbbf24]',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 12V5a2 2 0 0 0-2-2h-7L3 11l10 10 7-7a2 2 0 0 0 0-2Z" />
        <circle cx="8" cy="8" r="1.5" />
      </svg>
    ),
  },
  {
    title: 'Analytics That Drive Decisions',
    description:
      'See demand, waste, and service performance in one dashboard — know exactly where to double down and where to cut.',
    iconBg: 'from-[#10b981] to-[#34d399]',
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-4 3 3 5-6" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-[10%] h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-[-8%] bottom-[5%] h-[380px] w-[380px] rounded-full bg-[#ff8a3d]/10 blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary"
          >
            How Inseat Helps You Win
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.05 }}
            className="text-3xl font-bold tracking-tight text-secondary md:text-5xl"
          >
            Everything you need to run{' '}
            <span className="bg-gradient-to-r from-[#6106eb] to-[#ff8a3d] bg-clip-text text-transparent">
              a smarter hospitality business
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-lg text-secondary/70"
          >
            No more juggling five different apps. Inseat brings your entire operation into one seamless flow —
            for restaurants, hotels, resorts, and cinemas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-secondary/8 bg-white p-8 shadow-[0_14px_40px_-28px_rgba(5,5,5,0.35)] transition-all duration-300 hover:border-primary/25 hover:shadow-[0_30px_70px_-35px_rgba(97,6,235,0.55)]"
              style={{ borderColor: 'rgb(5 5 5 / 0.08)' }}
            >
              {/* Animated gradient ring on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(97,6,235,0.12), rgba(255,138,61,0.08) 60%, transparent 90%)',
                  }}
                />
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: -6, scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                className={`relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.iconBg} text-white shadow-[0_10px_30px_-10px_rgba(97,6,235,0.5)]`}
              >
                {feature.icon}
              </motion.div>

              {/* Text */}
              <h3 className="relative z-10 mb-3 text-xl font-bold leading-snug tracking-tight text-secondary">
                {feature.title}
              </h3>
              <p className="relative z-10 text-[15px] leading-relaxed text-secondary/65">
                {feature.description}
              </p>

              {/* Animated arrow that slides in on hover */}
              <div className="relative z-10 mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
                  Learn more
                </span>
                <svg
                  className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </div>

              {/* Bottom gradient underline that draws in on hover */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] overflow-hidden rounded-full">
                <div className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-[#ff8a3d] to-primary transition-transform duration-500 ease-out group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
