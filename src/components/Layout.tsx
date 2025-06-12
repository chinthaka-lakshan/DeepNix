import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 group"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src="/DeepNix.png" 
                  alt="DEEPNIX Logo" 
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                DEEPNIX
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/90 backdrop-blur-md border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <img 
                  src="/DeepNix.png" 
                  alt="DEEPNIX Logo" 
                  className="w-6 h-6 object-contain filter brightness-0 invert"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                DEEPNIX
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 DEEPNIX. All rights reserved. Transforming businesses through innovative technology solutions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;