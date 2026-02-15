import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group hover:scale-105 transition-transform duration-300">
             <div className="relative">
                <Globe className="w-8 h-8 text-blue-900 transition-transform duration-500 group-hover:rotate-180" />
                <div className="absolute inset-0 bg-blue-400 blur-lg opacity-40 rounded-full group-hover:opacity-60 transition-opacity"></div>
             </div>
             <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight text-slate-900 leading-none font-sans">GENIO</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-600 uppercase leading-none mt-1 group-hover:text-blue-700 transition-colors">Digital</span>
             </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 hover:text-blue-800 hover-underline-animation ${
                    isActive 
                      ? 'text-blue-900 font-semibold' 
                      : 'text-slate-700'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-blue-900 focus:outline-none p-2 rounded-full hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    isActive
                      ? 'bg-blue-50 text-blue-900 pl-6'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900 hover:pl-6'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
      </div>
    </nav>
  );
};

export default Navbar;