import { motion } from "framer-motion";
import EnhancedPhoneMockup from "./EnhancedPhoneMockup"; // Import the new component
import { useEffect, useState } from 'react'
import { sanityClient, heroQuery } from '../lib/sanityClient'

const Hero = () => {
  const [cms, setCms] = useState<{ title?: string; subtitle?: string } | null>(null)

  useEffect(() => {
    sanityClient.fetch(heroQuery).then((data) => setCms(data)).catch(() => {})
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

  return (
    // Reduced bottom padding: pb-24 md:pb-32
    // Added background grid pattern (made even fainter)
    <section className="relative z-30 pt-12 md:pt-20 pb-0 bg-white overflow-x-hidden">
      {/* Background elements - Adjusted positions & opacity based on new image */}
      {/* Re-added z-index to ensure circles are behind content */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Adjusted right circle size and position based on new image */}
        <div className="absolute -top-48 -right-48 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/5"></div>
        {/* Kept left circle size and position from previous attempt */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-accent/5"></div>
        {/* Removed the third circle to better match the reference image */}
      </div>

      {/* Restaurant illustration - positioned relative to viewport, ON TOP, overlapping significantly */}
      <motion.img
        initial={{ opacity: 0, x: 100, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 60 }}
        src="/restaurant.png"
        alt="Inseat restaurant illustration"
        className="hidden lg:block absolute right-0 bottom-0 h-[780px] xl:h-[800px] 2xl:h-[780px] w-auto z-[100] pointer-events-none"
        loading="eager"
        decoding="async"
      />

      {/* Phone mockup - overlap at the section intersection (lifted) */}
      <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-[50%] z-[120] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
          animate={{ opacity: 1, scale: 0.7, rotate: 15 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="transform"
        >
          <EnhancedPhoneMockup />
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
                  Transform Your Restaurant
                  <br />
                  with <span className="text-primary">QR Code Ordering</span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-xl text-gray-600 max-w-lg mx-auto lg:mx-0"
            >
              {cms?.subtitle || 'Streamline your dining experience with our contactless QR code menu and ordering system. Reduce wait times, increase table turnover, and boost your profits.'}
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
                href="https://wa.me/251985068040?text=Hello%20Inseat%20Team%2C%20I%E2%80%99d%20like%20to%20learn%20more.%20Please%20reach%20me%20at%20abenezer.t@achievengine.com"
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
