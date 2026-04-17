import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type Industry = {
  tag: string;
  title: string;
  description: string;
  image: string;
  accent: string;
  highlights: string[];
};

const industries: Industry[] = [
  {
    tag: 'Restaurants & QSR',
    title: 'Every seat, every order, every shift — under control.',
    description:
      'Turn tables faster with QR ordering, sync kitchens across outlets, and keep the front of house calm through every rush.',
    image: '/industries/restaurant-dining.jpg',
    accent: 'from-[#6106eb]/70 to-[#6106eb]/0',
    highlights: ['QR & tableside ordering', 'Kitchen display system', 'Multi-outlet menu sync'],
  },
  {
    tag: 'Hotels & Resorts',
    title: 'From poolside to penthouse, one guest experience.',
    description:
      'Unify in-room dining, restaurants, lounges, and spa across your property — one guest profile, one bill, zero friction.',
    image: '/industries/resort-pool.jpg',
    accent: 'from-[#ff8a3d]/75 to-[#ff8a3d]/0',
    highlights: ['In-room ordering', 'Cross-outlet folio', 'Guest preference memory'],
  },
  {
    tag: 'Cinemas & Entertainment',
    title: "Seat-side service that doesn't miss a scene.",
    description:
      'Guests order snacks, drinks, and meals right from their recliners. Staff deliver silently between screenings.',
    image: '/industries/cinema-interior.jpg',
    accent: 'from-[#6106eb]/75 to-[#6106eb]/0',
    highlights: ['Seat-side QR ordering', 'Showtime-aware delivery', 'Concession + auditorium sync'],
  },
];

/* ─── Individual card with parallax image ─── */
function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className="group relative flex h-[520px] flex-col overflow-hidden rounded-[28px] border border-secondary/8 bg-white shadow-[0_24px_70px_-50px_rgba(5,5,5,0.55)] transition-all duration-500 hover:border-primary/25 hover:shadow-[0_40px_100px_-40px_rgba(97,6,235,0.55)]"
    >
      {/* Image layer with parallax and hover zoom */}
      <div className="relative h-[60%] overflow-hidden">
        <motion.img
          src={industry.image}
          alt={industry.tag}
          style={{ y: imgY }}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-[116%] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.08]"
        />
        {/* Gradient overlay from bottom */}
        <div className={`absolute inset-0 bg-gradient-to-t ${industry.accent}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent" />

        {/* Tag chip */}
        <div className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-primary backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {industry.tag}
        </div>

        {/* Corner arrow that animates on hover */}
        <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-secondary shadow-[0_10px_30px_-10px_rgba(5,5,5,0.4)] transition-all duration-500 group-hover:rotate-[-45deg] group-hover:bg-primary group-hover:text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Copy */}
      <div className="flex flex-1 flex-col px-7 pb-7 pt-6">
        <h3 className="text-xl font-bold leading-snug tracking-tight text-secondary md:text-[22px]">
          {industry.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-secondary/65">{industry.description}</p>

        <ul className="mt-5 flex flex-col gap-2">
          {industry.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-secondary/80">
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/12 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="h-2.5 w-2.5">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </span>
              {h}
            </li>
          ))}
        </ul>
      </div>

      {/* Animated bottom accent line */}
      <div className="absolute inset-x-7 bottom-0 h-[2px] overflow-hidden rounded-full">
        <div className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-[#ff8a3d] to-primary transition-transform duration-700 ease-out group-hover:scale-x-100" />
      </div>
    </motion.article>
  );
}

const IndustriesShowcase = () => {
  return (
    <section id="industries" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[5%] top-[10%] h-[360px] w-[360px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute right-[5%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#ff8a3d]/10 blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-primary"
          >
            Built for Every Hospitality Floor
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.05 }}
            className="text-3xl font-bold tracking-tight text-secondary md:text-[56px] md:leading-[1.05]"
          >
            One platform.{' '}
            <span className="bg-gradient-to-r from-[#6106eb] to-[#ff8a3d] bg-clip-text text-transparent">
              Every guest experience.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-lg text-secondary/70"
          >
            Whether you run a single bistro, a beachfront resort, or a nationwide cinema chain — Inseat adapts
            to your floor, your guests, and your margins.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.tag} industry={industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesShowcase;
