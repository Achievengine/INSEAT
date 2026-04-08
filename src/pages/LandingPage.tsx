import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Component imports
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import Features from '../components/Features';
import LoyaltyEngagement from '../components/LoyaltyEngagement';
import ReservationCallReceptionist from '../components/ReservationCallReceptionist';
import AdminDashboard from '../components/AdminDashboard';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import AboutUs from '../components/AboutUs';
import ScrollToTop from '../components/ScrollToTop';
import SEOHead from '../components/SEOHead';
import SubscriptionPromotionModal from '../components/SubscriptionPromotionModal';
import SocialProof from '../components/SocialProof';
import DemoForm from '../components/DemoForm';

// Styles
import '../App.css';

// ScrollToTop component for the scroll progress indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

function LandingPage() {
  // Implement smooth scrolling
  useEffect(() => {
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.href.includes(window.location.origin)) {
        e.preventDefault();
        const targetId = anchor.hash.slice(1);
        const element = document.getElementById(targetId);

        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

          // Update URL without refreshing
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleHashClick);

    return () => {
      document.removeEventListener('click', handleHashClick);
    };
  }, []);

  return (
    <>
      <SEOHead
        title="INSEAT — Restaurant Operations Software | QR Ordering, Table Management & Waitlist"
        appendSiteName={false}
        description="INSEAT is the all-in-one restaurant operations platform. QR code ordering, table management, waitlist with SMS, kitchen display, staff tools, and analytics. Free plan available. Used by 500+ restaurants in UAE, Ethiopia & India."
        keywords="restaurant management software, QR code ordering system, table management software, restaurant waitlist app, kitchen display system KDS, restaurant POS, digital menu, restaurant analytics, restaurant reservations, staff scheduling restaurant, restaurant operations platform, contactless ordering"
        url="https://inseat.achievengine.com/"
        image="https://inseat.achievengine.com/og-image.png"
        ogTitle="INSEAT — Restaurant Operations, Simplified"
        ogDescription="Replace five disconnected tools with one platform. QR ordering, table management, waitlist, kitchen display, and analytics for modern restaurants. Free plan available."
        type="website"
        twitterCard="summary_large_image"
        faqs={[
          {
            question: 'How does INSEAT QR code ordering work?',
            answer: 'Guests scan a QR code on their table which opens your digital menu in their browser. They can browse, customize items, place orders, and pay — all without downloading an app. Orders go directly to your kitchen display.'
          },
          {
            question: 'Is there a free plan?',
            answer: 'Yes, INSEAT offers a free forever plan that includes basic QR code ordering and table management for small restaurants. No credit card required to start.'
          },
          {
            question: 'Which countries is INSEAT available in?',
            answer: 'INSEAT is currently available in the UAE, Ethiopia, and India, with plans to expand to more regions. We support multiple payment gateways including Stripe, MPGS, Chapa, Telebirr, and Apple Pay.'
          },
          {
            question: 'How long does it take to set up INSEAT?',
            answer: 'Most restaurants are up and running in under 5 minutes. You can import your existing menu using our AI OCR feature — just scan your paper menu and INSEAT extracts all items automatically.'
          },
          {
            question: 'Does INSEAT work with my existing POS?',
            answer: 'INSEAT is a standalone platform that can replace or complement your existing POS. It includes QR ordering, table management, kitchen display, staff tools, and analytics all in one system.'
          }
        ]}
        extraJsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'INSEAT',
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'Restaurant Management Software',
            operatingSystem: 'Web, iOS, Android',
            description: 'All-in-one restaurant operations platform with QR code ordering, table management, waitlist with SMS notifications, kitchen display system, staff management, and analytics dashboard.',
            url: 'https://inseat.achievengine.com',
            screenshot: 'https://inseat.achievengine.com/og-image.png',
            featureList: [
              'QR Code Table Ordering',
              'AI OCR Menu Import',
              'Table Management with Floor Plans',
              'Waitlist with SMS Notifications',
              'Kitchen Display System (KDS)',
              'Reservation Management',
              'Dynamic Pricing & Promotions',
              'Staff Management & Scheduling',
              'Analytics Dashboard',
              'Multi-Payment Gateway Support'
            ],
            offers: {
              '@type': 'AggregateOffer',
              lowPrice: '0',
              highPrice: '99',
              priceCurrency: 'USD',
              offerCount: '3'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '120',
              bestRating: '5',
              worstRating: '1'
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'INSEAT',
            url: 'https://inseat.achievengine.com',
            logo: 'https://inseat.achievengine.com/logo.png',
            description: 'Restaurant operations platform powering 500+ restaurants across UAE, Ethiopia, and India.',
            foundingDate: '2024',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+971-50-731-3961',
                contactType: 'sales',
                areaServed: ['AE', 'ET', 'IN'],
                availableLanguage: ['English', 'Arabic', 'Amharic']
              },
              {
                '@type': 'ContactPoint',
                telephone: '+251-94-215-0275',
                contactType: 'customer service',
                areaServed: 'ET',
                availableLanguage: ['English', 'Amharic']
              }
            ],
            sameAs: [
              'https://www.linkedin.com/company/inseat',
              'https://www.facebook.com/inseat',
              'https://twitter.com/inseat'
            ],
            parentOrganization: {
              '@type': 'Organization',
              name: 'Achievengine',
              url: 'https://achievengine.com'
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'INSEAT',
            url: 'https://inseat.achievengine.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://inseat.achievengine.com/blog?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        ]}
      />
      <ScrollProgress />
      <Navbar />
      <SubscriptionPromotionModal />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <LoyaltyEngagement />
        <ReservationCallReceptionist />
        <AdminDashboard />
        <SocialProof />
        <Pricing />
        <DemoForm />
        <AboutUs />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default LandingPage;
