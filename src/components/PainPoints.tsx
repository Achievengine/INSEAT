import { motion } from 'framer-motion';

const painPoints = [
  {
    problem: 'Drowning in paper tickets?',
    solution:
      'Digital orders flow straight to the kitchen. No lost chits, no handwriting errors, no re-fires.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M7 3h10a1 1 0 0 1 1 1v16l-3-2-3 2-3-2-3 2V4a1 1 0 0 1 1-1Z" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </svg>
    ),
    stat: '0',
    statLabel: 'lost tickets',
  },
  {
    problem: 'Tables sitting empty too long?',
    solution:
      'Guests order and pay right from their seats. Seat the next party up to 15 minutes faster, every turn.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    stat: '15',
    statLabel: 'min faster turns',
  },
  {
    problem: 'Menu chaos across outlets?',
    solution:
      'Edit once and push live everywhere. No more "sorry, we\'re out of that" from guests who just ordered it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
        <path d="M4 6h16M4 12h16M4 18h10" />
        <path d="M18 16l3 3M21 16l-3 3" />
      </svg>
    ),
    stat: '1',
    statLabel: 'menu to rule them all',
  },
];

const PainPoints = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf7ff] to-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            The Pain Is Real
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-secondary md:text-5xl">
            Is your operation running you?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary/70">
            Stop letting manual processes and disconnected tools eat into your margins.
            Here&apos;s what changes on day one with Inseat.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((item, index) => (
            <motion.article
              key={item.problem}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-primary/10 bg-white p-8 shadow-[0_24px_70px_-50px_rgba(97,6,235,0.45)] transition-all duration-300 hover:border-primary/30 hover:shadow-[0_40px_90px_-45px_rgba(97,6,235,0.55)]"
            >
              {/* Background gradient sweep on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(520px circle at top right, rgba(97,6,235,0.08), transparent 50%)',
                  }}
                />
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 280, damping: 15 }}
                className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
              >
                {item.icon}
              </motion.div>

              {/* Problem headline */}
              <p className="relative mb-3 text-xl font-bold tracking-tight text-secondary">
                {item.problem}
              </p>

              {/* Solution */}
              <p className="relative mb-6 leading-relaxed text-secondary/70">{item.solution}</p>

              {/* Stat flourish */}
              <div className="relative flex items-baseline gap-2 border-t border-secondary/8 pt-5">
                <span className="bg-gradient-to-r from-primary to-[#ff8a3d] bg-clip-text text-3xl font-bold tracking-tight text-transparent">
                  {item.stat}
                </span>
                <span className="text-sm font-medium text-secondary/60">{item.statLabel}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
