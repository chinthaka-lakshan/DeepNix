import React from 'react';
import { Cpu, Zap, Globe, Code } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="relative">
      {/* Main Logo Container */}
      <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-md rounded-3xl p-12 border border-blue-500/30">
        {/* Central Logo */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl animate-pulse">
            <Cpu className="h-16 w-16 text-white" />
          </div>
        </div>

        {/* Orbiting Elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* First Orbit */}
          <div className="absolute w-32 h-32 border border-blue-400/30 rounded-full animate-spin-slow">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-500 p-2 rounded-full">
                <Code className="h-4 w-4 text-white" />
              </div>
            </div>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2">
              <div className="bg-purple-500 p-2 rounded-full">
                <Zap className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>

          {/* Second Orbit */}
          <div className="absolute w-48 h-48 border border-purple-400/20 rounded-full animate-spin-reverse">
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="bg-cyan-500 p-2 rounded-full">
                <Globe className="h-4 w-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/50 rounded-full animate-bounce"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${15 + (i * 8)}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s',
              }}
            />
          ))}
        </div>
      </div>

      {/* Company Name */}
      <div className="text-center mt-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          DEEPNIX
        </h2>
        <p className="text-gray-400 text-sm mt-2">Deep Technology Solutions</p>
      </div>
    </div>
  );
};

export default Logo;