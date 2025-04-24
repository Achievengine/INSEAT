import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface QRPhoneMockupProps {
  logoPreview?: string | null;
  restaurantName?: string;
}

const QRPhoneMockup = ({ logoPreview = null, restaurantName = 'Taste of Paradise' }: QRPhoneMockupProps) => {
  const [currentTime, setCurrentTime] = useState('14:25');

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

  const scanAnimation = {
    scanning: {
      opacity: [0.7, 1, 0.7],
      scale: [0.98, 1.02, 0.98],
      transition: {
        opacity: {
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        },
        scale: {
          repeat: Infinity,
          duration: 2.5,
          ease: "easeInOut"
        }
      }
    }
  };

  return (
    <div className="relative bg-gray-900 rounded-[28px] p-3 shadow-xl">
      {/* Phone notch */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-gray-900 rounded-b-xl"></div>
      
      {/* Device notch details */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 z-10">
        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
        <div className="w-3 h-1 bg-gray-700 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
      </div>
      
      <div className="bg-gradient-to-b from-primary/10 to-white rounded-[28px] overflow-hidden">
        {/* Phone Status Bar */}
        <div className="bg-transparent px-5 pt-1 pb-1 flex justify-between items-center">
          <span className="text-[10px] font-medium text-gray-700">{currentTime}</span>
          <div className="flex space-x-1 items-center">
            <svg className="w-2 h-2 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1,9l2,2c4.97-4.97,13.03-4.97,18,0l2-2C16.93,2.93,7.08,2.93,1,9z" />
              <path d="M5,13l2,2c2.76-2.76,7.24-2.76,10,0l2-2C15.14,9.14,8.87,9.14,5,13z" />
            </svg>
            <svg className="w-2 h-2 text-gray-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,21L12,21c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v2C13,20.6,12.6,21,12,21z" />
              <path d="M15,21L15,21c-0.6,0-1-0.4-1-1v-5c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v5C16,20.6,15.6,21,15,21z" />
              <path d="M9,21L9,21c-0.6,0-1-0.4-1-1v-7c0-0.6,0.4-1,1-1h0c0.6,0,1,0.4,1,1v7C10,20.6,9.6,21,9,21z" />
            </svg>
            <div className="w-3 h-1.5 rounded-sm bg-gray-700 relative">
              <div className="absolute right-px top-0 bottom-0 w-px h-full bg-white/30 rounded-r-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Phone Content */}
        <div className="relative pt-2 pb-16">
          {/* Preview Header */}
          <div className="px-5 pt-2 pb-4 flex items-center space-x-3">
            {logoPreview ? (
              <div className="h-10 w-10 rounded-full overflow-hidden shadow-md border border-gray-200">
                <img src={logoPreview} alt="Logo" className="h-full w-full object-cover" />
              </div>
            ) : (
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shadow-md border border-primary/20">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
            )}
            <div>
              <h3 className="font-bold text-gray-800">{restaurantName}</h3>
              <p className="text-xs text-gray-500">Digital Menu & Ordering</p>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="mt-8 bg-white rounded-xl shadow-md p-5 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-800">Restaurant QR Code</h3>
              <button className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">Download</button>
            </div>
            
            <div className="flex items-center justify-center">
              <motion.div 
                variants={scanAnimation}
                animate="scanning"
                className="w-32 h-32 p-2 bg-white rounded-lg border-2 border-primary shadow-md"
              >
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="15" y="15" width="20" height="20" rx="2" fill="#333" />
                  <rect x="65" y="15" width="20" height="20" rx="2" fill="#333" />
                  <rect x="15" y="65" width="20" height="20" rx="2" fill="#333" />
                  <rect x="45" y="15" width="10" height="10" rx="1" fill="#333" />
                  <rect x="15" y="45" width="10" height="10" rx="1" fill="#333" />
                  <rect x="40" y="40" width="20" height="20" rx="1" fill="#555" />
                  <rect x="65" y="45" width="10" height="10" rx="1" fill="#333" />
                  <rect x="45" y="65" width="10" height="10" rx="1" fill="#333" />
                  <rect x="65" y="75" width="10" height="10" rx="1" fill="#333" />
                  <rect x="75" y="65" width="10" height="10" rx="1" fill="#333" />
                  <rect x="55" y="55" width="10" height="10" rx="1" fill="#333" />
                  <rect x="45" y="25" width="10" height="10" rx="1" fill="#333" />
                  <rect x="25" y="55" width="10" height="10" rx="1" fill="#333" />
                </svg>
              </motion.div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">Scan to view the live menu</p>
              <p className="text-xs text-gray-500 mt-1">Simply print and place on tables</p>
            </div>
          </div>
        </div>
        
        {/* Phone Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-around">
          <div className="flex flex-col items-center">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="text-[10px] text-primary font-medium mt-1">Menu</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-[10px] text-gray-500 font-medium mt-1">Cart</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-[10px] text-gray-500 font-medium mt-1">Account</span>
          </div>
        </div>
      </div>
      
      {/* Phone home indicator */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-1 bg-gray-600 rounded-full mx-auto"></div>
      </div>
    </div>
  );
};

export default QRPhoneMockup;
