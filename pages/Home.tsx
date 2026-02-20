import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Show main content after logo animation
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] text-center space-y-12 w-full">
      {/* Animated Logo Section */}
      <div className="relative w-full flex flex-col items-center space-y-8">
        {/* Logo with animation */}
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 opacity-30 blur-3xl rounded-full animate-pulse-slow"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-2xl rounded-full animate-float-slow"></div>
          <div className="relative animate-float">
            <img
              src="/images/logo.png"
              alt="Genio Digital logo"
              className="w-56 md:w-72 lg:w-80 rounded-full object-cover shadow-2xl drop-shadow-2xl mx-auto"
            />
          </div>
        </div>

        {/* Tagline with delayed animation */}
        <div 
          className={`space-y-6 max-w-4xl mx-auto transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center justify-center gap-3 text-blue-900 animate-bounce-slow">
            <Sparkles size={24} className="animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
              Building the Future of Digital Ecosystems
            </h2>
            <Sparkles size={24} className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-light leading-relaxed">
            We design and develop scalable, connected digital products that solve real-world challenges across industries.
          </p>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-6 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <button 
            onClick={() => navigate('/ecosystem')}
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-blue-900 to-blue-700 text-white font-semibold text-lg overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105 flex items-center gap-2 animate-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Ecosystem
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="group relative px-10 py-4 rounded-full bg-white/70 backdrop-blur-md border-2 border-blue-900/40 text-blue-900 font-semibold text-lg overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105 hover:border-blue-900/70"
          >
            <span className="relative z-10">Work With Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;