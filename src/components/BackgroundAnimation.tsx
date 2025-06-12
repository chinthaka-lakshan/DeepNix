import React from 'react';

const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-1 h-1 bg-blue-400/30 rounded-full" />
          </div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-500/10 rounded-lg transform rotate-45 animate-spin-slow" />
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-purple-500/10 rounded-full animate-bounce-slow" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-cyan-500/10 transform rotate-12 animate-pulse" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};

export default BackgroundAnimation;