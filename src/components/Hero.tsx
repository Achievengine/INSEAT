import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isHovering, setIsHovering] = useState(false);

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

  const qrCodeVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }
  };

  const phoneVariants = {
    idle: { y: 0 },
    animate: { y: [0, -10, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } }
  };

  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5"></div>
        <div className="absolute top-1/3 -left-32 w-64 h-64 rounded-full bg-accent/5"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 rounded-full bg-secondary/5"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iZ3JheSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')]"></div>
        </div>
      </div>

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* Left column: Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1 
              variants={itemVariants} 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-secondary"
            >
              Transform Your Restaurant with 
              <span className="text-primary block mt-2">QR Code Ordering</span>
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
                <span className="font-bold text-secondary">500+</span> restaurants already using QRDine
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right column: Visuals */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              {/* Phone Mockup */}
              <motion.div
                variants={phoneVariants}
                initial="idle"
                animate="animate"
                className="lg:absolute -left-12 top-10 z-10 shadow-xl rounded-3xl"
              >
                <div className="relative w-48 md:w-56 overflow-hidden rounded-3xl border-8 border-gray-800 shadow-lg">
                  <div className="relative bg-white pb-[200%]">
                    {/* Phone Screen Content */}
                    <img
                      className="absolute top-0 left-0 w-full"
                      src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D"
                      alt="Restaurant app"
                    />
                    <div className="absolute top-0 left-0 right-0 bg-black/60 text-white p-2 text-xs">
                      Scanning QR Code...
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 border-2 border-white rounded-lg flex items-center justify-center">
                        <div className="animate-pulse bg-primary/30 w-24 h-24"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-3">
                      <div className="h-2 bg-gray-300 rounded-full w-3/4 mb-2"></div>
                      <div className="h-2 bg-gray-300 rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* QR Code */}
              <motion.div
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                variants={qrCodeVariants}
                initial="idle"
                animate={isHovering ? "hover" : "idle"}
                className="relative mx-auto lg:ml-auto lg:mr-0 w-64 md:w-80 bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100"
              >
                <div className="p-6 bg-white">
                  <div className="text-center mb-4">
                    <div className="inline-block p-2 bg-primary/10 rounded-lg text-primary mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-secondary font-bold">Scan to Order</h3>
                  </div>
                  
                  {/* QR Code SVG */}
                  <div className="flex justify-center">
                    <svg 
                      className="w-40 h-40" 
                      viewBox="0 0 100 100" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="10" y="10" width="20" height="20" rx="3" fill="#2E294E" />
                      <rect x="10" y="40" width="10" height="10" rx="2" fill="#2E294E" />
                      <rect x="30" y="40" width="10" height="10" rx="2" fill="#2E294E" />
                      <rect x="70" y="10" width="20" height="20" rx="3" fill="#2E294E" />
                      <rect x="50" y="10" width="10" height="10" rx="2" fill="#2E294E" />
                      <rect x="50" y="30" width="10" height="10" rx="2" fill="#2E294E" />
                      <rect x="70" y="40" width="10" height="10" rx="2" fill="#2E294E" />
                      <rect x="10" y="70" width="20" height="20" rx="3" fill="#2E294E" />
                      <rect x="40" y="50" width="20" height="20" rx="2" fill="#FF6B35" className={`transition-all duration-300 ${isHovering ? 'opacity-100' : 'opacity-80'}`} />
                      <rect x="70" y="60" width="20" height="10" rx="2" fill="#2E294E" />
                      <rect x="40" y="80" width="10" height="10" rx="2" fill="#2E294E" />
                      <rect x="60" y="80" width="30" height="10" rx="2" fill="#2E294E" />
                    </svg>
                  </div>
                  
                  <div className="text-center mt-2 text-sm text-gray-500">
                    {isHovering ? 'Scan me!' : 'Hover to interact'}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 border-t">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500">Demo Restaurant</p>
                      <p className="font-medium text-secondary">Table #12</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-primary text-white text-sm py-2 px-4 rounded-lg"
                    >
                      View Menu
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

