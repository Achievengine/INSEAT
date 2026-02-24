import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { sanityClient } from '../lib/sanityClient';

// Component imports
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import LoyaltyEngagement from '../components/LoyaltyEngagement';
import ReservationCallReceptionist from '../components/ReservationCallReceptionist';
import AdminDashboard from '../components/AdminDashboard';
import DemoForm from '../components/DemoForm';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import AboutUs from '../components/AboutUs';
import VisualEditingOverlay from '../components/VisualEditingOverlay';
import ScrollToTop from '../components/ScrollToTop';

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

// Testimonial section
const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState<any>(null);

  useEffect(() => {
    const testimonialsQuery = `*[_type == "testimonialsSection"][0]{
      headline,
      subheadline,
      testimonials[]{
        quote,
        author,
        role,
        company,
        "avatarUrl": avatar.asset->url
      }
    }`;
    sanityClient.fetch(testimonialsQuery).then(setTestimonialsData).catch(() => { });
  }, []);

  const testimonials = testimonialsData?.testimonials || [
    {
      id: 1,
      quote: "Inseat has completely transformed how we handle orders. Our staff can focus on service instead of taking orders, and our customers love the convenience!",
      author: "Daniel",
      role: "Owner, Take Juice",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
      id: 2,
      quote: "Since implementing Inseat, we've seen a 28% increase in average order value and a significant reduction in wait times. It's been a game-changer for our business.",
      author: "James Chen",
      role: "Manager, Fusion Bistro",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "The analytics dashboard helps us understand customer preferences and optimize our menu. Plus, the contactless ordering is perfect for today's health-conscious diners.",
      author: "Samantha Lee",
      role: "Director, Urban Plate",
      avatar: "https://randomuser.me/api/portraits/women/24.jpg"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            {testimonialsData?.headline || 'What Our Customers Say'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subheading"
          >
            {testimonialsData?.subheadline || 'Hear from restaurant owners who have transformed their business with Inseat'}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card p-6 flex flex-col h-full"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 flex-grow italic">{testimonial.quote}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatarUrl || testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
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
    <VisualEditingOverlay>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LoyaltyEngagement />
        <ReservationCallReceptionist />
        <AdminDashboard />
        <Pricing />
        <Testimonials />
        <DemoForm />
        <AboutUs />
      </main>
      <Footer />
      <ScrollToTop />
    </VisualEditingOverlay>
  );
}

export default LandingPage;
