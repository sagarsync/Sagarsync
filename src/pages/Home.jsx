import React from 'react';

const ringIcons = [
  { icon: 'fa-camera', top: '0%', left: '50%' },
  { icon: 'fa-balance-scale', top: '14.6%', left: '85.4%' },
  { icon: 'fa-laptop-code', top: '50%', left: '100%' },
  { icon: 'fa-shopping-cart', top: '85.4%', left: '85.4%' },
  { icon: 'fa-building', top: '100%', left: '50%' },
  { icon: 'fa-file-invoice', top: '85.4%', left: '14.6%' },
  { icon: 'fa-users', top: '50%', left: '0%' },
  { icon: 'fa-campground', top: '14.6%', left: '14.6%' }
];

const homeServices = [
  { title: "Design & Branding", icon: "fa-palette", desc: "Logos, banners, brochures, visiting cards, invitations, and more." },
  { title: "Websites & Digital Presence", icon: "fa-globe", desc: "Business websites, e-commerce, landing pages & maintenance." },
  { title: "Software & App Development", icon: "fa-code", desc: "Billing, stock, sales, mobile apps & custom software solutions." },
  { title: "Coaching Institute Solutions", icon: "fa-graduation-cap", desc: "Notes, fees, results, student apps & full digital setup." },
  { title: "Shop & Retail Owner Solutions", icon: "fa-store", desc: "Billing, stock alerts, profits, reports & much more." },
  { title: "Printing Services", icon: "fa-print", desc: "Visiting cards, flex, notebooks, brochures, booklets & stationery." },
  { title: "Photography & Videography", icon: "fa-camera", desc: "Weddings, events, products, reels & video editing." },
  { title: "Legal & Financial Services", icon: "fa-balance-scale", desc: "Legal advice, ITR, GST, CA services & registrations." },
  { title: "Events & Function Management", icon: "fa-calendar-alt", desc: "Weddings, parties, corporate events & full management." },
  { title: "Construction & Trade Services", icon: "fa-tools", desc: "House mapping, CAD, carpentry, welding & construction work." }
];

const steps = [
  { num: 1, title: "You Contact Us", icon: "fa-comments", desc: "Share your requirement via form, call, email or WhatsApp." },
  { num: 2, title: "We Understand", icon: "fa-search", desc: "We discuss your needs in detail to know the real scope." },
  { num: 3, title: "We Create a Plan", icon: "fa-drafting-compass", desc: "Get a rough layout or proposal - absolutely no charge." },
  { num: 4, title: "You Get a Quote", icon: "fa-file-invoice", desc: "Receive a fair, transparent and itemised quote with timeline." },
  { num: 5, title: "We Deliver", icon: "fa-rocket", desc: "Work begins. We deliver quality on time, every time." }
];

export default function Home({ onNavigate }) {
  return (
    <section className="page-transition bg-pebbleLight min-h-screen" itemScope itemType="https://schema.org/LocalBusiness">
      {/* 1. Hero / Pitch Section */}
      <div className="relative py-16 sm:py-24 lg:py-28 overflow-hidden px-4 border-b border-pebble/30 bg-gradient-to-b from-white to-pebbleLight">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-mintGrey/15 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Column: Copy & Badges */}
            <div className="text-center lg:text-left lg:col-span-7">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-forest" itemProp="name">
                One Platform.<br />
                <span className="text-sage">Every Solution.</span>
              </h1>
              <p className="text-base sm:text-lg text-slateTeal mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0" itemProp="description">
                Sagar Sync is a comprehensive, all-in-one service platform based in Sagar, Madhya Pradesh. From digital to design, legal to construction — one platform for 10+ service categories with transparent, scope-based pricing and free concept drafts.
              </p>

              {/* Values Badges Row (4 Items) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto lg:mx-0">
                {[
                  { title: "Understand First", icon: "fa-comments" },
                  { title: "Plan Smart", icon: "fa-drafting-compass" },
                  { title: "Quote Fair", icon: "fa-receipt" },
                  { title: "Deliver Excellence", icon: "fa-shield-alt" }
                ].map((badge, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-white border border-pebble rounded-2xl shadow-sm">
                    <div className="w-10 h-10 bg-sage/10 rounded-xl flex items-center justify-center text-sage mb-2">
                      <i className={`fas ${badge.icon}`}></i>
                    </div>
                    <span className="text-xs font-bold text-forest text-center">{badge.title}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto bg-forest hover:bg-forestDark active:scale-95 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:shadow-lg transition-all text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Describe Your Requirement</span>
                  <i className="fas fa-arrow-right text-xs"></i>
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="w-full sm:w-auto bg-white border border-pebble hover:bg-pebbleLight active:scale-95 text-forest px-8 py-4 rounded-xl font-bold shadow-sm transition-all text-center flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <i className="fas fa-th-large text-xs"></i>
                  <span>Explore Services</span>
                </button>
              </div>
            </div>

            {/* Right Column: Orbiting Rings System (Hidden on Mobile) */}
            <div className="hidden lg:flex lg:col-span-5 justify-center w-full relative h-[300px] sm:h-[400px] items-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] relative border border-dashed border-mintGrey/60 rounded-full animate-orbit flex items-center justify-center">
                {/* Center S Logo (Circular and enlarged) */}
                <div className="absolute w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full shadow-lg border border-pebble flex items-center justify-center p-2 animate-orbit-reverse">
                  <img
                    src="/Sagar_Sync_favicon.png"
                    alt="Sagar Sync Logo"
                    className="w-28 h-28 sm:w-36 sm:h-36 object-contain"
                  />
                </div>

                {/* Surrounding floating icon circles (Enlarged) */}
                {ringIcons.map((item, index) => (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      top: item.top,
                      left: item.left,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <div className="animate-orbit-reverse">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border border-pebble rounded-full shadow-md flex items-center justify-center text-forest text-sm sm:text-xl">
                        <i className={`fas ${item.icon}`}></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. "Every Service You Need, Under One Roof" Section */}
      <section className="py-16 sm:py-20 px-4 bg-white" aria-label="Service Categories">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest">
              Every Service You Need, Under <span className="text-sage">One Roof</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slateTeal max-w-xl mx-auto">
              Our 10 core categories ensure you never need to hire multiple disconnected freelancers.
            </p>
          </div>

          {/* Grid of 10 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {homeServices.map((service, index) => (
              <div
                key={index}
                onClick={() => onNavigate('services')}
                className="bg-white p-6 rounded-2xl border border-pebble shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer flex flex-col items-center text-center reveal-on-scroll"
              >
                <div className="w-12 h-12 rounded-full bg-sage/10 text-sage flex items-center justify-center text-lg mb-4">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                <h3 className="font-extrabold text-sm sm:text-base text-forest mb-2">{service.title}</h3>
                <p className="text-xs text-slateTeal leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>

          {/* View All Services Button */}
          <div className="text-center">
            <button
              onClick={() => onNavigate('services')}
              className="bg-white border border-pebble hover:bg-pebbleLight text-forest font-bold px-6 py-3 rounded-xl shadow-sm transition-all text-sm flex items-center space-x-2 cursor-pointer mx-auto"
            >
              <span>View All Services</span>
              <i className="fas fa-th-large text-xs"></i>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Stats / Counter Ribbon */}
      <aside className="bg-forest text-pebble py-10 border-t border-b border-sage/10" aria-label="Key Statistics">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { num: "20+", label: "Happy Clients", icon: "fa-users" },
              { num: "50+", label: "Projects Completed", icon: "fa-briefcase" },
              { num: "100+", label: "Service Categories", icon: "fa-award" },
              { num: "90%", label: "Local - Sagar Based", icon: "fa-map-marker-alt" },
              { num: "Trusted", label: "By Businesses", icon: "fa-handshake" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 reveal-on-scroll">
                <div className="w-8 h-8 rounded-full bg-sage/15 text-mintGrey flex items-center justify-center text-xs mb-1">
                  <i className={`fas ${stat.icon}`}></i>
                </div>
                <span className="text-2xl font-extrabold text-white">{stat.num}</span>
                <span className="text-xs text-mintGrey">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* 4. "Our Simple 5-Step Process" Section */}
      <div className="py-16 sm:py-24 px-4 bg-white border-b border-pebble/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-on-scroll">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-forest">
              Our Simple <span className="text-sage">5-Step Process</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slateTeal max-w-xl mx-auto">
              We operate transparently from the first point of contact to final project delivery.
            </p>
          </div>

          {/* Stepper Timeline */}
          <div className="relative">

            {/* Desktop Stepper Timeline (Horizontal Layout) */}
            <div className="hidden md:block">
              {/* Horizontal Line */}
              <div className="absolute top-5 left-0 right-0 h-0.5 border-t border-dashed border-sage/45 z-0"></div>

              <div className="grid grid-cols-5 gap-8 relative z-10">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center reveal-on-scroll">
                    {/* Step Bubble Counter */}
                    <div className="w-10 h-10 bg-white border-2 border-sage rounded-full flex items-center justify-center font-bold text-forest text-sm z-10 relative shadow-sm">
                      {step.num}
                    </div>

                    {/* Icon Badge */}
                    <div className="w-14 h-14 bg-sage/10 text-sage rounded-2xl flex items-center justify-center text-xl my-4 shadow-sm border border-sage/10 animate-float" style={{ animationDelay: `${index * 0.3}s` }}>
                      <i className={`fas ${step.icon}`}></i>
                    </div>

                    {/* Info details */}
                    <h3 className="font-extrabold text-sm sm:text-base text-forest mb-2">{step.title}</h3>
                    <p className="text-xs text-slateTeal leading-relaxed max-w-[170px]">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Stepper Timeline (Vertical Cards Layout - No Dotted Line) */}
            <div className="block md:hidden space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-pebble/80 flex items-start space-x-4 shadow-sm reveal-on-scroll"
                >
                  {/* Icon with numbered badge */}
                  <div className="relative shrink-0">
                    <div className="absolute -top-1.5 -left-1.5 w-6 h-6 bg-sage text-white rounded-full flex items-center justify-center font-bold text-xs shadow-sm border border-white">
                      {step.num}
                    </div>
                    <div className="w-12 h-12 bg-sage/10 text-sage rounded-xl flex items-center justify-center text-lg border border-sage/10 shadow-sm">
                      <i className={`fas ${step.icon}`}></i>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-left">
                    <h3 className="font-extrabold text-base text-forest mb-1">{step.title}</h3>
                    <p className="text-xs text-slateTeal leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 5. Bottom CTA Banner & Contacts */}
      <div className="py-12 sm:py-20 bg-pebbleLight px-4">
        <div className="max-w-7xl mx-auto">

          {/* Main CTA Box */}
          <div className="bg-forest rounded-3xl text-pebble p-6 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative border border-sage/10 reveal-on-scroll">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-xl text-center lg:text-left z-10">
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Have a Requirement?<br />
                <span className="text-sage">Let's Build Something Great Together.</span>
              </h3>
              <p className="text-mintGrey text-xs sm:text-sm leading-relaxed mb-6">
                Consult with our local Sagar-based experts for an transparent plan and fair quote.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white hover:bg-pebbleLight text-forest font-bold px-6 py-4 rounded-xl shadow-lg transition-transform active:scale-95 text-center flex items-center justify-center space-x-2 cursor-pointer mx-auto lg:mx-0 text-sm"
              >
                <span>Describe Your Requirement</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </button>
            </div>

            {/* Laptop Illustration Image (Anchored at absolute bottom on desktop, hidden on mobile) */}
            <div className="hidden lg:flex lg:absolute lg:bottom-0 lg:right-0 xl:right-6 lg:w-[420px] lg:h-[300px] xl:w-[520px] xl:h-[360px] shrink-0 items-end justify-center z-10 transform lg:translate-x-6 xl:translate-x-12 select-none">
              <img
                src="/Laptop%20placed%20on%20table.png"
                alt="Laptop placed on table"
                className="w-full h-full object-contain object-bottom"
              />
            </div>
          </div>

          {/* Contact Details and Social Links Bar */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between border-t border-pebble pt-6 text-xs text-slateTeal gap-4 text-center md:text-left">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
              <span className="flex items-center"><i className="fas fa-map-marker-alt text-sage mr-2"></i> Sagar, Madhya Pradesh</span>
              <span className="flex items-center"><i className="fas fa-envelope text-sage mr-2"></i> sagarsync.query@gmail.com</span>
              <span className="flex items-center"><i className="fas fa-phone-alt text-sage mr-2"></i> +91 8962685091 / +91 8827050460</span>
            </div>
            {/* Social icons */}
            <div className="flex space-x-4 text-sm">
              <a href="https://www.instagram.com/sagar.sync/" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/sagar-sync" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
