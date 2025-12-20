import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[500px]">
      {/* Background Glow Effect */}
      <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 p-16">
        
        {/* The Logo with Custom Floating Animation */}
        <div className="relative z-20 group">
          <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-colors duration-700" />
          <img 
            src="/DeepNixx.jpeg" 
            alt="DEEPNIX Logo" 
            className="relative w-56 h-auto rounded-full object-contain shadow-[0_0_50px_rgba(59,130,246,0.3)] animate-float"
            style={{
              animation: 'float 6s ease-in-out infinite'
            }}
            onError={(e) => {
              console.error("Image not found. Ensure DeepNixx.jpeg is in the public folder.");
            }}
          />
        </div>

        {/* Improved Tech Orbits */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Inner Fast Orbit */}
          <div className="absolute w-72 h-72 border border-blue-500/30 border-dashed rounded-full animate-spin-slow" style={{ animationDuration: '8s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_#60a5fa]" />
          </div>

          {/* Middle Tilted Orbit */}
          <div className="absolute w-[350px] h-[350px] border border-cyan-500/20 rounded-full animate-spin-reverse opacity-50" 
               style={{ animationDuration: '15s', transform: 'rotateX(60deg) rotateY(15deg)' }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />
          </div>

          {/* Outer Slow Orbit */}
          <div className="absolute w-[450px] h-[450px] border border-blue-400/10 rounded-full animate-spin-slow opacity-30" 
               style={{ animationDuration: '25s', transform: 'rotateX(-45deg)' }}>
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff]" />
          </div>
        </div>

        {/* Particle Field */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Brand Typography */}
      <div className="text-center mt-12 z-20">
        <h2 className="text-6xl font-black tracking-tighter bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent italic">
          DEEPNIX
        </h2>
        <div className="mt-2 flex items-center justify-center gap-3">
          <span className="h-[1px] w-8 bg-blue-500/50"></span>
          <p className="text-blue-400 font-medium tracking-[0.3em] uppercase text-xs">
            Deep Technology Solutions
          </p>
          <span className="h-[1px] w-8 bg-blue-500/50"></span>
        </div>
      </div>

      {/* Custom Styles for the Float Animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.2));
          }
          50% {
            transform: translateY(-20px) scale(1.05);
            filter: drop-shadow(0 0 40px rgba(34, 211, 238, 0.4));
          }
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedLogo;