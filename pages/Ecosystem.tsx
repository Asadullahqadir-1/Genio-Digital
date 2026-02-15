import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { Share2, MapPin, Layers } from 'lucide-react';

const Ecosystem: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    {
      icon: Share2,
      title: "Connected by Design",
      description: "Our products are designed to work independently or as part of a larger ecosystem."
    },
    {
      icon: MapPin, 
      title: "Built for Real Use Cases",
      description: "We focus on real-world challenges across travel, safety, jobs, healthcare and everyday services."
    },
    {
      icon: Layers,
      title: "Scalable & Modular",
      description: "Each solution is built to scale independently without breaking the overall system."
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {cards.map((card, index) => (
          <GlassCard key={index} delay={index * 150 + 200} className="items-center text-center p-8 group">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center mb-6 shadow-lg text-white group-hover:scale-110 transition-transform duration-300">
              <card.icon size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-800 transition-colors">{card.title}</h3>
            <p className="text-slate-600 leading-relaxed">
              {card.description}
            </p>
          </GlassCard>
        ))}
      </div>

      {/* Bottom CTA */}
      <div 
        className="mt-8 text-center space-y-6 animate-fade-in-up"
        style={{ animationDelay: '600ms' }}
      >
        <p className="text-2xl font-medium text-slate-800">Want to be part of the GENIO ecosystem?</p>
        <button 
          onClick={() => navigate('/contact')}
          className="glass-button px-10 py-3 rounded-full text-white font-semibold tracking-wide hover:scale-105 transition-transform flex items-center gap-2 mx-auto"
        >
          Work With Us
        </button>
      </div>
    </div>
  );
};

export default Ecosystem;