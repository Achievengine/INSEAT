import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';

type IntegrationData = {
  name: string;
  tagline: string;
  description: string;
  category: string;
  features: string[];
  benefits: { stat: string; label: string }[];
  howItWorks: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

const integrations: Record<string, IntegrationData> = {
  toast: {
    name: 'Toast',
    tagline: 'Connect Inseat with Toast POS',
    description: 'Sync your Toast POS with Inseat for seamless table management, real-time order status, and unified guest data across your restaurant.',
    category: 'Point of Sale',
    features: [
      'Real-time table status sync',
      'Order notification alerts',
      'Guest check integration',
      'Server assignment sync',
      'Revenue tracking',
      'Menu item visibility'
    ],
    benefits: [
      { stat: '30%', label: 'Faster table turns' },
      { stat: '100%', label: 'Data accuracy' },
      { stat: '2min', label: 'Setup time' },
      { stat: '24/7', label: 'Auto sync' }
    ],
    howItWorks: [
      { step: 1, title: 'Connect Your Toast Account', description: 'Authorize Inseat to access your Toast POS through secure OAuth.' },
      { step: 2, title: 'Map Your Floor Plan', description: 'Match your Inseat tables with Toast table numbers for accurate syncing.' },
      { step: 3, title: 'Start Syncing', description: 'Table status, orders, and guest data sync automatically in real-time.' }
    ],
    faqs: [
      { question: 'How long does the Toast integration take to set up?', answer: 'Most restaurants complete the Toast integration in under 5 minutes. Simply authorize your Toast account and map your tables.' },
      { question: 'Does the integration work with Toast Go?', answer: 'Yes! The integration works with all Toast products including Toast Go handheld devices.' },
      { question: 'What data syncs between Toast and Inseat?', answer: 'Table status, order information, server assignments, and guest check data sync in real-time between both systems.' }
    ]
  },
  square: {
    name: 'Square',
    tagline: 'Connect Inseat with Square',
    description: 'Integrate Square for Restaurants with Inseat to streamline payments, sync table data, and create a seamless dining experience.',
    category: 'Point of Sale',
    features: [
      'Table status synchronization',
      'Payment processing',
      'Deposit collection',
      'Customer data sync',
      'Order notifications',
      'Revenue reporting'
    ],
    benefits: [
      { stat: '25%', label: 'Faster checkout' },
      { stat: '100%', label: 'Payment security' },
      { stat: '5min', label: 'Setup time' },
      { stat: '$0', label: 'Extra fees' }
    ],
    howItWorks: [
      { step: 1, title: 'Connect Square Account', description: 'Link your Square account through our secure integration portal.' },
      { step: 2, title: 'Configure Settings', description: 'Set up table mapping and payment preferences.' },
      { step: 3, title: 'Go Live', description: 'Start accepting payments and syncing data automatically.' }
    ],
    faqs: [
      { question: 'Can I use Square for reservation deposits?', answer: 'Yes! You can collect deposits and prepayments for reservations directly through Square.' },
      { question: 'Does it work with Square for Restaurants?', answer: 'The integration is optimized for Square for Restaurants but also works with standard Square POS.' },
      { question: 'Are there additional transaction fees?', answer: 'No additional fees from Inseat. Standard Square processing rates apply.' }
    ]
  },
  google: {
    name: 'Google Reserve',
    tagline: 'Accept Bookings from Google',
    description: 'Let guests book reservations directly from Google Search and Google Maps with Reserve with Google integration.',
    category: 'Discovery & Booking',
    features: [
      'Book from Google Search',
      'Book from Google Maps',
      'Real-time availability',
      'Instant confirmation',
      'Review integration',
      'Business profile sync'
    ],
    benefits: [
      { stat: '40%', label: 'More bookings' },
      { stat: '1-click', label: 'Booking process' },
      { stat: '24/7', label: 'Availability' },
      { stat: 'Free', label: 'No booking fees' }
    ],
    howItWorks: [
      { step: 1, title: 'Verify Google Business', description: 'Ensure your Google Business Profile is verified and up to date.' },
      { step: 2, title: 'Enable Reserve', description: 'Activate Reserve with Google through your Inseat dashboard.' },
      { step: 3, title: 'Accept Bookings', description: 'Guests can now book directly from Google Search and Maps.' }
    ],
    faqs: [
      { question: 'Is Reserve with Google free?', answer: 'Yes! Google does not charge any fees for Reserve with Google bookings.' },
      { question: 'How long until my listing is active?', answer: 'After enabling the integration, your Reserve button typically appears within 24-48 hours.' },
      { question: 'Can I control availability on Google?', answer: 'Yes, availability syncs automatically from Inseat. Any blocked times or booking rules apply to Google reservations.' }
    ]
  },
  stripe: {
    name: 'Stripe',
    tagline: 'Collect Payments with Stripe',
    description: 'Use Stripe to collect deposits, prepayments, and no-show fees for reservations securely and seamlessly.',
    category: 'Payments',
    features: [
      'Deposit collection',
      'Prepayment processing',
      'No-show fee charging',
      'Secure card storage',
      'Automatic refunds',
      'Payment analytics'
    ],
    benefits: [
      { stat: '30%', label: 'Fewer no-shows' },
      { stat: '256-bit', label: 'Encryption' },
      { stat: '135+', label: 'Currencies' },
      { stat: 'Instant', label: 'Processing' }
    ],
    howItWorks: [
      { step: 1, title: 'Connect Stripe', description: 'Link your Stripe account or create a new one during setup.' },
      { step: 2, title: 'Set Payment Rules', description: 'Configure deposit amounts, cancellation policies, and no-show fees.' },
      { step: 3, title: 'Collect Payments', description: 'Guests securely enter payment info when booking. You\'re protected.' }
    ],
    faqs: [
      { question: 'What are Stripe\'s processing fees?', answer: 'Standard Stripe processing fees apply (typically 2.9% + $0.30 per transaction). Inseat does not add any additional fees.' },
      { question: 'Can guests pay with Apple Pay or Google Pay?', answer: 'Yes! Stripe supports Apple Pay, Google Pay, and all major credit cards.' },
      { question: 'How do refunds work?', answer: 'You can issue full or partial refunds directly from your Inseat dashboard. Refunds are processed through Stripe automatically.' }
    ]
  },
  mpgs: {
    name: 'MPGS',
    tagline: 'Process Card Payments with MPGS',
    description: 'Use Mastercard Payment Gateway Services (MPGS) to process secure online card payments for your INSEAT storefront and ordering checkout.',
    category: 'Payments',
    features: [
      'Hosted checkout session support',
      'Secure card authorization',
      'Order-linked payment references',
      'Payment verification callback flow',
      'Gateway status checks',
      'Regional card network support'
    ],
    benefits: [
      { stat: 'PCI', label: 'Compliant flow' },
      { stat: '3DS', label: 'Card security' },
      { stat: 'Fast', label: 'Checkout redirect' },
      { stat: 'Live', label: 'Status verification' }
    ],
    howItWorks: [
      { step: 1, title: 'Enable MPGS', description: 'Enable MPGS in Website Builder Payments and set it as an available gateway.' },
      { step: 2, title: 'Connect Credentials', description: 'Save merchant credentials in the INSEAT admin onboarding panel.' },
      { step: 3, title: 'Verify & Publish', description: 'Run provider verification and publish your storefront checkout.' }
    ],
    faqs: [
      { question: 'Do I need an MPGS merchant account first?', answer: 'Yes, MPGS requires an active merchant account before onboarding in INSEAT.' },
      { question: 'Can I keep Stripe and MPGS both enabled?', answer: 'Yes. You can enable multiple gateways and set a primary default.' },
      { question: 'Can MPGS be used for full online order checkout?', answer: 'Yes, MPGS is supported in the ordering checkout flow.' }
    ]
  },
  chapa: {
    name: 'Chapa',
    tagline: 'Accept Local Checkout with Chapa',
    description: 'Connect Chapa for local payment experiences and verify transactions before marking orders as paid.',
    category: 'Payments',
    features: [
      'Hosted Chapa checkout redirect',
      'Transaction reference tracking',
      'Server-side payment verification',
      'Webhook-ready callback support',
      'Order-linked payment records',
      'Regional processing support'
    ],
    benefits: [
      { stat: 'Local', label: 'Payment fit' },
      { stat: 'Verified', label: 'Server checks' },
      { stat: 'Fast', label: 'Onboarding' },
      { stat: 'Secure', label: 'Backend validation' }
    ],
    howItWorks: [
      { step: 1, title: 'Enable Chapa', description: 'Turn on Chapa from Website Builder Payments.' },
      { step: 2, title: 'Connect API Credentials', description: 'Save your Chapa API key and complete connect + verify in admin.' },
      { step: 3, title: 'Go Live', description: 'Publish your site and let customers pay through Chapa checkout.' }
    ],
    faqs: [
      { question: 'How is a Chapa payment verified?', answer: 'INSEAT verifies the transaction status from the backend before completing payment confirmation.' },
      { question: 'Can Chapa run alongside other gateways?', answer: 'Yes. Chapa can be enabled together with Stripe, MPGS, and Telebirr.' },
      { question: 'Where do I configure Chapa credentials?', answer: 'Use INSEAT Admin > Website Builder > Payments for connect and verify.' }
    ]
  },
  telebirr: {
    name: 'Telebirr',
    tagline: 'Enable Telebirr Mobile Money Checkout',
    description: 'Integrate Telebirr so Ethiopian customers can complete mobile money payments from your restaurant storefront.',
    category: 'Payments',
    features: [
      'Telebirr checkout URL initialization',
      'Merchant order reference tracking',
      'Backend payment status polling',
      'Webhook endpoint support',
      'Order payment status updates',
      'Mobile money customer flow'
    ],
    benefits: [
      { stat: 'ET', label: 'Local coverage' },
      { stat: 'Mobile', label: 'Friendly checkout' },
      { stat: 'Realtime', label: 'Status updates' },
      { stat: 'Secure', label: 'Server verification' }
    ],
    howItWorks: [
      { step: 1, title: 'Enable Telebirr', description: 'Enable Telebirr in Website Builder Payments.' },
      { step: 2, title: 'Connect Merchant Credentials', description: 'Add Telebirr Fabric/App/Merchant keys and run verify in INSEAT admin.' },
      { step: 3, title: 'Publish Checkout', description: 'Customers are redirected to Telebirr and return to INSEAT success verification.' }
    ],
    faqs: [
      { question: 'What credentials are required for Telebirr?', answer: 'Fabric app ID, app secret, merchant app ID, merchant code, and signing private key.' },
      { question: 'How does INSEAT confirm payment?', answer: 'INSEAT checks Telebirr status using the merchant order reference and updates the linked order.' },
      { question: 'Can I use Telebirr with other gateways?', answer: 'Yes. Telebirr can be configured as one of multiple enabled providers.' }
    ]
  },
  clover: {
    name: 'Clover',
    tagline: 'Connect Inseat with Clover',
    description: 'Integrate Clover POS with Inseat for unified table management, payment processing, and guest experience.',
    category: 'Point of Sale',
    features: [
      'Table status sync',
      'Order integration',
      'Payment processing',
      'Staff management',
      'Customer data sync',
      'Reporting integration'
    ],
    benefits: [
      { stat: '20%', label: 'Faster service' },
      { stat: '100%', label: 'Data sync' },
      { stat: '5min', label: 'Setup' },
      { stat: '24/7', label: 'Support' }
    ],
    howItWorks: [
      { step: 1, title: 'Install Inseat App', description: 'Download the Inseat app from the Clover App Market.' },
      { step: 2, title: 'Authorize Access', description: 'Grant Inseat access to your Clover account.' },
      { step: 3, title: 'Configure & Sync', description: 'Map tables and start syncing data between systems.' }
    ],
    faqs: [
      { question: 'Which Clover devices are supported?', answer: 'Inseat works with Clover Station, Mini, Flex, and all other Clover hardware.' },
      { question: 'Can I manage tables from my Clover device?', answer: 'Yes! View and update table status directly from your Clover device.' },
      { question: 'Is there a separate subscription for the Clover app?', answer: 'No, the Clover integration is included in your Inseat subscription.' }
    ]
  }
};

const IntegrationDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const integration = slug ? integrations[slug] : null;

  if (!integration) {
    return <Navigate to="/integrations" replace />;
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Integrations', url: 'https://inseat.achievengine.com/integrations' },
    { name: integration.name, url: `https://inseat.achievengine.com/integrations/${slug}` }
  ];

  return (
    <>
      <SEOHead
        title={`${integration.name} Integration for Restaurants`}
        description={integration.description}
        keywords={`${integration.name} restaurant integration, ${integration.name} POS, Inseat ${integration.name}, restaurant ${integration.category.toLowerCase()}`}
        url={`https://inseat.achievengine.com/integrations/${slug}`}
        breadcrumbs={breadcrumbs}
        faqs={integration.faqs}
        softwareApplication={{
          name: `Inseat + ${integration.name}`,
          description: integration.description,
          features: integration.features,
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

            <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                  {integration.category}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                  {integration.tagline}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {integration.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#demo" className="btn-primary text-center">
                    Start Free Trial
                  </Link>
                  <Link to="/integrations" className="btn-outline text-center">
                    View All Integrations
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="w-48 h-48 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-300">
                    {integration.name.charAt(0)}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-primary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {integration.benefits.map((benefit, index) => (
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
                Integration Features
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600"
              >
                What you get when you connect {integration.name} with Inseat
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {integration.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
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

            <div className="max-w-3xl mx-auto">
              {integration.howItWorks.map((item, index) => (
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
              {integration.faqs.map((faq, index) => (
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
              Ready to Connect {integration.name}?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              Start your free trial and connect {integration.name} with Inseat in minutes.
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

export default IntegrationDetailPage;
