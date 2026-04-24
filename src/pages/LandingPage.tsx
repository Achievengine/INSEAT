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

const OFFICIAL_SOCIAL_URLS = [
  'https://x.com/inseat_hq',
  'https://www.instagram.com/inseat_hq/',
  'https://www.linkedin.com/showcase/inseat/'
];

const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Shams Business Center, Al Messaned, Media City Free Zone',
  addressLocality: 'Sharjah',
  addressRegion: 'Sharjah',
  addressCountry: 'AE'
};

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
        title="INSEAT — Hospitality Guest Experience & Operations Platform"
        appendSiteName={false}
        description="INSEAT is the all-in-one guest experience and operations platform for hospitality businesses, helping teams streamline service and deliver better customer experiences."
        keywords="hospitality operations software, guest experience platform, QR code ordering system, table management software, waitlist app, kitchen display system KDS, digital menu, hospitality analytics, reservations, service operations platform, contactless ordering"
        url="https://inseat.achievengine.com/"
        image="https://inseat.achievengine.com/og-image.png"
        ogTitle="INSEAT — Hospitality Operations Platform"
        ogDescription="INSEAT helps hospitality teams streamline service, simplify operations, and deliver better customer experiences across every touchpoint."
        type="website"
        twitterCard="summary_large_image"
        faqs={[
          {
            question: 'How does INSEAT QR code ordering work?',
            answer: 'Guests scan a QR code on their table which opens your digital menu in their browser. They can browse, customize items, place orders, and pay — all without downloading an app. Orders go directly to your kitchen display.'
          },
          {
            question: 'Is there a free plan?',
            answer: 'Yes, INSEAT offers a free forever plan that includes basic QR code ordering and table management for small hospitality teams. No credit card required to start.'
          },
          {
            question: 'Which countries is INSEAT available in?',
            answer: 'INSEAT is currently available in the UAE, Ethiopia, and India, with plans to expand to more regions. We support multiple payment gateways including Stripe, MPGS, Chapa, Telebirr, and Apple Pay.'
          },
          {
            question: 'How long does it take to set up INSEAT?',
            answer: 'Most hospitality teams are up and running in under 5 minutes. You can import your existing menu using our AI OCR feature — just scan your paper menu and INSEAT extracts all items automatically.'
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
            '@id': 'https://inseat.achievengine.com/#software',
            name: 'INSEAT',
            alternateName: ['Inseat', 'INSEAT Hospitality Platform', 'INSEAT Guest Experience Platform'],
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'Hospitality Operations Software',
            operatingSystem: 'Web, iOS, Android',
            description: 'INSEAT is the all-in-one guest experience and operations platform for hospitality businesses, helping teams streamline service, simplify operations, and deliver better customer experiences across every touchpoint.',
            url: 'https://inseat.achievengine.com',
            image: 'https://inseat.achievengine.com/og-image.png',
            screenshot: 'https://inseat.achievengine.com/og-image.png',
            brand: { '@id': 'https://inseat.achievengine.com/#organization' },
            publisher: { '@id': 'https://inseat.achievengine.com/#organization' },
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
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://inseat.achievengine.com/#organization',
            name: 'INSEAT',
            alternateName: ['Inseat', 'INSEAT Hospitality Platform', 'INSEAT Guest Experience Platform'],
            legalName: 'Achievengine',
            url: 'https://inseat.achievengine.com',
            image: 'https://inseat.achievengine.com/og-image.png',
            address: BUSINESS_ADDRESS,
            logo: {
              '@type': 'ImageObject',
              url: 'https://inseat.achievengine.com/logo.png',
              contentUrl: 'https://inseat.achievengine.com/logo.png',
              width: 500,
              height: 500
            },
            description: 'INSEAT is the all-in-one guest experience and operations platform for hospitality businesses, built by Achievengine to streamline service, simplify operations, and improve customer experiences across every touchpoint.',
            foundingDate: '2024',
            email: 'business.inseat@achievengine.com',
            telephone: '+971-50-731-3961',
            contactPoint: [
              {
                '@type': 'ContactPoint',
                telephone: '+971-50-731-3961',
                email: 'business.inseat@achievengine.com',
                contactType: 'sales',
                areaServed: ['AE', 'ET', 'IN'],
                availableLanguage: ['English', 'Arabic', 'Amharic']
              },
              {
                '@type': 'ContactPoint',
                telephone: '+251-94-215-0275',
                email: 'support@achievengine.com',
                contactType: 'customer support',
                areaServed: 'ET',
                availableLanguage: ['English', 'Amharic']
              }
            ],
            sameAs: OFFICIAL_SOCIAL_URLS,
            parentOrganization: {
              '@type': 'Organization',
              name: 'Achievengine',
              url: 'https://achievengine.com'
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://inseat.achievengine.com/#website',
            name: 'INSEAT',
            alternateName: ['Inseat', 'INSEAT Hospitality Platform', 'INSEAT Guest Experience Platform'],
            url: 'https://inseat.achievengine.com',
            publisher: { '@id': 'https://inseat.achievengine.com/#organization' }
          }
        ]}
      />
      <ScrollProgress />
      <Navbar variant="hero-dark" />
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
