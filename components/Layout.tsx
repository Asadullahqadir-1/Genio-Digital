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
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2500&auto=format&fit=crop" 
          alt="Earth from space background" 
          className="w-full h-full object-cover opacity-90"
        />
        {/* Overlay gradient to match the lighter top/cloudy look in designs */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/90 via-slate-100/40 to-blue-900/30"></div>
        
        {/* Digital Grid Overlay Effect */}
        <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0) 0%, rgba(0,0,0,0.1) 100%)',
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