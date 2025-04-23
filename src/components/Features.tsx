import { motion } from 'framer-motion';

const Features = () => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const features = [
    {
      id: 1,
      title: 'Contactless Ordering',
      description: 'Allow customers to scan a QR code, browse your menu, and place orders directly from their phones without downloading any app.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'bg-primary/10 text-primary'
    },
    {
      id: 2,
      title: 'Real-time Menu Management',
      description: 'Update your menu items, prices, or availability instantly. Changes reflect immediately across all customer devices.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      color: 'bg-secondary/10 text-secondary'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Track sales, popular items, peak hours, and customer preferences with our powerful analytics dashboard.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'bg-accent/10 text-accent'
    },
    {
      id: 4,
      title: 'Instant Payments',
      description: 'Enable customers to pay directly from their phones using various payment methods, reducing wait times and improving table turnover.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 5,
      title: 'Multi-language Support',
      description: 'Cater to international customers with automatic menu translation into multiple languages, enhancing the dining experience.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 6,
      title: 'Kitchen Display System',
      description: 'Orders are automatically sent to your kitchen display system, ensuring efficient preparation and reducing errors.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading">
              Powerful Features For Your Restaurant
            </h2>
            <p className="section-subheading">
              Revolutionize your restaurant operations with our comprehensive QR code ordering system
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="card p-6 h-full border border-gray-100 flex flex-col hover:border-primary/20 transition-all duration-300"
            >
              <div className={`${feature.color} p-3 rounded-lg w-fit mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
              
              <motion.div 
                className="mt-6 flex items-center text-primary font-medium"
                initial={{ opacity: 0.7 }}
                whileHover={{ x: 5, opacity: 1 }}
              >
                <span>Learn more</span>
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 md:mt-24 p-8 md:p-12 bg-gradient-to-r from-secondary to-secondary/90 rounded-xl text-white shadow-xl"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Trusted by restaurants worldwide</h3>
              <p className="text-white/80 max-w-md">Join thousands of restaurants already using our QR code ordering system to boost their business.</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex flex-col"
              >
                <span className="text-3xl md:text-4xl font-bold">500+</span>
                <span className="text-white/80 text-sm">Restaurants</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex flex-col"
              >
                <span className="text-3xl md:text-4xl font-bold">2M+</span>
                <span className="text-white/80 text-sm">Orders</span>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5 }}
                className="flex flex-col"
              >
                <span className="text-3xl md:text-4xl font-bold">32%</span>
                <span className="text-white/80 text-sm">Avg. Revenue Boost</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;

