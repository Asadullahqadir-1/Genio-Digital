import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-12">
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight drop-shadow-sm animate-fade-in-up">
          Building the Future of <br />
          <span className="text-blue-800 inline-block hover:scale-105 transition-transform duration-300 cursor-default">Digital Ecosystems</span>
        </h1>
        <p 
          className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-light animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          We design and develop scalable, connected digital products that solve real-world challenges.
        </p>
      </div>

      <div 
        className="flex flex-col sm:flex-row gap-6 animate-fade-in-up"
        style={{ animationDelay: '400ms' }}
      >
        <button 
          onClick={() => navigate('/ecosystem')}
          className="group px-8 py-4 rounded-full bg-blue-900 text-white font-semibold text-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
        >
          Explore Ecosystem
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        <button 
          onClick={() => navigate('/contact')}
          className="px-8 py-4 rounded-full bg-white/50 backdrop-blur-sm border border-blue-900/30 text-blue-900 font-semibold text-lg hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          Work With Us
        </button>
      </div>
    </div>
  );
};

export default Home;