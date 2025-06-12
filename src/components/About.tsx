import React from 'react';
import { Target, Eye, Heart, Award, Users, Rocket } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to transforming businesses through innovative technology solutions that drive real results.'
    },
    {
      icon: Eye,
      title: 'Visionary Approach',
      description: 'We envision a future where technology seamlessly integrates with human needs to create extraordinary experiences.'
    },
    {
      icon: Heart,
      title: 'Passionate Team',
      description: 'Our team is fueled by passion for excellence and dedication to delivering solutions that exceed expectations.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'We maintain the highest standards of quality in every project, ensuring robust and scalable solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Our clients are at the heart of everything we do. We build lasting partnerships based on trust and results.'
    },
    {
      icon: Rocket,
      title: 'Innovation Focus',
      description: 'We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive edge.'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              About DEEPNIX
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of innovation and excellence, DEEPNIX has emerged as a leading force 
            in the technology landscape, delivering transformative digital solutions that shape the future.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  DEEPNIX was born from a vision to bridge the gap between complex technology and 
                  practical business solutions. Our journey began with a small team of passionate 
                  developers and designers who believed that technology should empower, not complicate.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Over the years, we have evolved into a comprehensive technology partner, helping 
                  businesses of all sizes navigate the digital landscape with confidence and achieve 
                  unprecedented growth through strategic technology implementations.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  What sets DEEPNIX apart is our commitment to understanding each client's unique 
                  challenges and crafting bespoke solutions that not only meet current needs but 
                  also position them for future success.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we continue to push boundaries, embrace emerging technologies, and deliver 
                  exceptional results that transform how our clients operate and compete in their markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Values & Principles
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">{value.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  10+
                </div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  2+
                </div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-gray-400">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;