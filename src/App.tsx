import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Component imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features'; // Focus on QR Ordering here
import LoyaltyEngagement from './components/LoyaltyEngagement';
// Removed KitchenManagement and StaffTools imports
import ManagementTools from './components/ManagementTools'; // Import the new combined component
import AdminDashboard from './components/AdminDashboard';
import DemoForm from './components/DemoForm';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

// Styles
import './App.css';

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

// HowItWorks section
const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Create Your Account',
      description: 'Sign up and provide your restaurant details to get started with Inseat.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Upload Your Menu',
      description: 'Import your existing menu or create a new one with our easy-to-use menu builder.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Generate QR Codes',
      description: 'Create custom QR codes for your restaurant tables that link directly to your digital menu.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Customers Scan & Order',
      description: 'Customers scan the QR code, browse your menu, and place orders directly from their phones.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="section-heading"
          >
            How Inseat Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subheading"
          >
            Get your restaurant set up with contactless ordering in just a few simple steps
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 md:mb-16 last:mb-0"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <div className="flex-grow">
                <div className="flex items-start md:items-center justify-between flex-col md:flex-row">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2 flex items-center">
                      <span className="text-primary font-normal mr-2">Step {step.id}:</span> {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block h-16 border-l-2 border-dashed border-gray-300 ml-6 my-4"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonial section
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Inseat has completely transformed how we handle orders. Our staff can focus on service instead of taking orders, and our customers love the convenience!",
      author: "Maria Rodriguez",
      role: "Owner, La Boca Restaurant",
      avatar: "https://randomuser.me/api/portraits/women/48.jpg"
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
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-subheading"
          >
            Hear from restaurant owners who have transformed their business with Inseat
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
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function App() {
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
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <LoyaltyEngagement />
        {/* Replaced KitchenManagement and StaffTools with the new component */}
        <ManagementTools /> 
        <AdminDashboard />
        <Pricing />
        <Testimonials />
        <DemoForm />
        <ContactUs />
        <AboutUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
