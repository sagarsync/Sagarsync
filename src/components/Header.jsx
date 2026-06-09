import React from 'react';

export default function Header({ activeTab, onNavigate, mobileMenuOpen, onToggleMobileMenu }) {
  return (
    <header className="bg-forest/95 text-pebble sticky top-0 z-40 shadow-md backdrop-blur-md border-b border-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with the round image logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center overflow-hidden shadow-md transform active:scale-95 transition-transform">
              <img 
                src="/Sagar Sync.png" 
                alt="Sagar Sync Logo" 
                className="w-full h-full object-cover scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-wide text-white block">SAGAR SYNC</span>
              <span className="text-[10px] text-mintGrey tracking-widest block -mt-1 uppercase">Local Digital Force</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {['home', 'about', 'services', 'portfolio', 'blog', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => onNavigate(tab)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold hover:bg-forestDark transition-all capitalize ${
                  activeTab === tab ? 'bg-forestDark text-white font-bold' : 'text-mintGrey'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-sage hover:bg-opacity-90 active:scale-95 text-forestDark px-5 py-2.5 rounded-xl font-bold shadow-md transition-all text-sm flex items-center space-x-2 cursor-pointer"
            >
              <span>Get Consultation</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </button>
          </div>

          {/* Burger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={onToggleMobileMenu}
              className="text-mintGrey hover:text-white focus:outline-none p-3 rounded-xl hover:bg-forestDark/50 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-forestDark border-t border-forest border-opacity-40 transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2 text-center">
            {['home', 'about', 'services', 'portfolio', 'blog', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => onNavigate(tab)}
                className="block w-full py-3 px-4 rounded-xl text-base font-semibold text-pebble hover:bg-forest/50 transition-colors capitalize"
              >
                {tab}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="w-full bg-sage active:scale-95 text-forest font-bold py-4 mt-4 rounded-xl shadow-md transition-transform cursor-pointer"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
