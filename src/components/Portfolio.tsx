import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Atharaman from '../assets/atharaman.png';
import ymproducts from '../assets/ymproducts.png';
import CyberMall from '../assets/cybermall.png';

const Portfolio: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const projects = [
    {
      id: 1,
      title: 'full-stack web platform',
      category: 'Web Development',
      description: 'A full-stack web platform designed to connect travelers with local guidesand shop owners across Sri Lanka. It features user registration, requesthandling, location viewing, and review management, creating a seamlesstravel coordination experience.',
      image: Atharaman,
      technologies: ['React', 'Spring Boot', 'MYSQL'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'PRODUCTSYM Products Distribution System',
      category: 'Web Development',
      description: 'A distribution management system designed to enhance product deliveryand inventory tracking. The system ensures operational efficiency andcustomer satisfaction through streamlined ordering and trackingfunctionalities.',
      image: ymproducts,
      technologies: ['Figma', 'React Native', 'Firebase', 'WebRTC'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'CyberMall E-commerce Platform',
      category: 'Web Development',
      description: 'An online shopping platform that supports multiple vendors and a widerange of products. Key features include user-friendly navigation, ordertracking, and secure, role-based access control for admins andcustomers.',
      image: CyberMall,
      technologies: ['Google Ads', 'Facebook Ads', 'SEO', 'Analytics'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'Web Development',
      description: 'Modern real estate platform with property listings, virtual tours, mortgage calculator, and advanced search filters.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'SaaS Dashboard Design',
      category: 'UI/UX Design',
      description: 'Intuitive dashboard design for a SaaS platform with complex data visualization, user management, and reporting features.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Sketch', 'Principle', 'Zeplin', 'InVision'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Social Media Growth',
      category: 'Digital Marketing',
      description: 'Comprehensive social media strategy that grew follower base by 500% and increased engagement rates by 250%.',
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Instagram', 'TikTok', 'Content Strategy', 'Influencer Marketing'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="portfolio" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our latest projects and see how we've helped businesses transform 
            their digital presence and achieve remarkable growth.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink className="h-5 w-5 text-white" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-300">
                      <Github className="h-5 w-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className={`inline-block bg-gradient-to-r ${project.gradient} text-white text-xs font-medium px-3 py-1 rounded-full mb-3`}>
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button className="group/btn flex items-center space-x-2 text-blue-400 hover:text-cyan-400 font-medium text-sm transition-colors duration-300">
                  <span>View Project</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-12 border border-blue-500/20">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. Our team is ready to deliver 
            exceptional results that exceed your expectations.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;