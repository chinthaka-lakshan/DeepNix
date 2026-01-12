import React from 'react';
import { Linkedin, Github, Mail, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import Harith from '../assets/Team/harith.jpeg';
import Lakshan from '../assets/Team/lakshan.jpeg';
import Rashen from '../assets/Team/rashen.jpg';
import Visal from '../assets/Team/visal.jpeg';
import Dewaka from '../assets/Team/dewaka.jpg';
import Chamika from '../assets/Team/chamika.jpg';
import Ayodya from '../assets/Team/sheru.jpeg';
import Sachintha from '../assets/Team/sachiya.jpeg';
import Tharusha from '../assets/Team/tharusha.jpeg';
import Hasitha from '../assets/Team/hasitha.jpeg';
import Yashodha from '../assets/Team/yshodha.jpeg';
import Piyumal from '../assets/Team/piyumal.jpeg';
import Tharushi from '../assets/Team/tharushi.jpeg';
import Erandi from '../assets/Team/erandi.jpg';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Harith Devinda',
      role: 'Full-Stack Software Engineer',
      image: Harith,
      bio: 'Full-Stack Software Engineer with expertise in UI/UX design, front-end and back-end development, and technical documentation. Experienced in building responsive interfaces, developing APIs, managing databases, and delivering well-structured, maintainable systems.',
      social: { linkedin: '#', github: '#', email: 'alex@deepnix.com' }
    },
    {
      id: 2,
      name: 'Chinthaka Lakshan',
      role: 'Lead Backend Developer',
      image: Lakshan,
      bio: 'Lead Backend Developer specializing in building secure, scalable, and efficient server-side systems. He focuses on API development, database design, and system architecture to deliver reliable digital solutions that support business growth and performance.',
      social: { linkedin: 'https://www.linkedin.com/in/chinthaka-lakshan-97b334263/', github: 'https://github.com/chinthaka-lakshan', email: 'diluklakshan01@gamil.com' }
    },
    {
      id: 3,
      name: 'Sachintha Rashen',
      role: 'Full Stack Developer & AI/ML Engineer',
      image: Rashen,
      bio: 'A strategic architect of digital ecosystems, specializing in full-stack development and applied artificial intelligence. He leverages a meticulous eye for detail and a passion for impactful innovation. His approach is defined by technical leadership and strong collaborative communication.',
      social: { linkedin: '#', github: 'https://github.com/SachinthaRashen', email: 'srashenb@gmail.com' }
    },
    {
      id: 4,
      name: 'Visal Hewage',
      role: 'Fullstack Software Engineer',
      image: Visal,
      bio: 'Fullstack Software Engineer specializing in Python, AI, and the MERN stack (React, Node.js). I combine front-end creativity with backend expertise to design and develop clean, user-centric, and responsive digital products.',
      social: { linkedin: 'https://www.linkedin.com/in/visal-hewage/', github: 'https://github.com/Visal2000', email: 'ayodyasewmini2001@gmail.com' }
    },
    {
      id: 5,
      name: 'Dewaka Pasindu',
      role: 'Full-Stack Software Engineer',
      image: Dewaka,
      bio: 'Full-Stack Software Engineer with expertise in UI/UX design, front-end and back-end development, and technical documentation. Experienced in building responsive interfaces, developing APIs, managing databases, and delivering well-structured, maintainable systems.',
      social: { linkedin: 'https://www.linkedin.com/in/dewaka-pasindu-8b147833a/', github: 'https://github.com/DewakaPasindu', email: 'dewakapasindutc@gmail.com' }
    },
    {
      id: 6,
      name: 'Chamika Herath',
      role: 'Fullstack Engineer',
      image: Chamika,
      bio: 'Fullstack Engineer focused on backend excellence. Expert at architecting RESTful APIs and modernizing tech stacks. Bridges the gap between complex infrastructure and seamless user experiences.',
      social: { linkedin: 'https://www.linkedin.com/in/chamikaherath/', github: 'https://github.com/Chamika-Herath', email: 'dewakapasindutc@gmail.com' }
    },
    {
      id: 7,
      name: 'Ayodya Senevirathne',
      role: 'UI/UX Designer & Frontend Dev',
      image: Ayodya,
      bio: 'UI/UX Designer and Front-End Developer passionate about transforming ideas into intuitive, visually engaging, and responsive digital experiences.',
      social: { linkedin: 'https://www.linkedin.com/in/ayodya-senavirathne-a15839316/', github: 'https://github.com/ayodyasenavirathne', email: 'ayodyasewmini2001@gmail.com' }
    },
    {
      id: 8,
      name: 'Sachintha Jayaweera',
      role: 'Full Stack Developer',
      image: Sachintha,
      bio: 'Full Stack Developer skilled in React.js, Node.js, Spring Boot, Python, and MySQL, with experience building user-centric applications and delivering end-to-end solutions. Passionate about solving real-world problems through clean, scalable technology.',
      social: { linkedin: 'https://www.linkedin.com/in/sachintha-jayaweera-057587320/', github: 'https://github.com/Sachinthajayaweera', email: 'sachinthajayaweera2@gmail.com' }
    },
    {
      id: 9,
      name: 'Tharusha Ishan',
      role: 'Software Engineering Student',
      image: Tharusha,
      bio: 'Software engineering student specializing in full-stack web development. Proficient in React.js, Node.js, Spring Boot, and MySQL.',
      social: { linkedin: 'https://www.linkedin.com/in/tharusha-ishan-5b438431b', github: 'https://github.com/Tharusha-Ishan', email: ' tharu553edu@gmail.com' }
    },
    {
      id: 10,
      name: 'Hasitha Wijewardhana',
      role: 'Full Stack Developer',
      image: Hasitha,
      bio: 'Full stack developer with strong frontend expertise in React JS & Vue JS and Mobile Development technologies like Kotlin, Flutter. etc. Dives deep into real world problems and figures out how to implement modern technologies.',
      social: { linkedin: 'https://lk.linkedin.com/in/hasitha-wijewardhana-72898831b', github: 'https://github.com/HasithaDilshan19', email: 'maria@deepnix.com' }
    },
    {
      id: 11,
      name: 'Yashodha Shyaminda',
      role: 'Strategic Product Leader',
      image: Yashodha,
      bio: 'Strategic product leader driving innovation and user-centered solutions.',
      social: { linkedin: 'https://www.linkedin.com/in/yashodashyaminda', github: '#', email: 'maria@deepnix.com' }
    },
    {
      id: 12,
      name: 'Piyumal Pahasara',
      role: 'Quality Assurance Specialist',
      image: Piyumal,
      bio: 'Quality assurance specialist ensuring flawless software delivery.',
      social: { linkedin: '#', github: '#', email: 'ryan@deepnix.com' }
    },
    {
      id: 13,
      name: 'Tharushi Senevirathne',
      role: 'Software Engineer',
      image: Tharushi,
      bio: 'Software Engineer specializing in UI/UX design and front-end development, with strong documentation skills and a focus on creating clean, intuitive, and user-friendly digital experiences',
      social: { linkedin: 'https://www.linkedin.com/in/tharushi-seneviratne-332b542a2/', github: 'https://github.com/Tharushi0925', email: 'sophie@deepnix.com' }
    },
    {
      id: 99, // Updated ID to force re-render
      name: 'Erandi Alahakoon',
      role: 'Creative Content Expert',
      image: Erandi,
      bio: 'Creative content expert crafting compelling narratives and brand stories.',
      social: { linkedin: '#', github: '#', email: 'sophie@deepnix.com' }
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="team" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <Globe size={14} className="text-blue-400" />
            <span className="text-xs font-medium text-blue-300 tracking-wide uppercase">Our Experts</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Legends.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together creativity, technical excellence,
            and strategic thinking to deliver exceptional results.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group bg-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full"
            >
              {/* Member Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-800">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />

                {/* Floating Socials */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-gray-900/90 to-transparent flex justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {member.social.linkedin && member.social.linkedin !== '#' && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white hover:text-[#0077b5] hover:border-white transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.github && member.social.github !== '#' && (
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg hover:shadow-white/20 hover:-translate-y-1"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white hover:text-red-500 hover:border-white transition-all duration-300 shadow-lg hover:shadow-red-500/20 hover:-translate-y-1"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 flex flex-col flex-grow border-t border-white/5 bg-gradient-to-b from-transparent to-black/20">
                <div className="mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-blue-200/80 mb-3">
                    {member.role}
                  </p>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">Join the team</p>
          <a href="mailto:careers@deepnix.com" className="text-2xl font-bold text-white hover:text-blue-400 underline decoration-blue-500/50 hover:decoration-blue-500 transition-all">
            We are always hiring talented people.
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Team;