import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Component imports
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
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
        title="Inseat — Restaurant Waitlist & Table Management Software"
        appendSiteName={false}
        description="Inseat helps restaurants manage waitlists, reduce wait times, and improve guest experience. Free digital waitlist app with SMS notifications. Try free today."
        url="https://inseat.achievengine.com/"
        ogTitle="Inseat — Restaurant Waitlist & Table Management Software"
        ogDescription="Inseat helps restaurants manage waitlists, reduce wait times, and improve guest experience."
        type="website"
        twitterCard="summary_large_image"
        extraJsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Inseat',
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'RestaurantManagement',
            operatingSystem: 'Web, iOS, Android',
            description:
              'Restaurant waitlist management and table management software with SMS notifications and guest CRM',
            url: 'https://inseat.achievengine.com',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Inseat',
            url: 'https://inseat.achievengine.com',
            description: 'Restaurant operations platform for waitlist and table management',
            sameAs: [
              'https://www.linkedin.com/company/inseat',
              'https://www.facebook.com/inseat'
            ]
          }
        ]}
      />
      <ScrollProgress />
      <Navbar />
      <SubscriptionPromotionModal />
      <main>
        <Hero />
        <Features />
        <LoyaltyEngagement />
        <ReservationCallReceptionist />
        <AdminDashboard />
        <Pricing />
        {/* Temporarily hidden per product direction */}
        {/* <Testimonials /> */}
        {/* <DemoForm /> */}
        <AboutUs />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default LandingPage;
