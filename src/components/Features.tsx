import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'
import { sanityClient, featuresQuery } from '../lib/sanityClient'

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

  const [cms, setCms] = useState<{ headline?: string; subheadline?: string; items?: any[] } | null>(null)

  useEffect(() => {
    sanityClient.fetch(featuresQuery).then(setCms).catch(() => {})
  }, [])

  const features = cms?.items || [
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
      color: 'bg-primary/10 text-primary'
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
      color: 'bg-primary/10 text-primary'
    }
  ];

  return (
    <section id="features" className="pt-32 pb-8 md:pt-40 md:pb-12 bg-black text-white relative z-0 mb-24 lg:-mt-32"> {/* Balanced pull-up so hero overlaps without covering heading */}
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-heading">
              {cms?.headline || 'Powerful Features For Your Restaurant'}
            </h2>
            <p className="section-subheading text-gray-300">
              {cms?.subheadline || 'Revolutionize your restaurant operations with our comprehensive QR code ordering system'}
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
          {features.map((feature: any) => (
            <motion.div
              key={feature.id || feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className="card p-6 h-full border border-gray-100 flex flex-col hover:border-primary/20 transition-all duration-300"
            >
              <div className={`${feature.color || 'bg-primary/10 text-primary'} p-3 rounded-lg w-fit mb-4`}>
                {/* If CMS icon not provided, render a default */}
                {feature.icon ? (
                  <span className="text-current">{feature.icon}</span>
                ) : (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6a2 2 0 012-2h2a2 2 0 012 2v13m-6 0h6" />
                  </svg>
                )}
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

        {/* Trusted Section - Styled like Loyalty CTA */}
        <motion.div
          className="mt-16 md:mt-20 text-center p-6 bg-primary rounded-lg max-w-4xl mx-auto relative z-10 -mb-32"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} /* Added negative bottom margin */
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h4 className="text-xl md:text-2xl font-bold mb-3 text-white">Trusted by restaurants worldwide</h4>
          <p className="mb-6 text-white max-w-xl mx-auto">Join thousands of restaurants already using our QR code ordering system to boost efficiency and customer satisfaction.</p>
          <button className="bg-white hover:bg-gray-100 text-primary font-medium py-2 px-6 rounded-full transition-colors">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
