import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const EnhancedPhoneMockup = () => {
  const [batteryLevel, setBatteryLevel] = useState(78);
  const [currentTime, setCurrentTime] = useState('12:42');
  const [scanProgress, setScanProgress] = useState(0);
  
  // Simulate battery drain
  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(prev => Math.max(prev - 1, 10));
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  
  // Update time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    }, 60000);
    return () => clearInterval(interval);
  }, []);
  
  // Simulate scanning progress
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 5;
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const phoneVariants = {
    idle: { 
      rotate: 0,
      y: 0
    },
    animate: { 
      rotate: [-1, 1, -1],
      y: [-3, 3, -3],
      transition: {
        rotate: { 
          repeat: Infinity, 
          duration: 6,
          ease: "easeInOut" 
        },
        y: { 
          repeat: Infinity, 
          duration: 5,
          ease: "easeInOut" 
        }
      }
    }
  };

  const scanLineVariants = {
    scanning: {
      y: [0, 550, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <motion.div
      variants={phoneVariants}
      initial="idle"
      animate="animate"
      className="z-20 shadow-xl rounded-3xl mx-auto" 
    >
      <div className="relative w-60 md:w-64 lg:w-72 overflow-hidden rounded-[28px] border-[10px] border-gray-800 shadow-2xl bg-gray-800"> 
        {/* Phone notch */}
        <div className="absolute top-0 left-0 right-0 z-30 flex justify-center">
          <div className="w-32 h-6 bg-gray-800 rounded-b-xl flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-700 rounded-full mx-1"></div>
            <div className="w-10 h-3 bg-gray-700 rounded-full mx-1"></div>
            <div className="w-3 h-3 bg-gray-700 rounded-full mx-1"></div>
          </div>
        </div>
        
        {/* Phone screen */}
        <div className="relative bg-black h-[420px] md:h-[560px] lg:h-[620px] flex flex-col items-center justify-center p-4 overflow-hidden rounded-[18px]"> 
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
                  <div 
                    className="absolute top-0 right-0 bottom-0 bg-green-500" 
                    style={{ width: `${batteryLevel}%` }}
                  ></div>
                </div>
                <span className="ml-1 text-xs">{batteryLevel}%</span>
              </div>
            </div>
          </div>

          {/* Camera UI */}
          <div className="w-full h-full flex flex-col relative">
          {/* Camera controls - top (hidden to match design) */}
            <div className="absolute top-8 left-0 w-full flex justify-between px-4 z-10 hidden">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
                <div className="w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Main camera content */}
            <div className="flex-1 flex flex-col items-center justify-center">
              {/* <svg className="w-16 h-16 text-gray-400 mb-6 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg> */}
              
              <div className="w-44 h-44 md:w-56 md:h-56 mb-6 relative flex items-center justify-center">
                <img src="/qr-3d.png" alt="QR" className="w-full h-full object-contain" />
              </div>
              
              <p className="text-sm text-gray-400 animate-pulse">Scanning for QR Code...</p>
              
              {/* Progress indicator */}
              <div className="w-48 h-1 bg-gray-700 rounded-full mt-4 relative overflow-hidden">
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-primary" 
                  style={{ width: `${scanProgress}%` }}
                ></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">Position QR code within frame</p>
            </div>

            {/* Camera bottom controls */}
            <div className="h-24 w-full flex items-center justify-between px-4 mb-6">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
              <div className="w-16 h-16 rounded-full bg-white/20 p-1 backdrop-blur-sm">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full border-4 border-gray-300"></div>
                </div>
              </div>
              
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Scan line animation */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-primary/60 rounded shadow-[0_0_15px_3px_rgba(122,87,209,0.5)]"
            variants={scanLineVariants}
            animate="scanning"
          ></motion.div>
        </div>
        
        {/* Phone bottom bar */}
        <div className="absolute bottom-1 left-0 right-0 z-30 flex justify-center">
          <div className="w-24 h-1 bg-gray-600 rounded-full"></div>
        </div>
        
        {/* Volume buttons */}
        <div className="absolute top-20 -left-[12px] w-2 h-12 bg-gray-700 rounded-l-lg"></div>
        <div className="absolute top-36 -left-[12px] w-2 h-12 bg-gray-700 rounded-l-lg"></div>
        
        {/* Power button */}
        <div className="absolute top-24 -right-[12px] w-2 h-16 bg-gray-700 rounded-r-lg"></div>
      </div>
    </motion.div>
  );
};

export default EnhancedPhoneMockup;
