import { motion, useScroll, useTransform, useInView, useMotionValue, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

/* ─── Animated number counter ─── */
function AnimatedNumber({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${latest.toFixed(decimals)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix, prefix, decimals, count]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const CinemacityCaseStudy = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax for the background image
  const bgY = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.08, 1.15]);
  // Parallax for the secondary image (opposite direction)
  const smallY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <section
      ref={sectionRef}
      id="cinemacity"
      className="relative overflow-hidden bg-[#0b0614] py-24 md:py-32"
    >
      {/* Full-bleed background with parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="/industries/cinema-case-study.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Readability overlay (this is a dark SECTION only, not dark mode — featured client spotlight) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0b0614]/85 via-[#1a0a3a]/75 to-[#0b0614]/90" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b0614] via-transparent to-transparent" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left: editorial text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff8a3d]" />
              Featured Client · Cinemacity
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.05 }}
              className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[56px]"
            >
              How Cinemacity cut concession wait times by more than half.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.12 }}
              className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75"
            >
              Across Cinemacity&apos;s screens, guests now order snacks, drinks, and meals from their recliners.
              Inseat syncs the auditorium with concessions and kitchen so every order lands silently — between
              scenes, not during them.
            </motion.p>

            {/* Animated stats */}
            <div className="mt-10 grid grid-cols-3 gap-5 md:gap-8">
              {[
                { value: 62, suffix: '%', label: 'shorter concession lines' },
                { value: 28, suffix: '%', label: 'higher per-screen revenue' },
                { value: 4.9, decimals: 1, label: 'avg guest rating', max: 5 },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="border-l-2 border-[#ff8a3d]/60 pl-4 md:pl-5"
                >
                  <div className="font-display text-3xl font-bold text-white md:text-5xl">
                    <AnimatedNumber
                      value={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals ?? 0}
                    />
                    {stat.max && <span className="text-white/50 text-2xl md:text-3xl"> /{stat.max}</span>}
                  </div>
                  <p className="mt-2 text-sm leading-snug text-white/65">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.4 }}
              className="relative mt-10 max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md md:p-8"
            >
              <svg
                className="absolute -top-3 left-6 h-7 w-7 text-[#ff8a3d]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7.17 6C4.32 6 2 8.32 2 11.17V18h6.83v-6.83H5.83C6.14 9.54 7.46 8.2 9.17 8V6h-2zm10 0c-2.85 0-5.17 2.32-5.17 5.17V18h6.83v-6.83h-3c.31-1.63 1.63-2.97 3.34-3.17V6h-2z" />
              </svg>
              <p className="text-lg leading-relaxed text-white/90 md:text-[20px]">
                Inseat let us rethink what a cinema visit should feel like. No more standing in line for popcorn
                while the trailers play — our guests order from their seat and we deliver before the lights dim.
              </p>
              <footer className="mt-5 flex items-center gap-3">
                <img
                  src="/testimonials/avatar-cinemacity.jpg"
                  alt=""
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-white/20"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-white">Layla Al-Hashimi</div>
                  <div className="text-xs uppercase tracking-[0.16em] text-white/55">
                    VP Guest Experience, Cinemacity
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          </div>

          {/* Right: floating secondary image */}
          <div className="lg:col-span-5">
            <motion.div
              style={{ y: smallY }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.7)] ring-1 ring-white/15"
            >
              <img
                src="/industries/cinema-concessions.jpg"
                alt="Cinemacity concessions experience powered by Inseat"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0614]/70 via-transparent to-transparent" />

              {/* Floating info chip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-xl"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#ff8a3d]">
                  Deployed across
                </p>
                <p className="mt-1 font-display text-2xl font-bold text-white">
                  12 screens · 3 cities · 90 days
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CinemacityCaseStudy;
