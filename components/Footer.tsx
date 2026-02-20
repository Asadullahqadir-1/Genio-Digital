import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full mt-auto">
      {/* Gradient fade at top of footer to blend */}
      <div className="bg-gradient-to-b from-transparent to-blue-900/90 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Logo Area */}
            <div className="flex items-center gap-2 group animate-float" style={{ animationDuration: '4s' }}>
              <img
                src="/images/logo.jpeg"
                alt="Genio Digital logo"
                className="w-6 h-6 rounded-full object-cover shadow-md group-hover:rotate-6 transition-transform duration-700"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none group-hover:scale-110 transition-transform duration-300">GENIO</span>
                <span className="text-[9px] font-semibold tracking-[0.2em] text-blue-200 uppercase leading-none mt-0.5 group-hover:text-blue-100 transition-colors duration-300">Digital</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-6 text-sm font-medium text-blue-100">
              <Link to="/privacy" className="hover:text-white hover:scale-110 transition-all duration-300">Privacy Policy</Link>
              <span className="text-blue-400">|</span>
              <Link to="/imprint" className="hover:text-white hover:scale-110 transition-all duration-300">Imprint</Link>
              <span className="text-blue-400">|</span>
              <span className="opacity-80 hover:opacity-100 transition-opacity duration-300">© GENIO DIGITAL OÜ</span>
            </div>

            {/* Contact Email (Small) */}
             <a href="mailto:info@genio-digital.com" className="flex items-center gap-2 text-sm text-blue-100 hover:text-white hover:scale-110 transition-all duration-300 group">
                <Mail size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                info@genio-digital.com
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;