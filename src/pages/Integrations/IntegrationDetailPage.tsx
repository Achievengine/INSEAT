import { motion } from 'framer-motion';
import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';
import Breadcrumbs from '../../components/Breadcrumbs';
import { platformIntegrationBySlug } from '../../data/platformIntegrations';

const IntegrationDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const integration = slug ? platformIntegrationBySlug[slug] : null;

  if (!integration) {
    return <Navigate to="/integrations/" replace />;
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://inseat.achievengine.com/' },
    { name: 'Integrations', url: 'https://inseat.achievengine.com/integrations/' },
    { name: integration.name, url: `https://inseat.achievengine.com/integrations/${integration.slug}/` }
  ];

  return (
    <>
      <SEOHead
        title={`${integration.name} Integration`}
        description={integration.description}
        keywords={`${integration.name} integration, inseat ${integration.category.toLowerCase()} integration, hospitality platform integration`}
        url={`https://inseat.achievengine.com/integrations/${integration.slug}/`}
        breadcrumbs={breadcrumbs}
        faqs={integration.faqs}
        softwareApplication={{
          name: `INSEAT + ${integration.name}`,
          description: integration.description,
          features: integration.features,
          price: '0',
          priceCurrency: 'USD'
        }}
      />

      <Navbar />

      <main className="min-h-screen">
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
                  {integration.name}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {integration.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/#demo" className="btn-primary text-center">
                    Request Walkthrough
                  </Link>
                  <Link to="/integrations/" className="btn-outline text-center">
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
                <div className="w-56 h-56 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary tracking-wide">
                    {integration.name
                      .split(' ')
                      .map((part) => part.charAt(0))
                      .join('')
                      .slice(0, 3)}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                What This Integration Covers
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-gray-600"
              >
                Verified capabilities currently available in the platform.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {integration.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              >
                Setup Flow
              </motion.h2>
            </div>

            <div className="max-w-3xl mx-auto">
              {integration.setup.map((item, index) => (
                <motion.div
                  key={item.step}
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
      </main>

      <Footer />
    </>
  );
};

export default IntegrationDetailPage;
