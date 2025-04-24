import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  // View mode state (calculator or comparison)
  const [viewMode, setViewMode] = useState('pricing'); // 'pricing' or 'comparison'
  
  // Selected plan state
  const [selectedPlan, setSelectedPlan] = useState('pro');
  
  // Calculator state
  const [calculatorState, setCalculatorState] = useState({
    locations: 1,
    tables: 15,
    staff: 8,
    addons: {
      advancedAnalytics: false,
      apiAccess: false,
      dedicatedSupport: false
    }
  });
  
  // Enhanced pricing tiers with more detailed information
  const pricingTiers = [
    { 
      id: 'essential',
      name: 'Essential', 
      basePrice: 49,
      perLocationPrice: 49,
      perTablePrice: 2,
      perStaffPrice: 5,
      recommended: false,
      description: 'Perfect for small restaurants just getting started with digital ordering.',
      features: [
        { name: 'QR Ordering', included: true },
        { name: 'Basic KDS', included: true },
        { name: 'Loyalty Bronze Tier', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Staff Notifications', included: true },
        { name: 'Digital Menu Management', included: true },
        { name: 'Advanced KDS', included: false },
        { name: 'Full Loyalty Program', included: false },
        { name: 'Staff Tools Suite', included: false },
        { name: 'Dynamic Pricing', included: false },
        { name: 'Advanced Analytics', included: false },
        { name: 'Multi-Location Support', included: false },
        { name: 'API Access', included: false },
        { name: 'Dedicated Support', included: false },
        { name: 'Custom Integrations', included: false }
      ]
    },
    { 
      id: 'pro',
      name: 'Pro', 
      basePrice: 99,
      perLocationPrice: 89,
      perTablePrice: 1.5,
      perStaffPrice: 4,
      recommended: true,
      description: 'Our most popular plan. Perfect for restaurants looking to boost efficiency and loyalty.',
      features: [
        { name: 'QR Ordering', included: true },
        { name: 'Basic KDS', included: true },
        { name: 'Loyalty Bronze Tier', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Staff Notifications', included: true },
        { name: 'Digital Menu Management', included: true },
        { name: 'Advanced KDS', included: true },
        { name: 'Full Loyalty Program', included: true },
        { name: 'Staff Tools Suite', included: true },
        { name: 'Dynamic Pricing', included: true },
        { name: 'Advanced Analytics', included: true, addon: true },
        { name: 'Multi-Location Support', included: true },
        { name: 'API Access', included: false, addon: true },
        { name: 'Dedicated Support', included: false, addon: true },
        { name: 'Custom Integrations', included: false }
      ]
    },
    { 
      id: 'enterprise',
      name: 'Enterprise', 
      basePrice: 'Custom',
      recommended: false,
      description: 'For large or multi-location restaurants requiring custom solutions and dedicated support.',
      features: [
        { name: 'QR Ordering', included: true },
        { name: 'Basic KDS', included: true },
        { name: 'Loyalty Bronze Tier', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Staff Notifications', included: true },
        { name: 'Digital Menu Management', included: true },
        { name: 'Advanced KDS', included: true },
        { name: 'Full Loyalty Program', included: true },
        { name: 'Staff Tools Suite', included: true },
        { name: 'Dynamic Pricing', included: true },
        { name: 'Advanced Analytics', included: true },
        { name: 'Multi-Location Support', included: true },
        { name: 'API Access', included: true },
        { name: 'Dedicated Support', included: true },
        { name: 'Custom Integrations', included: true }
      ]
    }
  ];

  // Function to calculate the price based on calculator state
  const calculatePrice = (tier) => {
    if (tier.basePrice === 'Custom') return 'Custom';
    
    let total = tier.basePrice;
    total += (calculatorState.locations - 1) * tier.perLocationPrice;
    total += calculatorState.tables * tier.perTablePrice;
    total += calculatorState.staff * tier.perStaffPrice;
    
    // Add prices for enabled add-ons
    if (tier.id === 'pro') {
      if (calculatorState.addons.advancedAnalytics) total += 29;
      if (calculatorState.addons.apiAccess) total += 49;
      if (calculatorState.addons.dedicatedSupport) total += 99;
    }
    
    return `$${Math.round(total)}/mo`;
  };

  // Handle calculator input changes
  const handleCalculatorChange = (field, value) => {
    if (field.includes('.')) {
      // Handle nested fields (addons)
      const [parent, child] = field.split('.');
      setCalculatorState(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      // Handle top-level fields
      setCalculatorState(prev => ({
        ...prev,
        [field]: parseInt(value, 10)
      }));
    }
  };

  // Toggle add-on selection
  const toggleAddon = (addon) => {
    setCalculatorState(prev => ({
      ...prev,
      addons: {
        ...prev.addons,
        [addon]: !prev.addons[addon]
      }
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    selected: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      scale: 1.02
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-indigo-950 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }} 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Flexible Pricing Plans
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
          >
            Choose the right plan for your restaurant's needs and scale as you grow.
          </motion.p>
          
          {/* View mode toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 p-1 rounded-full flex">
              <motion.button
                className={`px-4 py-2 rounded-full text-sm md:text-base ${viewMode === 'pricing' ? 'bg-white text-secondary shadow-md' : 'text-white'}`}
                onClick={() => setViewMode('pricing')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Pricing Plans
              </motion.button>
              <motion.button
                className={`px-4 py-2 rounded-full text-sm md:text-base ${viewMode === 'comparison' ? 'bg-white text-secondary shadow-md' : 'text-white'}`}
                onClick={() => setViewMode('comparison')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Feature Comparison
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {viewMode === 'pricing' ? (
            /* Pricing Plans View */
            <motion.div
              key="pricing"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={containerVariants}
              className="flex flex-col gap-8"
            >
              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pricingTiers.map((tier, index) => (
                  <motion.div
                    key={tier.id}
                    variants={cardVariants}
                    whileHover={tier.id !== 'enterprise' ? "hover" : {}}
                    animate={selectedPlan === tier.id ? "selected" : "visible"}
                    transition={{ duration: 0.3 }}
                    onClick={() => tier.id !== 'enterprise' && setSelectedPlan(tier.id)}
                    className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col 
                      ${tier.recommended ? 'border-2 border-primary' : 'border border-gray-200'}`} 
                  >
                    {/* Recommended badge */}
                    {tier.recommended && (
                      <div className="bg-primary text-white py-1 px-3 text-xs font-semibold uppercase tracking-wider absolute top-0 right-0 rounded-bl-lg">
                        Recommended
                      </div>
                    )}
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                      <p className="text-sm text-gray-500 h-12 mb-2">{tier.description}</p>
                      
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-primary">
                          {tier.basePrice === 'Custom' ? 'Custom' : calculatePrice(tier)}
                        </span>
                        {tier.basePrice !== 'Custom' && (
                          <span className="text-sm text-gray-500 ml-1">per month</span>
                        )}
                      </div>
                      
                      <div className="space-y-3 mb-8">
                        {tier.features.slice(0, 6).map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-start">
                            <svg className={`w-5 h-5 ${feature.included ? 'text-green-500' : 'text-gray-300'} mr-2 mt-0.5`} 
                                fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                              {feature.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-auto">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-2 px-4 rounded-md font-medium transition-colors
                            ${tier.id === 'enterprise' 
                              ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                              : 'bg-primary text-white hover:bg-primary/90'}`}
                        >
                          {tier.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Pricing Calculator */}
              {selectedPlan !== 'enterprise' && (
                <motion.div
                  variants={itemVariants}
                  className="mt-12 bg-white rounded-lg shadow-lg p-8 border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-center mb-6">Customize Your Plan</h3>
                  <p className="text-center text-gray-600 mb-8">
                    Adjust the parameters below to see how pricing scales with your business
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Sliders for customization */}
                    <div>
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <label className="font-medium text-gray-700">Locations</label>
                          <span className="text-gray-900 font-semibold">{calculatorState.locations}</span>
                        </div>
                        <input
                          type="range"
                          min="1"
                          max="10"
                          value={calculatorState.locations}
                          onChange={(e) => handleCalculatorChange('locations', e.target.value)}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>1</span>
                          <span>10</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <label className="font-medium text-gray-700">Tables</label>
                          <span className="text-gray-900 font-semibold">{calculatorState.tables}</span>
                        </div>
                        <input
                          type="range"
                          min="5"
                          max="50"
                          value={calculatorState.tables}
                          onChange={(e) => handleCalculatorChange('tables', e.target.value)}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>5</span>
                          <span>50</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                          <label className="font-medium text-gray-700">Staff Members</label>
                          <span className="text-gray-900 font-semibold">{calculatorState.staff}</span>
                        </div>
                        <input
                          type="range"
                          min="2"
                          max="25"
                          value={calculatorState.staff}
                          onChange={(e) => handleCalculatorChange('staff', e.target.value)}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>2</span>
                          <span>25</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Add-ons and summary */}
                    <div>
                      {selectedPlan === 'pro' && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-700 mb-3">Add-ons</h4>
                          <div className="space-y-3">
                            <div className="flex items-center">
                              <input
                                id="advanced-analytics"
                                type="checkbox"
                                checked={calculatorState.addons.advancedAnalytics}
                                onChange={() => toggleAddon('advancedAnalytics')}
                                className="w-4 h-4 text-primary"
                              />
                              <label htmlFor="advanced-analytics" className="ml-2 text-gray-700">
                                Advanced Analytics <span className="text-gray-500 text-sm">($29/mo)</span>
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="api-access"
                                type="checkbox"
                                checked={calculatorState.addons.apiAccess}
                                onChange={() => toggleAddon('apiAccess')}
                                className="w-4 h-4 text-primary"
                              />
                              <label htmlFor="api-access" className="ml-2 text-gray-700">
                                API Access <span className="text-gray-500 text-sm">($49/mo)</span>
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="dedicated-support"
                                type="checkbox"
                                checked={calculatorState.addons.dedicatedSupport}
                                onChange={() => toggleAddon('dedicatedSupport')}
                                className="w-4 h-4 text-primary"
                              />
                              <label htmlFor="dedicated-support" className="ml-2 text-gray-700">
                                Dedicated Support <span className="text-gray-500 text-sm">($99/mo)</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Pricing summary */}
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h4 className="font-semibold text-gray-700 mb-3">Your Estimated Price</h4>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex justify-between">
                            <span>Base plan:</span>
                            <span className="font-medium">${pricingTiers.find(t => t.id === selectedPlan).basePrice}/mo</span>
                          </div>
                          
                          {calculatorState.locations > 1 && (
                            <div className="flex justify-between">
                              <span>Additional locations:</span>
                              <span className="font-medium">
                                +${(calculatorState.locations - 1) * pricingTiers.find(t => t.id === selectedPlan).perLocationPrice}/mo
                              </span>
                            </div>
                          )}
                          
                          <div className="flex justify-between">
                            <span>Tables ({calculatorState.tables}):</span>
                            <span className="font-medium">
                              +${Math.round(calculatorState.tables * pricingTiers.find(t => t.id === selectedPlan).perTablePrice)}/mo
                            </span>
                          </div>
                          
                          <div className="flex justify-between">
                            <span>Staff ({calculatorState.staff}):</span>
                            <span className="font-medium">
                              +${Math.round(calculatorState.staff * pricingTiers.find(t => t.id === selectedPlan).perStaffPrice)}/mo
                            </span>
                          </div>
                          
                          {selectedPlan === 'pro' && (
                            <>
                              {calculatorState.addons.advancedAnalytics && (
                                <div className="flex justify-between">
                                  <span>Advanced Analytics:</span>
                                  <span className="font-medium">+$29/mo</span>
                                </div>
                              )}
                              
                              {calculatorState.addons.apiAccess && (
                                <div className="flex justify-between">
                                  <span>API Access:</span>
                                  <span className="font-medium">+$49/mo</span>
                                </div>
                              )}
                              
                              {calculatorState.addons.dedicatedSupport && (
                                <div className="flex justify-between">
                                  <span>Dedicated Support:</span>
                                  <span className="font-medium">+$99/mo</span>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                        
                        <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                          <span className="font-semibold">Total monthly price:</span>
                          <motion.span 
                            key={calculatePrice(pricingTiers.find(t => t.id === selectedPlan))}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="text-xl font-bold text-primary"
                          >
                            {calculatePrice(pricingTiers.find(t => t.id === selectedPlan))}
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            /* Feature Comparison Matrix View */
            <motion.div
              key="comparison"
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              variants={containerVariants}
            >
              <div className="overflow-x-auto">
                <table className="w-full min-w-[768px] bg-white rounded-lg overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-4 px-6 text-left text-gray-500 font-medium">Features</th>
                      {pricingTiers.map(tier => (
                        <th key={tier.id} className="py-4 px-6 text-center">
                          <div className={`font-bold text-xl mb-1 ${tier.recommended ? 'text-primary' : 'text-gray-900'}`}>
                            {tier.name}
                          </div>
                          <div className="text-lg font-semibold">
                            {tier.basePrice === 'Custom' ? 'Custom' : `$${tier.basePrice}/mo`}
                          </div>
                          {tier.recommended && (
                            <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full mt-1">
                              Recommended
                            </span>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Generate rows for each feature */}
                    {pricingTiers[0].features.map((feature, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-6 border-t border-gray-200 font-medium">{feature.name}</td>
                        {pricingTiers.map(tier => (
                          <td key={`${tier.id}-${index}`} className="py-3 px-6 border-t border-gray-200 text-center">
                            {tier.features[index].included ? (
                              <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                            ) : (
                              <svg className="w-6 h-6 text-gray-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                              </svg>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricing;
