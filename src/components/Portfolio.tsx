import React from 'react';
import { ArrowRight } from 'lucide-react';
import Atharaman from '../assets/atharaman.png';
import ymproducts from '../assets/ymproducts.png';
import CyberMall from '../assets/CyberMall.png';
import autoDocImg from '../assets/autoDocImg.png';

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
      title: 'Full-Stack Web Platform',
      category: 'Web Development',
      description:
        'A full-stack web platform designed to connect travelers with local guides and shop owners across Sri Lanka. Features include user registration, request handling, location viewing, and review management.',
      image: Atharaman,
      technologies: ['React', 'Spring Boot', 'MySQL'],
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://atharamanproject.netlify.app/',
    },
    {
      id: 2,
      title: 'YM Products Distribution System',
      category: 'Web Development',
      description:
        'A distribution management system designed to enhance product delivery and inventory tracking, ensuring operational efficiency and customer satisfaction.',
      image: ymproducts,
      technologies: ['Figma', 'React Native', 'Firebase', 'WebRTC'],
      gradient: 'from-blue-500 to-cyan-500',
      link: 'http://ymproducts.netlify.app/',
    },
    {
      id: 3,
      title: 'CyberMall E-commerce Platform',
      category: 'Web Development',
      description:
        'An online shopping platform supporting multiple vendors with user-friendly navigation, order tracking, and secure role-based access.',
      image: CyberMall,
      technologies: ['React', 'Node.js', 'MySQL'],
      gradient: 'from-blue-500 to-cyan-500',
      link: 'https://cybermallsystem.netlify.app/',
    },
    {
      id: 4,
      title: 'AutoDOC',
      category: 'Web Development',
      description:
        'A digital platform for booking, tracking, and managing vehicle maintenance and repair services. Improves customer experience and workshop productivity.',
      image: autoDocImg,
      technologies: ['React.js', 'Node.js', 'MySQL'],
      gradient: 'from-orange-500 to-red-500',
      link: 'https://sachinthajayaweera.github.io/autodoc/',
    },
    {
      id: 5,
      title: 'Travel Compass',
      category: 'Web Development',
      description:
        'Travel Compass, a smart and user-friendly travel planning platform. Our goal is to help travelers easily plan trips based on their budget, while also giving hotels, guides, and vehicle rental services a space to connect with users. The most exciting part is Our platform uses AI to recommend the best travel packages based on each traveler’s needs.',
      image:
        'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Spring Boot','Python', 'MySQL'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 6,
      title: 'Social Media Growth',
      category: 'Digital Marketing',
      description:
        'A social media strategy that increased follower base by 500% and engagement rates by 250%.',
      image:
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Instagram', 'TikTok', 'SEO', 'Analytics'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our latest projects and see how we transform ideas into powerful digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className={`inline-block bg-gradient-to-r ${project.gradient} text-white text-xs px-3 py-1 rounded-full mb-3`}
                >
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-cyan-400 transition"
                  >
                    View Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-12 rounded-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-8">
            Let’s build something amazing together.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 rounded-lg text-white hover:scale-105 transition"
          >
            Start Your Project
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
