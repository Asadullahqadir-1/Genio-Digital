import React from 'react';
import GlassCard from '../components/GlassCard';
import { Briefcase, Heart, Map, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Briefcase, 
      title: "Travel & Mobility",
      bullets: ["Group travel", "Safety & tracking", "Agency platforms"]
    },
    {
      icon: Map, 
      title: "Safety & Monitoring",
      bullets: ["GPS & tracking solutions", "Real-time monitoring", "Emergency-oriented systems"]
    },
    {
      icon: ShieldCheck, 
      title: "Jobs & Workforce",
      bullets: ["Job aggregation", "Matching & publishing", "Employer-focused tools"]
    },
    {
      icon: Heart, 
      title: "Healthcare & Services",
      bullets: ["Patient workflows", "Data & document handling"]
    }
  ];

  return (
    <div className="w-full flex flex-col items-center gap-12 py-8">
      {/* Header */}
      <div className="text-center space-y-4 max-w-3xl animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">Our Solutions</h1>
        <p className="text-lg text-slate-700 font-light">
          Digital solutions designed for real-world challenges.
        </p>
      </div>

      {/* Solutions Grid - 4 Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        {solutions.map((sol, index) => (
          <GlassCard key={index} delay={index * 100 + 200} className="items-center text-center !p-6 group hover:-translate-y-2">
            <div className="w-12 h-12 rounded-lg bg-blue-900 text-white flex items-center justify-center mb-4 shadow-md group-hover:bg-blue-700 transition-colors duration-300">
              <sol.icon size={24} className="group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">{sol.title}</h3>
            <ul className="text-left w-full space-y-2">
              {sol.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start text-sm text-slate-700">
                  <span className="mr-2 mt-1 w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0 group-hover:bg-blue-400 transition-colors"></span>
                  {bullet}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>

      {/* Why Genio Section */}
      <div 
        className="flex flex-col items-center space-y-4 mt-4 animate-fade-in-up"
        style={{ animationDelay: '600ms' }}
      >
        <h2 className="text-2xl font-bold text-slate-800">Why GENIO Solutions?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-2 text-slate-700 bg-white/40 px-4 py-2 rounded-lg border border-white/30 backdrop-blur-sm hover:bg-white/60 transition-colors">
            <CheckCircle2 className="text-blue-700" size={20} />
            <span className="font-medium">Modular & scalable</span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 bg-white/40 px-4 py-2 rounded-lg border border-white/30 backdrop-blur-sm hover:bg-white/60 transition-colors">
            <CheckCircle2 className="text-blue-700" size={20} />
            <span className="font-medium">Built on Partner-friendly architecture</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;