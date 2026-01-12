import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'services', label: 'Services' },
        { id: 'portfolio', label: 'Portfolio' },
        { id: 'team', label: 'Team' },
        { id: 'contact', label: 'Contact Us' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Handle background change
            setScrolled(window.scrollY > 50);

            // Handle active section
            const sections = navItems.map(item => item.id);
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'py-4 bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl'
                : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute inset-0 bg-blue-500/20 rounded-xl blur-lg group-hover:bg-blue-500/30 transition-colors"
                                layoutId="logo-glow"
                            />
                            <img
                                src="/DeepNixx.jpeg"
                                alt="DEEPNIX Logo"
                                className="h-10 w-auto rounded-xl relative z-10 shadow-lg"
                            />
                        </div>
                        <span className="text-xl font-bold font-display tracking-wide text-white group-hover:text-blue-400 transition-colors">
                            DEEPNIX
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        <div className="flex items-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item.id
                                        ? 'text-white'
                                        : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-600/25"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0a0f1c]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-2">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 flex justify-between items-center ${activeSection === item.id
                                        ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20'
                                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {item.label}
                                    {activeSection === item.id && (
                                        <motion.div
                                            layoutId="active-dot"
                                            className="w-1.5 h-1.5 rounded-full bg-blue-400"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
