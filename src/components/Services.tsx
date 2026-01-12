import React from 'react';
import { Palette, Code, ShoppingCart, Smartphone, Bot, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const services = [
    {
      icon: Palette,
      title: 'UI/UX Designing',
      description: 'Create stunning, user-centered designs that captivate audiences and drive engagement. Our design philosophy combines aesthetics with functionality to deliver exceptional user experiences.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Responsive Design Systems',
        'Usability Testing',
        'Design System Creation'
      ],
      gradient: 'from-pink-500 to-rose-500',
      shadow: 'group-hover:shadow-pink-500/20'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Build robust, scalable web applications using cutting-edge technologies. From simple websites to complex web platforms, we deliver solutions that perform flawlessly.',
      features: [
        'Frontend Development',
        'Backend Development',
        'Database Design',
        'API Development',
        'Cloud Deployment',
        'Performance Optimization'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      shadow: 'group-hover:shadow-blue-500/20'
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Create powerful online stores with seamless shopping experiences. From storefronts to inventory management, we build e-commerce platforms that drive sales.',
      features: [
        'Custom Storefronts',
        'Payment Gateway Integration',
        'Inventory Management',
        'POS/Cashier System Integration',
        'Headless Commerce',
        'Analytics Dashboard'
      ],
      gradient: 'from-amber-500 to-orange-500',
      shadow: 'group-hover:shadow-amber-500/20'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Build high-performance mobile applications that deliver seamless experiences across iOS and Android. We create apps that users love and businesses rely on.',
      features: [
        'Native iOS & Android',
        'Cross-platform Development',
        'App Store Optimization',
        'API Integration',
        'Push Notifications',
        'Maintenance & Updates'
      ],
      gradient: 'from-purple-500 to-violet-500',
      shadow: 'group-hover:shadow-purple-500/20'
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'Build intelligent autonomous agents that automate workflows, make data-driven decisions, and transform business operations with artificial intelligence.',
      features: [
        'Custom AI Assistants',
        'Workflow Automation',
        'LLM Integration',
        'Multi-agent Systems',
        'Intelligent Chatbots',
        'Continuous Learning'
      ],
      gradient: 'from-indigo-500 to-blue-500',
      shadow: 'group-hover:shadow-indigo-500/20'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Amplify your brand presence and drive targeted traffic through strategic digital marketing campaigns. We help businesses reach their audience and achieve measurable growth.',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Strategy',
        'PPC Advertising',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      gradient: 'from-green-500 to-emerald-500',
      shadow: 'group-hover:shadow-green-500/20'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tight">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to transform your business
            and accelerate your digital journey with cutting-edge expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className={`group relative h-full bg-gray-900/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:border-white/10 ${service.shadow}`}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6 inline-flex relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
                    <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-8 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-gray-500 pl-4 pt-1">+ {service.features.length - 4} more services</li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="mt-auto group/btn flex items-center gap-2 text-white font-medium text-sm hover:gap-3 transition-all duration-300"
                  >
                    <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>Get Started</span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover/btn:text-white transition-colors duration-300" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Partner with DEEPNIX?
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with business understanding to deliver solutions
              that not only work perfectly but also drive real business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Full-Service Expertise',
                description: 'End-to-end solutions from design to AI integration',
                icon: '🔧'
              },
              {
                title: 'Future-Proof Technology',
                description: 'Cutting-edge solutions with long-term scalability',
                icon: '🚀'
              },
              {
                title: 'Proven Methodologies',
                description: 'Agile development with measurable results',
                icon: '📊'
              },
              {
                title: 'Dedicated Partnership',
                description: 'Long-term collaboration with continuous support',
                icon: '🤝'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(31, 41, 55, 0.8)' }}
                className="bg-gray-800/30 rounded-xl p-6 transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;