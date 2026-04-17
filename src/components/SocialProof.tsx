import { motion } from 'framer-motion';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  accent: 'primary' | 'orange';
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Inseat transformed peak Friday nights. QR ordering alone gave us a 20% lift in table turnover and our staff finally stopped running tickets.',
    name: 'Layla Al-Hashimi',
    role: 'VP Guest Experience',
    company: 'Cinemacity',
    avatar: '/testimonials/avatar-cinemacity.jpg',
    accent: 'primary',
  },
  {
    quote:
      'Three hotels, one menu engine, one KDS. Inseat brought room service, the lobby café, and the rooftop bar onto the same page — literally.',
    name: 'Marcus Kader',
    role: 'F&B Director',
    company: 'Azure Coast Resorts',
    avatar: '/testimonials/avatar-hotel.jpg',
    accent: 'orange',
  },
  {
    quote:
      'The AI menu import saved us weeks of manual work. We were live across three locations in 48 hours, and the analytics pay for the subscription twice over.',
    name: 'Priya Nair',
    role: 'Founder',
    company: 'Managr',
    avatar: '/testimonials/avatar-restaurant.jpg',
    accent: 'primary',
  },
];

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-[#ff8a3d]">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
          <path d="M12 2.5l2.9 6.2 6.8.9-4.9 4.8 1.2 6.7L12 17.9l-6 3.2 1.2-6.7L2.3 9.6l6.8-.9L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

const SocialProof = () => {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafafa] to-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-6%] top-[15%] h-[360px] w-[360px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[-6%] bottom-[15%] h-[360px] w-[360px] rounded-full bg-[#ff8a3d]/10 blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary"
          >
            Loved by hospitality operators
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.05 }}
            className="text-3xl font-bold tracking-tight text-secondary md:text-5xl"
          >
            Real teams.{' '}
            <span className="bg-gradient-to-r from-[#6106eb] to-[#ff8a3d] bg-clip-text text-transparent">
              Real results.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-lg text-secondary/70"
          >
            From cinema chains to beachfront resorts, Inseat is powering a new era of hospitality service.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-secondary/8 bg-white p-8 shadow-[0_20px_60px_-40px_rgba(5,5,5,0.45)] transition-all duration-300 hover:border-primary/25 hover:shadow-[0_36px_90px_-40px_rgba(97,6,235,0.5)]"
            >
              {/* hover gradient wash */}
              <div
                className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                  t.accent === 'primary'
                    ? 'bg-[radial-gradient(400px_circle_at_top_right,rgba(97,6,235,0.09),transparent_60%)]'
                    : 'bg-[radial-gradient(400px_circle_at_top_right,rgba(255,138,61,0.1),transparent_60%)]'
                }`}
              />

              <div className="relative flex items-center justify-between">
                <StarRow />
                <svg
                  className={`h-8 w-8 ${t.accent === 'primary' ? 'text-primary/15' : 'text-[#ff8a3d]/20'} transition-colors duration-300 group-hover:text-primary/30`}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7.17 6C4.32 6 2 8.32 2 11.17V18h6.83v-6.83H5.83C6.14 9.54 7.46 8.2 9.17 8V6h-2zm10 0c-2.85 0-5.17 2.32-5.17 5.17V18h6.83v-6.83h-3c.31-1.63 1.63-2.97 3.34-3.17V6h-2z" />
                </svg>
              </div>

              <blockquote className="relative mt-6 flex-1 text-[17px] leading-relaxed text-secondary/85">
                “{t.quote}”
              </blockquote>

              <figcaption className="relative mt-7 flex items-center gap-3 border-t border-secondary/8 pt-5">
                <img
                  src={t.avatar}
                  alt=""
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-primary/10 transition-all duration-300 group-hover:ring-primary/30"
                />
                <div>
                  <div className="text-sm font-semibold text-secondary">{t.name}</div>
                  <div className="text-xs text-secondary/55">
                    {t.role} · <span className="font-semibold text-primary">{t.company}</span>
                  </div>
                </div>
              </figcaption>

              {/* Bottom accent */}
              <div className="absolute inset-x-8 bottom-0 h-[2px] overflow-hidden rounded-full">
                <div
                  className={`h-full w-full origin-left scale-x-0 transition-transform duration-700 ease-out group-hover:scale-x-100 ${
                    t.accent === 'primary'
                      ? 'bg-gradient-to-r from-primary via-[#ff8a3d] to-primary'
                      : 'bg-gradient-to-r from-[#ff8a3d] via-primary to-[#ff8a3d]'
                  }`}
                />
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-14 grid grid-cols-2 gap-5 rounded-3xl border border-primary/10 bg-gradient-to-br from-[#faf7ff] via-white to-[#fff7f0] p-8 md:grid-cols-4 md:gap-8 md:p-10"
        >
          {[
            { value: '31%', label: 'fewer order errors' },
            { value: '20%', label: 'faster table turns' },
            { value: '48h', label: 'avg. go-live time' },
            { value: '4.9', label: 'avg. guest rating / 5' },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary to-[#ff8a3d] bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent md:text-5xl">
                {m.value}
              </div>
              <p className="mt-2 text-sm text-secondary/65">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
