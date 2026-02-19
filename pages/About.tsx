import React from 'react';
import { Flag, Compass, Globe2, Award } from 'lucide-react';

const About: React.FC = () => {
  const cards = [
    {
      icon: Flag,
      title: "Who We Are",
      gradient: "from-blue-600 to-blue-800",
      borderGradient: "from-blue-400 to-blue-700",
      content: (
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-blue-900 text-base">GENIO DIGITAL OÜ is an innovative digital venture studio.</p>
          <p>We design and build modular, scalable digital products that address real-world challenges across travel, mobility, safety, workforce, healthcare, and everyday services.</p>
        </div>
      )
    },
    {
      icon: Compass,
      title: "Vision & Mission",
      gradient: "from-emerald-600 to-teal-800",
      borderGradient: "from-emerald-400 to-teal-700",
      content: (
        <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
          <div>
            <span className="font-bold text-slate-900 block mb-1.5">Vision:</span>
            To be a leading provider of connected, real-world digital ecosystems that empower people and businesses globally.
          </div>
          <div>
            <span className="font-bold text-slate-900 block mb-1.5">Mission:</span>
            To create flexible, secure, and impactful digital products that solve real challenges through innovation and partnerships.
          </div>
        </div>
      )
    },
    {
      icon: Globe2,
      title: "Locations & Markets",
      gradient: "from-purple-600 to-indigo-800",
      borderGradient: "from-purple-400 to-indigo-700",
      content: (
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Estonia (HQ)</li>
          <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> DACH (Germany - Austria - Switzerland)</li>
          <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Türkiye</li>
          <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Global operations</li>
        </ul>
      )
    },
    {
      icon: Award,
      title: "Our Values",
      gradient: "from-rose-600 to-pink-800",
      borderGradient: "from-rose-400 to-pink-700",
      content: (
        <ul className="space-y-3 text-sm text-slate-700">
          <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Leadership</li>
          <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Innovation</li>
          <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Integrity</li>
          <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Collaboration</li>
          <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Excellence</li>
        </ul>
      )
    }
  ];

  return (
    <div className="w-full flex flex-col items-center gap-10 py-8">
      
      {/* Header */}
      <div className="text-center space-y-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">About GENIO Digital</h1>
        <h2 className="text-2xl font-semibold text-blue-900">Building Smart Digital Ecosystems</h2>
        <p className="text-slate-700 max-w-2xl mx-auto text-lg">
          We design and build connected digital products that solve real-world problems worldwide.
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="relative group animate-scale-in animate-float-slow"
            style={{ animationDelay: `${200 + index * 100}ms`, animationDuration: `${4 + index * 0.3}s` }}
          >
            {/* Animated gradient border effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br ${card.borderGradient} rounded-2xl opacity-60 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500 animate-glow`}></div>
            
            {/* Card content */}
            <div className="relative glass-panel rounded-2xl p-6 h-full flex flex-col transform transition-all duration-500 group-hover:scale-105">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-300/50">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-heartbeat`}>
                  <card.icon className="text-white" size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-300">{card.title}</h3>
              </div>
              <div className="flex-grow">
                {card.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-slate-700 text-sm font-medium animate-fade-in-up animate-bounce-slow" style={{ animationDelay: '600ms' }}>
        Lõõtsa 5, 11415 Tallinn, Estonia
      </div>
    </div>
  );
};

export default About;