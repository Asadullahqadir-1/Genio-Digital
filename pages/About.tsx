import React from 'react';
import GlassCard from '../components/GlassCard';
import { Flag, Compass, Globe2, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 py-8">
      
      {/* Header */}
      <div className="text-center space-y-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">About GENIO Digital</h1>
        <h2 className="text-2xl font-medium text-blue-900">Building Smart Digital Ecosystems</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          We design and build connected digital products that solve real-world problems worldwide.
        </p>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        
        {/* Who We Are */}
        <GlassCard delay={200}>
          <div className="flex items-center gap-3 mb-4 border-b border-slate-200/50 pb-3">
            <Flag className="text-blue-800" size={24} />
            <h3 className="text-lg font-bold text-slate-900">Who We Are</h3>
          </div>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p className="font-medium text-blue-900">GENIO DIGITAL OÜ is an innovative digital venture studio.</p>
            <p>We design and build modular, scalable digital products that address real-world challenges across travel, mobility, safety, workforce, healthcare, and everyday services.</p>
            <ul className="space-y-2 mt-2">
              <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Estonia (HQ)</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Founded in 2026</li>
              <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Modular, scalable digital solutions</li>
            </ul>
          </div>
        </GlassCard>

        {/* Vision & Mission */}
        <GlassCard delay={300}>
           <div className="flex items-center gap-3 mb-4 border-b border-slate-200/50 pb-3">
            <Compass className="text-blue-800" size={24} />
            <h3 className="text-lg font-bold text-slate-900">Vision & Mission</h3>
          </div>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <div>
              <span className="font-bold text-slate-900 block mb-1">Vision:</span>
              To be a leading provider of connected, real-world digital ecosystems that empower people and businesses globally.
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">Mission:</span>
              To create flexible, secure, and impactful digital products that solve real challenges through innovation and partnerships.
            </div>
          </div>
        </GlassCard>

        {/* Locations & Markets */}
        <GlassCard delay={400}>
           <div className="flex items-center gap-3 mb-4 border-b border-slate-200/50 pb-3">
            <Globe2 className="text-blue-800" size={24} />
            <h3 className="text-lg font-bold text-slate-900">Locations & Markets</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Estonia (HQ)</li>
            <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> DACH (Germany - Austria - Switzerland)</li>
            <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Türkiye</li>
            <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Global operations</li>
          </ul>
        </GlassCard>

        {/* Our Values */}
        <GlassCard delay={500}>
           <div className="flex items-center gap-3 mb-4 border-b border-slate-200/50 pb-3">
            <Award className="text-blue-800" size={24} />
            <h3 className="text-lg font-bold text-slate-900">Our Values</h3>
          </div>
          <ul className="space-y-3 text-sm text-slate-700">
             <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Leadership</li>
             <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Innovation</li>
             <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Integrity</li>
             <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Collaboration</li>
             <li className="flex items-center gap-2"><span className="text-blue-600">✓</span> Excellence</li>
          </ul>
        </GlassCard>
      </div>

      <div className="mt-8 text-center text-slate-200 text-sm animate-fade-in-up" style={{ animationDelay: '600ms' }}>
         Narva mnt 5, 10117 Tallinn, Estonia
      </div>
    </div>
  );
};

export default About;