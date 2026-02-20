import React from 'react';
import { Briefcase, Heart, Map, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Briefcase, 
      title: "Travel & Mobility",
      bullets: ["Group travel", "Safety & tracking", "Agency platforms"],
      gradient: "from-blue-600 to-blue-800",
      borderGradient: "from-blue-400 to-blue-700",
      bulletGradient: "from-blue-500 to-blue-700",
      titleHover: "group-hover:text-blue-900"
    },
    {
      icon: Map, 
      title: "Safety & Monitoring",
      bullets: ["GPS & tracking solutions", "Real-time monitoring", "Emergency-oriented systems"],
      gradient: "from-emerald-600 to-teal-800",
      borderGradient: "from-emerald-400 to-teal-700",
      bulletGradient: "from-emerald-500 to-teal-700",
      titleHover: "group-hover:text-blue-900"
    },
    {
      icon: ShieldCheck, 
      title: "Jobs & Workforce",
      bullets: ["Job aggregation", "Matching & publishing", "Employer-focused tools"],
      gradient: "from-purple-600 to-indigo-800",
      borderGradient: "from-purple-400 to-indigo-700",
      bulletGradient: "from-purple-500 to-indigo-700",
      titleHover: "group-hover:text-blue-900"
    },
    {
      icon: Heart, 
      title: "Healthcare & Services",
      bullets: ["Patient workflows", "Data & document handling"],
      gradient: "from-emerald-600 to-green-800",
      borderGradient: "from-emerald-400 to-green-700",
      bulletGradient: "from-emerald-500 to-green-700",
      panelClass: "bg-emerald-50/70",
      titleHover: "group-hover:text-emerald-700"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {solutions.map((sol, index) => (
          <div 
            key={index} 
            className="relative group animate-scale-in"
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          >
            {/* Animated gradient border effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br ${sol.borderGradient} rounded-2xl opacity-60 group-hover:opacity-100 blur-sm group-hover:blur transition-all duration-500 animate-pulse`}></div>
            
            {/* Card content */}
            <div className={`relative glass-panel rounded-2xl p-6 flex flex-col items-center text-center h-full group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 ${sol.panelClass ?? ''}`}>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${sol.gradient} text-white flex items-center justify-center mb-5 shadow-xl group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 animate-bounce-slow`}>
                <sol.icon size={28} strokeWidth={2} />
              </div>
              <h3 className={`text-xl font-bold text-slate-900 mb-5 ${sol.titleHover} transition-colors duration-300`}>{sol.title}</h3>
              <ul className="text-left w-full space-y-2.5">
                {sol.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-700 leading-relaxed group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                    <span className={`mr-2.5 mt-1.5 w-2 h-2 bg-gradient-to-br ${sol.bulletGradient} rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300`}></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Why Genio Section */}
      <div 
        className="flex flex-col items-center space-y-6 mt-4 animate-fade-in-up"
        style={{ animationDelay: '600ms' }}
      >
        <h2 className="text-3xl font-bold text-slate-900 animate-float">Why GENIO Solutions?</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative group animate-float" style={{ animationDelay: '0s' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl opacity-60 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500 animate-glow"></div>
            <div className="relative flex items-center gap-3 text-slate-800 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl border border-white/40 shadow-lg group-hover:scale-110 transition-all duration-500">
              <CheckCircle2 className="text-blue-700 group-hover:rotate-360 transition-transform duration-700" size={24} />
              <span className="font-semibold text-lg">Modular & scalable</span>
            </div>
          </div>
          <div className="relative group animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl opacity-60 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500 animate-glow"></div>
            <div className="relative flex items-center gap-3 text-slate-800 bg-white/90 backdrop-blur-md px-6 py-3 rounded-xl border border-white/40 shadow-lg group-hover:scale-110 transition-all duration-500">
              <CheckCircle2 className="text-blue-700 group-hover:rotate-360 transition-transform duration-700" size={24} />
              <span className="font-semibold text-lg">Partner-friendly architecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;