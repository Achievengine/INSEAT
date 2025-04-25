import { motion } from "framer-motion";
import EnhancedPhoneMockup from "./EnhancedPhoneMockup"; // Import the new component

const Hero = () => {
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
    <section className="relative pt-12 md:pt-20 pb-4 md:pb-12 bg-gradient-to-b from-white to-gray-50 overflow-visible bg-[linear-gradient(to_right,theme(colors.gray.50/50)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.gray.50/50)_1px,transparent_1px)] bg-[size:40px_40px]">
      {/* Background elements - Adjusted positions & opacity based on new image */}
      {/* Re-added z-index to ensure circles are behind content */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Adjusted right circle size and position based on new image */}
        <div className="absolute -top-48 -right-48 w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/5"></div>
        {/* Kept left circle size and position from previous attempt */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-64 w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full bg-accent/5"></div>
        {/* Removed the third circle to better match the reference image */}
      </div>

      <div className="container-custom relative">
        {/* Adjusted grid layout and alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left column: Text content - Spanning 2 columns */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left lg:col-span-2 pt-8 md:pt-16" // Adjusted padding
          >
            {/* Image removed from here */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-display font-bold leading-tight text-secondary"
            >
              Transform Your Restaurant
               <br />
               with <span className="text-primary">QR Code Ordering</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mt-6 text-xl text-gray-600 max-w-lg mx-auto lg:mx-0"
            >
              Streamline your dining experience with our contactless QR code menu and ordering system. Reduce wait times, increase table turnover, and boost your profits.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="#demo" className="btn-primary w-full sm:w-auto">
                Try Free Demo
              </a>
              <a href="#how-it-works" className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                How It Works
              </a>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex -space-x-2">
                <img className="h-10 w-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                <img className="h-10 w-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/45.jpg" alt="User" />
                <img className="h-10 w-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/53.jpg" alt="User" />
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-secondary">500+</span> restaurants already using Inseat
              </p>
            </motion.div>
          </motion.div>

          {/* Right column: Visuals - Spanning 3 columns */}
          <div className="relative lg:col-span-3 h-[500px] md:h-[650px] lg:h-[750px]">
            {/* Container for absolute positioning */}
            <div className="absolute inset-0 flex items-center justify-center lg:justify-start">

              {/* Food Image - Positioned absolutely */}
              <motion.img
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4, type: 'spring', stiffness: 50 }}
                src="https://res.cloudinary.com/dptx5wjus/image/upload/v1745445040/Red_and_Yellow_Modern_Healthy_Food_Instagram_Post_1_azrwh1.png"
                alt="Healthy Food"
                // Made image bigger: w-[320px] md:w-[450px] lg:w-[600px]
                // Moved image down: top-[10%]
                className="absolute right-[-15%] md:right-[-20%] lg:right-[-25%] top-[10%] w-[360px] h-auto md:w-[490px] lg:w-[680px] z-10"
              />

              {/* Phone Mockup - Positioned absolutely, overlapping */}
              <motion.div
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute left-[-1%] md:left-[-25%] lg:left-[25%] top-[10%] md:top-[25%] lg:bottom-[72%] z-20 transform scale-80 md:scale-100 lg:scale-100"
              >
                <EnhancedPhoneMockup />
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
