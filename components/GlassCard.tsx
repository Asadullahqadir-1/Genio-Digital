import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  delay?: number; // Animation delay in ms
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', title, subtitle, delay = 0 }) => {
  return (
    <div 
      className={`glass-panel rounded-xl p-6 sm:p-8 flex flex-col h-full animate-fade-in-up hover:shadow-2xl hover:bg-white/75 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {title && (
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-900 transition-colors duration-300">{title}</h3>
      )}
      {subtitle && (
        <p className="text-sm text-slate-600 mb-4">{subtitle}</p>
      )}
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;