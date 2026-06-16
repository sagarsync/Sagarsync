

export default function Header({ activeTab, onNavigate, mobileMenuOpen, onToggleMobileMenu }) {
  return (
    <header className="bg-forest/95 text-pebble fixed top-0 left-0 right-0 w-full z-40 shadow-md backdrop-blur-md border-b border-sage/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with favicon image */}
          <div 
            className="flex items-center space-x-3 cursor-pointer select-none" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-sm transform active:scale-95 transition-transform border border-sage/20">
              <img 
                src="/Sagar_Sync_favicon.png" 
                alt="Sagar Sync Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-wide text-white block">SAGAR SYNC</span>
              <span className="text-[9px] text-mintGrey tracking-normal block -mt-1 font-medium italic">No matter what the case is, we deliver.</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-1 lg:space-x-4">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => onNavigate(tab)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold hover:bg-forestDark transition-all capitalize ${
                  activeTab === tab ? 'bg-forestDark text-white font-bold' : 'text-mintGrey'
                }`}
              >
                {tab === 'services' ? 'Service' : tab}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-forest hover:bg-forestDark active:scale-95 text-white px-5 py-2.5 rounded-xl font-bold shadow-md transition-all text-sm flex items-center space-x-2 cursor-pointer border border-sage/20"
            >
              <i className="far fa-comment text-xs"></i>
              <span>Get In Touch</span>
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
            {['home', 'about', 'services', 'portfolio', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => onNavigate(tab)}
                className="block w-full py-3 px-4 rounded-xl text-base font-semibold text-pebble hover:bg-forest/50 transition-colors capitalize"
              >
                {tab === 'services' ? 'Service' : tab}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="w-full bg-sage active:scale-95 text-forest font-bold py-4 mt-4 rounded-xl shadow-md transition-transform cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
