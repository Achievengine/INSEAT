import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  // Parallax: as the user scrolls, the backdrop drifts up and the hardware
  // cluster drifts down slightly, creating depth without overwhelming motion.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '-24%']);
  const hardwareY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.25, staggerChildren: 0.12 },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.55 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-[200] overflow-hidden bg-white pb-24 pt-14 md:pt-20 lg:pb-36"
    >
      {/* Ambient purple softness — strictly primary color at low opacity, no gradient */}
      <motion.div style={{ y: glowY }} className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 -right-48 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl md:h-[520px] md:w-[520px]" />
        <div className="absolute top-1/2 -left-64 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-primary/10 blur-3xl md:h-[620px] md:w-[620px]" />
      </motion.div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 text-center lg:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary"
            >
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary"></span>
              </span>
              All-in-one hospitality OS
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-4xl font-display font-bold leading-[1.05] tracking-tight text-secondary md:text-5xl lg:text-6xl"
            >
              Streamline every guest touchpoint.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-secondary/70 lg:mx-0"
            >
              One platform for QR ordering, POS, kitchen display, reservations and analytics.
              Built for hospitality teams who need faster service and simpler workflows across
              every outlet.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <div className="flex w-full flex-col items-center sm:w-auto sm:items-start">
                <a
                  href={`${import.meta.env.VITE_ADMIN_URL || 'http://localhost:5173'}/register?plan=mid`}
                  className="btn-primary group relative w-full overflow-hidden sm:w-auto"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/35 blur-[1px] transition-transform duration-700 group-hover:translate-x-[360%]" />
                  <span className="relative inline-flex items-center justify-center gap-2">
                    Start your 7-day free trial
                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary/55">
                  No credit card required
                </p>
              </div>

              <a
                href="https://calendly.com/abenezer-t-achievengine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex w-full items-center justify-center gap-2 sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z" />
                </svg>
                Book a 15-min strategy call
              </a>
            </motion.div>

            {/* Device labels — communicates "all in one" verbally even before visual */}
            <motion.ul
              variants={itemVariants}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-secondary/55 lg:justify-start"
            >
              {['POS Terminal', 'Guest App', 'Kitchen Display', 'Reservations'].map((label) => (
                <li key={label} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-primary" />
                  {label}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right column — all-in-one hardware showcase */}
          <motion.div
            style={{ y: hardwareY }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <HardwareShowcase />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ──────────────────────────────────────────────────────────────────────────
 * HardwareShowcase — POS + phone + tablet arranged in a tight composition.
 * Each device enters with a subtle stagger and floats independently.
 * Callout chips appear anchored to each device.
 * ────────────────────────────────────────────────────────────────────────── */
function HardwareShowcase() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* Soft circular purple backdrop — brand-only, no gradient */}
      <div className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5" />
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10" />

      {/* Tablet — back layer, upper-left */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: -20, rotate: -8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: -6 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 top-[6%] w-[62%] sm:w-[58%]"
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
          className="relative"
        >
          <img
            src="/hardware/tablet-kds.png"
            alt="Kitchen display tablet running Inseat"
            className="w-full drop-shadow-[0_40px_50px_rgba(97,6,235,0.18)]"
            loading="eager"
            decoding="async"
          />
          <Chip className="absolute -top-2 -right-4 hidden sm:flex">Kitchen Display</Chip>
        </motion.div>
      </motion.div>

      {/* POS terminal — back-right */}
      <motion.div
        initial={{ opacity: 0, x: 40, y: -16, rotate: 8 }}
        animate={{ opacity: 1, x: 0, y: 0, rotate: 4 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 top-[4%] w-[44%] sm:w-[40%]"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}
          className="relative"
        >
          <img
            src="/hardware/pos-terminal.png"
            alt="Inseat POS terminal"
            className="w-full drop-shadow-[0_40px_50px_rgba(97,6,235,0.18)]"
            loading="eager"
            decoding="async"
          />
          <Chip className="absolute -top-2 -left-4 hidden sm:flex">POS Terminal</Chip>
        </motion.div>
      </motion.div>

      {/* Phone — front layer, center-bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-1/2 w-[40%] -translate-x-1/2 sm:w-[36%]"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
          className="relative"
        >
          <img
            src="/hardware/phone-order.png"
            alt="Guest ordering from their phone"
            className="w-full drop-shadow-[0_40px_60px_rgba(97,6,235,0.28)]"
            loading="eager"
            decoding="async"
          />
          <Chip className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden sm:flex">
            Guest App
          </Chip>
        </motion.div>
      </motion.div>

      {/* Floating stat chip — bottom-left, decorative */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="absolute -bottom-2 left-0 hidden rounded-2xl border border-primary/15 bg-white px-4 py-3 shadow-[0_20px_45px_-25px_rgba(97,6,235,0.5)] sm:block"
      >
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/55">
          Avg ticket time
        </p>
        <p className="mt-1 font-display text-xl font-bold text-secondary">
          11m <span className="text-primary">42s</span>
        </p>
      </motion.div>

      {/* Floating live-orders chip — top-right, decorative */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
        className="absolute -top-2 right-0 hidden rounded-2xl border border-primary/15 bg-white px-4 py-3 shadow-[0_20px_45px_-25px_rgba(97,6,235,0.5)] sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary/55">
            Live orders
          </p>
        </div>
        <p className="mt-1 font-display text-xl font-bold text-secondary">128</p>
      </motion.div>
    </div>
  );
}

function Chip({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary shadow-[0_8px_20px_-12px_rgba(97,6,235,0.55)] ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-primary" />
      {children}
    </span>
  );
}

export default Hero;
