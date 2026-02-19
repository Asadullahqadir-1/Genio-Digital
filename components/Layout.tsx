import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 relative overflow-x-hidden">
      {/* Background Image Layer */}
      <div className="fixed inset-0 z-[-1]">
        <img 
          src="/images/background.jpeg" 
          alt="GENIO Digital background" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient to create depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-blue-50/50 to-blue-900/40"></div>
        
        {/* Animated floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.5s', animationDuration: '5s' }}></div>
        </div>
        
        {/* Digital Grid Overlay Effect */}
        <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, rgba(0,0,0,0.05) 100%)',
            }}
        ></div>
      </div>

      <Navbar />
      
      <main className="flex-grow pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col justify-center">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;