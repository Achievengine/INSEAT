import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { platformIntegrations } from '../../data/platformIntegrations';

const IntegrationsPage = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Integrations', url: 'https://inseat.achievengine.com/integrations' }
  ];

  const faqs = [
    {
      question: 'What integrations are currently available?',
      answer:
        'INSEAT currently includes payment gateway integrations (Stripe, MPGS, Chapa, Telebirr, Apple Pay) and delivery-app integration through aggregator endpoints.'
    },
    {
      question: 'Do all restaurants use the same integrations?',
      answer:
        'No. Integrations are enabled per restaurant, so each restaurant can run a different payment and delivery-app setup.'
    },
    {
      question: 'Can providers be verified before going live?',
      answer:
        'Yes. Payment provider connect and verification routes are available in the onboarding flow.'
    },
    {
      question: 'Can delivery apps read delivery-ready menus?',
      answer:
        'Yes. Aggregator routes expose delivery-enabled restaurants and menus for connected delivery channels.'
    }
  ];

  const categories = ['Payments', 'Delivery Apps'] as const;

  return (
    <>
      <SEOHead
        title="INSEAT Integrations"
        description="Explore INSEAT integrations that are available today: payment gateways and delivery-app integration through aggregator APIs."
        keywords="inseat integrations, stripe mpgs chapa telebirr apple pay, delivery apps integration, aggregator api"
        url="https://inseat.achievengine.com/integrations"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        softwareApplication={{
          name: 'INSEAT Integrations',
          description: 'Production integrations available in the INSEAT platform.',
          features: platformIntegrations.map((integration) => integration.name),
          price: '0',
          priceCurrency: 'USD'
        }}
      />

      <Navbar />

      <main className="min-h-screen">
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
                Integrations Built Into INSEAT
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                This page only lists integrations that are currently supported in the backend and used in live platform flows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#demo" className="btn-primary text-center">
                  Request Walkthrough
                </Link>
                <Link to="/features" className="btn-outline text-center">
                  View Platform Features
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {categories.map((category, catIndex) => {
          const integrations = platformIntegrations.filter((integration) => integration.category === category);
          if (integrations.length === 0) return null;

          return (
            <section
              key={category}
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
                    {category}
                  </h2>
                  <p className="text-gray-600">
                    {category === 'Payments' && 'Payment gateways and wallet flows configured per restaurant.'}
                    {category === 'Delivery Apps' && 'Delivery-channel integrations powered by aggregator endpoints.'}
                  </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {integrations.map((integration, index) => (
                    <motion.div
                      key={integration.slug}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={`/integrations/${integration.slug}`}
                        className="block bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all h-full"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          <span className="text-sm font-bold text-primary tracking-wide">
                            {integration.name
                              .split(' ')
                              .map((part) => part.charAt(0))
                              .join('')
                              .slice(0, 2)}
                          </span>
                        </div>
                        <h3 className="font-semibold text-secondary mb-2">{integration.name}</h3>
                        <p className="text-gray-600 text-sm">{integration.summary}</p>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="py-20 bg-secondary">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  API-First Platform
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  INSEAT exposes integration routes for payment processing and delivery-app channels.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    '/api/payments/create-checkout-session',
                    '/api/payments/mpgs/create-session',
                    '/api/payments/telebirr/initialize',
                    '/api/aggregator/restaurants',
                    '/api/aggregator/restaurants/:id/menu'
                  ].map((endpoint, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-200">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <code className="text-sm bg-white/10 px-2 py-1 rounded">{endpoint}</code>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Implementation Notes</h3>
                  <div className="space-y-4">
                    {[
                      'Multiple payment gateways can be enabled per restaurant.',
                      'Provider onboarding includes connect + verification workflow.',
                      'Delivery channels are exposed via aggregator endpoints.',
                      'Aggregator integration is controlled per restaurant.'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-gray-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default IntegrationsPage;
