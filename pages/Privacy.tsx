import React from 'react';
import { Mail, Shield, Lock, Eye, FileText, Users, Clock, Database } from 'lucide-react';

const Privacy: React.FC = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Introduction",
      gradient: "from-blue-600 to-blue-800",
      borderGradient: "from-blue-400 to-blue-700",
      content: "GENIO DIGITAL OÜ is committed to protecting personal data. This Privacy Policy explains how personal information is collected, used, and protected when visiting our website."
    },
    {
      icon: Shield,
      title: "2. Data Controller",
      gradient: "from-emerald-600 to-teal-800",
      borderGradient: "from-emerald-400 to-teal-700",
      content: (
        <div className="space-y-2">
          <p className="font-semibold">GENIO DIGITAL OÜ</p>
          <p>Lõõtsa 5, 11415 Tallinn, Estonia</p>
          <p>Email: info@genio-digital.com</p>
        </div>
      )
    },
    {
      icon: Database,
      title: "3. Data We Collect",
      gradient: "from-purple-600 to-indigo-800",
      borderGradient: "from-purple-400 to-indigo-700",
      content: (
        <div>
          <p className="mb-3">We may collect the following:</p>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Full name</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Company name</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Email address</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Phone number</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Messages via contact forms</li>
          </ul>
        </div>
      )
    },
    {
      icon: Eye,
      title: "4. Purpose of Processing",
      gradient: "from-rose-600 to-pink-800",
      borderGradient: "from-rose-400 to-pink-700",
      content: (
        <div>
          <p className="mb-3">We process data to:</p>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Respond to inquiries</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Provide services</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Improve website performance</li>
          </ul>
        </div>
      )
    },
    {
      icon: Lock,
      title: "5. Legal Basis",
      gradient: "from-blue-600 to-blue-800",
      borderGradient: "from-blue-400 to-blue-700",
      content: (
        <div>
          <p className="mb-3">We process your data based on:</p>
          <ul className="space-y-2">
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Your consent</li>
            <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Legitimate interest (Article 6(1f) GDPR)</li>
          </ul>
        </div>
      )
    },
    {
      icon: Clock,
      title: "6. Data Retention",
      gradient: "from-emerald-600 to-teal-800",
      borderGradient: "from-emerald-400 to-teal-700",
      content: "Personal data is kept only as long as necessary to fulfill the purpose for which it was collected or as required by law."
    },
    {
      icon: Users,
      title: "7. Your Rights",
      gradient: "from-purple-600 to-indigo-800",
      borderGradient: "from-purple-400 to-indigo-700",
      content: (
        <ul className="space-y-2">
          <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Right to access your data</li>
          <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Request correction or deletion</li>
          <li className="flex gap-2"><span className="text-blue-500 font-bold">✓</span> Withdraw consent at any time</li>
        </ul>
      )
    },
    {
      icon: FileText,
      title: "8. Cookies",
      gradient: "from-rose-600 to-pink-800",
      borderGradient: "from-rose-400 to-pink-700",
      content: "We use basic cookies only for functionality and performance. No tracking or advertising cookies are used without consent."
    }
  ];

  return (
    <div className="w-full py-8">
      <div className="text-center mb-10 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-lg text-slate-700 uppercase tracking-widest font-semibold">GENIO Digital OÜ</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sections.map((section, index) => (
          <div 
            key={index}
            className="relative group animate-scale-in animate-float-slow"
            style={{ animationDelay: `${100 + index * 50}ms`, animationDuration: `${4 + (index % 3) * 0.5}s` }}
          >
            {/* Animated gradient border effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br ${section.borderGradient} rounded-2xl opacity-60 group-hover:opacity-100 blur group-hover:blur-lg transition-all duration-500 animate-pulse`}></div>
            
            {/* Card content */}
            <div className="relative glass-panel rounded-2xl p-6 h-full flex flex-col transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-heartbeat`}>
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
      
      <div className="text-center mt-12 flex justify-center items-center gap-2 text-slate-700 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
        <Mail size={20} />
        <span className="font-semibold text-lg">info@genio-digital.com</span>
      </div>
    </div>
  );
};

export default Privacy;