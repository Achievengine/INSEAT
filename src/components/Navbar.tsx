import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sanityClient, navbarQuery } from '../lib/sanityClient';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navData, setNavData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const defaultNavItems = [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Blog', href: '/blog' }
  ];
  const navItemsRaw = navData?.navigationItems || defaultNavItems;
  const navItems = navItemsRaw.filter((item: { href?: string }) => {
    const href = item?.href || '';
    return !href.includes('/waitlist');
  });

  useEffect(() => {
    sanityClient.fetch(navbarQuery).then(setNavData).catch(() => { });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at the top
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Show navbar when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="sticky top-0 z-50 border-b border-black/10 bg-white/90 py-4 backdrop-blur-md supports-[backdrop-filter]:bg-white/80"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png?v=20260226" alt="Inseat Logo" className="h-11 w-11 object-contain" />
            <span className="text-xl font-bold tracking-tight text-secondary">{navData?.logo || 'INSEAT'}</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            {navItems.map((item: any, index: number) => (
              <a
                key={index}
                href={item.href}
                className="font-medium text-black/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="ml-8"
          >
            <a
              href={navData?.ctaButton?.href || `${import.meta.env.VITE_ADMIN_URL || 'http://localhost:5173'}/register?plan=mid`}
              className="btn-primary"
            >
              {navData?.ctaButton?.text || 'Start Free Trial'}
            </a>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-black/70 hover:text-primary focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-2 space-y-3 rounded-xl border border-black/10 bg-white px-4 py-3 shadow-lg"
        >
          {navItems.map((item: any, index: number) => (
            <a
              key={index}
              href={item.href}
              className="block py-2 font-medium text-black/70 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={navData?.ctaButton?.href || `${import.meta.env.VITE_ADMIN_URL || 'http://localhost:5174'}/register?plan=mid`}
            className="btn-primary inline-block mt-2"
          >
            {navData?.ctaButton?.text || 'Start Free Trial'}
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
