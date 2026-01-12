import React, { useState } from 'react';
import { ArrowUpRight, Code2, ExternalLink, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Atharaman from '../assets/atharaman.png';
import ymproducts from '../assets/ymproducts.png';
import CyberMall from '../assets/CyberMall.png';
import autoDocImg from '../assets/autodoc.png';
import Wetez from '../assets/wetez.png';
import travelcompass from '../assets/travelcompass logo.png';

const Portfolio: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const projects = [
    {
      id: 1,
      title: 'Atharaman',
      subtitle: 'Full-Stack Web Platform',
      category: 'Web Development',
      description:
        'A comprehensive platform connecting travelers with local guides. Features real-time location tracking, secure bookings, and an immersive review system.',
      image: Atharaman,
      technologies: ['React', 'Spring Boot', 'MySQL'],
      gradient: 'from-blue-600 to-cyan-500',
      link: 'https://atharamanproject.netlify.app/',
      size: 'large', // Spans 2 columns
      isLogo: true
    },
    {
      id: 2,
      title: 'YM Products',
      subtitle: 'Distribution System',
      category: 'Web Development',
      description:
        'Advanced inventory and distribution management with real-time tracking and analytics throughout the supply chain.',
      image: ymproducts,
      technologies: ['Figma', 'React Native', 'Firebase'],
      gradient: 'from-violet-600 to-purple-500',
      link: 'http://ymproducts.netlify.app/',
      size: 'normal',
      isLogo: true
    },
    {
      id: 3,
      title: 'CyberMall',
      subtitle: 'E-commerce Platform',
      category: 'Web Development',
      description:
        'Multi-vendor marketplace with secure role-based access, order tracking, and seamless payment integration.',
      image: CyberMall,
      technologies: ['React', 'Node.js', 'MySQL'],
      gradient: 'from-emerald-500 to-teal-500',
      link: 'https://cybermallsystem.netlify.app/',
      size: 'normal',
      isLogo: true
    },
    {
      id: 4,
      title: 'AutoDOC',
      subtitle: 'Service Platform',
      category: 'Web Development',
      description:
        'Digital booking and management platform for vehicle maintenance, optimizing workshop productivity.',
      image: autoDocImg,
      technologies: ['React.js', 'Node.js', 'MySQL'],
      gradient: 'from-orange-500 to-red-500',
      link: 'https://sachinthajayaweera.github.io/autodoc/',
      size: 'normal',
      isLogo: true
    },
    {
      id: 5,
      title: 'Travel Compass',
      subtitle: 'AI Travel Planner',
      category: 'AI & Web',
      description:
        'Smart travel planning with AI-driven recommendations for hotels, guides, and personalized packages.',
      image: travelcompass,
      technologies: ['React.js', 'Spring Boot', 'Python'],
      gradient: 'from-pink-500 to-rose-500',
      size: 'normal',
      isLogo: true
    },
    {
      id: 6,
      title: 'WetEZ',
      subtitle: 'Veterinary Management',
      category: 'Web Development',
      description:
        'Streamlined clinic operations and vaccination management system for better pet health outcomes.',
      image: Wetez,
      technologies: ['React.js', 'Node.js', 'MySQL'],
      gradient: 'from-indigo-500 to-blue-500',
      gradient: 'from-indigo-500 to-blue-500',
      size: 'large', // Spans 2 columns at bottom
      isLogo: true
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Create Space for Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <Sparkles size={14} className="text-yellow-400" />
              <span className="text-xs font-medium text-white/80 tracking-wide uppercase">Innovation Showcase</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Selected <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                Works.
              </span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              We don't just build software; we craft digital experiences that redefine industries.
              Explore our diverse portfolio of high-impact solutions.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <button onClick={() => scrollToSection('contact')} className="group flex items-center gap-3 px-8 py-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300">
              <span className="text-left">
                <span className="block text-xs text-gray-400 uppercase tracking-widest">Start Your</span>
                <span className="block text-lg font-bold text-white">Own Project</span>
              </span>
              <span className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={24} />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Immersive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[500px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2rem] overflow-hidden bg-white/5 border border-white/5 ${project.size === 'large' ? 'lg:col-span-2' : ''}`}
            >
              {/* Background Image with Zoom Effect */}
              <div className="absolute inset-0 w-full h-full">
                {/* Special background for logo-type images */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-500 ${project.isLogo ? 'opacity-10 group-hover:opacity-20' : 'opacity-0'}`} />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/40 to-transparent z-10 opacity-90 transition-opacity duration-500 group-hover:opacity-60" />

                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition-transform duration-700 ease-out group-hover:scale-110 group-hover:blur-sm ${project.isLogo ? 'object-contain p-12' : 'object-cover'}`}
                />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 z-20 p-8 md:p-10 flex flex-col justify-end">

                {/* Top Badge */}
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-sm font-medium text-white flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    {project.category}
                  </span>
                </div>

                {/* Link Button (Top Right) */}
                {project.link && (
                  <div className="absolute top-8 right-8 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                )}

                {/* Main Text Content */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-4 font-light">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-500 delay-100 overflow-hidden">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-semibold text-white/80 bg-white/10 rounded-lg border border-white/5 backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
