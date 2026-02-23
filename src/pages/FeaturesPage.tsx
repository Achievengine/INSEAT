import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

const FeaturesPage = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Features', url: 'https://inseat.achievengine.com/features' }
  ];

  const faqs = [
    {
      question: 'What features are included in Inseat?',
      answer: 'Inseat includes digital waitlist management, table management with floor plans, online reservations, SMS notifications, guest CRM, analytics & reporting, and integrations with popular POS systems. All features are included in every plan.'
    },
    {
      question: 'Can I use Inseat on multiple devices?',
      answer: 'Yes! Inseat works on any device with a web browser including tablets, phones, and computers. Your team can access the system simultaneously from different devices.'
    },
    {
      question: 'Does Inseat work offline?',
      answer: 'Inseat requires an internet connection for real-time updates and SMS notifications. However, we offer offline mode for basic operations that syncs when connection is restored.'
    },
    {
      question: 'How long does it take to set up Inseat?',
      answer: 'Most restaurants are up and running within 15 minutes. Our intuitive setup wizard guides you through creating your floor plan, configuring settings, and training your team.'
    }
  ];

  const featureCategories = [
    {
      title: 'Waitlist Management',
      description: 'Eliminate paper lists and manage your queue digitally',
      link: '/waitlist',
      features: [
        { name: 'Real-Time Queue Tracking', description: 'See all waiting guests with accurate wait time estimates' },
        { name: 'Virtual Waitlist', description: 'Let guests join remotely via QR code or web link' },
        { name: 'SMS Notifications', description: 'Automatically notify guests when their table is ready' },
        { name: 'Party Size Management', description: 'Optimize seating based on party sizes and table availability' },
        { name: 'Wait Time Analytics', description: 'Track and improve average wait times over time' },
        { name: 'Guest Notes', description: 'Add special requests, allergies, and preferences to each party' }
      ]
    },
    {
      title: 'Table Management',
      description: 'Visualize and optimize your restaurant floor',
      link: '/table-management',
      features: [
        { name: 'Interactive Floor Plan', description: 'Drag-and-drop table layout that mirrors your restaurant' },
        { name: 'Real-Time Status', description: 'See occupied, available, and cleaning tables at a glance' },
        { name: 'Turn Time Tracking', description: 'Monitor how long each party has been seated' },
        { name: 'Server Sections', description: 'Assign tables to servers and balance workloads' },
        { name: 'Table Combining', description: 'Easily merge tables for large parties' },
        { name: 'Multiple Areas', description: 'Manage indoor, outdoor, bar, and private dining separately' }
      ]
    },
    {
      title: 'Reservations',
      description: 'Accept bookings 24/7 without per-cover fees',
      link: '/reservations',
      features: [
        { name: 'Online Booking Widget', description: 'Embed on your website for 24/7 reservations' },
        { name: 'Automated Reminders', description: 'Reduce no-shows with SMS and email confirmations' },
        { name: 'Deposit Collection', description: 'Secure large party bookings with prepayments' },
        { name: 'Google Reserve', description: 'Accept reservations directly from Google Search' },
        { name: 'Custom Booking Rules', description: 'Set party limits, turn times, and blackout dates' },
        { name: 'Modification Handling', description: 'Let guests easily reschedule or cancel online' }
      ]
    },
    {
      title: 'Guest CRM',
      description: 'Build lasting relationships with your guests',
      link: '/features',
      features: [
        { name: 'Automatic Profiles', description: 'Guest profiles created from every visit and reservation' },
        { name: 'Visit History', description: 'Track frequency, spending, and dining preferences' },
        { name: 'VIP Tagging', description: 'Identify and prioritize your best customers' },
        { name: 'Dietary Preferences', description: 'Remember allergies and dietary restrictions' },
        { name: 'Special Occasions', description: 'Track birthdays and anniversaries for personalization' },
        { name: 'Guest Notes', description: 'Staff can add notes visible to the whole team' }
      ]
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to grow your business',
      link: '/features',
      features: [
        { name: 'Real-Time Dashboard', description: 'Live metrics on covers, wait times, and revenue' },
        { name: 'Historical Reports', description: 'Analyze trends over days, weeks, and months' },
        { name: 'Peak Hour Analysis', description: 'Identify your busiest times to optimize staffing' },
        { name: 'Table Turnover Rates', description: 'Measure and improve seating efficiency' },
        { name: 'No-Show Tracking', description: 'Monitor and reduce reservation no-shows' },
        { name: 'Export & Integrations', description: 'Export data or connect to your analytics tools' }
      ]
    },
    {
      title: 'Integrations',
      description: 'Connect with your existing restaurant tools',
      link: '/integrations',
      features: [
        { name: 'POS Systems', description: 'Integrate with Toast, Square, Clover, and more' },
        { name: 'Google Business', description: 'Sync with Google for Reserve and reviews' },
        { name: 'Payment Processing', description: 'Connect Stripe, MPGS, Chapa, and Telebirr for checkout and prepayments' },
        { name: 'Marketing Tools', description: 'Export guest data to email marketing platforms' },
        { name: 'Accounting Software', description: 'Sync revenue data with QuickBooks and Xero' },
        { name: 'API Access', description: 'Build custom integrations with our REST API' }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Restaurant Software Features"
        description="Explore Inseat's complete restaurant management features: waitlist management, table tracking, online reservations, guest CRM, analytics, and POS integrations. All features included."
        keywords="restaurant software features, waitlist management features, table management software, restaurant CRM, restaurant analytics, POS integration"
        url="https://inseat.achievengine.com/features"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        softwareApplication={{
          name: 'Inseat',
          description: 'Complete restaurant management software with waitlist, table management, reservations, and guest CRM.',
          features: featureCategories.flatMap(cat => cat.features.map(f => f.name)),
          price: '0',
          priceCurrency: 'USD'
        }}
      />

      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-indigo-50 pt-20 pb-16">
          <div className="container-custom">
            <Breadcrumbs items={breadcrumbs} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto mt-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Everything You Need to Run Your Restaurant
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From waitlist to reservations, table management to guest CRM - Inseat gives you all the tools to streamline operations and delight guests. No per-cover fees, no hidden costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#demo" className="btn-primary text-center">
                  Start Free Trial
                </Link>
                <Link to="/pricing" className="btn-outline text-center">
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Feature Categories */}
        {featureCategories.map((category, catIndex) => (
          <section
            key={catIndex}
            className={`py-20 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-custom">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-600">{category.description}</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={category.link}
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1 mt-4 md:mt-0"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-1">{feature.name}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

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
              Ready to Transform Your Restaurant?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              Get access to all features with our free trial. No credit card required.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/#demo" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                Start Free Trial
              </Link>
              <Link to="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-block">
                View Pricing
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FeaturesPage;
