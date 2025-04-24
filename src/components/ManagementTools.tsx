import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the types for content sections
interface ContentSection {
  id: 'kitchen' | 'staff';
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const contentData: ContentSection[] = [
  {
    id: 'kitchen',
    title: 'Kitchen Command Center',
    description: 'Transform your kitchen into a well-orchestrated symphony of culinary efficiency.',
    features: [
      'Real-time Order Visualization',
      'Smart Ticket Prioritization',
      'Preparation Timeline Tracking',
      'Inventory & Availability Dashboard',
    ],
    icon: '🍳',
  },
  {
    id: 'staff',
    title: 'Service Excellence Suite',
    description: 'Equip your team with digital tools that elevate the art of hospitality.',
    features: [
      'Interactive Floor Plan Management',
      'Seamless Order Capture Interface',
      'Team Communication Hub',
      'Service Performance Insights',
    ],
    icon: '👨‍🍳',
  },
];

const ManagementTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kitchen' | 'staff'>('kitchen');

  const activeContent = contentData.find((item) => item.id === activeTab);

  const tabVariants = {
    inactive: { y: 0, opacity: 0.7 },
    active: { y: 0, opacity: 1 },
    hover: { y: -5, transition: { duration: 0.2 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };

  return (
    <section className="py-16 md:py-24 bg-indigo-950 dark:bg-gray-900 text-white overflow-hidden">
      <div className="container-custom">
        {/* Floating particles for visual interest */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight 
              }}
              animate={{ 
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              }}
              transition={{ 
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">
              Orchestrate Your Operations
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              One unified command center where kitchen brilliance meets service excellence.
            </p>
          </motion.div>
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 min-h-[500px] relative z-10">
          {/* Left Column: Interactive Tabs */}
          <div className="flex md:flex-col justify-center md:justify-start gap-4 md:gap-6 md:w-1/3 lg:w-1/4">
            {contentData.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-5 w-full rounded-lg cursor-pointer focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                  activeTab === tab.id 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" // Ensure white text on active
                    : "bg-white/10 text-white/90 hover:bg-white/15 hover:text-white" // Ensure light text on inactive
                }`}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === tab.id ? 'active' : 'inactive'}
                whileHover="hover"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{tab.icon}</span>
                  <h3 className="font-bold text-lg text-left">{tab.title}</h3>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right Column: Content Display */}
          <div className="flex-grow p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {activeContent && (
                <motion.div
                  key={activeContent.id}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  {/* Changed title color to white */}
                  <h3 className="text-3xl font-display font-semibold text-white"> 
                    {activeContent.title}
                  </h3>
                  <p className="text-white/90 text-lg">{activeContent.description}</p>
                  <ul className="space-y-4">
                    {activeContent.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                        <span className="text-white/80">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagementTools;
