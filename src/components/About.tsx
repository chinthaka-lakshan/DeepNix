import React from 'react';
import { Target, Eye, Heart, Award, Users, Rocket } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = React.useState(0);
  const nodeRef = React.useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalFrames = Math.round(duration * 60);
      const counter = setInterval(() => {
        start++;
        const progress = start / totalFrames;
        const currentCount = Math.round(end * progress);

        if (start === totalFrames) {
          clearInterval(counter);
          setCount(end);
        } else {
          setCount(currentCount);
        }
      }, 1000 / 60);

      return () => clearInterval(counter);
    }
  }, [isInView, value, duration]);

  return <span ref={nodeRef}>{count}</span>;
};

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-8 tracking-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              About
            </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-4">
              DEEPNIX
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Founded on the principles of innovation and excellence, DEEPNIX has emerged as a leading force
            in the technology landscape, delivering transformative digital solutions that shape the future.
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-32 relative"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition duration-1000" />

          <div className="relative rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-14 overflow-hidden shadow-2xl">
            {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                      <Rocket size={16} />
                    </span>
                    <h3 className="text-sm font-bold tracking-widest text-blue-400 uppercase">Our Origin</h3>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Forged in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Innovation</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg border-l-2 border-blue-500/30 pl-6">
                    DEEPNIX was born from a vision to bridge the gap between complex technology and
                    practical business solutions. Our journey began with a small team of passionate
                    developers who believed that technology should empower, not complicate.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                      <Target size={16} />
                    </span>
                    <h3 className="text-sm font-bold tracking-widest text-cyan-400 uppercase">Our Vision</h3>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    Shaping the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Future</span>
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg border-l-2 border-cyan-500/30 pl-6">
                    Today, we push boundaries, embrace emerging technologies, and delivery
                    exceptional results that transform how our clients operate. We craft bespoke
                    solutions that position businesses for unprecedented growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
          >
            <span className="text-white">Our Values & </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Principles
            </span>
          </motion.h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      <IconComponent className="h-7 w-7 text-blue-400 group-hover:text-cyan-400 transition-colors duration-500" />
                    </div>

                    <h4 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                      {value.title}
                    </h4>

                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>

                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 ease-in-out" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {[
              { end: 10, suffix: "+", label: "Projects Completed" },
              { end: 50, suffix: "+", label: "Happy Clients" },
              { end: 2, suffix: "+", label: "Years Experience" },
              { end: 24, suffix: "/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center group">
                <div className="text-5xl sm:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2 font-mono group-hover:scale-105 transition-transform duration-300">
                  <div className="flex items-baseline">
                    <Counter value={stat.end} />
                    <span className="text-3xl sm:text-4xl text-blue-500">{stat.suffix}</span>
                  </div>
                </div>
                <div className="h-1 w-12 bg-gray-800 group-hover:bg-blue-500 transition-colors duration-300 rounded-full mb-4" />
                <div className="text-gray-400 font-medium tracking-wider uppercase text-xs sm:text-sm text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;