import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
              <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
              <path d="M13 13h4" />
              <path d="M13 17h4" />
              <path d="M7 13h.01" />
              <path d="M7 17h.01" />
            </svg>
          </div>
          <span className="text-xl font-bold text-secondary">Inseat</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex space-x-6"
          >
            <a href="#features" className="text-gray-600 hover:text-primary transition-colors">QR Ordering</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">How It Works</a>
            <a href="#loyalty" className="text-gray-600 hover:text-primary transition-colors">Loyalty</a>
            {/* <a href="#kitchen" className="text-gray-600 hover:text-primary transition-colors">Kitchen</a>
            <a href="#staff-tools" className="text-gray-600 hover:text-primary transition-colors">Staff Tools</a> */}
            <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <a href="#about-us" className="text-gray-600 hover:text-primary transition-colors">About Us</a>
            {/* <a href="#testimonials" className="text-gray-600 hover:text-primary transition-colors">Testimonials</a> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#demo" className="btn-primary">Get Started</a>
          </motion.div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-500 hover:text-primary focus:outline-none"
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
          className="md:hidden px-4 py-3 space-y-3 bg-gray-50 mt-2"
        >
          <a href="#features" className="block py-2 text-gray-600 hover:text-primary transition-colors">QR Ordering</a>
          <a href="#how-it-works" className="block py-2 text-gray-600 hover:text-primary transition-colors">How It Works</a>
          <a href="#loyalty" className="block py-2 text-gray-600 hover:text-primary transition-colors">Loyalty</a>
          <a href="#kitchen" className="block py-2 text-gray-600 hover:text-primary transition-colors">Kitchen</a>
          <a href="#staff-tools" className="block py-2 text-gray-600 hover:text-primary transition-colors">Staff Tools</a>
          <a href="#pricing" className="block py-2 text-gray-600 hover:text-primary transition-colors">Pricing</a>
          <a href="#about-us" className="block py-2 text-gray-600 hover:text-primary transition-colors">About Us</a>
          <a href="#testimonials" className="block py-2 text-gray-600 hover:text-primary transition-colors">Testimonials</a>
          <a href="#demo" className="btn-primary inline-block mt-2">Get Started</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;

