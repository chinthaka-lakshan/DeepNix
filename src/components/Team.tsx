import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import Harith from '../assets/Team/harith.jpeg';
import Lakshan from '../assets/Team/lakshan.jpeg';
import Dewaka from '../assets/Team/dewaka.jpg';
import Rashen from '../assets/Team/rashen.jpeg';
import Ayodya from '../assets/Team/sheru.jpeg';
import sachintha from '../assets/Team/sachiya.jpeg';
import Tharusha from '../assets/Team/tharusha.jpeg';
import Hasitha from '../assets/Team/hasitha.jpeg';
import Piyumal from '../assets/Team/piyumal.jpeg';
import Tharushi from '../assets/Team/tharushi.jpeg';
import Visal from '../assets/Team/visal.jpeg';

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Harith Devinda',
      role: 'CEO & Founder',
      image: Harith,
      bio: 'Visionary leader with 10+ years of experience in technology and business strategy.',
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
      role: 'Lead UI/UX Designer',
      image: Lakshan,
      bio: 'Software engineering student with a focus on full-stack web development. Skilled in React, Laravel, and MySQL.',
      skills: ['UI Design', 'UX Research', 'Prototyping'],
      social: {
        linkedin: 'https://www.linkedin.com/in/chinthaka-lakshan-97b334263/',
        github: 'https://github.com/chinthaka-lakshan',
        email: 'diluklakshan01@gamil.com'
      }
    },
    {
      id: 3,
      name: 'Dewaka Pasindu',
      role: 'Senior Full-Stack Developer',
      image: Dewaka,
      bio: 'Expert developer specializing in modern web technologies and scalable solutions.',
      skills: ['React', 'Node.js', 'Cloud Architecture'],
      social: {
        linkedin: 'https://www.linkedin.com/in/dewaka-pasindu-8b147833a/',
        github: 'https://github.com/DewakaPasindu',
        email: 'dewakapasindutc@gmail.com'
      }
    },
    {
      id: 4,
      name: 'Sachintha Rashen',
      role: 'Digital Marketing Strategist',
      image: Rashen,
      bio: 'Results-driven marketer with expertise in digital campaigns and brand growth.',
      skills: ['SEO', 'Social Media', 'Content Strategy'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'emma@deepnix.com'
      }
    },
        {
      id: 5,
      name: 'Visal Hewage',
      role: 'Frontend Developer',
      image: Visal,
      bio: 'undergraduate Software Engineer with a strong passion for crafting clean, user-friendly digital experiences. My role is UI/UX designer and front-end developer, combining creativity with code to bring intuitive and visually engaging interfaces to life. I love turning ideas into interactive and responsive designs that users enjoy.',
      skills: ['React', 'TypeScript', 'CSS Animations'],
      social: {
        linkedin: 'https://www.linkedin.com/in/ayodya-senavirathne-a15839316/',
        github: 'https://github.com/ayodyasenavirathne',
        email: 'ayodyasewmini2001@gmail.com'
      }
    },
    {
      id: 5,
      name: 'Ayodya Senevirathne',
      role: 'Frontend Developer',
      image: Ayodya,
      bio: 'undergraduate Software Engineer with a strong passion for crafting clean, user-friendly digital experiences. My role is UI/UX designer and front-end developer, combining creativity with code to bring intuitive and visually engaging interfaces to life. I love turning ideas into interactive and responsive designs that users enjoy.',
      skills: ['React', 'TypeScript', 'CSS Animations'],
      social: {
        linkedin: 'https://www.linkedin.com/in/ayodya-senavirathne-a15839316/',
        github: 'https://github.com/ayodyasenavirathne',
        email: 'ayodyasewmini2001@gmail.com'
      }
    },
    {
      id: 6,
      name: 'Sachintha Jayaweera',
      role: 'Backend Developer',
      image: sachintha,
      bio: 'A highly motivated and detail-oriented Software Engineering undergraduate with strong skills in full-stack web development, including ReactJs, NodeJs, Spring Boot and MySQL. Experienced in developing user-centric applications and managing end-to-end project lifecycles. Passionate about solving real-world problems through technology and continuously improving both technical and soft skills.',
      skills: ['Python', 'Django', 'PostgreSQL'],
      social: {
        linkedin: ' https://www.linkedin.com/in/sachintha-jayaweera-057587320/',
        github: ' https://github.com/Sachinthajayaweera',
        email: 'sachinthajayaweera2@gmail.com'
      }
    },
    {
      id: 7,
      name: 'Tharusha Ishan',
      role: 'DevOps Engineer',
      image: Tharusha,
      bio: 'Infrastructure expert ensuring smooth deployment and optimal performance.',
      skills: ['AWS', 'Docker', 'Kubernetes'],
      social: {
        linkedin: 'https://www.linkedin.com/in/tharusha-ishan-5b438431b',
        github: 'https://github.com/Tharusha-Ishan',
        email: ' tharu553edu@gmail.com'
      }
    },
    {
      id: 8,
      name: 'Hasitha Wijesinghe',
      role: 'Product Manager',
      image: Hasitha,
      bio: 'Strategic product leader driving innovation and user-centered solutions.',
      skills: ['Product Strategy', 'Agile', 'User Research'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'maria@deepnix.com'
      }
    },
    {
      id: 9,
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
      id: 10,
      name: 'Tharushi Senevirathne',
      role: 'Content Strategist',
      image: Tharushi,
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