import React from 'react';

const AnimatedLogo: React.FC = () => {
  return (
    <div className="relative">
      {/* Main Logo Container */}
      <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-3xl p-12 border border-blue-500/30">
        {/* Central Logo */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-2xl animate-pulse shadow-2xl">
            <img 
              src="/DeepNix.png" 
              alt="DEEPNIX Logo" 
              className="w-24 h-24 object-contain filter brightness-0 invert animate-bounce-slow"
            />
          </div>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* First Orbit */}
          <div className="absolute w-40 h-40 border-2 border-blue-400/30 rounded-full animate-spin-slow">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 p-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
              <div className="bg-cyan-500 p-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Second Orbit */}
          <div className="absolute w-56 h-56 border border-cyan-400/20 rounded-full animate-spin-reverse">
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <div className="absolute top-1/2 -left-3 transform -translate-y-1/2">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full shadow-lg">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Third Orbit */}
          <div className="absolute w-72 h-72 border border-blue-300/10 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}>
            <div className="absolute -top-2 left-1/4 transform -translate-x-1/2">
              <div className="bg-blue-400 p-2 rounded-full shadow-lg animate-bounce">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
            <div className="absolute -bottom-2 right-1/4 transform translate-x-1/2">
              <div className="bg-cyan-400 p-2 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce opacity-60"
              style={{
                left: `${15 + (i * 6)}%`,
                top: `${10 + (i * 7)}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + (i % 3)}s`,
              }}
            />
          ))}
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl animate-pulse" />
      </div>

      {/* Company Name */}
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          DEEPNIX
        </h2>
        <p className="text-gray-400 text-lg mt-2 animate-fade-in">Deep Technology Solutions</p>
      </div>
    </div>
  );
};

export default AnimatedLogo;