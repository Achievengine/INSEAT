import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoyaltyEngagement = () => {
  // Customer tier levels data
  const tiers = [
    { 
      id: 'bronze',
      name: 'Bronze', 
      visits: '1-5', 
      color: '#CD7F32',
      baseDiscount: 5,
      returnBonus: {
        '24h': 15,
        '3d': 10,
        '5d': 5
      },
      features: ['Base discount on all orders', 'Return incentives', 'Birthday special']
    },
    { 
      id: 'silver', 
      name: 'Silver', 
      visits: '6-15', 
      color: '#C0C0C0',
      baseDiscount: 10,
      returnBonus: {
        '24h': 20,
        '3d': 15,
        '5d': 10
      },
      features: ['Increased base discount', 'Enhanced return bonuses', 'Birthday special', 'Skip-the-line privileges']
    },
    { 
      id: 'gold', 
      name: 'Gold', 
      visits: '16-30', 
      color: '#FFD700',
      baseDiscount: 15,
      returnBonus: {
        '24h': 25,
        '3d': 20,
        '5d': 15
      },
      features: ['Premium base discount', 'Maximum return bonuses', 'Birthday special', 'Skip-the-line privileges', 'Exclusive menu items']
    },
    { 
      id: 'platinum', 
      name: 'Platinum', 
      visits: '31+', 
      color: '#E5E4E2',
      baseDiscount: 20,
      returnBonus: {
        '24h': 30,
        '3d': 25,
        '5d': 20
      },
      features: ['Maximum discount tier', 'Premium return bonuses', 'Birthday special', 'Skip-the-line privileges', 'Exclusive menu items', 'Special event invitations']
    }
  ];

  // State for active tier in tier progression display
  const [activeTier, setActiveTier] = useState(0);
  
  // State for discount calculator
  const [calculatorState, setCalculatorState] = useState({
    visits: 3, // Default visits
    daysSinceLastVisit: 4, // Default days since last visit
    orderTotal: 50 // Default order total
  });
  
  // Journey steps
  const journeySteps = [
    { id: 'first-visit', title: 'First Visit', description: 'New customer receives 10% welcome discount', icon: '👋' },
    { id: 'quick-return', title: 'Quick Return', description: 'Return within 5 days to activate return discount', icon: '⚡' },
    { id: 'tier-upgrade', title: 'Tier Upgrade', description: 'Reach 6 visits to upgrade to Silver tier', icon: '🔼' },
    { id: 'ongoing-rewards', title: 'Ongoing Rewards', description: 'Continue enjoying increasing rewards with each visit', icon: '🎁' },
    { id: 'referral-bonus', title: 'Referral Bonus', description: 'Earn additional discounts by referring friends', icon: '👥' },
  ];

  // Calculate appropriate tier based on visit count
  const calculateTier = (visits: number): number => {
    if (visits >= 31) return 3; // Platinum
    if (visits >= 16) return 2; // Gold
    if (visits >= 6) return 1; // Silver
    return 0; // Bronze
  };

  // Calculate discount based on visits and days since last visit
  const calculateDiscount = (visits: number, daysSinceLastVisit: number): number => {
    const tierIndex = calculateTier(visits);
    const currentTier = tiers[tierIndex];
    
    // Base discount for the tier
    let discount = currentTier.baseDiscount;
    
    // Add return bonus if applicable
    if (daysSinceLastVisit <= 1) {
      discount += currentTier.returnBonus['24h'];
    } else if (daysSinceLastVisit <= 3) {
      discount += currentTier.returnBonus['3d'];
    } else if (daysSinceLastVisit <= 5) {
      discount += currentTier.returnBonus['5d'];
    }
    
    return discount;
  };

  // Update calculator state
  const handleCalculatorChange = (field: string, value: string) => {
    setCalculatorState(prev => ({
      ...prev,
      [field]: parseInt(value, 10)
    }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Calculate current discount for the calculator
  const currentDiscount = calculateDiscount(calculatorState.visits, calculatorState.daysSinceLastVisit);
  const discountAmount = (calculatorState.orderTotal * currentDiscount / 100).toFixed(2);

  return (
    <section id="loyalty" className="pt-16 pb-0 relative">
      {/* Mobile mockup that overlaps with feature section */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16 z-10 scale-90">
        <motion.img 
          src="/images/mobile-mockup.png" 
          alt="Mobile App Mockup" 
          className="max-h-[600px] w-auto"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      </div>

      {/* Dark background for the main feature section like pricing */}
      <div className="bg-indigo-950 dark:bg-gray-900 text-white py-14 pt-12 mt-3 rounded-t-3xl">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }} 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Innovative Loyalty & Engagement
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Drive repeat business and optimize revenue with our unique loyalty and pricing tools.
          </motion.p>
        </div>

        {/* Tier Progression Visualization */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Loyalty Tier Progression</h3>
          
          <div className="flex justify-center mb-8">
            <div className="bg-indigo-900 dark:bg-gray-800 p-1 rounded-full flex">
              {tiers.map((tier, index) => (
                <motion.button
                  key={tier.id}
                  onClick={() => setActiveTier(index)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base ${activeTier === index ? 'bg-white text-indigo-900 dark:text-gray-800 shadow-md' : 'text-white'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tier.name}
                </motion.button>
              ))}
            </div>
          </div>
          
          {/* Step indicator with smooth transition and margin below */}
          <div className="relative py-2 mb-10">
            <div className="h-2 bg-indigo-800 dark:bg-gray-700 rounded-full mx-10">
              {/* Progress track with tier markers */}
              <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-10 z-10">
                {tiers.map((tier, index) => (
                  <div key={tier.id} className="flex flex-col items-center">
                    <motion.div 
                      className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center"
                      style={{ backgroundColor: index <= activeTier ? tier.color : '#d1d5db' }}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    ></motion.div>
                    <span className="text-xs mt-2 hidden md:block">{tier.visits} visits</span>
                  </div>
                ))}
              </div>
              
              {/* Progress bar with smooth transition */}
              <motion.div 
                className="h-full rounded-full"
                style={{ backgroundColor: tiers[activeTier].color }}
                initial={{ width: 0 }}
                animate={{ width: `${(activeTier / (tiers.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>
            </div>
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-indigo-900 dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto border border-indigo-700 dark:border-gray-700"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 rounded-full mr-4 flex items-center justify-center text-white text-lg font-bold"
                      style={{ backgroundColor: tiers[activeTier].color }}
                    >
                      {tiers[activeTier].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white">{tiers[activeTier].name} Tier</h4>
                      <p className="text-gray-300">{tiers[activeTier].visits} visits</p>
                    </div>
                  </div>
                  <p className="text-lg mb-4 text-white">Base Discount: <span className="font-bold">{tiers[activeTier].baseDiscount}%</span></p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2 text-white">Return Bonuses:</h5>
                    <ul className="space-y-1 text-gray-200">
                      <li className="flex justify-between">
                        <span>Within 24 hours:</span>
                        <span className="font-bold">+{tiers[activeTier].returnBonus['24h']}%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Within 3 days:</span>
                        <span className="font-bold">+{tiers[activeTier].returnBonus['3d']}%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Within 5 days:</span>
                        <span className="font-bold">+{tiers[activeTier].returnBonus['5d']}%</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold mb-3 text-white">Tier Benefits:</h5>
                  <ul className="space-y-2">
                    {tiers[activeTier].features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-200"
                      >
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>


        {/* Interactive Discount Calculator */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Discount Calculator</h3>
          
          <div className="bg-indigo-900 dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto border border-indigo-700 dark:border-gray-700">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Calculator Controls */}
              <div className="flex-1">
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Total Visits</label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="1"
                      max="40"
                      value={calculatorState.visits}
                      onChange={(e) => handleCalculatorChange('visits', e.target.value)}
                      className="w-full h-2 bg-indigo-700 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-4 w-10 text-center font-semibold text-white">{calculatorState.visits}</span>
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    Tier: {tiers[calculateTier(calculatorState.visits)].name}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Days Since Last Visit</label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={calculatorState.daysSinceLastVisit}
                      onChange={(e) => handleCalculatorChange('daysSinceLastVisit', e.target.value)}
                      className="w-full h-2 bg-indigo-700 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-4 w-10 text-center font-semibold text-white">{calculatorState.daysSinceLastVisit}</span>
                  </div>
                  <div className="text-xs text-gray-300 mt-1">
                    {calculatorState.daysSinceLastVisit <= 1 
                      ? "Within 24 hours - Maximum bonus!" 
                      : calculatorState.daysSinceLastVisit <= 3 
                        ? "Within 3 days - Great bonus!" 
                        : calculatorState.daysSinceLastVisit <= 5 
                          ? "Within 5 days - Good bonus" 
                          : "No return bonus available"}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Order Total ($)</label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      min="10"
                      max="200"
                      step="5"
                      value={calculatorState.orderTotal}
                      onChange={(e) => handleCalculatorChange('orderTotal', e.target.value)}
                      className="w-full h-2 bg-indigo-700 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-4 w-16 text-center font-semibold text-white">${calculatorState.orderTotal}</span>
                  </div>
                </div>
              </div>
              
              {/* Results Display */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="bg-indigo-800 dark:bg-gray-700 rounded-lg p-6 border border-indigo-600 dark:border-gray-600">
                  <div className="text-center mb-4">
                    <p className="text-gray-200">Your Discount</p>
                    <motion.div 
                      key={currentDiscount}
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      className="text-4xl font-bold text-primary"
                    >
                      {currentDiscount}%
                    </motion.div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-200">
                      <span>Base tier discount:</span>
                      <span className="font-medium">{tiers[calculateTier(calculatorState.visits)].baseDiscount}%</span>
                    </div>
                    {calculatorState.daysSinceLastVisit <= 5 && (
                      <div className="flex justify-between text-sm text-gray-200">
                        <span>Return bonus:</span>
                        <span className="font-medium">
                          +{currentDiscount - tiers[calculateTier(calculatorState.visits)].baseDiscount}%
                        </span>
                      </div>
                    )}
                    <div className="border-t border-indigo-600 dark:border-gray-600 pt-2 mt-2 text-gray-200">
                      <div className="flex justify-between">
                        <span>Order Total:</span>
                        <span className="font-medium">${calculatorState.orderTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>Savings:</span>
                        <motion.span 
                          key={discountAmount}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          className="text-green-600"
                        >
                          -${discountAmount}
                        </motion.span>
                      </div>
                      <div className="flex justify-between text-lg font-bold mt-2">
                        <span>Final Price:</span>
                        <motion.span 
                          key={calculatorState.orderTotal - parseFloat(discountAmount)}
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                        >
                          ${(calculatorState.orderTotal - parseFloat(discountAmount)).toFixed(2)}
                        </motion.span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Journey Visualization */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Customer Loyalty Journey</h3>
          
          <div className="max-w-5xl mx-auto">
            {/* Journey path visualization */}
            <div className="relative mb-10">
              {/* Path line */}
              <div className="absolute top-12 left-0 w-full h-1 bg-indigo-700 dark:bg-gray-700 hidden md:block"></div>
              
              {/* Journey steps */}
              <div className="flex flex-col md:flex-row justify-between relative z-10">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    className="flex flex-col items-center mb-8 md:mb-0"
                    variants={itemVariants}
                    custom={index}
                  >
                    {/* Step icon */}
                    <div className="w-24 h-24 rounded-full bg-indigo-800 dark:bg-gray-700 shadow-md flex items-center justify-center mb-4 text-3xl border-2 border-indigo-500 dark:border-gray-500">
                      {step.icon}
                    </div>
                    
                    {/* Step title */}
                    <h4 className="font-bold text-lg mb-1 text-center text-white">{step.title}</h4>
                    
                    {/* Step description */}
                    <p className="text-sm text-gray-300 text-center max-w-[150px]">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Call to action */}
            <motion.div 
              className="text-center p-6 bg-gradient-to-r from-indigo-800/70 to-indigo-600/70 dark:from-gray-800 dark:to-gray-700 rounded-lg"
              variants={itemVariants}
            >
              <h4 className="text-xl font-bold mb-2 text-white">Begin Your Loyalty Journey Today</h4>
              <p className="mb-4 text-gray-200">Start earning rewards from your very first visit and watch your benefits grow!</p>
              <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2 px-6 rounded-full transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default LoyaltyEngagement;