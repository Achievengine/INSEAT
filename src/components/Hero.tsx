import { motion } from "framer-motion";
// Phone mockup markup is now inlined below (no separate component)
import { useEffect, useState } from 'react'
import { sanityClient, heroQuery } from '../lib/sanityClient'

const Hero = () => {
  const [cms, setCms] = useState<{ title?: string; subtitle?: string } | null>(null)
  // Inline phone mockup UI state
  const [batteryLevel, setBatteryLevel] = useState(78)
  const [currentTime, setCurrentTime] = useState('12:42')
  const [scanProgress, setScanProgress] = useState(0)

  useEffect(() => {
    sanityClient.fetch(heroQuery).then((data) => setCms(data)).catch(() => {})
  }, [])
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
    <section className="relative z-[200] pt-12 md:pt-20 pb-32 lg:pb-40 bg-white overflow-x-hidden overflow-y-visible">
      {/* Background elements - Adjusted positions & opacity based on new image */}
      {/* Re-added z-index to ensure circles are behind content */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Adjusted right circle size and position based on new image */}
        <div className="absolute -top-48 -right-48 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/5"></div>
        {/* Kept left circle size and position from previous attempt */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-accent/5"></div>
        {/* Removed the third circle to better match the reference image */}
      </div>

      {/* Restaurant illustration - overlaps the black section slightly */}
      <motion.img
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 60 }}
        src="/restaurant.png"
        alt="Inseat restaurant illustration"
        className="hidden lg:block absolute right-0 bottom-[-40px] h-[800px] xl:h-[850px] 2xl:h-[900px] w-auto z-[90] pointer-events-none"
        loading="eager"
        decoding="async"
      />

      {/* Phone mockup - sticks out of the hero without elongating it */}
      <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-8 z-[120] pointer-events-none">
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
                      <div className="absolute top-0 right-0 bottom-0 bg-green-500" style={{ width: `${batteryLevel}%` }}></div>
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center min-h-[520px] md:min-h-[600px] lg:min-h-[640px]">

          {/* Left column: Text content - Spanning 2 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left lg:col-span-2 pt-8 md:pt-16 lg:-ml-16 xl:-ml-24 2xl:-ml-32" // Push content a bit further left on large screens
          >
            {/* Image removed from here */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight text-secondary"
            >
              {cms?.title || (
                <>
                  Elevate Your <span className="text-primary">F&B Operations</span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-xl text-gray-600 max-w-lg mx-auto lg:mx-0"
            >
              {cms?.subtitle || 'An all-in-one, connected platform that speeds up service, reduces mistakes, and keeps every outlet running smoothly.'}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://inseat.achievengine.com/deck/INSEAT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                Download Product Overview
              </a>
              <a
                href="https://wa.me/message/DN54E4VPUIO6K1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.486 2 2 6.019 2 11.027c0 1.749.463 3.389 1.27 4.811L2 22l6.347-1.231A10.34 10.34 0 0012 20.055c5.514 0 10-4.019 10-9.027S17.514 2 12 2zm0 16.055c-1.46 0-2.82-.41-3.973-1.121l-.284-.171-3.04.59.589-2.969-.185-.304A6.95 6.95 0 015 11.027C5 7.691 8.134 5 12 5s7 2.691 7 6.027-3.134 7.028-7 7.028zm3.422-3.568c-.186-.093-1.1-.54-1.27-.602-.171-.062-.297-.093-.423.093-.124.185-.486.602-.596.726-.109.124-.218.14-.404.046-.186-.093-.786-.288-1.497-.92-.553-.49-.926-1.095-1.035-1.28-.108-.186-.012-.286.082-.378.084-.083.186-.218.279-.327.093-.109.124-.186.186-.311.062-.124.031-.233-.015-.327-.046-.093-.423-1.018-.579-1.391-.152-.365-.308-.315-.423-.321l-.36-.007c-.109 0-.28.046-.424.218-.144.171-.551.538-.551 1.312s.564 1.521.642 1.627c.078.108 1.108 1.753 2.686 2.455 1.578.702 1.578.468 1.86.453.281-.015.919-.374 1.05-.735.13-.358.13-.664.093-.726-.037-.062-.17-.108-.356-.201z" />
                </svg>
                Contact Us
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
                src="/restaurant.png"
                alt="Inseat restaurant illustration"
                className="w-[560px] md:w-[720px] max-w-full h-auto mx-auto"
                loading="eager"
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
