import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, Clock, ChevronDown, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const subjectOptions = [
    { value: 'web-development', label: 'Web Development' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'consultation', label: 'General Consultation' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'other', label: 'Other' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsSubjectOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubjectSelect = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
    setIsSubjectOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_2dxhvbq',
        'template_zcayn0h',
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        },
        '6tkcZrRwRKxVbRzMW'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <section id="contact" className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Mail size={14} className="text-blue-400" />
            <span className="text-xs font-medium text-blue-300 tracking-wide uppercase">Contact Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Conversation.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to transform your business? Let's discuss your project and explore
            how we can help you achieve your digital goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-green-400 text-sm">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-8 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <p className="text-red-400 text-sm">Something went wrong. Please try again later.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">
                    Full Name <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-0 transition-all duration-300 outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">
                    Email Address <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-0 transition-all duration-300 outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-0 transition-all duration-300 outline-none"
                  placeholder="Your Company Ltd."
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">
                  Subject <span className="text-blue-500">*</span>
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setIsSubjectOpen(!isSubjectOpen)}
                    className={`w-full px-4 py-3 bg-black/20 border ${isSubjectOpen ? 'border-blue-500/50 bg-blue-500/5' : 'border-white/10'} rounded-xl text-left flex items-center justify-between transition-all duration-300 group hover:border-white/20 outline-none`}
                  >
                    <span className={`${formData.subject ? 'text-white' : 'text-gray-500'}`}>
                      {formData.subject
                        ? subjectOptions.find(opt => opt.value === formData.subject)?.label
                        : 'Select a subject...'}
                    </span>
                    <ChevronDown size={18} className={`text-gray-500 transition-transform duration-300 ${isSubjectOpen ? 'rotate-180 text-blue-400' : 'group-hover:text-gray-300'}`} />
                  </button>

                  <AnimatePresence>
                    {isSubjectOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#1a1f2e] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50 backdrop-blur-xl"
                      >
                        {subjectOptions.map((option) => (
                          <button
                            key={option.value}
                            type="button"
                            onClick={() => handleSubjectSelect(option.value)}
                            className="w-full px-4 py-3 text-left text-gray-300 hover:bg-white/5 hover:text-white transition-colors duration-200 first:pt-4 last:pb-4 border-b border-white/5 last:border-0"
                          >
                            {option.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1.5 ml-1">
                  Message <span className="text-blue-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-black/20 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-blue-500/50 focus:bg-blue-500/5 focus:ring-0 transition-all duration-300 resize-none outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white py-3.5 px-8 rounded-xl font-bold text-lg shadow-lg shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group/btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information & Socials */}
          {/* Contact Stats & Info - Merged into Single Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -5, borderColor: 'rgba(59, 130, 246, 0.4)' }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group lg:flex-1 flex flex-col lg:justify-center transition-colors duration-300"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 text-blue-400 border border-blue-500/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 mb-1 uppercase tracking-widest group-hover:text-blue-400 transition-colors">Email Address</h4>
                  <a href="mailto:deepnixcompany@gmail.com" className="text-base sm:text-lg md:text-xl text-white font-semibold hover:text-blue-300 transition-colors break-all">
                    deepnixcompany@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.4)' }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/5 shadow-xl relative overflow-hidden group lg:flex-1 flex flex-col lg:justify-center transition-colors duration-300"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/2 group-hover:bg-purple-500/20 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex items-center gap-6 relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 text-purple-400 border border-purple-500/20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-8 w-8" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-400 mb-1 uppercase tracking-widest group-hover:text-purple-400 transition-colors">Phone Number</h4>
                  <div className="flex flex-col gap-1">
                    <a href="tel:+94710551392" className="text-base sm:text-lg md:text-xl text-white font-semibold hover:text-purple-300 transition-colors">+94 71 055 1392</a>
                    <a href="tel:+94762690015" className="text-lg text-gray-300 font-medium hover:text-purple-300 transition-colors">+94 76 269 0015</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours Card */}
            <motion.div
              whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.4)' }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/5 shadow-xl relative overflow-hidden group lg:flex-1 flex flex-col lg:justify-center transition-colors duration-300"
            >
              <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-cyan-500/10 rounded-full blur-[50px] -translate-x-1/2 -translate-y-1/2" />
              <div className="flex flex-col w-full relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">Business Hours</h4>
                </div>

                <div className="space-y-4 pl-2">
                  <div className="flex justify-between items-center text-base border-b border-white/5 pb-2 group-hover:border-white/10 transition-colors">
                    <span className="text-gray-400 font-medium group-hover:text-gray-300">Monday - Friday</span>
                    <span className="text-white font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-base border-b border-white/5 pb-2 group-hover:border-white/10 transition-colors">
                    <span className="text-gray-400 font-medium group-hover:text-gray-300">Saturday</span>
                    <span className="text-white font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-base pt-1">
                    <span className="text-gray-400 font-medium group-hover:text-gray-300">Sunday</span>
                    <span className="text-red-400 font-bold px-3 py-1 rounded-md bg-red-400/10 text-xs border border-red-400/20 uppercase tracking-wide shadow-sm">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;