import { motion, useScroll, useTransform } from "framer-motion";
// Phone mockup markup is now inlined below (no separate component)
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  // Parallax on scroll — the restaurant illustration drifts slightly and the
  // background glows drift in the opposite direction to create depth.
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const illustrationY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const illustrationScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const glowY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  // Inline phone mockup UI state
  const [batteryLevel, setBatteryLevel] = useState(78)
  const [currentTime, setCurrentTime] = useState('12:42')
  const [scanProgress, setScanProgress] = useState(0)

  // Simulate phone UI changes (non-blocking micro-interactions)
  useEffect(() => {
    const b = setInterval(() => setBatteryLevel((p) => Math.max(p - 1, 10)), 30000)
    return () => clearInterval(b)
  }, [])
  useEffect(() => {
    const t = setInterval(() => {
      const now = new Date()
      const h = now.getHours()
      const m = now.getMinutes().toString().padStart(2, '0')
      setCurrentTime(`${h}:${m}`)
    }, 60000)
    return () => clearInterval(t)
  }, [])
  useEffect(() => {
    const s = setInterval(() => setScanProgress((p) => (p >= 100 ? 0 : p + 5)), 800)
    return () => clearInterval(s)
  }, [])
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Phone animation variants (subtle float)
  const phoneVariants = {
    idle: { rotate: 22, y: 0 },
    animate: {
      rotate: [22, 26, 22],
      y: [-3, 3, -3],
      transition: {
        rotate: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
        y: { repeat: Infinity, duration: 5, ease: 'easeInOut' }
      }
    }
  } as const

  const scanLineVariants = {
    scanning: {
      y: [0, 550, 0],
      transition: { y: { repeat: Infinity, duration: 3, ease: 'easeInOut' } }
    }
  } as const

  return (
    // Reduced bottom padding: pb-24 md:pb-32
    // Added background grid pattern (made even fainter)
    <section ref={sectionRef} className="relative z-[200] overflow-hidden bg-white pb-20 pt-12 md:pt-20 lg:pb-32">
      {/* Background elements - parallax drift */}
      <motion.div style={{ y: glowY }} className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-48 -right-48 h-72 w-72 rounded-full bg-primary/10 md:h-96 md:w-96"></div>
        <div className="absolute top-1/2 -left-64 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/10 md:h-[600px] md:w-[600px]"></div>
        <div className="absolute -bottom-40 right-1/4 h-[380px] w-[380px] rounded-full bg-[#ff8a3d]/10 blur-3xl"></div>
      </motion.div>

      {/* Restaurant illustration with scroll parallax */}
      <motion.img
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 60 }}
        style={{ y: illustrationY, scale: illustrationScale }}
        src="/restaurant.webp"
        alt="Inseat restaurant illustration"
        className="hidden lg:block absolute right-[-80px] bottom-[-20px] h-[720px] xl:h-[780px] 2xl:h-[820px] w-auto z-[90] pointer-events-none"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />

      {/* Phone mockup - sticks out of the hero without elongating it */}
      <div className="hidden lg:block absolute left-[52%] -translate-x-1/2 bottom-8 z-[120] pointer-events-none">
        <motion.div
          variants={phoneVariants}
          initial="idle"
          animate="animate"
          className="transform scale-[0.45] xl:scale-[0.48]"
        >
          <div className="relative w-72 overflow-hidden rounded-[28px] border-[10px] border-gray-800 shadow-2xl bg-gray-800">
            {/* Phone notch */}
            <div className="absolute top-0 left-0 right-0 z-30 flex justify-center">
              <div className="w-32 h-6 bg-gray-800 rounded-b-xl flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-700 rounded-full mx-1"></div>
                <div className="w-10 h-3 bg-gray-700 rounded-full mx-1"></div>
                <div className="w-3 h-3 bg-gray-700 rounded-full mx-1"></div>
              </div>
            </div>

            {/* Phone screen */}
            <div className="relative bg-gray-900 h-[660px] flex flex-col items-center justify-center p-4 overflow-hidden rounded-[18px]">
              {/* Status bar */}
              <div className="absolute top-0 left-0 w-full bg-black/30 backdrop-blur-sm p-2 flex justify-between items-center z-20 text-xs text-white">
                <div className="ml-6">{currentTime}</div>
                <div className="flex items-center space-x-2 mr-2">
                  <div className="flex items-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,21L12,21c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v2C13,20.6,12.6,21,12,21z" />
                      <path d="M15,21L15,21c-0.6,0-1-0.4-1-1v-5c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v5C16,20.6,15.6,21,15,21z" />
                      <path d="M9,21L9,21c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v7C10,20.6,9.6,21,9,21z" />
                      <path d="M6,21L6,21c-0.6,0-1-0.4-1-1v-4c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v4C7,20.6,6.6,21,6,21z" />
                    </svg>
                    <svg className="w-3 h-3 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M1,9l2,2c4.97-4.97,13.03-4.97,18,0l2-2C16.93,2.93,7.08,2.93,1,9z" />
                      <path d="M5,13l2,2c2.76-2.76,7.24-2.76,10,0l2-2C15.14,9.14,8.87,9.14,5,13z" />
                      <path d="M9,17l1.5,1.5c0.83-0.83,2.17-0.83,3,0L15,17C13.34,15.34,10.66,15.34,9,17z" />
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-3 bg-white rounded-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 bottom-0 bg-primary" style={{ width: `${batteryLevel}%` }}></div>
                    </div>
                    <span className="ml-1 text-xs">{batteryLevel}%</span>
                  </div>
                </div>
              </div>

              {/* Camera UI core (simplified) */}
              <div className="w-full h-full flex flex-col relative">
                {/* Main QR preview */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 mb-6 relative">
                    <img src="/qr-3d.png" alt="QR Code" className="w-full h-full object-contain" />
                    {/* Corners highlight */}
                    <div className="absolute inset-0 border-2 border-primary/0 animate-pulse">
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary"></div>
                      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary"></div>
                      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 animate-pulse">Scanning for QR Code...</p>
                  <div className="w-48 h-1 bg-gray-700 rounded-full mt-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 bg-primary" style={{ width: `${scanProgress}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Position QR code within frame</p>
                </div>
              </div>

              {/* Scan line animation */}
              <motion.div className="absolute top-0 left-0 w-full h-1 bg-primary/60 rounded" variants={scanLineVariants} animate="scanning"></motion.div>
            </div>

            {/* Phone bottom bar */}
            <div className="absolute bottom-1 left-0 right-0 z-30 flex justify-center">
              <div className="w-24 h-1 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-custom relative">
        {/* Adjusted grid layout and alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center min-h-[500px] md:min-h-[580px] lg:min-h-[620px]">

          {/* Left column: Text content - Spanning 2 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left lg:col-span-2 pt-8 md:pt-14"
          >
            {/* Image removed from here */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight tracking-tight text-secondary"
            >
              Streamline Every Guest Touchpoint
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-lg text-xl text-black/70 mx-auto lg:mx-0"
            >
              The all-in-one guest experience and operations platform for hospitality teams that need faster service, simpler workflows, and better customer experiences across every outlet.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <div className="w-full sm:w-auto flex flex-col items-center sm:items-start">
                <a
                  href={`${import.meta.env.VITE_ADMIN_URL || 'http://localhost:5173'}/register?plan=mid`}
                  className="btn-primary w-full sm:w-auto group relative overflow-hidden shadow-[0_16px_28px_-18px_rgba(97,6,235,0.9)]"
                >
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-white/35 blur-[1px] transition-transform duration-700 group-hover:translate-x-[260%]" />
                  <span className="relative inline-flex items-center justify-center gap-2">
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path d="M10 2.75l1.85 3.75 4.15.6-3 2.93.71 4.14L10 12.23l-3.71 1.94.71-4.14-3-2.93 4.15-.6L10 2.75z" />
                    </svg>
                    Start Your 7-Day Free Trial
                  </span>
                </a>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-black/55">
                  No credit card required
                </p>
              </div>
              <a
                href="https://calendly.com/abenezer-t-achievengine/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v11a2 2 0 002 2z" />
                </svg>
                Book a 15-Min Strategy Call
              </a>
            </motion.div>

            {/* Removed the avatars + 500+ restaurants block */}
          </motion.div>

          {/* Right column: Visuals - Spanning 3 columns */}
          <div className="relative lg:col-span-3">
            {/* Mobile/Tablet: big centered illustration */}
            <div className="lg:hidden flex items-center justify-center mt-6">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                src="/restaurant.webp"
                alt="Inseat restaurant illustration"
                className="w-[560px] md:w-[720px] max-w-full h-auto mx-auto"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>

            {/* Desktop: empty space placeholder for layout balance */}
            <div className="hidden lg:block relative h-full min-h-[600px]">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
