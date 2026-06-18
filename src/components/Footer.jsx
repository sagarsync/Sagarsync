

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-forestDark text-pebble py-10 mt-auto border-t border-forest">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Logo with official image */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden shadow border border-sage/20 bg-white">
              <img 
                src="/Sagar%20Sync.png" 
                alt="Sagar Sync Logo" 
                className="w-full h-full object-cover scale-110"
              />
            </div>
            <span className="text-base font-extrabold tracking-wide text-white">SAGAR SYNC</span>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <nav className="flex flex-wrap justify-center gap-4 text-xs text-mintGrey" aria-label="Footer Navigation">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => onNavigate(tab)}
                  className="hover:text-white transition-colors capitalize cursor-pointer font-medium"
                >
                  {tab === 'services' ? 'Service' : tab}
                </button>
              ))}
            </nav>
            <address className="text-[10px] text-mintGrey text-center md:text-right not-italic">
              Makroniya, Sagar, MP | +91 8962685091 / +91 8827050460 | sagarsync.query@gmail.com
            </address>
          </div>
          
          <div className="text-[10px] text-mintGrey">
            &copy; 2026 Sagar Sync. Local digital optimization ecosystem.
          </div>
        </div>
      </div>
    </footer>
  );
}
