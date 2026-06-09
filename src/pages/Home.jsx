import React from 'react';

export default function Home({ onNavigate }) {
  return (
    <section className="page-transition">
      {/* Hero / Pitch Section */}
      <div className="relative bg-gradient-to-br from-forest to-forestDark text-pebble py-12 sm:py-20 lg:py-28 overflow-hidden px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slateTeal/20 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="text-center lg:text-left">
              <span className="bg-sage/20 text-mintGrey px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-sage/30 inline-flex items-center mb-6">
                <i className="fas fa-map-marker-alt text-sage mr-2"></i>Serving Sagar, MP Locally & Digitally
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                Syncing Local Trust with <span className="text-sage">Digital Mastery</span>
              </h1>
              <p className="text-sm sm:text-base text-mintGrey mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We are a dedicated, highly synchronized 4-person professional squad in Sagar. We build lightning-fast
                web directories, responsive mobile applications, compliant structural 2D/3D civil blueprints, and
                dynamic promotional marketing campaigns.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto bg-sage hover:bg-opacity-90 active:scale-95 text-forestDark px-8 py-4 rounded-xl font-bold shadow-lg transition-all text-center cursor-pointer"
                >
                  Explore Bundle Services
                </button>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="w-full sm:w-auto border border-mintGrey hover:bg-white hover:text-forestDark px-8 py-4 rounded-xl font-bold transition-all text-center text-pebble cursor-pointer"
                >
                  Meet the Team Portfolio
                </button>
              </div>
            </div>

            {/* Service Card preview list */}
            <div className="relative flex justify-center w-full mt-6 lg:mt-0">
              <div className="w-full max-w-md bg-forestDark/60 border border-sage/25 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
                <div className="space-y-5">
                  <div className="flex items-center space-x-4">
                    <div className="w-11 h-11 rounded-xl bg-sage/10 border border-sage/40 flex items-center justify-center text-sage text-lg shrink-0">
                      <i className="fas fa-laptop-code"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-pebble text-sm sm:text-base">Lead Full-Stack Developers</h3>
                      <p className="text-xs text-mintGrey">Websites, Apps, Domain, Fast SEO Routing</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-11 h-11 rounded-xl bg-slateTeal/10 border border-slateTeal/40 flex items-center justify-center text-slateTeal text-lg shrink-0">
                      <i className="fas fa-drafting-compass"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-pebble text-sm sm:text-base">Expert Civil CAD Engineer</h3>
                      <p className="text-xs text-mintGrey">2D structural layouts, 3D home modeling</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-11 h-11 rounded-xl bg-sage/10 border border-sage/40 flex items-center justify-center text-sage text-lg shrink-0">
                      <i className="fas fa-video"></i>
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-pebble text-sm sm:text-base">Creative Video Producer</h3>
                      <p className="text-xs text-mintGrey">Ad Reels, Commercial scripting & editing</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-5 border-t border-sage/20 text-center">
                  <p className="text-xs text-mintGrey">Serving coaching centers, builders & retailers in Sagar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-12 sm:py-16 bg-white border-b border-pebble">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-pebbleLight/50 rounded-2xl border border-pebble/40 text-center md:text-left">
              <div className="w-14 h-14 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 text-xl">
                <i className="fas fa-user-shield"></i>
              </div>
              <h3 className="text-lg font-extrabold text-forest mb-2">100% Direct Transparency</h3>
              <p className="text-slateTeal text-xs sm:text-sm">
                No random outsourcing. View exact individual developer/engineer portfolios before commissioning projects.
              </p>
            </div>
            <div className="p-6 bg-pebbleLight/50 rounded-2xl border border-pebble/40 text-center md:text-left">
              <div className="w-14 h-14 bg-slateTeal/10 text-slateTeal rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 text-xl">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3 className="text-lg font-extrabold text-forest mb-2">Hyper-Local Connection</h3>
              <p className="text-slateTeal text-xs sm:text-sm">
                Based directly in Makroniya, Sagar. We understand regional demands and can execute physical location visits anytime.
              </p>
            </div>
            <div className="p-6 bg-pebbleLight/50 rounded-2xl border border-pebble/40 text-center md:text-left">
              <div className="w-14 h-14 bg-sage/10 text-sage rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4 text-xl">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="text-lg font-extrabold text-forest mb-2">All-in-One Capabilities</h3>
              <p className="text-slateTeal text-xs sm:text-sm">
                Avoid hiring multiple disjointed freelancers. Build architecture plans, custom code, and promotional ads simultaneously.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Local Call to Action */}
      <div className="py-12 sm:py-16 bg-pebbleLight px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-forest rounded-3xl text-pebble p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Sagar MP Local Business Catalyst</h3>
              <p className="text-mintGrey text-xs sm:text-sm leading-relaxed">
                Let's get your local business accurately mapped on Google, deploy an ultra-fast website, and publish viral advertising.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full md:w-auto bg-sage hover:bg-opacity-95 active:scale-95 text-forestDark px-6 sm:px-8 py-4 rounded-xl font-bold shadow-lg transition-transform text-center whitespace-nowrap cursor-pointer"
            >
              <i className="fas fa-phone-alt mr-2"></i> Book consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
