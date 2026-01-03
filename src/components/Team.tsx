import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import Harith from '../assets/Team/harith.jpeg';
import Lakshan from '../assets/Team/lakshan.jpeg';
import Dewaka from '../assets/Team/dewaka.jpg';
import Rashen from '../assets/Team/rashen.jpg';
import Ayodya from '../assets/Team/sheru.jpeg';
import sachintha from '../assets/Team/sachiya.jpeg';
import Tharusha from '../assets/Team/tharusha.jpeg';
import Hasitha from '../assets/Team/hasitha.jpeg';
import Piyumal from '../assets/Team/piyumal.jpeg';
import Tharushi from '../assets/Team/tharushi.jpeg';
import Visal from '../assets/Team/visal.jpeg';
import Chamika from '../assets/Team/chamika.jpg';
import Erandi from '../assets/Team/erandi.jpg';
import Yashodha from '../assets/Team/yshodha.jpeg';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Harith Devinda',
      role: 'Business Strategist & Marketing Leader',
      image: Harith,
      bio: 'Full-Stack Software Engineer with expertise in UI/UX design, front-end and back-end development, and technical documentation. Experienced in building responsive interfaces, developing APIs, managing databases, and delivering well-structured, maintainable systems. .',
      skills: ['Strategic Planning', 'Team Leadership', 'Business Development'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'alex@deepnix.com'
      }
    },
    {
      id: 2,
      name: 'Chinthaka Lakshan',
      role: 'Lead Backend Developer',
      image: Lakshan,
      bio: 'Lead Backend Developer specializing in building secure, scalable, and efficient server-side systems. He focuses on API development, database design, and system architecture to deliver reliable digital solutions that support business growth and performance.',
      skills: ['Backend Development', 'Database Design', 'Project Management', 'API Development'],
      social: {
        linkedin: 'https://www.linkedin.com/in/chinthaka-lakshan-97b334263/',
        github: 'https://github.com/chinthaka-lakshan',
        email: 'diluklakshan01@gamil.com'
      }
    },
    {
      id: 3,
      name: 'Sachintha Rashen',
      role: 'Full Stack Developer & AI/ML Engineer',
      image: Rashen,
      bio: 'A strategic architect of digital ecosystems, specializing in full-stack development and applied artificial intelligence. He leverages a meticulous eye for detail and a passion for impactful innovation. His approach is defined by technical leadership and strong collaborative communication.',
      skills: ['Full-Stack Architecture', 'AI Engineering', 'System Design', 'Technical Leadership'],
      social: {
        linkedin: '#',
        github: 'https://github.com/SachinthaRashen',
        email: 'srashenb@gmail.com'
      }
    },
    {
      id: 4,
      name: 'Visal Hewage',
      role: 'Frontend Developer',
      image: Visal,
      bio: 'Fullstack Software Engineer specializing in Python, AI, and the MERN stack (React, Node.js). I combine front-end creativity with backend expertise to design and develop clean, user-centric, and responsive digital products.',
      skills: ['React', 'TypeScript', 'CSS Animations'],
      social: {
        linkedin: 'https://www.linkedin.com/in/visal-hewage/',
        github: 'https://github.com/Visal2000',
        email: 'ayodyasewmini2001@gmail.com'
      }
    },
    {
      id: 5,
      name: 'Dewaka Pasindu',
      role: 'Senior Full-Stack Developer',
      image: Dewaka,
      bio: 'Full-Stack Software Engineer with expertise in UI/UX design, front-end and back-end development, and technical documentation. Experienced in building responsive interfaces, developing APIs, managing databases, and delivering well-structured, maintainable systems. ',
      skills: ['React', 'Node.js', 'Cloud Architecture'],
      social: {
        linkedin: 'https://www.linkedin.com/in/dewaka-pasindu-8b147833a/',
        github: 'https://github.com/DewakaPasindu',
        email: 'dewakapasindutc@gmail.com'
      }
    },
    {
      id: 6,
      name: 'Chamika Herath',
      role: 'Senior Full-Stack Developer',
      image: Chamika,
      bio: 'Fullstack Engineer focused on backend excellence. Expert at architecting RESTful APIs and modernizing tech stacks. Bridges the gap between complex infrastructure and seamless user experiences.',
      skills: ['React', 'Node.js', 'Cloud Architecture'],
      social: {
        linkedin: 'https://www.linkedin.com/in/chamikaherath/',
        github: 'https://github.com/Chamika-Herath',
        email: 'dewakapasindutc@gmail.com'
      }
    },
    {
      id: 7,
      name: 'Ayodya Senevirathne',
      role: 'Frontend Developer',
      image: Ayodya,
      bio: 'UI/UX Designer and Front-End Developer passionate about transforming ideas into intuitive, visually engaging, and responsive digital experiences.',
      skills: ['React', 'TypeScript', 'CSS Animations'],
      social: {
        linkedin: 'https://www.linkedin.com/in/ayodya-senavirathne-a15839316/',
        github: 'https://github.com/ayodyasenavirathne',
        email: 'ayodyasewmini2001@gmail.com'
      }
    },
    {
      id: 8,
      name: 'Sachintha Jayaweera',
      role: 'Backend Developer',
      image: sachintha,
      bio: 'Full Stack Developer skilled in React.js, Node.js, Spring Boot, Python, and MySQL, with experience building user-centric applications and delivering end-to-end solutions. Passionate about solving real-world problems through clean, scalable technology and continuous professional growth.',
      skills: ['Python', 'Django', 'PostgreSQL'],
      social: {
        linkedin: 'https://www.linkedin.com/in/sachintha-jayaweera-057587320/',
        github: 'https://github.com/Sachinthajayaweera',
        email: 'sachinthajayaweera2@gmail.com'
      }
    },
    {
      id: 9,
      name: 'Tharusha Ishan',
      role: 'DevOps Engineer',
      image: Tharusha,
      bio: 'Software engineering student specializing in full-stack web development. Proficient in React.js, Node.js, Spring Boot, and MySQL.',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      social: {
        linkedin: 'https://www.linkedin.com/in/tharusha-ishan-5b438431b',
        github: 'https://github.com/Tharusha-Ishan',
        email: ' tharu553edu@gmail.com'
      }
    },
    {
      id: 10,
      name: 'Hasitha Wijewardhana',
      role: 'Product Manager',
      image: Hasitha,
      bio: 'Full stack developer with strong frontend expertise in React JS & Vue JS and Mobile Development technologies like Kotlin, Flutter. etc. Dives deep into real world problems and figures out how to implement modern technologies.',
      skills: ['Product Strategy', 'Agile', 'User Research'],
      social: {
        linkedin: 'https://lk.linkedin.com/in/hasitha-wijewardhana-72898831b',
        github: 'https://github.com/HasithaDilshan19',
        email: 'maria@deepnix.com'
      }
    },
    {
      id: 11,
      name: 'Yashodha Shyaminda',
      role: 'Product Manager',
      image: Yashodha,
      bio: 'Strategic product leader driving innovation and user-centered solutions.',
      skills: ['Product Strategy', 'Agile', 'User Research'],
      social: {
        linkedin: 'https://www.linkedin.com/in/yashodashyaminda',
        github: '#',
        email: 'maria@deepnix.com'
      }
    },
    {
      id: 12,
      name: 'Piyumal Pahasara',
      role: 'QA Engineer',
      image: Piyumal,
      bio: 'Quality assurance specialist ensuring flawless software delivery.',
      skills: ['Test Automation', 'Manual Testing', 'Performance Testing'],
      social: {
        linkedin: '#',
        github: '#',

        email: 'ryan@deepnix.com'
      }
    },
    {
      id: 13,
      name: 'Tharushi Senevirathne',
      role: 'Content Strategist',
      image: Tharushi,
      bio: 'Software Engineer specializing in UI/UX design and front-end development, with strong documentation skills and a focus on creating clean, intuitive, and user-friendly digital experiences',
      skills: ['Content Writing', 'Brand Strategy', 'Copywriting'],
      social: {
        linkedin: 'https://www.linkedin.com/in/tharushi-seneviratne-332b542a2/',
        github: 'https://github.com/Tharushi0925',
        email: 'sophie@deepnix.com'
      }
    },
    // {
    //   id: 14,
    //   name: 'Ravindu Siriwardhana',
    //   role: 'Content Strategist',
    //   image: Chamika,
    //   bio: 'Creative content expert crafting compelling narratives and brand stories.',
    //   skills: ['Content Writing', 'Brand Strategy', 'Copywriting'],
    //   social: {
    //     linkedin: '#',
    //     github: '#',
    //     email: 'sophie@deepnix.com'
    //   }
    // },
    {
      id: 15,
      name: 'Erandi Alahakoon',
      role: 'Frontend Developer',
      image: Erandi,
      bio: 'Creative content expert crafting compelling narratives and brand stories.',
      skills: ['Content Writing', 'Brand Strategy', 'Copywriting'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'sophie@deepnix.com'
      }
    }
  ];

  return (
    <section id="team" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts brings together creativity, technical excellence, 
            and strategic thinking to deliver exceptional results for every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Member Image */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-blue-500 transition-colors duration-300"
                    >
                      <Linkedin className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={member.social.github}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                    >
                      <Github className="h-4 w-4 text-white" />
                    </a>
                    {/* <a
                      href={member.social.twitter}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-blue-400 transition-colors duration-300"
                    >
                      <Twitter className="h-4 w-4 text-white" />
                    </a> */}
                    <a
                      href={`mailto:${member.social.email}`}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-red-500 transition-colors duration-300"
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">
                  {member.name}
                </h3>
                
                {/* <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium px-3 py-1 rounded-full inline-block mb-3">
                  {member.role}
                </div> */}

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Skills */}
                {/* <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded border border-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Team Excellence
            </span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-400">Combined Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-gray-400">Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-gray-400">Dedication</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400">Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;