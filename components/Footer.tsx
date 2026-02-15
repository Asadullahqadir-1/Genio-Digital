import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 w-full mt-auto">
      {/* Gradient fade at top of footer to blend */}
      <div className="bg-gradient-to-b from-transparent to-blue-900/90 py-8 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Logo Area */}
            <div className="flex items-center gap-2">
                <Globe className="w-6 h-6 text-white/90" />
                <div className="flex flex-col">
                    <span className="text-xl font-bold tracking-tight text-white leading-none">GENIO</span>
                    <span className="text-[9px] font-semibold tracking-[0.2em] text-blue-200 uppercase leading-none mt-0.5">Digital</span>
                </div>
            </div>

            {/* Links */}
            <div className="flex items-center space-x-6 text-sm font-medium text-blue-100">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-blue-400">|</span>
              <Link to="/imprint" className="hover:text-white transition-colors">Imprint</Link>
              <span className="text-blue-400">|</span>
              <span className="opacity-80">© GENIO DIGITAL OÜ</span>
            </div>

            {/* Contact Email (Small) */}
             <a href="mailto:info@geniodigital.com" className="flex items-center gap-2 text-sm text-blue-100 hover:text-white transition-colors">
                <Mail size={16} />
                info@geniodigital.com
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;