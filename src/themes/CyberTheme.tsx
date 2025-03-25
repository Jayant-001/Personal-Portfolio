import React from 'react';
import { Shield, Code, Cpu, Network, Lock } from 'lucide-react';

const CyberTheme = () => {
  return (
    <div className="min-h-screen bg-black text-cyan-400 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809')] opacity-10"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto p-8">
        <div className="glitch-container">
          <h1 className="text-6xl font-bold mb-8 animate-pulse">
            BACKEND.DEV_
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Security First</h2>
            </div>
            <p className="text-cyan-200">Implementing robust backend systems with advanced security protocols and data protection measures.</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Clean Code</h2>
            </div>
            <p className="text-cyan-200">Writing maintainable, scalable, and efficient code following best practices and design patterns.</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="w-6 h-6" />
              <h2 className="text-2xl font-bold">AI Integration</h2>
            </div>
            <p className="text-cyan-200">Leveraging cutting-edge AI technologies to build intelligent and adaptive systems.</p>
          </div>

          <div className="bg-black/50 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <Network className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Cloud Native</h2>
            </div>
            <p className="text-cyan-200">Developing scalable applications using modern cloud technologies and microservices architecture.</p>
          </div>
        </div>

        <div className="mt-12 bg-black/50 backdrop-blur-sm border border-cyan-400/30 p-6 rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Access Granted</h2>
          </div>
          <div className="font-mono">
            <p className="mb-2">→ Java/Spring Boot Expert</p>
            <p className="mb-2">→ MERN Stack Developer</p>
            <p className="mb-2">→ Cloud Architecture Specialist</p>
            <p>→ AI/ML Integration Professional</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberTheme;