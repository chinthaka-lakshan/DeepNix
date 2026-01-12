import React from 'react';
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
    const sections = [
        {
            icon: Shield,
            title: 'Information We Collect',
            content: [
                'We collect information that you provide directly to us when you use our services, including your name, email address, phone number, and any project-related information you choose to share.',
                'We also automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and usage data through cookies and similar technologies.'
            ]
        },
        {
            icon: Lock,
            title: 'How We Use Your Information',
            content: [
                'We use the information we collect to provide, maintain, and improve our services, to communicate with you about projects and updates, and to respond to your inquiries.',
                'Your information helps us personalize your experience, send relevant updates about our services, and ensure the security and integrity of our platform.'
            ]
        },
        {
            icon: Eye,
            title: 'Information Sharing',
            content: [
                'We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements.',
                'We may also disclose your information when required by law or to protect our rights, property, or safety.'
            ]
        },
        {
            icon: UserCheck,
            title: 'Your Rights',
            content: [
                'You have the right to access, update, or delete your personal information at any time. You can also object to processing, request data portability, and withdraw consent where applicable.',
                'To exercise these rights, please contact us at deepnixcompany@gmail.com.'
            ]
        },
        {
            icon: FileText,
            title: 'Data Security',
            content: [
                'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
                'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.'
            ]
        },
        {
            icon: Mail,
            title: 'Contact Us',
            content: [
                'If you have any questions about this Privacy Policy, please contact us at deepnixcompany@gmail.com or call us at +94 71 055 1392.'
            ]
        }
    ];

    return (
        <section id="privacy-policy" className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <Shield size={14} className="text-blue-400" />
                        <span className="text-xs font-medium text-blue-300 tracking-wide uppercase">Legal</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Privacy Policy</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                        Last Updated: January 12, 2026
                    </p>
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4">
                        At DEEPNIX, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
                    </p>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-colors duration-300"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 border border-blue-500/20">
                                    <section.icon className="h-6 w-6 text-blue-400" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">{section.title}</h2>
                            </div>
                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                {section.content.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-sm sm:text-base">{paragraph}</p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center"
                >
                    <p className="text-sm text-gray-400">
                        This Privacy Policy is effective as of January 12, 2026, and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
