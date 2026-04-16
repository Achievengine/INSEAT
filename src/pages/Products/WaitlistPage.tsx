import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';

const WaitlistPage = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Products', url: 'https://inseat.achievengine.com/features/' },
    { name: 'Waitlist Management', url: 'https://inseat.achievengine.com/waitlist/' }
  ];

  const faqs = [
    {
      question: 'What is restaurant waitlist management software?',
      answer: 'Restaurant waitlist management software is a digital solution that helps restaurants manage guest queues, track wait times, and send automated notifications when tables become available. It replaces paper waitlists with a more efficient, accurate system.'
    },
    {
      question: 'How does Inseat reduce wait times?',
      answer: 'Inseat reduces wait times by providing accurate wait time estimates, optimizing table turnover, and automatically notifying guests via SMS when their table is ready. This reduces no-shows and ensures efficient seating.'
    },
    {
      question: 'Can guests join the waitlist remotely?',
      answer: 'Yes! With Inseat, guests can join your waitlist from anywhere using their smartphone. They simply scan a QR code or visit your online waitlist page to add themselves to the queue.'
    },
    {
      question: 'Is Inseat waitlist software free?',
      answer: 'Inseat offers a free tier that includes basic waitlist management features. Premium features like advanced analytics, CRM integration, and unlimited SMS notifications are available in paid plans.'
    },
    {
      question: 'Does Inseat integrate with POS systems?',
      answer: 'Yes, Inseat integrates with popular POS systems including Toast, Square, Clover, and more. This allows for seamless data flow between your waitlist, reservations, and point-of-sale systems.'
    }
  ];

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Real-Time Queue Management',
      description: 'Track guest arrival and seating in real time. See your entire waitlist at a glance with accurate wait time estimates.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: 'SMS & Email Notifications',
      description: 'Automatically notify guests when their table is ready. Reduce no-shows with timely reminders and updates.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Virtual Waitlist',
      description: 'Let guests join your waitlist remotely via QR code or web link. No more crowded lobbies or frustrated customers.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Analytics & Reporting',
      description: 'Gain insights into average wait times, peak hours, and seating efficiency. Make data-driven decisions.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Guest CRM',
      description: 'Build guest profiles automatically. Track preferences, visit history, and VIP status to personalize service.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'POS Integration',
      description: 'Seamlessly connect with Toast, Square, Clover, and other popular POS systems for unified operations.'
    }
  ];

  const benefits = [
    { stat: '40%', label: 'Reduction in wait times' },
    { stat: '25%', label: 'Fewer no-shows' },
    { stat: '15%', label: 'Increase in table turnover' },
    { stat: '4.8', label: 'Average customer rating' }
  ];

  return (
    <>
      <SEOHead
        title="Restaurant Waitlist Management Software"
        description="Discover Inseat's digital waitlist software: manage queues, reduce wait times and improve guest experience with SMS notifications. Try it free."
        keywords="restaurant waitlist software, digital waitlist, waitlist management system, restaurant queue management, SMS notifications, reduce wait times, virtual waitlist"
        url="https://inseat.achievengine.com/waitlist/"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        howTo={{
          name: 'How to Set Up Digital Waitlist for Your Restaurant',
          description: 'Learn how to implement a digital waitlist system at your restaurant using Inseat.',
          totalTime: 'PT10M',
          steps: [
            { name: 'Guest Joins Waitlist', text: 'Guests can join your waitlist in person, via QR code, or through your website.' },
            { name: 'Real-Time Tracking', text: 'See all guests in the queue with accurate wait time estimates updated in real time.' },
            { name: 'Automatic Notifications', text: 'When a table is ready, guests receive an SMS or email notification automatically.' },
            { name: 'Seamless Seating', text: 'Mark guests as seated and watch your analytics update instantly.' }
          ]
        }}
        softwareApplication={{
          name: 'Inseat Waitlist',
          description: "Inseat's digital waitlist software helps restaurants manage queues, send SMS notifications and reduce wait times.",
          features: [
            'Real-Time Queue Management',
            'SMS & Email Notifications',
            'Virtual Waitlist',
            'Analytics & Reporting',
            'Guest CRM',
            'POS Integration'
          ],
          price: '0',
          priceCurrency: 'USD'
        }}
      />

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-primary/10 pt-20 pb-16">
          <div className="container-custom">
            <Breadcrumbs items={breadcrumbs} />

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                  Digital Waitlist Software for Restaurants
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Manage your queue, notify guests via SMS, and reduce wait times with Inseat's powerful waitlist management system. Say goodbye to paper lists and frustrated customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#demo" className="btn-primary text-center">
                    Start Free Trial
                  </Link>
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
                  alt="Inseat waitlist management dashboard showing real-time queue"
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
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
                  <div className="text-primary-100">{benefit.label}</div>
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
                Key Features
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600 max-w-3xl mx-auto"
              >
                Everything you need to manage your restaurant waitlist efficiently
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

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                How It Works
              </motion.h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {[
                { step: 1, title: 'Guest Joins Waitlist', description: 'Guests can join your waitlist in person, via QR code, or through your website.' },
                { step: 2, title: 'Real-Time Tracking', description: 'See all guests in the queue with accurate wait time estimates updated in real time.' },
                { step: 3, title: 'Automatic Notifications', description: 'When a table is ready, guests receive an SMS or email notification automatically.' },
                { step: 4, title: 'Seamless Seating', description: 'Mark guests as seated and watch your analytics update instantly.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="flex items-start gap-6 mb-8 last:mb-0"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
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
              Ready to Transform Your Restaurant Waitlist?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              Join hundreds of restaurants already using Inseat to streamline their waitlists and delight their guests.
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

export default WaitlistPage;
