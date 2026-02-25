import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';

const ReservationsPage = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Products', url: 'https://inseat.achievengine.com/features' },
    { name: 'Reservations', url: 'https://inseat.achievengine.com/reservations' }
  ];

  const faqs = [
    {
      question: 'What is restaurant reservation software?',
      answer: 'Restaurant reservation software allows guests to book tables online and helps restaurants manage bookings, reduce no-shows, and optimize seating capacity. It replaces phone reservations with a 24/7 online booking system.'
    },
    {
      question: 'How does online reservation reduce no-shows?',
      answer: 'Inseat sends automated SMS and email reminders before reservations. Guests can easily confirm, modify, or cancel their booking, which significantly reduces no-show rates by up to 30%.'
    },
    {
      question: 'Can guests book reservations from my website?',
      answer: 'Yes! Inseat provides an embeddable booking widget that you can add to your website. Guests can also book through your Google Business listing, social media, and our direct booking page.'
    },
    {
      question: 'Does Inseat charge per cover or reservation?',
      answer: 'No, Inseat does not charge per cover or per reservation. Our pricing is straightforward with flat monthly plans, so you keep more of your revenue regardless of how many reservations you take.'
    },
    {
      question: 'Can I set custom booking rules and availability?',
      answer: 'Absolutely. Inseat allows you to set custom booking windows, party size limits, turn times, and blocked dates. You can also create special availability for events, holidays, or prix-fixe menus.'
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Online Booking Widget',
      description: 'Embed a customizable booking widget on your website. Guests can book 24/7 without calling.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      title: 'Automated Reminders',
      description: 'Reduce no-shows with automatic SMS and email confirmation and reminder messages.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Deposit & Prepayment',
      description: 'Collect deposits or require prepayment for large parties and special events to secure bookings.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: 'Google Reserve',
      description: 'Accept bookings directly from Google Search and Maps. Guests can reserve with one click.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Custom Booking Rules',
      description: 'Set party size limits, booking windows, turn times, and blackout dates for complete control.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Reservation Analytics',
      description: 'Track booking trends, popular times, and revenue from reservations with detailed reports.'
    }
  ];

  const benefits = [
    { stat: '30%', label: 'Fewer no-shows' },
    { stat: '50%', label: 'More online bookings' },
    { stat: '24/7', label: 'Booking availability' },
    { stat: '$0', label: 'Per cover fees' }
  ];

  return (
    <>
      <SEOHead
        title="Restaurant Reservation Software"
        description="Accept online reservations 24/7 with Inseat. Reduce no-shows with automated reminders, collect deposits, and manage bookings from one dashboard. No per-cover fees."
        keywords="restaurant reservation software, online restaurant booking, table reservation system, restaurant booking widget, reduce no-shows, Google Reserve integration"
        url="https://inseat.achievengine.com/reservations"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        softwareApplication={{
          name: 'Inseat Reservations',
          description: 'Restaurant reservation software with online booking, automated reminders, and deposit collection.',
          features: features.map(f => f.title),
          price: '0',
          priceCurrency: 'USD'
        }}
      />

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 pb-16">
          <div className="container-custom">
            <Breadcrumbs items={breadcrumbs} />

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                  Restaurant Reservation Software
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Accept online reservations around the clock. Reduce no-shows with automated reminders, collect deposits for large parties, and manage all bookings from one simple dashboard.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button type="button" className="btn-primary text-center">
                    Start Free Trial
                  </button>
                  <Link to="/#demo" className="btn-outline text-center">
                    Book a Demo
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
                  alt="Inseat reservation management dashboard"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-secondary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
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
                Reservation Features
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Everything you need to take control of your restaurant bookings
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

        {/* Comparison Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Why Choose Inseat Over Other Platforms?
              </motion.h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-4">Traditional Platforms</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span>$1-3 per seated cover fees</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span>Expensive premium features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span>Long-term contracts required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        <span>Separate tools for waitlist & tables</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">Inseat</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>No per-cover fees ever</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>All features included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Month-to-month flexibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Unified waitlist, tables & reservations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
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
                  className="bg-gray-50 rounded-xl p-6"
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
              Start Accepting Online Reservations Today
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              Join restaurants saving thousands in per-cover fees with Inseat's flat-rate reservation system.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/#demo" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                Get Started Free
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ReservationsPage;
