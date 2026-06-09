import React from 'react';

export default function Contact({
  formName,
  setFormName,
  formPhone,
  setFormPhone,
  formEmail,
  setFormEmail,
  formService,
  setFormService,
  formBrief,
  setFormBrief,
  formSubmitted,
  onSubmit
}) {
  return (
    <section className="page-transition py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sage font-extrabold tracking-widest text-xs uppercase">Get Connected</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest mt-1">Start Your Project Today</h2>
          <p className="mt-3 text-sm sm:text-base text-slateTeal max-w-2xl mx-auto">
            Inquiries feed securely into our local tracking database. Located physically in Makroniya for quick coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 text-left">
          {/* Contact Form */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-pebble shadow-sm">
            <h3 className="text-lg font-extrabold text-forest mb-4">Secure Client Consultation Form</h3>
            
            {!formSubmitted ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slateTeal uppercase tracking-wider mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-pebble focus:ring-1 focus:ring-sage focus:outline-none text-xs text-forest bg-white"
                      placeholder="Arun Kumar"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slateTeal uppercase tracking-wider mb-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-pebble focus:ring-1 focus:ring-sage focus:outline-none text-xs text-forest bg-white"
                      placeholder="+91 94254 XXXXX"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slateTeal uppercase tracking-wider mb-1">Email Address</label>
                  <input 
                      type="email" 
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-pebble focus:ring-1 focus:ring-sage focus:outline-none text-xs text-forest bg-white"
                      placeholder="sagarsync.query@gmail.com"
                    />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slateTeal uppercase tracking-wider mb-1">Target Service / Bundle</label>
                  <select 
                    value={formService}
                    onChange={(e) => setFormService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-pebble focus:ring-1 focus:ring-sage focus:outline-none text-xs bg-white text-forest"
                  >
                    <option value="General Query">General Consultancy</option>
                    <option value="Coaching Bundle">Coaching Scale-Up Bundle (₹19,999)</option>
                    <option value="Builder Bundle">Contractor Blueprint Bundle (₹16,499)</option>
                    <option value="Local Business Bundle">Local Business Kickstart (₹11,999)</option>
                    <option value="Web/App Development">Custom Web/App coding</option>
                    <option value="CAD Maps">Architectural House Maps</option>
                    <option value="Video Editing">Creative Commercial Videos</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slateTeal uppercase tracking-wider mb-1">Brief Project Specs</label>
                  <textarea 
                    rows="4" 
                    required
                    value={formBrief}
                    onChange={(e) => setFormBrief(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-pebble focus:ring-1 focus:ring-sage focus:outline-none text-xs text-forest bg-white"
                    placeholder="Explain your design parameters or application goals..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-forest hover:bg-forestDark text-pebble font-bold py-4 rounded-xl transition-all active:scale-95 shadow cursor-pointer"
                >
                  Save to Sagar Sync Spreadsheet DB
                </button>
              </form>
            ) : (
              <div className="p-4 bg-sage/10 border border-sage/40 rounded-2xl text-center py-8">
                <i className="fas fa-check-circle text-sage text-3xl mb-3 block"></i>
                <p className="text-sm font-bold text-forest">Lead Logged Into Sagar Sync Local CRM!</p>
                <p className="text-xs text-slateTeal mt-2">We will review your specs and contact your number within 4 hours.</p>
              </div>
            )}
          </div>

          {/* Direct Representatives & Address details */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="bg-forest text-pebble p-6 sm:p-8 rounded-3xl shadow-lg border border-sage/15">
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">Direct Contact Partners</h3>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-sage rounded-full flex items-center justify-center text-forest font-bold shrink-0">
                    PT
                  </div>
                  <div>
                    <h4 className="font-extrabold">Prathvi Singh Thakur (Full-Stack Partner)</h4>
                    <p className="text-[10px] text-mintGrey">Point of Contact: Tech, App Design, Hosting Setup</p>
                    <a href="tel:+918962685091" className="font-bold text-white block mt-1 hover:underline">
                      <i className="fas fa-phone mr-1.5 text-sage"></i>+91 8962685091
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-slateTeal rounded-full flex items-center justify-center text-pebble font-bold shrink-0">
                    KP
                  </div>
                  <div>
                    <h4 className="font-extrabold">Krishna Pathak (Mobile Partner)</h4>
                    <p className="text-[10px] text-mintGrey">Point of Contact: Maps, Promotions, Project Budgeting</p>
                    <a href="tel:+918827050460" className="font-bold text-white block mt-1 hover:underline">
                      <i className="fas fa-phone mr-1.5 text-slateTeal"></i>+91 8827050460
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Local physical assurance card */}
            <div className="bg-white p-6 rounded-3xl border border-pebble flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-sage/10 text-sage rounded-full flex items-center justify-center text-lg mb-3">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h4 className="font-extrabold text-forest text-sm sm:text-base">Makroniya, Sagar, MP (470004)</h4>
              <p className="text-xs text-slateTeal mt-1 max-w-sm">
                We execute walk-throughs for structural CAD drafting and conduct manual site-shootings for marketing videos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
