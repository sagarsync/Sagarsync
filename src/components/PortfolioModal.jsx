

export default function PortfolioModal({ activeMember, onClose }) {
  if (!activeMember) return null;

  return (
    <div className="fixed inset-0 bg-forest/80 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm">
      <div 
        id="portfolio-modal-container"
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto relative border border-pebble flex flex-col custom-scrollbar text-left"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slateTeal hover:text-forest text-xl p-2 z-10 cursor-pointer"
          aria-label="Close modal"
        >
          <i className="fas fa-times"></i>
        </button>
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 pb-6 border-b border-pebble">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-pebble bg-forest text-pebble flex items-center justify-center font-extrabold text-2xl shrink-0 shadow">
              {activeMember.initials}
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-extrabold text-forest">{activeMember.name}</h3>
              <span className="text-xs font-semibold text-slateTeal uppercase tracking-wider block mt-1">{activeMember.role}</span>
              <p className="text-xs sm:text-sm text-slateTeal mt-3 leading-relaxed">{activeMember.bio}</p>
            </div>
          </div>
          {/* Body */}
          <div>
            <h4 className="font-extrabold text-forest text-sm sm:text-base mb-3">Core Stack & Specialization</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeMember.skills.map((skill, index) => (
                <span key={index} className="bg-pebble text-forest font-bold text-xs px-3 py-1.5 rounded-full">{skill}</span>
              ))}
            </div>
            
            <h4 className="font-extrabold text-forest text-sm sm:text-base mb-3">Direct Verification Projects</h4>
            <div className="grid grid-cols-1 gap-3">
              {activeMember.projects.map((proj, index) => (
                <div key={index} className="bg-pebbleLight/50 p-4 rounded-xl border border-pebble">
                  <h5 className="font-extrabold text-forest text-sm sm:text-base mb-1">{proj.name}</h5>
                  <p className="text-xs text-slateTeal leading-relaxed">{proj.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
