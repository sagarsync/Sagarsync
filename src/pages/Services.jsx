import React, { useState } from 'react';
import { services, bundles } from '../data/companyData.js';

export default function Services({ onSelectBundle }) {
  const [activeBundle, setActiveBundle] = useState(null);

  const toggleBundle = (bundleId) => {
    if (activeBundle === bundleId) {
      setActiveBundle(null);
    } else {
      setActiveBundle(bundleId);
    }
  };

  return (
    <section className="page-transition py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sage font-extrabold tracking-widest text-xs uppercase">What We Offer</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest mt-1">High-Impact Services & Bundles</h2>
          <p className="mt-3 text-sm sm:text-base text-slateTeal max-w-2xl mx-auto">
            Specific customized plans built precisely to your goals, alongside high-value local business launch bundles.
          </p>
        </div>

        {/* Tailored Services Grid */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-6 h-1 bg-sage rounded-full"></span>
            <h3 className="text-xl font-extrabold text-forest">Tailored Specialized Services</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div key={service.id} className="bg-white p-6 sm:p-8 rounded-2xl border border-pebble shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left">
                <div>
                  <div className={`w-10 h-10 ${service.theme === 'sage' ? 'bg-sage/10 text-sage' : 'bg-slateTeal/10 text-slateTeal'} rounded-xl flex items-center justify-center text-lg mb-4`}>
                    <i className={`fas ${service.icon}`}></i>
                  </div>
                  <h4 className="font-extrabold text-lg text-forest mb-2">{service.title}</h4>
                  <p className="text-slateTeal text-xs sm:text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
                <span className="text-[10px] font-bold text-slateTeal uppercase tracking-wider bg-pebble px-3 py-1.5 rounded-full inline-block self-start">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium Regional Bundles */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <span className="w-6 h-1 bg-sage rounded-full"></span>
            <h3 className="text-xl font-extrabold text-forest">Premium Regional Bundles</h3>
          </div>
          
          <div className="space-y-4">
            {bundles.map(bundle => {
              const isExpanded = activeBundle === bundle.id;
              return (
                <div key={bundle.id} className="bg-white rounded-2xl border border-pebble shadow-sm overflow-hidden text-left">
                  {/* Bundle Header */}
                  <div 
                    className="p-5 sm:p-6 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer"
                    onClick={() => toggleBundle(bundle.id)}
                  >
                    <div className="flex items-center space-x-4 mb-4 md:mb-0">
                      <div className={`w-12 h-12 ${bundle.theme === 'sage' ? 'bg-sage text-white' : 'bg-slateTeal text-white'} rounded-xl flex items-center justify-center text-xl shrink-0`}>
                        <i className={`fas ${bundle.icon}`}></i>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-base sm:text-lg text-forest flex items-center flex-wrap gap-2">
                          {bundle.title}
                          {bundle.popular && (
                            <span className="bg-sage/20 text-forest text-[10px] font-extrabold px-2 py-0.5 rounded-full">POPULAR</span>
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

                  {/* Bundle Details */}
                  {isExpanded && (
                    <div className="border-t border-pebble bg-pebbleLight/50 p-5 sm:p-6 transition-all duration-300">
                      <h5 className="font-bold text-forest text-sm mb-3">Covered Services Stack:</h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-forest mb-6">
                        <ul className="space-y-2">
                          {bundle.specs.slice(0, Math.ceil(bundle.specs.length / 2)).map((spec, i) => (
                            <li key={i} className="flex items-start">
                              <i className={`fas fa-check ${bundle.theme === 'sage' ? 'text-sage' : 'text-slateTeal'} mt-1 mr-2 text-xs`}></i>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                        <ul className="space-y-2">
                          {bundle.specs.slice(Math.ceil(bundle.specs.length / 2)).map((spec, i) => (
                            <li key={i} className="flex items-start">
                              <i className={`fas fa-check ${bundle.theme === 'sage' ? 'text-sage' : 'text-slateTeal'} mt-1 mr-2 text-xs`}></i>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectBundle(bundle.optionValue, bundle.title);
                          }}
                          className="bg-forest hover:bg-forestDark text-pebble text-xs font-bold px-5 py-3 rounded-xl shadow transition-transform active:scale-95 cursor-pointer"
                        >
                          Select This Pack
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
    </section>
  );
}
