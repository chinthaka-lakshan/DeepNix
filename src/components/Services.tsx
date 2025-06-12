import React from 'react';
import { Palette, Code, TrendingUp, ArrowRight } from 'lucide-react';

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
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      borderGradient: 'border-pink-500/30'
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
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderGradient: 'border-blue-500/30'
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
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      borderGradient: 'border-green-500/30'
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive technology solutions designed to transform your business 
            and accelerate your digital journey with cutting-edge expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br ${service.bgGradient} rounded-2xl p-8 border ${service.borderGradient} hover:border-opacity-60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl`}
              >
                {/* Icon */}
                <div className={`bg-gradient-to-r ${service.gradient} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`group/btn inline-flex items-center space-x-2 bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Why Choose DEEPNIX?
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Expert Team</h4>
              <p className="text-gray-400 text-sm">Skilled professionals with years of industry experience</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Custom Solutions</h4>
              <p className="text-gray-400 text-sm">Tailored approaches for your unique business needs</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Quality Assurance</h4>
              <p className="text-gray-400 text-sm">Rigorous testing and quality control processes</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Ongoing Support</h4>
              <p className="text-gray-400 text-sm">Continuous maintenance and support services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;