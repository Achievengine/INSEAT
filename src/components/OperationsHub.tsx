import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const OperationsHub = () => {
  // State for active tab
  const [activeTab, setActiveTab] = useState('kitchen');
  
  // Ref for timeline scroll
  const timelineRef = useRef(null);

  // Combined features from both components, reorganized into categories
  const features = {
    kitchen: [
      { title: 'Intelligent Order Display (KDS)', description: 'Real-time order queue with customizable station routing and prep timers.' },
      { title: 'Quality Control System', description: 'Access recipes, plating guides, and verification steps for consistency.' },
      { title: 'Allergen & Modification Alerts', description: 'Clear visual warnings for special requests and dietary needs.' },
      { title: 'Production Forecasting', description: 'AI-assisted recommendations based on historical order patterns.' },
      { title: 'Waste Reduction Tools', description: 'Monitor discarded items to identify patterns and minimize waste.' }
    ],
    staff: [
      { title: 'Runner Notification System', description: 'Instant alerts on mobile devices when orders are ready for delivery, with table details.' },
      { title: 'Waiter Assistance App', description: 'Real-time table status, order management, and customer preference notes on the go.' },
      { title: 'Table Transfer System', description: 'Seamlessly move orders and tabs between tables or servers.' },
      { title: 'Performance Metrics', description: 'Track delivery times and service efficiency for runners and waiters.' },
      { title: 'Multi-Device Coordination', description: 'Intelligent task distribution for efficient teamwork.' }
    ],
    communication: [
      { title: 'Direct Manager Communication', description: 'Request assistance or flag issues instantly from the waiter app.' },
      { title: 'Staff Messaging System', description: 'Secure in-app messaging for team coordination and updates.' },
      { title: 'Shift Handover Notes', description: 'Digital transfer of important information between shifts.' },
      { title: 'Announcement Broadcasts', description: 'Send important updates to all staff or specific departments.' },
      { title: 'Training Materials', description: 'Access to digital training documents and videos.' }
    ]
  };

  // Workflow timeline stages
  const workflowStages = [
    { id: 'order-received', title: 'Order Received', description: 'Customer places order via waiter or digital system', icon: '📝' },
    { id: 'kitchen-prep', title: 'Kitchen Preparation', description: 'Order appears on KDS with cooking instructions', icon: '👨‍🍳' },
    { id: 'quality-check', title: 'Quality Control', description: 'Final verification against standards before serving', icon: '✓' },
    { id: 'runner-alert', title: 'Runner Notification', description: 'Alert sent to available runner for pickup', icon: '🔔' },
    { id: 'delivery', title: 'Order Delivery', description: 'Food delivered to table with order confirmation', icon: '🍽️' },
    { id: 'feedback', title: 'Customer Feedback', description: 'Digital or in-person feedback collection', icon: '⭐' }
  ];

  // Animation variants
  const tabVariants = {
    inactive: { opacity: 0.6, y: 5 },
    active: { opacity: 1, y: 0 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const featureCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="operations-hub" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Operations Hub</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A unified platform for kitchen and staff management, streamlining operations from order to delivery.
          </p>
        </motion.div>

        {/* Interactive Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 md:space-x-4 p-1 bg-gray-100 rounded-lg">
            {['kitchen', 'staff', 'communication'].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md ${activeTab === tab ? 'bg-primary text-white' : 'bg-transparent text-gray-700'}`}
                variants={tabVariants}
                animate={activeTab === tab ? 'active' : 'inactive'}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)} Operations
              </motion.button>
            ))}
          </div>
        </div>

        {/* Split Screen Layout for Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="mb-16"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left side - Visual illustration */}
              <div className="w-full lg:w-1/2 bg-gray-200 rounded-lg p-6 h-96 flex items-center justify-center">
                {activeTab === 'kitchen' && (
                  <div className="text-center">
                    <div className="text-4xl mb-4">👨‍🍳</div>
                    <h3 className="text-xl font-bold mb-2">Kitchen Display System</h3>
                    <p className="text-gray-600">Interactive visualization of the KDS would be shown here</p>
                  </div>
                )}
                {activeTab === 'staff' && (
                  <div className="text-center">
                    <div className="text-4xl mb-4">👩‍🍳</div>
                    <h3 className="text-xl font-bold mb-2">Staff Mobile App</h3>
                    <p className="text-gray-600">Interactive visualization of the staff app would be shown here</p>
                  </div>
                )}
                {activeTab === 'communication' && (
                  <div className="text-center">
                    <div className="text-4xl mb-4">💬</div>
                    <h3 className="text-xl font-bold mb-2">Team Communication</h3>
                    <p className="text-gray-600">Interactive visualization of the messaging system would be shown here</p>
                  </div>
                )}
              </div>

              {/* Right side - Feature cards */}
              <div className="w-full lg:w-1/2">
                <motion.div 
                  variants={staggerContainerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {features[activeTab as keyof typeof features].map((feature: any, index: number) => (
                    <motion.div
                      key={index}
                      variants={featureCardVariants}
                      className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Workflow Timeline */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center mb-8"
          >
            Order Workflow Timeline
          </motion.h3>
          
          <div className="overflow-x-auto" ref={timelineRef}>
            <div className="min-w-max">
              <div className="flex justify-between items-stretch space-x-4 px-4">
                {workflowStages.map((stage, index) => (
                  <motion.div
                    key={stage.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex-1 min-w-[200px] max-w-[250px] relative"
                  >
                    {/* Timeline connector */}
                    {index < workflowStages.length - 1 && (
                      <div className="absolute top-8 right-0 w-full h-1 bg-gray-300">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                          className="h-full bg-primary"
                        />
                      </div>
                    )}
                    
                    {/* Timeline node */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-full mb-4 z-10">
                        <span className="text-2xl">{stage.icon}</span>
                      </div>
                      <h4 className="text-lg font-semibold text-center mb-2">{stage.title}</h4>
                      <p className="text-sm text-gray-600 text-center">{stage.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Data Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Real-Time Operations Dashboard</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Orders in Kitchen', value: '12', color: 'bg-yellow-100 text-yellow-800' },
              { label: 'Avg. Prep Time', value: '8.5 min', color: 'bg-blue-100 text-blue-800' },
              { label: 'Orders Ready', value: '4', color: 'bg-green-100 text-green-800' },
              { label: 'Staff Active', value: '8', color: 'bg-purple-100 text-purple-800' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`${stat.color} rounded-lg p-4 text-center`}
              >
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
              <p className="text-gray-500">Kitchen Performance Chart</p>
            </div>
            <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center">
              <p className="text-gray-500">Staff Activity Timeline</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OperationsHub;

