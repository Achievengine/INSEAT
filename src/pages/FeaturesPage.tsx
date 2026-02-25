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
      question: 'What are the core feature flags supported per restaurant?',
      answer:
        'INSEAT supports tableOrdering, takeout, delivery, reservations, ratings, dynamicPricing, promotions, giftCards, and aggregator flags per restaurant.'
    },
    {
      question: 'Can we create menu items from scanned paper menus?',
      answer:
        'Yes. The AI OCR pipeline extracts categories and items from images, and menu routes support batch creation from OCR output.'
    },
    {
      question: 'How are payment methods controlled?',
      answer:
        'Payment providers are configured per restaurant with Stripe, MPGS, Chapa, Telebirr, and Apple Pay support, plus provider connect/verify workflows.'
    },
    {
      question: 'Do you support website publishing workflow?',
      answer:
        'Yes. The platform includes website-builder config endpoints and menu draft/publish/discard routes for controlled release.'
    }
  ];

  const featureCategories = [
    {
      title: 'Ordering & Service Flows',
      description: 'Core dine-in and off-premise operations',
      link: '/#features',
      features: [
        { name: 'QR Table Ordering', description: 'Table-linked QR flow for dine-in ordering and table context.' },
        { name: 'Takeout + Delivery Channels', description: 'Menu channel controls support dine-in, takeout, and delivery modes.' },
        { name: 'Reservations', description: 'Reservation creation, management, and venue availability checks.' },
        { name: 'Waiter Call Handling', description: 'Guest waiter-call routes for in-restaurant service requests.' },
        { name: 'Payment Flow Modes', description: 'Prepaid, postpaid, and hybrid payment flow modes at restaurant level.' },
        { name: 'Ratings', description: 'Built-in rating service routes for guest feedback capture.' }
      ]
    },
    {
      title: 'Menu Management',
      description: 'Fast menu setup, review, and publishing',
      link: '/#features',
      features: [
        { name: 'AI OCR Menu Import', description: 'Scan paper menus and extract categories/items via AI OCR.' },
        { name: 'Draft-First Publishing', description: 'Track draft counts, review drafts, then publish or discard changes.' },
        { name: 'Website Builder Configuration', description: 'Manage website-builder config and media upload flow per restaurant.' },
        { name: 'Category & Modifier Structure', description: 'Menu, category, subcategory, and modifier routes for full structuring.' },
        { name: 'Batch Item Creation', description: 'Bulk menu creation supports OCR-driven data ingestion.' },
        { name: 'Schedule-Aware Availability', description: 'Menu availability and scheduling controls are supported in models/routes.' },
        { name: 'QR Code Generation', description: 'Restaurant/table QR generation endpoints for guest entry flows.' }
      ]
    },
    {
      title: 'Payments & Checkout',
      description: 'Provider-based payment configuration',
      link: '/integrations',
      features: [
        { name: 'Stripe', description: 'Checkout sessions, subscription checkout, and webhook handling.' },
        { name: 'MPGS', description: 'Hosted session creation, verification, and refund support.' },
        { name: 'Chapa', description: 'Initialization, callback, and verification flow for local payments.' },
        { name: 'Telebirr', description: 'Mobile-money initialization, status polling, and POS retrieval routes.' },
        { name: 'Apple Pay', description: 'Merchant validation + authorization routes with provider toggles.' },
        { name: 'Per-Restaurant Provider Control', description: 'Enable/disable providers and choose primary gateway per restaurant.' }
      ]
    },
    {
      title: 'Growth Controls',
      description: 'Revenue and retention tooling in the platform',
      link: '/#features',
      features: [
        { name: 'Dynamic Pricing', description: 'Dynamic-pricing routes for rule-driven pricing adjustments.' },
        { name: 'Promotions Engine', description: 'Promotion, combo suggestions, and cart validation endpoints.' },
        { name: 'Loyalty Providers', description: 'Loyalty provider mode supports Vista, Inseat, or disabled mode.' },
        { name: 'Authentication Methods', description: 'Regular, Google, Vista, and guest auth methods are configurable.' },
        { name: 'Aggregator Mode', description: 'Aggregator routes expose delivery-enabled restaurant/menu views.' },
        { name: 'Gift Card Toggle', description: 'Gift-card capability is available as a feature-config flag.' }
      ]
    },
    {
      title: 'Operations & Insights',
      description: 'Back-office visibility and control',
      link: '/#features',
      features: [
        { name: 'Analytics Service', description: 'Sales, dashboard, menu performance, and recommendation analytics routes.' },
        { name: 'Inventory Service', description: 'Inventory, recipes, purchase orders, waste tracking, and analytics.' },
        { name: 'Multi-Venue Table Control', description: 'Venue/table endpoints support multi-location operational structure.' },
        { name: 'Printer Configuration', description: 'Restaurant/venue printer configuration for operational printing flows.' },
        { name: 'POS Payment Methods', description: 'Restaurant-level POS payment method toggles (QR and cash/card).' },
        { name: 'Feature Templates', description: 'Template-based initialization for fast onboarding by market/use case.' }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="INSEAT Platform Features"
        description="Explore INSEAT features that are currently implemented: AI menu OCR, draft/publish menu workflow, reservations, dynamic pricing, promotions, loyalty, analytics, inventory, and payment provider configuration."
        keywords="inseat features, restaurant ocr menu import, restaurant feature config, reservations dynamic pricing promotions loyalty"
        url="https://inseat.achievengine.com/features"
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        softwareApplication={{
          name: 'INSEAT',
          description: 'Restaurant operations platform with ordering, payments, menu management, and analytics.',
          features: featureCategories.flatMap((category) => category.features.map((feature) => feature.name)),
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
                Platform Features You Actually Have
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                This page is aligned to current backend capabilities so your product messaging stays accurate to implementation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/#demo" className="btn-primary text-center">
                  Request Walkthrough
                </Link>
                <Link to="/integrations" className="btn-outline text-center">
                  See Integrations
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {featureCategories.map((category, catIndex) => (
          <section
            key={category.title}
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
                    Explore
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
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
      </main>

      <Footer />
    </>
  );
};

export default FeaturesPage;
