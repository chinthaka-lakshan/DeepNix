import React from 'react';
import { ArrowRight, Zap, Target, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';

const Home: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Company Description and Buttons */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-6">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                DEEPNIX
              </span>
              <br />
              <span className="text-white">
                Innovation Meets Excellence
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              We are a cutting-edge technology company specializing in transformative digital solutions.
              At DEEPNIX, we blend creativity with technical expertise to deliver exceptional UI/UX design,
              robust web development, and strategic digital marketing services that propel businesses into the future.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 text-gray-400"
            >
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-blue-400" />
                <span>Innovation-Driven</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-cyan-400" />
                <span>Results-Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-500" />
                <span>Global Reach</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center space-x-2"
            >
              <span>Hire Us</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="group border-2 border-gray-700 hover:border-blue-500 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-blue-500/10 flex items-center justify-center space-x-2"
            >
              <span>Let's Talk</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center lg:justify-end"
        >
          <AnimatedLogo />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;