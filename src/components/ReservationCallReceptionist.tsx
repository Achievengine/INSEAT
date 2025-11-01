import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Vapi from '@vapi-ai/web';

// Remove the global window declarations since we're importing directly
interface ReservationForm {
  guestName: string;
  phoneNumber: string;
  email: string;
  numberOfPeople: number;
  preferredDate: string;
  preferredTime: string;
  specialRequests: string;
}

const ReservationCallReceptionist = () => {
  const [activeTab, setActiveTab] = useState<'book' | 'call'>('call');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'connected' | 'ended'>('idle');
  const [formData, setFormData] = useState<ReservationForm>({
    guestName: '',
    phoneNumber: '',
    email: '',
    numberOfPeople: 2,
    preferredDate: '',
    preferredTime: '',
    specialRequests: ''
  });

  const callButtonRef = useRef<HTMLButtonElement>(null);
  const vapiRef = useRef<any>(null); // Store Vapi instance

  // Initialize Vapi instance on component mount
  useEffect(() => {
    const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
    
    if (publicKey && publicKey !== 'your-vapi-public-key') {
      try {
        vapiRef.current = new Vapi(publicKey);
        console.log('✅ Vapi instance initialized');
      } catch (error) {
        console.error('❌ Failed to initialize Vapi:', error);
      }
    } else {
      console.error('❌ Vapi public key not configured');
    }

    // Cleanup on unmount
    return () => {
      if (vapiRef.current) {
        try {
          vapiRef.current.stop();
        } catch (error) {
          console.log('Cleanup error:', error);
        }
      }
    };
  }, []);

  // Your existing animation variants and features data remain the same...
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

  const callFeatures = [
    {
      icon: '🤖',
      title: 'AI-Powered Assistant',
      description: 'Our intelligent virtual agent understands natural language and provides human-like conversation'
    },
    {
      icon: '📅',
      title: 'Real-time Availability',
      description: 'Check table availability instantly and secure your preferred time slot immediately'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your personal information is protected with enterprise-grade security protocols'
    },
    {
      icon: '⚡',
      title: 'Instant Confirmation',
      description: 'Receive immediate booking confirmation via SMS and email after your call'
    },
    {
      icon: '🌍',
      title: 'Multi-language Support',
      description: 'Communicate in your preferred language with our multilingual AI assistant'
    },
    {
      icon: '📞',
      title: '24/7 Availability',
      description: 'Make reservations any time of day or night, even outside restaurant hours'
    }
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation form submitted:', formData);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Reservation request submitted successfully! We will contact you soon to confirm.');
      setIsFormOpen(false);
      setFormData({
        guestName: '',
        phoneNumber: '',
        email: '',
        numberOfPeople: 2,
        preferredDate: '',
        preferredTime: '',
        specialRequests: ''
      });
    } catch (error) {
      alert('Sorry, there was an error submitting your reservation. Please try again.');
    }
  };

  const handleCallReceptionist = async () => {
    setIsCallActive(true);
    setCallStatus('connecting');
    
    try {
      console.log('🚀 Starting Vapi call...');
      
      // Check if Vapi instance is available
      if (!vapiRef.current) {
        throw new Error('Vapi not initialized. Please refresh the page and try again.');
      }
      
      const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
      
      if (!publicKey || publicKey === 'your-vapi-public-key') {
        throw new Error('Vapi public key not configured. Please contact support.');
      }
      
      console.log('🔑 Using Vapi public key:', publicKey.substring(0, 8) + '...');
      
      // Start voice call
      const assistantId = "44be3d7c-7e08-4367-9fc0-2bfb218ae000";
      console.log('📞 Starting voice call with assistant ID:', assistantId);
      
      await vapiRef.current.start(assistantId);
      console.log('✅ Vapi call started successfully');
      setCallStatus('connected');
      
      // Set up event listeners
      vapiRef.current.on('call-end', () => {
        console.log('📞 Call ended');
        setCallStatus('ended');
        setTimeout(() => {
          setIsCallActive(false);
          setCallStatus('idle');
        }, 3000);
      });
      
      vapiRef.current.on('error', (error: any) => {
        console.error('🚨 Vapi error:', error);
        setCallStatus('ended');
        setTimeout(() => {
          setIsCallActive(false);
          setCallStatus('idle');
        }, 2000);
      });
      
      vapiRef.current.on('speech-start', () => {
        console.log('🎤 User started speaking');
      });
      
      vapiRef.current.on('speech-end', () => {
        console.log('🎤 User stopped speaking');
      });
      
    } catch (error: any) {
      console.error('💥 Voice call failed:', error);
      setCallStatus('ended');
      
      let errorMessage = 'Sorry, our AI agent is currently unavailable. ';
      
      if (error.message?.includes('not initialized')) {
        errorMessage += 'Please refresh the page and try again.';
      } else if (error.message?.includes('public key') || error.message?.includes('authentication')) {
        errorMessage += 'Please contact support.';
      } else if (error.message?.includes('microphone') || error.message?.includes('permission')) {
        errorMessage += 'Please allow microphone access and try again.';
      } else {
        errorMessage += 'Please try the online form or call back later.';
      }
      
      alert(errorMessage);
      setTimeout(() => {
        setIsCallActive(false);
        setCallStatus('idle');
      }, 2000);
    }
  };

  const handleFormChange = (field: keyof ReservationForm, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  

  return (
    <section id="reservations" className="relative -mt-0">
      {/* Main section with white background */}
      <div className="bg-white py-14">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }} 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Smart Reservation System
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Book your table instantly with our AI-powered call agent or use our convenient online form.
            </motion.p>
          </div>

          {/* Tab Selection */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 p-1 rounded-full flex border-2 border-gray-200">
                <motion.button
                  onClick={() => setActiveTab('call')}
                  className={`px-6 py-3 rounded-full text-base ${activeTab === 'call' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-800'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📞 AI Call Receptionist
                </motion.button>
                <motion.button
                  onClick={() => setActiveTab('book')}
                  className={`px-6 py-3 rounded-full text-base ${activeTab === 'book' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:text-gray-800'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📋 Online Form
                </motion.button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'book' && (
                <motion.div
                  key="book"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-gray-50 rounded-lg shadow-lg p-6 md:p-8 border border-gray-200 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        📋
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Online Reservation</h3>
                      <p className="text-gray-600">Fill out our simple form and we'll confirm your reservation within minutes</p>
                    </div>
                    
                    <motion.button
                      onClick={() => setIsFormOpen(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors text-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Table Now
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'call' && (
                <motion.div
                  key="call"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-gray-50 rounded-lg shadow-lg p-6 md:p-8 border border-gray-200 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                        {isCallActive ? '🟢' : '📞'}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Call our AI agent</h3>
                      <p className="text-gray-600">
                        {callStatus === 'idle' && 'Instantly book your table with our AI assistant'}
                        {callStatus === 'connecting' && 'Connecting you to our AI agent...'}
                        {callStatus === 'connected' && 'You are now connected! Our AI agent is ready to help you make your reservation.'}
                        {callStatus === 'ended' && 'Call ended. Thank you for using our AI agent service!'}
                      </p>
                    </div>

                    <motion.button
                      ref={callButtonRef}
                      onClick={handleCallReceptionist}
                      disabled={isCallActive}
                      className={`font-medium py-3 px-8 rounded-full transition-colors text-lg ${
                        isCallActive 
                          ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                          : 'bg-green-600 hover:bg-green-700 text-white'
                      }`}
                      whileHover={!isCallActive ? { scale: 1.05 } : {}}
                      whileTap={!isCallActive ? { scale: 0.95 } : {}}
                    >
                      {callStatus === 'idle' && 'Call AI Reservation assistant'}
                      {callStatus === 'connecting' && 'Connecting...'}
                      {callStatus === 'connected' && 'Call in Progress'}
                      {callStatus === 'ended' && 'Call Ended'}
                    </motion.button>

                    {isCallActive && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-4 p-4 bg-green-900/30 rounded-lg border border-green-700"
                      >
                        <div className="flex items-center justify-center space-x-2 text-green-300">
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="w-3 h-3 bg-green-500 rounded-full"
                          />
                          <span>Live Call - Our AI agent is listening...</span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-20"
          >
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Why Choose Our Smart Reservation System?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {callFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-indigo-300 transition-colors"
                >
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          {/* <motion.div 
            className="text-center p-6 bg-gradient-to-r from-indigo-800/70 to-indigo-600/70 dark:from-gray-800 dark:to-gray-700 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-bold mb-2 text-white">Ready to Experience the Future of Reservations?</h4>
            <p className="mb-4 text-gray-200">Join thousands of satisfied customers who love our seamless booking experience!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setActiveTab('call')}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
              >
                Call our AI agent
              </button>
              <button 
                onClick={() => setActiveTab('book')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors"
              >
                Try Online Form
              </button>
            </div>
          </motion.div> */}
        </div>
      </div>

      {/* Reservation Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Make a Reservation</h3>
                  <button
                    onClick={() => setIsFormOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.guestName}
                      onChange={(e) => handleFormChange('guestName', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => handleFormChange('phoneNumber', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Number of People *
                    </label>
                    <select
                      required
                      value={formData.numberOfPeople}
                      onChange={(e) => handleFormChange('numberOfPeople', parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                    >
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.preferredDate}
                        onChange={(e) => handleFormChange('preferredDate', e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Preferred Time *
                      </label>
                      <input
                        type="time"
                        required
                        value={formData.preferredTime}
                        onChange={(e) => handleFormChange('preferredTime', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={formData.specialRequests}
                      onChange={(e) => handleFormChange('specialRequests', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Any dietary restrictions, seating preferences, or special occasions..."
                    />
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsFormOpen(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Submit Reservation
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ReservationCallReceptionist;