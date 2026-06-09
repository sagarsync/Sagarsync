

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-forestDark text-pebble py-10 mt-auto border-t border-forest">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          
          {/* Logo with circular image */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => onNavigate('home')}
          >
            <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src="/Sagar%20Sync.png" 
                alt="S" 
                className="w-full h-full object-cover scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <span className="text-base font-extrabold tracking-wide text-white">SAGAR SYNC</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-mintGrey">
            {['home', 'about', 'services', 'portfolio', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => onNavigate(tab)}
                className="hover:text-white transition-colors capitalize cursor-pointer"
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="text-[10px] text-mintGrey">
            &copy; 2026 Sagar Sync. Local digital optimization ecosystem.
          </div>
        </div>
      </div>
    </footer>
  );
}
