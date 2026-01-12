import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const services = [
        { name: 'Web Development', href: '#' },
        { name: 'Mobile App Development', href: '#' },
        { name: 'UI/UX Design', href: '#' },
        { name: 'E-Commerce Solutions', href: '#' },
        { name: 'Digital Marketing', href: '#' },
        { name: 'AI Solutions', href: '#' }
    ];



    const socialLinks = [
        { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/deepnix' },
        { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/@deepnix' },
        {
            name: 'TikTok', icon: () => (
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                >
                    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
            ), url: 'https://tiktok.com/@deepnix'
        }
    ];

    return (
        <footer className="relative bg-[#0a0f1c] pt-16 pb-8 overflow-hidden border-t border-white/5">
            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                {/* Brand */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mb-10"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <img src="/DeepNixx.jpeg" alt="DeepNix" className="h-12 w-auto rounded-xl" />
                        <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">DEEPNIX</span>
                    </div>
                    <p className="text-gray-400 text-center max-w-md leading-relaxed">
                        Transforming businesses through innovative technology solutions. Building the future of digital experiences.
                    </p>
                </motion.div>

                {/* Socials */}
                <div className="flex gap-6 mb-8">
                    {socialLinks.map((social) => {
                        const Icon = social.icon;
                        return (
                            <motion.a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 rounded-2xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        );
                    })}
                </div>

                {/* Copyright & Legal */}
                <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {currentYear} DEEPNIX. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
