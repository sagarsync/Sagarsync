import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function ProjectShowcase({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState("overview"); // overview, panels, roi, gallery
  const [activePanelId, setActivePanelId] = useState("");
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);

  // Initialize active panel when modal opens
  useEffect(() => {
    if (selectedProject && selectedProject.panels && selectedProject.panels.length > 0) {
      setActivePanelId(selectedProject.panels[0].id);
      setActiveFeatureIndex(0);
    }
  }, [selectedProject]);

  // Lock body scroll when showcase page is open
  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [selectedProject]);

  if (!projects || projects.length === 0) return null;

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setActiveTab("overview");
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const currentPanel = selectedProject?.panels?.find(p => p.id === activePanelId);

  return (
    <div className="space-y-12">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div 
            key={proj.id}
            onClick={() => handleOpenModal(proj)}
            className="group bg-white rounded-3xl border border-pebble p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-sage/40 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-sage bg-sage/10 px-3 py-1 rounded-full border border-sage/10">
                  {proj.category}
                </span>
                <span className="text-xs font-semibold text-slateTeal flex items-center">
                  <i className="far fa-building mr-1.5"></i> {proj.clientName}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-forest group-hover:text-sage transition-colors mb-3 flex items-center">
                <span className="w-10 h-10 bg-sage/10 text-sage rounded-xl flex items-center justify-center shrink-0 mr-3 text-base">
                  <i className={`fas ${proj.icon}`}></i>
                </span>
                {proj.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slateTeal leading-relaxed mb-6">
                {proj.tagline}
              </p>

              {/* Key Quick Stats */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {proj.quickStats?.map((stat, i) => (
                  <div key={i} className="bg-pebbleLight/60 p-3 rounded-2xl border border-pebble/40 flex items-center space-x-2.5">
                    <span className="w-7 h-7 bg-white text-forest/70 rounded-lg flex items-center justify-center text-xs shadow-sm">
                      <i className={`fas ${stat.icon}`}></i>
                    </span>
                    <div>
                      <span className="block text-[10px] font-bold text-slateTeal/80 uppercase tracking-wider">{stat.label}</span>
                      <span className="block text-xs sm:text-sm font-extrabold text-forest">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-pebble pt-4 flex items-center justify-between">
              <span className="text-[10px] font-bold text-slateTeal uppercase tracking-widest">Case Study & Ecosystem</span>
              <span className="text-xs font-extrabold text-sage flex items-center group-hover:translate-x-1.5 transition-transform">
                Explore Ecosystem <i className="fas fa-arrow-right ml-2 text-[10px]"></i>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Flagship Product Showcase Full Screen Page View (Rendered via Portal to escape transform scopes) */}
      {selectedProject && createPortal(
        <div className="fixed inset-0 bg-white z-[9999] flex flex-col w-screen h-screen overflow-hidden animate-fade-in text-left">
          
          {/* Top Navbar */}
          <header className="bg-pebbleLight/70 border-b border-pebble px-4 sm:px-8 py-4 flex items-center justify-between shrink-0">
            {/* Back Button */}
            <button 
              onClick={handleCloseModal}
              className="flex items-center space-x-2 text-forest hover:text-sage font-extrabold text-xs sm:text-sm cursor-pointer transition-colors"
            >
              <i className="fas fa-arrow-left text-xs"></i>
              <span>Back to About</span>
            </button>

            {/* Project Title (Hidden on small mobile) */}
            <div className="hidden md:flex items-center space-x-3">
              <span className="w-8 h-8 bg-sage/10 text-sage rounded-lg flex items-center justify-center text-xs">
                <i className={`fas ${selectedProject.icon}`}></i>
              </span>
              <h3 className="font-extrabold text-sm text-forest">{selectedProject.title}</h3>
            </div>

            {/* Badges / Contact Trigger */}
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline-block text-[10px] font-extrabold uppercase tracking-widest text-sage bg-sage/10 px-2.5 py-0.5 rounded-full border border-sage/10">
                {selectedProject.category}
              </span>
              
              {/* Close Icon Button */}
              <button 
                onClick={handleCloseModal}
                className="text-slateTeal hover:text-forest p-1.5 rounded-lg hover:bg-pebble cursor-pointer transition-colors"
                aria-label="Close details page"
              >
                <i className="fas fa-times text-base sm:text-lg"></i>
              </button>
            </div>
          </header>

          {/* Navigation Tab Bar */}
          <div className="bg-white border-b border-pebble px-4 sm:px-8 flex space-x-2 sm:space-x-6 overflow-x-auto no-scrollbar shrink-0">
            {[
              { id: "overview", label: "Ecosystem Overview", icon: "fa-info-circle" },
              { id: "panels", label: "System Panels & Features", icon: "fa-project-diagram" },
              { id: "roi", label: "Client ROI & Value", icon: "fa-handshake" },
              { id: "gallery", label: "Mockup Gallery", icon: "fa-images" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 border-b-2 font-bold text-[10px] sm:text-xs tracking-wide transition-all whitespace-nowrap cursor-pointer flex items-center space-x-2 ${
                  activeTab === tab.id 
                    ? "border-sage text-forest font-extrabold" 
                    : "border-transparent text-slateTeal hover:text-forest"
                }`}
              >
                <i className={`fas ${tab.icon} text-[10px] sm:text-xs`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Full Screen Scroll Workspace */}
          <div className="flex-grow overflow-y-auto custom-scrollbar bg-pebbleLight/25">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 w-full">
              
              {/* Tab 1: Overview */}
              {activeTab === "overview" && (
                <div className="space-y-8 animate-fade-in-quick">
                  {/* Hero Intro Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Briefing */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-3">
                        <span className="text-[10px] font-bold text-sage uppercase tracking-wider block">Case Study Overview</span>
                        <h4 className="text-xl sm:text-3xl font-extrabold text-forest leading-tight">Solving Operational Friction</h4>
                        <p className="text-xs sm:text-sm text-slateTeal leading-relaxed">
                          {selectedProject.description}
                        </p>
                      </div>

                      {/* Deliverables Section */}
                      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-pebble shadow-sm space-y-4">
                        <h5 className="font-extrabold text-xs sm:text-sm text-forest uppercase tracking-wider">Ecosystem Components Delivered</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProject.deliverables?.map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slateTeal">
                              <span className="w-5 h-5 bg-sage/10 text-sage rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                                <i className="fas fa-check"></i>
                              </span>
                              <span className="leading-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Geographic Deployment Metadata */}
                      {selectedProject.geoMetadata && (
                        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-pebble shadow-sm space-y-4">
                          <h5 className="font-extrabold text-xs sm:text-sm text-forest uppercase tracking-wider flex items-center">
                            <i className="fas fa-map-marked-alt text-sage mr-2"></i> Geographic & Deployment Metadata
                          </h5>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                            <div>
                              <span className="block text-[10px] font-bold text-slateTeal/80 uppercase tracking-wider">Location</span>
                              <span className="block text-xs sm:text-sm font-extrabold text-forest">{selectedProject.geoMetadata.suburb}, {selectedProject.geoMetadata.city}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] font-bold text-slateTeal/80 uppercase tracking-wider">GPS Coordinates</span>
                              <span className="block text-xs sm:text-sm font-extrabold text-forest">{selectedProject.geoMetadata.latitude}, {selectedProject.geoMetadata.longitude}</span>
                            </div>
                            <div>
                              <span className="block text-[10px] font-bold text-slateTeal/80 uppercase tracking-wider">Postal / Region</span>
                              <span className="block text-xs sm:text-sm font-extrabold text-forest">{selectedProject.geoMetadata.postalCode} • {selectedProject.geoMetadata.region}</span>
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                              <span className="block text-[10px] font-bold text-slateTeal/80 uppercase tracking-wider">Local Landmarks</span>
                              <span className="block text-xs text-slateTeal font-medium">{selectedProject.geoMetadata.landmarks?.join(" • ")}</span>
                            </div>
                            <div className="col-span-2 sm:col-span-3">
                              <span className="block text-[10px] font-bold text-slateTeal/80 uppercase tracking-wider">Service Coverage Areas</span>
                              <span className="block text-xs text-slateTeal font-medium">{selectedProject.geoMetadata.coverageAreas?.join(", ")}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Infographic Section */}
                    <div className="lg:col-span-5 space-y-3">
                      <span className="text-[10px] font-bold text-sage uppercase tracking-wider block text-center lg:text-left">Ecosystem Infographic</span>
                      <div 
                        onClick={() => setZoomedImage(selectedProject.heroImage)}
                        className="bg-white p-3 rounded-3xl border border-pebble cursor-zoom-in hover:shadow-md transition-shadow group relative overflow-hidden flex items-center justify-center"
                      >
                        <img 
                          src={selectedProject.heroImage} 
                          alt="Ecosystem Infographic" 
                          className="w-full rounded-2xl object-contain max-h-[380px] sm:max-h-[480px]"
                        />
                        <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-white/95 text-forest text-xs font-bold px-4 py-2 rounded-full shadow flex items-center space-x-1.5">
                            <i className="fas fa-search-plus"></i>
                            <span>Zoom Infographic</span>
                          </span>
                        </div>
                      </div>
                      <span className="block text-[10px] text-center text-slateTeal/80 italic">
                        Click the diagram to view in high resolution.
                      </span>
                    </div>

                  </div>
                </div>
              )}

              {/* Tab 2: System Panels & Features */}
              {activeTab === "panels" && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in-quick">
                  
                  {/* Left Column: Panel List and Features Selector */}
                  <div className="lg:col-span-6 space-y-6">
                    <span className="text-[10px] font-bold text-sage uppercase tracking-wider block">Panel Selector</span>
                    
                    {/* Device panels selectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProject.panels?.map((panel) => (
                        <button
                          key={panel.id}
                          onClick={() => {
                            setActivePanelId(panel.id);
                            setActiveFeatureIndex(0);
                          }}
                          className={`p-4 rounded-2xl border text-left cursor-pointer transition-all ${
                            activePanelId === panel.id 
                              ? "bg-forest border-forest text-white shadow-md" 
                              : "bg-white border-pebble text-forest hover:border-sage/40"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm ${activePanelId === panel.id ? 'bg-white/10 text-white' : 'bg-sage/10 text-sage'}`}>
                              <i className={`fas ${panel.icon}`}></i>
                            </span>
                            <div className="min-w-0">
                              <span className="block font-extrabold text-xs sm:text-sm truncate">{panel.name}</span>
                              <span className={`block text-[9px] ${activePanelId === panel.id ? 'text-pebble/80' : 'text-slateTeal'}`}>{panel.device}</span>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Features list for currently active panel */}
                    {currentPanel && (
                      <div className="bg-white p-6 rounded-3xl border border-pebble shadow-sm space-y-4">
                        <div className="flex items-center justify-between border-b border-pebble pb-3 mb-4">
                          <span className="bg-sage/10 text-sage text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                            Role: {currentPanel.role}
                          </span>
                          <span className="text-[10px] font-bold text-slateTeal/90">
                            {currentPanel.features?.length} Features Integrated
                          </span>
                        </div>
                        
                        <p className="text-xs sm:text-sm text-slateTeal leading-relaxed">
                          {currentPanel.desc}
                        </p>
                        
                        {/* Interactive Features Accordion list */}
                        <div className="space-y-2 pt-2">
                          <span className="block text-[10px] font-bold text-forest uppercase tracking-wider mb-2">Interactive Feature Log</span>
                          <div className="max-h-[350px] overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                            {currentPanel.features?.map((feat, index) => (
                              <div
                                key={index}
                                onClick={() => setActiveFeatureIndex(index)}
                                className={`p-3 rounded-2xl border cursor-pointer transition-all flex items-start space-x-3 text-left ${
                                  activeFeatureIndex === index 
                                    ? "bg-sage/10 border-sage/40 text-forest font-extrabold shadow-sm" 
                                    : "bg-pebbleLight/45 border-transparent text-slateTeal hover:bg-pebbleLight/80"
                                }`}
                              >
                                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5 ${activeFeatureIndex === index ? 'bg-sage text-white' : 'bg-slateTeal/15 text-slateTeal'}`}>
                                  {index + 1}
                                </span>
                                <div className="space-y-1">
                                  <span className="block text-xs sm:text-sm font-bold leading-tight">{feat.title}</span>
                                  {activeFeatureIndex === index && (
                                    <p className="text-[11px] sm:text-xs text-slateTeal font-normal leading-relaxed mt-1 animate-fade-in-quick">
                                      {feat.desc}
                                    </p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Column: Dynamic Mockup Presentation */}
                  <div className="lg:col-span-6 space-y-4">
                    <span className="text-[10px] font-bold text-sage uppercase tracking-wider block text-center lg:text-left">UI Screen Mockup</span>
                    
                    {currentPanel && currentPanel.features?.[activeFeatureIndex] && (
                      <div className="space-y-4">
                        <div 
                          onClick={() => setZoomedImage(currentPanel.features[activeFeatureIndex].image)}
                          className="bg-white p-4 rounded-3xl border border-pebble cursor-zoom-in hover:shadow-md transition-shadow group relative overflow-hidden flex items-center justify-center"
                        >
                          <img 
                            src={currentPanel.features[activeFeatureIndex].image} 
                            alt={currentPanel.features[activeFeatureIndex].title} 
                            className="w-full max-h-[480px] object-contain rounded-2xl"
                          />
                          <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-white/95 text-forest text-xs font-bold px-4 py-2 rounded-full shadow flex items-center space-x-1.5">
                              <i className="fas fa-search-plus"></i>
                              <span>Zoom Screen Layout</span>
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <h5 className="font-extrabold text-sm text-forest mb-1">
                            {currentPanel.features[activeFeatureIndex].title}
                          </h5>
                          <span className="text-[10px] text-slateTeal">
                            Official Module Interface Snapshot • Click to zoom
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              )}

              {/* Tab 3: ROI & Value */}
              {activeTab === "roi" && (
                <div className="space-y-8 animate-fade-in-quick">
                  <div className="text-center max-w-xl mx-auto">
                    <span className="text-[10px] font-bold text-sage uppercase tracking-wider block">Operational Impact</span>
                    <h4 className="text-xl sm:text-3xl font-extrabold text-forest mt-2">How It Helps the Client</h4>
                    <p className="text-xs sm:text-sm text-slateTeal mt-2 leading-relaxed">
                      Deploying our hybrid ecosystem drives efficiency, cuts overhead costs, and elevates professional branding.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedProject.benefits?.map((benefit, i) => (
                      <div key={i} className="bg-white p-6 sm:p-8 rounded-3xl border border-pebble flex flex-col justify-between hover:shadow-md transition-all duration-300">
                        <div>
                          <div className="w-10 h-10 bg-sage/10 text-sage rounded-xl flex items-center justify-center text-base mb-4">
                            <i className={`fas ${benefit.icon}`}></i>
                          </div>
                          <h5 className="font-extrabold text-sm sm:text-base text-forest mb-2">{benefit.title}</h5>
                          <p className="text-xs sm:text-sm text-slateTeal leading-relaxed">{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Consultation Banner */}
                  <div className="bg-gradient-to-r from-forest to-forestDark text-pebble p-6 sm:p-10 rounded-3xl border border-sage/20 shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
                    <div className="text-center md:text-left">
                      <span className="text-[10px] font-bold text-mintGrey uppercase tracking-widest block">Deploy This System</span>
                      <h4 className="text-white font-extrabold text-lg sm:text-xl mt-1">Want to digitize your local institute?</h4>
                      <p className="text-xs sm:text-sm text-mintGrey/80 leading-relaxed mt-2 max-w-lg">
                        We fully customize and build this multi-panel application ecosystem including gate hardware setup to suit your specific batch scale.
                      </p>
                    </div>
                    <button 
                      onClick={() => {
                        handleCloseModal();
                        // Trigger App navigation to contact
                        const contactTabBtn = document.querySelector('button[aria-label="Navigate to contact"]');
                        if (contactTabBtn) contactTabBtn.click();
                      }}
                      className="bg-white hover:bg-pebble text-forest font-extrabold text-xs sm:text-sm px-6 py-3 rounded-2xl transition-colors cursor-pointer shrink-0 shadow"
                    >
                      Request Technical Consultation
                    </button>
                  </div>
                </div>
              )}

              {/* Tab 4: Gallery */}
              {activeTab === "gallery" && (
                <div className="space-y-6 animate-fade-in-quick">
                  <div className="text-center max-w-md mx-auto mb-2">
                    <span className="text-[10px] font-bold text-sage uppercase tracking-wider block">Mockup Gallery</span>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-forest mt-1">Explore Interface Layouts</h4>
                    <p className="text-xs text-slateTeal mt-1">Click on any screenshot to view in full resolution.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {selectedProject.gallery?.map((img, i) => (
                      <div 
                        key={i} 
                        onClick={() => setZoomedImage(img.path)}
                        className="group bg-white p-3 rounded-3xl border border-pebble cursor-zoom-in hover:shadow-md transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="aspect-[4/3] rounded-xl overflow-hidden bg-pebbleLight flex items-center justify-center border border-pebble/30">
                          <img 
                            src={img.path} 
                            alt={img.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="w-10 h-10 bg-white text-forest rounded-full flex items-center justify-center shadow-md">
                            <i className="fas fa-search-plus text-xs"></i>
                          </span>
                        </div>
                        <div className="mt-3 text-center">
                          <span className="block text-[10px] font-bold text-forest truncate px-1">{img.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Lightbox Modal (rendered inside the portal so it overlays on top of the details view) */}
          {zoomedImage && (
            <div 
              className="fixed inset-0 bg-black/95 z-[10000] flex flex-col items-center justify-center p-4 backdrop-blur-sm animate-fade-in cursor-zoom-out"
              onClick={() => setZoomedImage(null)}
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 text-white/80 hover:text-white text-xl p-2 cursor-pointer bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
                onClick={() => setZoomedImage(null)}
                aria-label="Close zoom view"
              >
                <i className="fas fa-times"></i>
              </button>
              
              <img 
                src={zoomedImage} 
                alt="Zoomed snapshot" 
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl animate-lightbox"
              />
              
              {/* Find and display caption */}
              <span className="text-white/95 text-xs sm:text-sm font-semibold mt-4 text-center max-w-lg bg-black/70 px-4 py-2.5 rounded-full border border-white/10">
                {selectedProject.gallery?.find(img => img.path === zoomedImage)?.title || "Ecosystem Preview Showcase"}
              </span>
            </div>
          )}

        </div>,
        document.body
      )}
    </div>
  );
}
