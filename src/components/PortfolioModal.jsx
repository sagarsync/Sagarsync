

export default function PortfolioModal({ activeMember, onClose }) {
  if (!activeMember) return null;

  return (
    <div className="fixed inset-0 bg-forest/80 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm">
      <div 
        id="portfolio-modal-container"
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto relative border border-pebble flex flex-col custom-scrollbar text-left"
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
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-pebble bg-forest text-pebble flex items-center justify-center overflow-hidden font-extrabold text-2xl shrink-0 shadow">
              {activeMember.image ? (
                <img src={activeMember.image} alt={activeMember.name} className="w-full h-full object-cover scale-110" />
              ) : (
                activeMember.initials
              )}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeMember.projects.map((proj, index) => (
                <div key={index} className="bg-pebbleLight/50 p-5 rounded-2xl border border-pebble flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-extrabold text-forest text-sm sm:text-base">{proj.name}</h5>
                      {proj.link && (
                        <a 
                          href={proj.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sage hover:underline text-[11px] font-bold flex items-center space-x-1 shrink-0"
                        >
                          <span>Live Demo</span>
                          <i className="fas fa-external-link-alt text-[9px]"></i>
                        </a>
                      )}
                    </div>
                    
                    {proj.tech && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {proj.tech.map((t, idx) => (
                          <span key={idx} className="bg-pebble text-forest/80 text-[9px] font-bold px-2 py-0.5 rounded-full">{t}</span>
                        ))}
                      </div>
                    )}
                    
                    <p className="text-xs text-slateTeal leading-relaxed mb-3">{proj.desc}</p>
                    
                    {proj.details && (
                      <div className="space-y-3 mt-3 pt-3 border-t border-pebble">
                        {proj.details.did && (
                          <div>
                            <span className="block text-[9px] font-bold text-forest uppercase tracking-wider mb-0.5">What I Did</span>
                            <p className="text-[11px] text-slateTeal leading-relaxed">{proj.details.did}</p>
                          </div>
                        )}
                        {proj.details.approach && (
                          <div>
                            <span className="block text-[9px] font-bold text-forest uppercase tracking-wider mb-0.5">My Approach</span>
                            <p className="text-[11px] text-slateTeal leading-relaxed">{proj.details.approach}</p>
                          </div>
                        )}
                        {proj.details.vision && (
                          <div>
                            <span className="block text-[9px] font-bold text-forest uppercase tracking-wider mb-0.5">Vision Behind It</span>
                            <p className="text-[11px] text-slateTeal leading-relaxed">{proj.details.vision}</p>
                          </div>
                        )}
                        {proj.details.solved && (
                          <div>
                            <span className="block text-[9px] font-bold text-forest uppercase tracking-wider mb-0.5">Problem Solved</span>
                            <p className="text-[11px] text-slateTeal leading-relaxed">{proj.details.solved}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
