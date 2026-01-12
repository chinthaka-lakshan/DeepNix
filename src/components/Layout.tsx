import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundAnimation from './BackgroundAnimation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <BackgroundAnimation />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Updated Logo Section */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center group"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                src="/DeepNixx.jpeg"
                alt="DEEPNIX Logo"
                className="h-12 w-auto rounded-md object-contain transition-transform duration-300"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileHover={{ scale: 1.05, color: '#60A5FA' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 transition-all duration-300"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/90 backdrop-blur-md border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center">
            <motion.img
              whileHover={{ scale: 1.1, rotate: 5 }}
              src="/DeepNixx.jpeg"
              alt="DEEPNIX"
              className="h-10 w-auto rounded-md object-contain transition-transform duration-300"
              onError={(e) => {
                console.error("Logo failed to load. Check if DeepNixx.jpeg is in the public folder.");
              }}
            />
            <p className="text-gray-400 text-sm mt-4">
              © 2025 DEEPNIX. All rights reserved. Transforming businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;