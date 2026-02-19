import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, MapPin, Layers, ArrowRight } from 'lucide-react';

const Ecosystem: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    {
      icon: Share2,
      title: "Connected by Design",
      description: "Integrated solutions designed to work in harmony within a larger ecosystem.",
      gradient: "from-blue-600 via-blue-700 to-blue-900",
      borderGradient: "from-blue-400 to-blue-600"
    },
    {
      icon: MapPin, 
      title: "Real-World Applications",
      description: "Solving real challenges in travel, employment, healthcare, and daily services.",
      gradient: "from-emerald-600 via-teal-700 to-cyan-900",
      borderGradient: "from-emerald-400 to-cyan-600"
    },
    {
      icon: Layers,
      title: "Scalable & Modular",
      description: "Flexible and scalable platforms that adapt to your business needs.",
      gradient: "from-purple-600 via-violet-700 to-indigo-900",
      borderGradient: "from-purple-400 to-indigo-600"
    }
  ];

  return (
    <div className="w-full flex flex-col items-center gap-12 py-8">
      {/* Header Section */}
      <div className="text-center space-y-4 max-w-3xl animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Our Ecosystem</h1>
        <p className="text-lg text-slate-700 font-light">
          A connected approach to building digital products across multiple industries.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="relative group animate-fade-in-up animate-float-slow"
            style={{ animationDelay: `${index * 150 + 200}ms`, animationDuration: `${3 + index * 0.5}s` }}
          >
            {/* Animated gradient border effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${card.borderGradient} rounded-2xl opacity-70 group-hover:opacity-100 blur group-hover:blur-md transition-all duration-500 animate-glow`}></div>
            
            {/* Card content */}
            <div className="relative glass-panel rounded-2xl p-8 flex flex-col items-center text-center h-full transform transition-all duration-500 group-hover:scale-105">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-2xl text-white group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 animate-heartbeat`}>
                <card.icon size={36} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-800 transition-colors duration-300">{card.title}</h3>
              <p className="text-slate-700 leading-relaxed text-lg">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div 
        className="mt-8 text-center space-y-6 animate-fade-in-up"
        style={{ animationDelay: '600ms' }}
      >
        <p className="text-2xl font-semibold text-slate-800 animate-bounce-slow">Want to be part of the GENIO ecosystem?</p>
        <button 
          onClick={() => navigate('/contact')}
          className="glass-button px-10 py-4 rounded-full text-white font-semibold tracking-wide hover:scale-110 transition-all duration-500 flex items-center gap-2 mx-auto shadow-xl animate-float relative overflow-hidden group"
        >
          <span className="relative z-10">Work With Us</span>
          <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default Ecosystem;