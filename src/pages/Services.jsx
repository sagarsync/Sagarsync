import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { services, bundles } from '../data/companyData.js';

export default function Services({ onSelectBundle }) {
  const [selectedServiceId, setSelectedServiceId] = useState(services[0].id);
  const [activeBundle, setActiveBundle] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const selectedService = services.find(s => s.id === selectedServiceId) || services[0];

  const toggleBundle = (bundleId) => {
    setActiveBundle(activeBundle === bundleId ? null : bundleId);
  };

  const openLightbox = (index) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = () => {
    const imagesWithIndices = selectedService.items
      .map((item, index) => ({ ...item, originalIndex: index }))
      .filter(item => item.image);
    
    if (imagesWithIndices.length === 0) return;
    
    const currentPos = imagesWithIndices.findIndex(item => item.originalIndex === activeImageIndex);
    if (currentPos !== -1) {
      const nextPos = (currentPos + 1) % imagesWithIndices.length;
      setActiveImageIndex(imagesWithIndices[nextPos].originalIndex);
    }
  };

  const prevImage = () => {
    const imagesWithIndices = selectedService.items
      .map((item, index) => ({ ...item, originalIndex: index }))
      .filter(item => item.image);
    
    if (imagesWithIndices.length === 0) return;
    
    const currentPos = imagesWithIndices.findIndex(item => item.originalIndex === activeImageIndex);
    if (currentPos !== -1) {
      const prevPos = (currentPos - 1 + imagesWithIndices.length) % imagesWithIndices.length;
      setActiveImageIndex(imagesWithIndices[prevPos].originalIndex);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, selectedServiceId]);

  // Reset lightbox when changing services
  useEffect(() => {
    setActiveImageIndex(null);
  }, [selectedServiceId]);

  // Lock underlying page scroll when lightbox is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeImageIndex]);

  return (
    <section className="page-transition py-12 sm:py-16 px-4 bg-pebbleLight min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <span className="text-sage font-extrabold tracking-widest text-xs uppercase bg-white px-4 py-2 rounded-full border border-pebble shadow-sm">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest mt-4">Professional Services & Bundles</h2>
          <p className="mt-4 text-sm sm:text-base text-slateTeal max-w-2xl mx-auto leading-relaxed">
            Select a service category to explore our comprehensive solutions catalog or review our pre-packaged regional bundles below.
          </p>
        </div>

        {/* 1. Two-Column Sidebar/Dashboard Service Catalog */}
        <div className="bg-white rounded-3xl border border-pebble shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Sidebar Menu: 10 Categories */}
            <div className="lg:col-span-4 bg-pebbleLight/40 border-r border-pebble p-6 lg:p-8 flex flex-col justify-start">
              <h3 className="font-extrabold text-xs text-forest uppercase tracking-widest mb-6 text-center lg:text-left">
                Service Categories
              </h3>
              
              {/* Desktop Menu list */}
              <div className="hidden lg:flex flex-col space-y-2">
                {services.map(s => {
                  const isSelected = s.id === selectedServiceId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-2xl transition-all text-left font-bold text-sm cursor-pointer ${
                        isSelected 
                          ? 'bg-forest text-white shadow-md border-transparent' 
                          : 'bg-white hover:bg-pebble text-forest border border-pebble'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${
                        isSelected 
                          ? 'bg-white/10 text-white' 
                          : s.theme === 'sage' ? 'bg-sage/10 text-sage' : 'bg-slateTeal/10 text-slateTeal'
                      }`}>
                        <i className={`fas ${s.icon}`}></i>
                      </div>
                      <span className="truncate">{s.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Mobile Horizontal Swipe Menu */}
              <div className="flex lg:hidden overflow-x-auto gap-2 pb-4 no-scrollbar">
                {services.map(s => {
                  const isSelected = s.id === selectedServiceId;
                  return (
                    <button
                      key={s.id}
                      onClick={() => setSelectedServiceId(s.id)}
                      className={`whitespace-nowrap flex items-center space-x-2 px-4 py-3 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${
                        isSelected 
                          ? 'bg-forest text-white shadow' 
                          : 'bg-white text-forest border border-pebble'
                      }`}
                    >
                      <i className={`fas ${s.icon}`}></i>
                      <span>{s.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Details Panel */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              
              {/* Details Heading & Catalog */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-pebble pb-6 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 ${
                      selectedService.theme === 'sage' ? 'bg-sage/10 text-sage' : 'bg-slateTeal/10 text-slateTeal'
                    }`}>
                      <i className={`fas ${selectedService.icon}`}></i>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-forest">{selectedService.title}</h3>
                      <p className="text-xs sm:text-sm text-slateTeal leading-relaxed">{selectedService.desc}</p>
                    </div>
                  </div>
                  
                  <span className="self-start sm:self-center bg-sage/15 text-forest font-bold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider whitespace-nowrap">
                    Pricing on Scope
                  </span>
                </div>

                {/* Sub-Services Grid List */}
                <div>
                  <h4 className="font-extrabold text-xs text-forest uppercase tracking-widest mb-4">
                    Detailed Services Catalogue
                  </h4>
                  
                  {/* Adjust height if service has showcase images */}
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 overflow-y-auto pr-2 custom-scrollbar ${
                    selectedService.items.some(item => item.image) 
                      ? 'max-h-[550px] lg:max-h-[600px]' 
                      : 'max-h-[350px] lg:max-h-[400px]'
                  }`}>
                    {selectedService.items.map((item, idx) => {
                      const hasImage = !!item.image;
                      return (
                        <div 
                          key={idx} 
                          className={`bg-pebbleLight/30 rounded-2xl border border-pebble/40 hover:bg-white hover:shadow-sm transition-all flex flex-col ${
                            hasImage ? 'p-3' : 'p-4 flex-row items-start space-x-3'
                          }`}
                        >
                          {hasImage && (
                            <div 
                              onClick={() => openLightbox(idx)}
                              className="relative aspect-video w-full mb-3 rounded-xl overflow-hidden group cursor-pointer border border-pebble/20 shadow-sm bg-pebbleLight flex items-center justify-center animate-fade-in"
                            >
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                              />
                              <div className="absolute inset-0 bg-forest/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-white/95 text-forest w-10 h-10 rounded-full shadow-md scale-90 group-hover:scale-100 transition-all duration-300 flex items-center justify-center">
                                  <i className="fas fa-search-plus text-sm"></i>
                                </span>
                              </div>
                            </div>
                          )}

                          <div className="flex items-start space-x-3">
                            <span className="w-5 h-5 bg-sage/10 text-sage rounded-full flex items-center justify-center shrink-0 mt-0.5">
                              <i className="fas fa-check text-[9px]"></i>
                            </span>
                            <div>
                              <strong className="text-xs sm:text-sm text-forest block font-extrabold mb-0.5">
                                {item.name}
                              </strong>
                              <span className="text-xs text-slateTeal leading-relaxed">
                                {item.desc}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Action Quote Button */}
              <div className="border-t border-pebble pt-6 mt-6 flex justify-end">
                <button
                  onClick={() => onSelectBundle(selectedService.title, selectedService.title)}
                  className="bg-forest hover:bg-forestDark active:scale-95 text-white text-xs sm:text-sm font-bold px-6 py-4 rounded-xl shadow-md transition-transform cursor-pointer flex items-center space-x-2"
                >
                  <i className="far fa-paper-plane"></i>
                  <span>Request Custom Quote for {selectedService.title}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 2. Premium Regional Bundles */}
        <div>
          <div className="flex items-center space-x-3 mb-8">
            <span className="w-8 h-1 bg-sage rounded-full"></span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-forest">Premium Regional Bundles</h3>
          </div>
          
          <div className="space-y-4">
            {bundles.map(bundle => {
              const isExpanded = activeBundle === bundle.id;
              return (
                <div key={bundle.id} className="bg-white rounded-2xl border border-pebble shadow-sm overflow-hidden text-left hover:shadow-md transition-shadow">
                  {/* Bundle Header */}
                  <div 
                    className="p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer select-none"
                    onClick={() => toggleBundle(bundle.id)}
                  >
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                        bundle.theme === 'sage' ? 'bg-sage text-white' : 'bg-slateTeal text-white'
                      }`}>
                        <i className={`fas ${bundle.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base sm:text-lg text-forest flex items-center flex-wrap gap-2">
                          {bundle.title}
                          {bundle.popular && (
                            <span className="bg-sage text-white text-[9px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">POPULAR</span>
                          )}
                        </h4>
                        <p className="text-slateTeal text-xs">{bundle.subtitle}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between w-full md:w-auto md:space-x-6">
                      <div className="text-left md:text-right">
                        <span className="text-[9px] text-slateTeal block font-bold uppercase tracking-wider">All-Inclusive Price</span>
                        <span className="text-xl font-extrabold text-forest">{bundle.price}</span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-pebbleLight flex items-center justify-center text-forest transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <i className="fas fa-chevron-down text-xs"></i>
                      </div>
                    </div>
                  </div>

                  {/* Bundle Details Expansion */}
                  {isExpanded && (
                    <div className="border-t border-pebble bg-pebbleLight/50 p-6 sm:p-8 transition-all duration-300">
                      <h5 className="font-bold text-forest text-xs uppercase tracking-wider mb-4">Covered Services Stack:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-forest mb-6">
                        <ul className="space-y-3">
                          {bundle.specs.slice(0, Math.ceil(bundle.specs.length / 2)).map((spec, i) => (
                            <li key={i} className="flex items-start">
                              <i className={`fas fa-check ${bundle.theme === 'sage' ? 'text-sage' : 'text-slateTeal'} mt-1 mr-3 text-xs`}></i>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="space-y-3">
                          {bundle.specs.slice(Math.ceil(bundle.specs.length / 2)).map((spec, i) => (
                            <li key={i} className="flex items-start">
                              <i className={`fas fa-check ${bundle.theme === 'sage' ? 'text-sage' : 'text-slateTeal'} mt-1 mr-3 text-xs`}></i>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-end border-t border-pebble pt-5">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectBundle(bundle.optionValue, bundle.title);
                          }}
                          className="bg-forest hover:bg-forestDark active:scale-95 text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow transition-transform cursor-pointer"
                        >
                          Select & Quote {bundle.title}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && selectedService.items[activeImageIndex] && 
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest/90 backdrop-blur-md p-4 sm:p-6 transition-all duration-300 overflow-hidden">
            {/* Close Area Backdrop */}
            <div className="absolute inset-0 cursor-zoom-out" onClick={closeLightbox}></div>
            
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer border border-white/10"
              aria-label="Close Lightbox"
            >
              <i className="fas fa-times text-xl"></i>
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 z-50 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer border border-white/10"
              aria-label="Previous Image"
            >
              <i className="fas fa-chevron-left text-lg"></i>
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 z-50 bg-white/10 hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all cursor-pointer border border-white/10"
              aria-label="Next Image"
            >
              <i className="fas fa-chevron-right text-lg"></i>
            </button>

            {/* Lightbox Content Container */}
            <div className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center">
              {/* Image Showcase */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black/45 max-h-[60vh] sm:max-h-[65vh] lg:max-h-[70vh] flex items-center justify-center">
                <img 
                  src={selectedService.items[activeImageIndex].image} 
                  alt={selectedService.items[activeImageIndex].name} 
                  className="max-w-full max-h-[60vh] sm:max-h-[65vh] lg:max-h-[70vh] object-contain select-none"
                />
              </div>

              {/* Info Card */}
              <div className="mt-4 sm:mt-6 w-full max-w-xl text-center text-white px-6 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg animate-fade-in">
                <h4 className="text-lg font-extrabold mb-1">{selectedService.items[activeImageIndex].name}</h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{selectedService.items[activeImageIndex].desc}</p>
                <div className="mt-3 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                  Image {selectedService.items.filter(item => item.image).findIndex(item => item.name === selectedService.items[activeImageIndex].name) + 1} of {selectedService.items.filter(item => item.image).length}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )
      }
    </section>
  );
}
