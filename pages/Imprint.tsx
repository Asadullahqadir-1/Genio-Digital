import React from 'react';
import { Building2, MapPin, FileText, Scale, Mail, AlertCircle } from 'lucide-react';

const Imprint: React.FC = () => {
  const sections = [
    {
      icon: Building2,
      title: "Company Information",
      gradient: "from-blue-600 to-blue-800",
      borderGradient: "from-blue-400 to-blue-700",
      content: <p className="font-semibold text-slate-900">GENIO DIGITAL OÜ</p>
    },
    {
      icon: MapPin,
      title: "Registered Address",
      gradient: "from-emerald-600 to-teal-800",
      borderGradient: "from-emerald-400 to-teal-700",
      content: (
        <p className="flex items-start gap-2">
          <span className="text-blue-700">📍</span>
          Lõõtsa 5, 11415 Tallinn, Estonia
        </p>
      )
    },
    {
      icon: FileText,
      title: "Registration Details",
      gradient: "from-purple-600 to-indigo-800",
      borderGradient: "from-purple-400 to-indigo-700",
      content: (
        <ul className="space-y-2">
          <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Registration Number: 16515762</li>
          <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> EU VAT ID: EE102651556</li>
        </ul>
      )
    },
    {
      icon: Mail,
      title: "Contact",
      gradient: "from-rose-600 to-pink-800",
      borderGradient: "from-rose-400 to-pink-700",
      content: (
        <a href="mailto:info@genio-digital.com" className="text-blue-700 font-semibold hover:text-blue-900 transition-colors">
          info@genio-digital.com
        </a>
      )
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="text-center mb-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Impressum</h1>
        <p className="text-lg text-slate-700 uppercase tracking-widest font-semibold">(LEGAL DISCLOSURE)</p>
        <p className="mt-6 text-slate-700 max-w-2xl mx-auto">
          An impressum is a legal requirement in the European Union for websites and communications to provide transparency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="relative group animate-scale-in animate-float"
            style={{ animationDelay: `${100 + index * 100}ms`, animationDuration: `${3.5 + index * 0.3}s` }}
          >
            {/* Animated gradient border effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br ${section.borderGradient} rounded-2xl opacity-60 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500 animate-glow`}></div>
            
            {/* Card content */}
            <div className="relative glass-panel rounded-2xl p-6 h-full flex flex-col transform transition-all duration-500 group-hover:scale-110">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 animate-bounce-slow`}>
                  <section.icon className="text-white" size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-300">{section.title}</h3>
              </div>
              <div className="flex-grow text-sm text-slate-700 leading-relaxed">
                {section.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legal Notice Section */}
      <div className="relative group animate-scale-in max-w-4xl mx-auto" style={{ animationDelay: '500ms' }}>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 rounded-2xl opacity-70 group-hover:opacity-100 blur-lg transition-all duration-500 animate-glow"></div>
        <div className="relative glass-panel rounded-2xl p-8 space-y-6 transform transition-all duration-500 group-hover:scale-[1.02]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-800 flex items-center justify-center shadow-lg">
              <Scale className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Legal Notice</h3>
          </div>

          <div>
            <p className="text-slate-700 font-semibold mb-2">Responsible for content according to § 5 TMG & § 18 MStV:</p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> GENIO DIGITAL OÜ</li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Lõõtsa 5, 11415 Tallinn, Estonia</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-300/50">
            <div className="flex items-start gap-3 mb-3">
              <AlertCircle className="text-blue-700 mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Liability Disclaimer</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The content of this website has been created with the utmost care. However, GENIO DIGITAL OÜ cannot guarantee the accuracy, completeness, or timeliness of the information provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 flex justify-center items-center gap-2 text-slate-700 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <Mail size={20} />
        <span className="font-semibold text-lg">info@genio-digital.com</span>
      </div>
    </div>
  );
};

export default Imprint;