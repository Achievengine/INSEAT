import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  // View mode state (calculator or comparison)
  const [viewMode, setViewMode] = useState('pricing'); // 'pricing' or 'comparison'
  
  // Selected plan state
  const [selectedPlan, setSelectedPlan] = useState('pro');
  
  // Add-ons state
  const [selectedAddons, setSelectedAddons] = useState({
    kds: false,
    pos: false
  });
  
  // Enhanced pricing tiers with transaction-based model
  const pricingTiers = [
    { 
      id: 'transaction',
      name: 'Transaction Based', 
      monthlyFee: 0,
      transactionFee: 15,
      recommended: false,
      description: 'Pay per transaction with higher commission rates.',
      features: [
        { name: 'QR Ordering', included: true },
        { name: 'Loyalty Bronze Tier', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Digital Menu Management', included: true },
        { name: 'KDS', included: false, addon: true },
        { name: 'POS', included: false, addon: true }
      ]
    },
    { 
      id: 'pro',
      name: 'Pro', 
      monthlyFee: 500,
      transactionFee: 5,
      recommended: true,
      description: 'Our most popular plan. Perfect for restaurants looking to boost efficiency and loyalty.',
      features: [
        { name: 'QR Ordering', included: true },
        { name: 'Loyalty Bronze Tier', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Digital Menu Management', included: true },
        { name: 'KDS', included: false, addon: true },
        { name: 'POS', included: false, addon: true }
      ]
    },
    { 
      id: 'enterprise',
      name: 'Enterprise', 
      monthlyFee: 'Custom',
      transactionFee: 'Custom',
      recommended: false,
      description: 'For large or multi-location restaurants requiring custom solutions and dedicated support.',
      features: [
        { name: 'QR Ordering', included: true },
        { name: 'Loyalty Bronze Tier', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Digital Menu Management', included: true },
        { name: 'KDS', included: true },
        { name: 'POS', included: true }
      ]
    }
  ];

  // Add-ons pricing
  const addons = [
    {
      id: 'kds',
      name: 'Kitchen Display System (KDS)',
      price: 150,
      description: 'Advanced kitchen management system'
    },
    {
      id: 'pos',
      name: 'Point of Sale (POS)',
      price: 150,
      description: 'Complete POS system integration'
    }
  ];

  // Toggle add-on selection
  const toggleAddon = (addonId) => {
    setSelectedAddons(prev => ({
      ...prev,
      [addonId]: !prev[addonId]
    }));
  };

  // Calculate total monthly cost including add-ons
  const calculateTotalCost = (tier) => {
    if (tier.monthlyFee === 'Custom') return 'Custom';
    
    let total = tier.monthlyFee;
    
    // Add selected add-ons based on plan
    if (tier.id !== 'enterprise') {
      if (selectedAddons.kds) total += 150;
      if (selectedAddons.pos) total += 150;
    }
    
    return total;
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
    <div>
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {pricingTiers.map((tier, index) => (
                    <motion.div
                      key={tier.id}
                      variants={cardVariants}
                      whileHover={tier.id !== 'enterprise' ? "hover" : {}}
                      animate={selectedPlan === tier.id ? "selected" : "visible"}
                      transition={{ duration: 0.3 }}
                      onClick={() => tier.id !== 'enterprise' && setSelectedPlan(tier.id)}
                      className={`bg-white rounded-xl shadow-xl overflow-hidden flex flex-col min-h-[600px] 
                        ${tier.recommended ? 'border-2 border-orange-500' : 'border border-gray-200'}`} 
                    >
                      {/* Recommended badge */}
                      {tier.recommended && (
                        <div className="bg-orange-500 text-white py-2 px-4 text-sm font-semibold uppercase tracking-wider absolute top-0 right-0 rounded-bl-lg">
                          Recommended
                        </div>
                      )}
                      
                      <div className="p-8 flex flex-col h-full">
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                          <p className="text-sm text-gray-500 mb-6">{tier.description}</p>
                          
                          <div className="mb-8">
                            <div className="flex flex-col space-y-3">
                              <div>
                                <span className="text-3xl font-bold text-orange-500">
                                  {tier.monthlyFee === 'Custom' ? 'Custom' : `${calculateTotalCost(tier)} AED`}
                                </span>
                                {tier.monthlyFee !== 'Custom' && (
                                  <span className="text-sm text-gray-500 ml-1">per month</span>
                                )}
                              </div>
                              <div className="text-base text-gray-700">
                                Transaction Fee: <span className="font-semibold text-orange-500 text-lg">
                                  {tier.transactionFee === 'Custom' ? 'Custom' : `${tier.transactionFee}%`}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4 mb-8 flex-grow">
                          {tier.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center justify-between">
                              {feature.addon && tier.id !== 'enterprise' ? (
                                <div className="flex items-center flex-1">
                                  <input
                                    id={`${tier.id}-${feature.name.toLowerCase()}`}
                                    type="checkbox"
                                    checked={selectedAddons[feature.name.toLowerCase()]}
                                    onChange={() => toggleAddon(feature.name.toLowerCase())}
                                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500 mr-3"
                                  />
                                  <label htmlFor={`${tier.id}-${feature.name.toLowerCase()}`} className="text-gray-700 font-medium">
                                    {feature.name}
                                  </label>
                                  <div className="relative ml-2">
                                    <div className="group">
                                      <div className="w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">
                                        i
                                      </div>
                                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                                        {feature.name === 'KDS' ? 'Kitchen Display System\nAdvanced kitchen management' : 'Point of Sale System\nComplete POS integration'}
                                      </div>
                                    </div>
                                  </div>
                                  <span className="text-orange-500 font-semibold ml-auto">+150 AED</span>
                                </div>
                              ) : (
                                <div className="flex items-start">
                                  <svg className={`w-5 h-5 ${feature.included ? 'text-green-500' : 'text-gray-300'} mr-3 mt-0.5`} 
                                      fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  <span className={`${feature.included ? 'text-gray-700' : 'text-gray-400'} font-medium`}>
                                    {feature.name}
                                  </span>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-auto">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-colors
                              ${tier.id === 'enterprise' 
                                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                                : 'bg-orange-500 text-white hover:bg-orange-600'}`}
                          >
                            {tier.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
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
                        <th className="py-4 px-6 text-left text-gray-900 font-medium">Features</th>
                        {pricingTiers.map(tier => (
                          <th key={tier.id} className="py-4 px-6 text-center">
                            <div className={`font-bold text-xl mb-1 ${tier.recommended ? 'text-orange-500' : 'text-gray-900'}`}>
                              {tier.name}
                            </div>
                            <div className="text-lg font-semibold">
                              {tier.monthlyFee === 'Custom' ? 'Custom' : `${tier.monthlyFee} AED/mo`}
                            </div>
                            <div className="text-sm text-gray-600">
                              {tier.transactionFee === 'Custom' ? 'Custom fee' : `${tier.transactionFee}% transaction`}
                            </div>
                            {tier.recommended && (
                              <span className="inline-block bg-orange-100 text-orange-500 text-xs font-medium px-2 py-1 rounded-full mt-1">
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
                          <td className="py-3 px-6 border-t border-gray-200 font-medium text-gray-900">{feature.name}</td>
                          {pricingTiers.map(tier => (
                            <td key={`${tier.id}-${index}`} className="py-3 px-6 border-t border-gray-200 text-center">
                              {tier.features[index]?.included ? (
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

      {/* Coming Soon Section */}
      <section className="bg-indigo-950 dark:bg-gray-900">
        <div className="pt-6 md:pt-8 pb-0">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-3">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5 }} 
                className="text-6xl md:text-8xl font-bold text-white mb-2"
              >
                INSEAT
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.1 }} 
                className="text-3xl md:text-4xl text-white mb-3"
              >
                Food Ordering App
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-white text-xl max-w-3xl mx-auto mb-2"
              >
                Our comprehensive food delivery solution with advanced logistics, 
                driver management, and customer experience features is currently in development. 
                Stay tuned for competitive pricing and exciting features!
              </motion.p>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <img 
              src="/MOCKUP-INSEAT.png" 
              alt="INSEAT Food Ordering App Mockup" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* INSEAT KDS & POS Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Power Your Operations
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Streamline your restaurant operations with our integrated KDS and POS solutions
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* INSEAT KDS */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">INSEAT KDS</h3>
              </div>
              
              <p className="text-gray-600 text-lg mb-8">
                Kitchen Display System - Advanced kitchen management and order tracking
              </p>
              
              <div className="space-y-4">
                {[
                  'Real-time Order Visualization',
                  'Live Order Tracking',
                  'Smart Ticket Prioritization',
                  'Preparation Timeline Management',
                  'Kitchen Performance Analytics',
                  'Multi-Station Order Routing',
                  'Order Status Updates',
                  'Kitchen Communication Hub'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* INSEAT POS */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-500 p-3 rounded-xl mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-gray-900">INSEAT POS</h3>
              </div>
              
              <p className="text-gray-600 text-lg mb-8">
                Point of Sale System - Complete restaurant management and ordering solution
              </p>
              
              <div className="space-y-4">
                {[
                  'Table-side Ordering Interface',
                  'Waiter Call Features',
                  'Bill Request Management',
                  'Order Modification System',
                  'Payment Processing Integration',
                  'Customer Service Tools',
                  'INSEAT-POS Integration',
                  'Staff Communication Hub'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-4"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Contact Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              We'd love to hear from you! Whether you have questions, need support, or want to
              explore partnership opportunities, our team is here to help.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">Ethiopia: +251 94 215 0275</p>
                    <p className="text-gray-600">UAE: +971 50 731 3961</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">contact@achievengine.com</p>
                    <p className="text-gray-600">abenezer.t@achievengine.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 9 AM - 6 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Your Phone Number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="demo">Request Demo</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
