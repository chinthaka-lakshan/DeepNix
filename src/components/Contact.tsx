import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, Send, Facebook, Youtube, MessageCircle } from 'lucide-react';

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
      formData,
      '6tkcZrRwRKxVbRzMW'
    );
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    });
  } catch (error) {
    console.error('EmailJS Error:', error);
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/deepnix',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/deepnix',
      color: 'hover:bg-red-600'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/1234567890',
      color: 'hover:bg-green-600'
    },
    {
      name: 'TikTok',
      icon: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      url: 'https://tiktok.com/@deepnix',
      color: 'hover:bg-black'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss your project and explore 
            how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
                <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="web-development">Web Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="consultation">General Consultation</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Email Address</h4>
                    {/* <p className="text-gray-400">contact@deepnix.com</p> */}
                    <p className="text-gray-400">deepnixcompany@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Phone Number</h4>
                    <p className="text-gray-400">+94 70 667 6265</p>
                    <p className="text-gray-400">+94 76 422 6093</p>
                  </div>
                </div>

                {/* <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">Office Location</h4>
                    <p className="text-gray-400">123 Innovation Street</p>
                    <p className="text-gray-400">Tech Valley, CA 94000</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
              <p className="text-gray-400 mb-6">
                Stay connected with us on social media for the latest updates and insights.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-3 bg-gray-700/50 hover:bg-gray-600/50 ${social.color} p-4 rounded-lg transition-all duration-300 transform hover:scale-105`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                      <span className="text-white font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday</span>
                  <span className="text-white">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;