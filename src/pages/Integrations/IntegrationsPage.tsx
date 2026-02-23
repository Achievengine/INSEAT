import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';

const IntegrationsPage = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Integrations', url: 'https://inseat.achievengine.com/integrations' }
  ];

  const faqs = [
    {
      question: 'What POS systems does Inseat integrate with?',
      answer: 'Inseat integrates with all major POS systems including Toast, Square, Clover, Lightspeed, TouchBistro, and more. We also offer an API for custom integrations.'
    },
    {
      question: 'How do integrations work?',
      answer: 'Most integrations can be set up in minutes through our dashboard. Simply authenticate with your existing account, and Inseat will automatically sync data between systems.'
    },
    {
      question: 'Are integrations included in all plans?',
      answer: 'Payment and core integrations are available in paid subscriptions. Bronze Launch covers core setup, Silver Growth supports advanced multi-provider onboarding, and Custom Enterprise handles tailored needs.'
    },
    {
      question: 'Can I request a new integration?',
      answer: 'Yes! We\'re constantly adding new integrations based on customer feedback. Contact us to request an integration with your preferred tools.'
    }
  ];

  const integrationCategories = [
    {
      title: 'Point of Sale',
      description: 'Sync with your POS for seamless operations',
      integrations: [
        {
          name: 'Toast',
          slug: 'toast',
          logo: '/integrations/toast-logo.png',
          description: 'Sync table status, orders, and guest data with Toast POS.'
        },
        {
          name: 'Square',
          slug: 'square',
          logo: '/integrations/square-logo.png',
          description: 'Connect with Square for payments and table management.'
        },
        {
          name: 'Clover',
          slug: 'clover',
          logo: '/integrations/clover-logo.png',
          description: 'Integrate Clover POS with your waitlist and reservations.'
        },
        {
          name: 'Lightspeed',
          slug: 'lightspeed',
          logo: '/integrations/lightspeed-logo.png',
          description: 'Connect Lightspeed Restaurant for unified operations.'
        }
      ]
    },
    {
      title: 'Discovery & Booking',
      description: 'Get found and accept bookings from multiple channels',
      integrations: [
        {
          name: 'Google Reserve',
          slug: 'google',
          logo: '/integrations/google-logo.png',
          description: 'Accept reservations directly from Google Search and Maps.'
        },
        {
          name: 'Yelp',
          slug: 'yelp',
          logo: '/integrations/yelp-logo.png',
          description: 'Sync your Yelp listings with Inseat reservations.'
        },
        {
          name: 'Facebook',
          slug: 'facebook',
          logo: '/integrations/facebook-logo.png',
          description: 'Let guests book directly from your Facebook page.'
        },
        {
          name: 'Instagram',
          slug: 'instagram',
          logo: '/integrations/instagram-logo.png',
          description: 'Add a Reserve button to your Instagram profile.'
        }
      ]
    },
    {
      title: 'Payments',
      description: 'Collect deposits and process payments securely',
      integrations: [
        {
          name: 'Stripe',
          slug: 'stripe',
          logo: '/integrations/stripe-logo.png',
          description: 'Collect deposits and prepayments for reservations.'
        },
        {
          name: 'MPGS',
          slug: 'mpgs',
          logo: '/integrations/mpgs-logo.png',
          description: 'Mastercard Payment Gateway for secure regional card payments.'
        },
        {
          name: 'Chapa',
          slug: 'chapa',
          logo: '/integrations/chapa-logo.png',
          description: 'Local checkout support for Ethiopia and France.'
        },
        {
          name: 'Telebirr',
          slug: 'telebirr',
          logo: '/integrations/telebirr-logo.png',
          description: 'Ethio Telecom mobile money checkout flow for Ethiopian customers.'
        }
      ]
    },
    {
      title: 'Marketing & CRM',
      description: 'Grow your guest relationships',
      integrations: [
        {
          name: 'Mailchimp',
          slug: 'mailchimp',
          logo: '/integrations/mailchimp-logo.png',
          description: 'Sync guest data to Mailchimp for email marketing.'
        },
        {
          name: 'HubSpot',
          slug: 'hubspot',
          logo: '/integrations/hubspot-logo.png',
          description: 'Connect guest profiles with HubSpot CRM.'
        },
        {
          name: 'Klaviyo',
          slug: 'klaviyo',
          logo: '/integrations/klaviyo-logo.png',
          description: 'Power personalized email campaigns with guest data.'
        }
      ]
    },
    {
      title: 'Accounting',
      description: 'Keep your books in sync',
      integrations: [
        {
          name: 'QuickBooks',
          slug: 'quickbooks',
          logo: '/integrations/quickbooks-logo.png',
          description: 'Sync revenue and transaction data to QuickBooks.'
        },
        {
          name: 'Xero',
          slug: 'xero',
          logo: '/integrations/xero-logo.png',
          description: 'Automatically export data to Xero accounting.'
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Restaurant Software Integrations"
        description="Connect Inseat with your favorite tools. Integrate with Toast, Square, Clover, Google, Stripe, and more. Seamless POS, payment, and marketing integrations."
        keywords="restaurant POS integration, Toast integration, Square restaurant, restaurant software integrations, Google Reserve integration, restaurant CRM integration"
        url="https://inseat.achievengine.com/integrations"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        softwareApplication={{
          name: 'Inseat Integrations',
          description: 'Connect Inseat with your existing restaurant tools for seamless operations.',
          features: integrationCategories.flatMap(cat => cat.integrations.map(i => i.name)),
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
                Connect Your Restaurant Tools
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Inseat integrates with the tools you already use. Sync your POS, accept bookings from Google, and configure Stripe, MPGS, Chapa, or Telebirr for checkout.
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

        {/* Integration Categories */}
        {integrationCategories.map((category, catIndex) => (
          <section
            key={catIndex}
            className={`py-16 ${catIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                  {category.title}
                </h2>
                <p className="text-gray-600">{category.description}</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.integrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={`/integrations/${integration.slug}`}
                      className="block bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all h-full"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-gray-400">
                          {integration.name.charAt(0)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-secondary mb-2">{integration.name}</h3>
                      <p className="text-gray-600 text-sm">{integration.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* API Section */}
        <section className="py-20 bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Build Custom Integrations
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Need something specific? Our REST API gives you full access to build custom integrations with your existing tools and workflows.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Full REST API access',
                    'Webhooks for real-time events',
                    'Comprehensive documentation',
                    'Sandbox environment for testing',
                    'Dedicated developer support'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/#demo" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block">
                  Request API Access
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl p-6 font-mono text-sm"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <pre className="text-gray-300 overflow-x-auto">
{`// Get today's reservations
fetch('https://api.inseat.app/v1/reservations', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => {
  console.log(data.reservations);
});`}
                </pre>
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
              Ready to Connect Your Tools?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto"
            >
              Start your free trial and connect Inseat with your existing restaurant stack in minutes.
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

export default IntegrationsPage;
