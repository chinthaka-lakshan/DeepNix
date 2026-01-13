import React from 'react';
import { FileText, AlertCircle, Scale, Shield, Users, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
    const sections = [
        {
            icon: FileText,
            title: 'Acceptance of Terms',
            content: [
                'By accessing and using DEEPNIX services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use our services.',
                'We reserve the right to modify these terms at any time. Your continued use of our services following any changes indicates your acceptance of the new terms.'
            ]
        },
        {
            icon: Users,
            title: 'Use of Services',
            content: [
                'You agree to use our services only for lawful purposes and in accordance with these Terms. You are prohibited from using our services to violate any laws, infringe on intellectual property rights, or engage in any harmful activities.',
                'You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.'
            ]
        },
        {
            icon: Shield,
            title: 'Intellectual Property',
            content: [
                'All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are the exclusive property of DEEPNIX and are protected by copyright, trademark, and other intellectual property laws.',
                'You may not reproduce, distribute, modify, or create derivative works of our content without our express written permission.'
            ]
        },
        {
            icon: Scale,
            title: 'Service Delivery',
            content: [
                'We strive to deliver high-quality services and meet agreed-upon deadlines. However, project timelines may be subject to change based on scope modifications, client feedback cycles, and unforeseen circumstances.',
                'Clients are responsible for providing timely feedback and necessary materials. Delays in client response may affect project delivery timelines.'
            ]
        },
        {
            icon: AlertCircle,
            title: 'Limitation of Liability',
            content: [
                'DEEPNIX shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.',
                'Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service in question.'
            ]
        },
        {
            icon: Mail,
            title: 'Contact Information',
            content: [
                'For questions about these Terms of Service, please contact us at deepnixcompany@gmail.com or call +94 71 055 1392.'
            ]
        }
    ];

    return (
        <section id="terms-of-service" className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[80px]" />
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
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <Scale size={14} className="text-purple-400" />
                        <span className="text-xs font-medium text-purple-300 tracking-wide uppercase">Legal</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Terms of Service</span>
                    </h1>
                    <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
                        Last Updated: January 12, 2026
                    </p>
                    <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4">
                        These Terms of Service govern your use of DEEPNIX services. Please read them carefully before using our platform.
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
                                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/10 border border-purple-500/20">
                                    <section.icon className="h-6 w-6 text-purple-400" />
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

                {/* Additional Terms */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 space-y-6"
                >
                    <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
                        <h3 className="text-lg font-bold text-white mb-3">Governing Law</h3>
                        <p className="text-sm sm:text-base text-gray-300">
                            These Terms shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to its conflict of law provisions.
                        </p>
                    </div>

                    <div className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl text-center">
                        <p className="text-sm text-gray-400">
                            By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TermsOfService;
