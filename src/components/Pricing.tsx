import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sanityClient, pricingQuery } from '../lib/sanityClient'

const Pricing = () => {
  // View mode state (calculator or comparison)
  const [viewMode, setViewMode] = useState('pricing'); // 'pricing' or 'comparison'
  
  // Selected plan state
  const [selectedPlan, setSelectedPlan] = useState('pro');
  const [activeOperation, setActiveOperation] = useState('kds');
  
  // Add-ons state
  /* const [selectedAddons, setSelectedAddons] = useState({
    kds: false,
    pos: false
  }); */
  
  const [pricingFromCms, setPricingFromCms] = useState<any | null>(null)

  useEffect(() => {
    sanityClient.fetch(pricingQuery).then(setPricingFromCms).catch(() => {})
  }, [])

  const pricingTiers = pricingFromCms?.tiers || [
    {
      id: 'transaction',
      name: 'Transaction Based',
      monthlyFee: 0,
      transactionFee: 2.5,
      recommended: false,
      description: 'Pay per transaction with a low commission rate.',
      features: [
        { name: 'QR Ordering', included: true },
        { name: 'Loyalty Program', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Digital Menu Management', included: true },
        { name: 'KDS', included: true },
        { name: 'POS', included: true },
        { name: 'Admin Mobile App', included: true },
        { name: 'Waiter Application', included: false },
        { name: 'AI Reservation Assistant', included: false },
        { name: 'AI Recommendations', included: false },
        { name: 'Promotions', included: false },
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      monthlyFee: 399,
      transactionFee: 0,
      recommended: true,
      description: 'Our most popular plan with AI and growth features included.',
      features: [
        { name: 'QR Ordering', included: true },
        { name: 'Loyalty Program', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Digital Menu Management', included: true },
        { name: 'KDS', included: true },
        { name: 'POS', included: true },
        { name: 'Waiter Application', included: true },
        { name: 'Admin Mobile App', included: true },
        { name: 'AI Reservation Assistant', included: true },
        { name: 'AI Recommendations', included: true },
        { name: 'Promotions', included: true },
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      monthlyFee: 'Custom',
      transactionFee: 'Custom',
      recommended: false,
      description: 'All features plus custom integrations, multi-location, and more.',
      features: [
        { name: 'QR Ordering', included: true },
        { name: 'Loyalty Program', included: true },
        { name: 'Basic Analytics', included: true },
        { name: 'Digital Menu Management', included: true },
        { name: 'KDS', included: true },
        { name: 'POS', included: true },
        { name: 'Waiter Application', included: true },
        { name: 'Admin Mobile App', included: true },
        { name: 'AI Reservation Assistant', included: true },
        { name: 'AI Recommendations', included: true },
        { name: 'Promotions', included: true },
      ]
    }
  ]

  // Add-ons pricing
  /* const addons = [
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
  ]; */

  // Toggle add-on selection
  /* const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => ({
      ...prev,
      [addonId]: !prev[addonId]
    }));
  }; */

  // Calculate total monthly cost including add-ons
  const calculateTotalCost = (tier: any) => {
    if (tier.monthlyFee === 'Custom') return 'Custom';
    
    let total = tier.monthlyFee;
    
    // Add selected add-ons based on plan
    /* if (tier.id !== 'enterprise') {
      if (selectedAddons.kds) total += 150;
      if (selectedAddons.pos) total += 150;
    } */
    
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

  /* const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }; */

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

  const operationsSolutions = [
    {
      id: 'kds',
      title: 'INSEAT KDS',
      subtitle: 'Calm, coordinated, and consistent back of house.',
      bullets: [
        'Receive live orders instantly from all channels',
        'Print KOT (Kitchen Order Tickets) automatically for each station',
        'Smart order routing — each item goes to its relevant kitchen station',
        'Prioritize by course or prep time to keep dishes landing together',
        'Clear visual status reduces noise and improves teamwork'
      ]
    },
    {
      id: 'pos',
      title: 'INSEAT POS',
      subtitle: 'Speed and simplicity for the front line.',
      bullets: [
        'Take orders quickly with clear categories, modifiers, and specials',
        'Print pickup slips, manage waiter calls, and handle bill requests',
        'Add reservations and manage table assignments on the fly',
        'Built for the rush: smooth, intuitive flow that keeps lines moving'
      ]
    },
    {
      id: 'waiter',
      title: 'INSEAT Waiter (Mobile)',
      subtitle: 'Streamlined service management at your fingertips.',
      bullets: [
        'Receive and respond to waiter call requests instantly',
        'Control table availability and seating status in real time',
        'View order status across all tables',
        'Coordinate service priorities efficiently'
      ]
    }
  ];

  const operationLanes: Record<string, string[]> = {
    kds: ['Kitchen Queue', 'Station Routing', 'Prep Coordination'],
    pos: ['Order Entry', 'Table Assignment', 'Checkout Flow'],
    waiter: ['Table Calls', 'Order Updates', 'Service Handover']
  };

  const activeOperationData = operationsSolutions.find((item) => item.id === activeOperation) || operationsSolutions[0];
  return (
    <div>
      <section id="pricing" className="py-16 md:py-24 bg-black dark:bg-black text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }} 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              {pricingFromCms?.headline || 'Flexible Pricing Plans'}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              className="text-xl text-white/80 max-w-3xl mx-auto mb-8"
            >
              {pricingFromCms?.subheadline || "Choose the right plan for your restaurant's needs and scale as you grow."}
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
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  {pricingTiers.map((tier, tierIndex) => (
                    <motion.div
                      key={tier.id}
                      variants={cardVariants}
                      whileHover={tier.id !== 'enterprise' ? "hover" : {}}
                      animate={selectedPlan === tier.id ? "selected" : "visible"}
                      transition={{ duration: 0.3 }}
                      onClick={() => tier.id !== 'enterprise' && setSelectedPlan(tier.id)}
                      className={`relative overflow-hidden rounded-3xl border transition-colors ${
                        tier.recommended
                          ? 'border-primary bg-white text-black'
                          : 'border-white/15 bg-black/60 text-white'
                      } ${tier.id !== 'enterprise' ? 'cursor-pointer' : 'cursor-default'} flex min-h-[620px] flex-col shadow-[0_30px_60px_-45px_rgba(0,0,0,0.95)]`}
                    >
                      <div className={`absolute left-0 right-0 top-0 h-1 ${tier.recommended ? 'bg-primary' : 'bg-white/15'}`} />
                      {/* Recommended badge */}
                      {tier.recommended && (
                        <div className="absolute right-0 top-0 rounded-bl-2xl bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white">
                          Recommended
                        </div>
                      )}
                      
                      <div className="flex h-full flex-col p-7 md:p-8">
                        <div className="mb-6">
                          <p className={`mb-3 text-xs font-semibold tracking-[0.2em] ${tier.recommended ? 'text-primary' : 'text-white/50'}`}>
                            PLAN 0{tierIndex + 1}
                          </p>
                          <h3 className={`mb-2 text-3xl font-bold ${tier.recommended ? 'text-black' : 'text-white'}`}>{tier.name}</h3>
                          <p className={`mb-6 text-sm ${tier.recommended ? 'text-black/70' : 'text-white/70'}`}>{tier.description}</p>
                          
                          <div className="mb-8">
                            <div className="flex flex-col space-y-3">
                              <div>
                                <span className="text-4xl font-bold text-primary">
                                  {tier.monthlyFee === 'Custom' ? 'Custom' : `${calculateTotalCost(tier)} AED`}
                                </span>
                                {tier.monthlyFee !== 'Custom' && (
                                  <span className={`ml-1 text-sm ${tier.recommended ? 'text-black/60' : 'text-white/60'}`}>per month</span>
                                )}
                              </div>
                              <div className={`text-base ${tier.recommended ? 'text-black/80' : 'text-white/80'}`}>
                                Transaction Fee:{' '}
                                <span className="text-lg font-semibold text-primary">
                                  {tier.transactionFee === 'Custom' ? 'Custom' : `${tier.transactionFee}%`}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-8 flex-grow space-y-3.5">
                          {tier.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-center justify-between border-b border-dashed pb-2 last:border-0">
                              {(feature as any).addon && tier.id !== 'enterprise' ? (
                                <div className="flex items-center flex-1">
                                  <input
                                    id={`${tier.id}-${feature.name.toLowerCase()}`}
                                    type="checkbox"
                                    checked={false}
                                    onChange={() => {}}
                                    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary mr-3"
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
                                  <span className="text-primary font-semibold ml-auto">+150 AED</span>
                                </div>
                              ) : (
                                <div className="flex items-start">
                                  <svg className={`mr-3 mt-0.5 h-5 w-5 ${feature.included ? 'text-primary' : tier.recommended ? 'text-black/25' : 'text-white/25'}`}
                                      fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                  <span className={`${feature.included ? (tier.recommended ? 'text-black/90' : 'text-white/90') : (tier.recommended ? 'text-black/35' : 'text-white/35')} font-medium`}>
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
                            className={`w-full py-4 px-6 rounded-full font-semibold text-lg transition-colors
                              ${tier.id === 'enterprise' 
                                ? 'bg-white/10 text-white hover:bg-white/20'
                                : tier.recommended
                                  ? 'bg-black text-white hover:bg-black/90'
                                  : 'bg-primary text-white hover:bg-primary/90'}`}
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
                <div className="overflow-x-auto rounded-2xl border border-white/15">
                  <table className="w-full min-w-[768px] overflow-hidden bg-black text-white">
                    <thead>
                      <tr className="bg-white/5">
                        <th className="px-6 py-4 text-left font-medium text-white">Features</th>
                        {pricingTiers.map(tier => (
                          <th key={tier.id} className="py-4 px-6 text-center">
                            <div className={`mb-1 text-xl font-bold ${tier.recommended ? 'text-primary' : 'text-white'}`}>
                              {tier.name}
                            </div>
                            <div className="text-lg font-semibold">
                              {tier.monthlyFee === 'Custom' ? 'Custom' : `${tier.monthlyFee} AED/mo`}
                            </div>
                            <div className="text-sm text-white/65">
                              {tier.transactionFee === 'Custom' ? 'Custom fee' : `${tier.transactionFee}% transaction`}
                            </div>
                            {tier.recommended && (
                              <span className="mt-1 inline-block rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
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
                        <tr key={index} className={index % 2 === 0 ? 'bg-transparent' : 'bg-white/[0.03]'}>
                          <td className="border-t border-white/10 px-6 py-3 font-medium text-white">{feature.name}</td>
                          {pricingTiers.map(tier => (
                            <td key={`${tier.id}-${index}`} className="border-t border-white/10 px-6 py-3 text-center">
                              {tier.features[index]?.included ? (
                                <svg className="w-6 h-6 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                </svg>
                              ) : (
                                <svg className="mx-auto h-6 w-6 text-white/25" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

      {/* INSEAT food ordering app section and mockup are intentionally disabled for now. */}

      {/* INSEAT KDS & POS Section */}
      <section className="relative overflow-hidden bg-black py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(97,6,235,0.2),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(97,6,235,0.15),transparent_40%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="mb-14 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-4xl font-bold text-white md:text-5xl"
            >
              Power Your Operations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-3xl text-xl text-white/72"
            >
              Streamline your restaurant operations with our integrated KDS and POS solutions
            </motion.p>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
            {operationsSolutions.map((solution, index) => {
              const active = activeOperation === solution.id;
              return (
                <button
                  key={solution.id}
                  type="button"
                  onClick={() => setActiveOperation(solution.id)}
                  className={`relative overflow-hidden rounded-2xl border px-5 py-4 text-left transition-colors ${
                    active ? 'border-primary bg-primary/18 text-white' : 'border-white/15 bg-black/55 text-white/82 hover:border-primary/40'
                  }`}
                >
                  <div className="mb-1 text-xs font-semibold tracking-[0.18em] text-primary">{`MODULE 0${index + 1}`}</div>
                  <div className="text-2xl font-bold leading-tight">{solution.title}</div>
                  <div className="mt-1.5 text-sm text-white/72">{solution.subtitle}</div>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={activeOperationData.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
              className="relative overflow-hidden rounded-3xl border border-primary/40 bg-black p-7 text-white md:p-8"
            >
              <div className="absolute right-[-120px] top-[-120px] h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
              <div className="absolute bottom-[-120px] left-[-120px] h-56 w-56 rounded-full bg-primary/18 blur-3xl" />
              <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.08)_95%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.06)_95%)] bg-[size:22px_22px]" />

              <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <p className="text-xs font-semibold tracking-[0.22em] text-primary">ACTIVE MODULE</p>
                  <h3 className="mt-2 text-4xl font-bold">{activeOperationData.title}</h3>
                  <p className="mt-3 max-w-3xl text-white/76">{activeOperationData.subtitle}</p>

                  <div className="mt-7 space-y-2.5">
                    {activeOperationData.bullets.map((feature, index) => (
                      <div key={`${activeOperationData.id}-${feature}`} className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-4">
                        <span className="mt-0.5 inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-primary/60 bg-primary/20 text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-white/88">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold tracking-[0.18em] text-primary">WORKFLOW LANES</p>
                    <div className="mt-3 space-y-2">
                      {(operationLanes[activeOperationData.id] || []).map((lane, laneIndex) => (
                        <div key={`${activeOperationData.id}-${lane}`} className="rounded-xl border border-white/12 bg-black/70 px-3.5 py-3">
                          <p className="text-xs font-semibold tracking-[0.18em] text-primary">{`LANE 0${laneIndex + 1}`}</p>
                          <p className="mt-1.5 text-sm font-semibold text-white">{lane}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-white/15 bg-white/[0.03] p-4">
                    <p className="text-xs font-semibold tracking-[0.18em] text-primary">STACK COVERAGE</p>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      {operationsSolutions.map((solution, index) => (
                        <button
                          key={`coverage-${solution.id}`}
                          type="button"
                          onClick={() => setActiveOperation(solution.id)}
                          className={`rounded-lg border py-2 text-xs font-semibold tracking-[0.16em] transition-colors ${
                            activeOperationData.id === solution.id
                              ? 'border-primary bg-primary text-white'
                              : 'border-white/20 bg-black/45 text-white/70 hover:text-white'
                          }`}
                        >
                          {`0${index + 1}`}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-16 md:py-24 bg-black">
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
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Your Phone Number"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
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
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Tell us about your needs..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
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
