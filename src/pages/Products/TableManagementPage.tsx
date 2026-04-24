import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';

const TableManagementPage = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Products', url: 'https://inseat.achievengine.com/features/' },
    { name: 'Table Management', url: 'https://inseat.achievengine.com/table-management/' }
  ];

  const faqs = [
    {
      question: 'What is hospitality table management software?',
      answer: 'Hospitality table management software helps you optimize seating, track table status in real time, and maximize venue capacity. It provides a digital floor plan where you can see which tables are occupied, available, or being cleaned.'
    },
    {
      question: 'How does table management improve hospitality efficiency?',
      answer: 'Table management software reduces wait times, improves table turnover rates, and helps staff coordinate seating more efficiently. It also provides analytics to identify peak hours and optimize staffing.'
    },
    {
      question: 'Can I customize my floor plan in Inseat?',
      answer: 'Yes. Inseat allows you to create a custom digital floor plan that matches your venue layout. You can add, remove, and rearrange tables, sections, and bar areas as needed.'
    },
    {
      question: 'Does Inseat support multiple dining areas?',
      answer: 'Absolutely. Inseat supports multiple dining areas including indoor, outdoor, private dining rooms, and bar seating. Each area can have its own floor plan and capacity settings.'
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Interactive Floor Plan',
      description: 'Visual drag-and-drop floor plan that shows real-time table status. Easily see which tables are available, occupied, or being cleaned.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Turn Time Tracking',
      description: 'Monitor how long each party has been seated. Predict when tables will become available for better wait time estimates.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: 'Server Sections',
      description: 'Assign tables to servers and balance workload across your team. Track performance by section and optimize staffing.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Table Combining',
      description: 'Easily combine tables for large parties. The system automatically tracks combined tables and their availability.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Capacity Analytics',
      description: 'Understand your venue capacity utilization. Identify opportunities to seat more guests during peak times.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Access',
      description: 'Access your floor plan from any device. Hosts can manage seating from tablets while servers use their phones.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Hospitality Table Management Software"
        description="Optimize venue seating with Inseat's table management system. Interactive floor plans, real-time status tracking, and capacity analytics. Free trial available."
        keywords="hospitality table management software, venue table management system, floor plan software, seating optimization, table turnover, capacity management"
        url="https://inseat.achievengine.com/table-management/"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        softwareApplication={{
          name: 'Inseat Table Management',
          description: 'Hospitality table management software with interactive floor plans and real-time tracking.',
          features: features.map(f => f.title),
          price: '0',
          priceCurrency: 'USD'
        }}
      />

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-20 pb-16">
          <div className="container-custom">
            <Breadcrumbs items={breadcrumbs} />

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                  Hospitality Table Management System
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Maximize seating efficiency with Inseat's intelligent table management. Interactive floor plans, real-time status updates, and powerful analytics to boost your table turnover.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#demo" className="btn-primary text-center">
                    Start Free Trial
                  </Link>
                  <Link to="/#demo" className="btn-outline text-center">
                    See Demo
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src="/MOCKUP-INSEAT.png"
                  alt="Inseat table management floor plan interface"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { stat: '20%', label: 'More covers per night' },
                { stat: '15min', label: 'Faster table turns' },
                { stat: '95%', label: 'Seating accuracy' },
                { stat: '2hrs', label: 'Staff time saved daily' }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{benefit.stat}</div>
                  <div className="text-gray-300">{benefit.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Powerful Table Management Features
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Everything you need to optimize venue seating and increase revenue
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Frequently Asked Questions
              </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <h3 className="text-lg font-bold text-secondary mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container-custom text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Optimize Your Venue Seating Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              Start your free trial and see how Inseat can help you seat more guests and increase revenue.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/#demo" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                Start Free Trial
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TableManagementPage;
