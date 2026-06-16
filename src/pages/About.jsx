import React from 'react';

const setsUsApart = [
  {
    title: "Hyperlocal Expertise",
    desc: "We are from Sagar. We know the city, its businesses, its culture, and its market. This is not a distant agency guessing what works — we know because we live here.",
    icon: "fa-map-marked-alt"
  },
  {
    title: "No Pressure Pricing",
    desc: "We never show prices upfront. We listen first. Every quote is based on actual scope — not pre-packaged rates. This builds trust and eliminates surprise costs.",
    icon: "fa-hand-holding-usd"
  },
  {
    title: "Wide Range, Single Contact",
    desc: "From a logo to a full software system, from a wedding shoot to a construction blueprint — you never need to find multiple vendors. One conversation covers it all.",
    icon: "fa-compress-arrows-alt"
  },
  {
    title: "Rough Layout Before Commitment",
    desc: "Before asking for any payment, we provide a rough concept, wireframe, or plan so you can visualise the output. This builds confidence and reduces revision cycles.",
    icon: "fa-drafting-compass"
  }
];

const missionStatements = [
  "Provide wide-ranging, high-quality services to every segment of Sagar's population",
  "Connect clients with the right expertise quickly, without friction or confusion",
  "Build long-term relationships based on trust, transparency, and results",
  "Support local businesses and professionals in growing their digital and physical presence",
  "Make professional services accessible and fairly priced for Sagar's market"
];

export default function About() {
  return (
    <section className="page-transition py-16 px-4 bg-pebbleLight min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-sage font-extrabold tracking-widest text-xs uppercase bg-white px-4 py-2 rounded-full border border-pebble shadow-sm">Who We Are</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-forest mt-4">Born In Sagar, Engineered For Trust</h2>
          <p className="mt-4 text-sm sm:text-base text-slateTeal max-w-2xl mx-auto leading-relaxed">
            A comprehensive, locally-rooted service platform based in Sagar, MP, designed to serve as your single point of contact for any creative, digital, legal, event, or construction service.
          </p>
        </div>

        {/* Vision, Mission & Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Block: Vision & Mission */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Vision */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-pebble shadow-sm">
              <h3 className="text-lg sm:text-xl font-extrabold text-forest mb-3 flex items-center">
                <i className="far fa-eye text-sage mr-3 text-lg"></i> Our Vision
              </h3>
              <p className="text-slateTeal text-xs sm:text-sm leading-relaxed">
                To become Sagar's most trusted, all-in-one service platform — the name that every business owner, professional, family, and institution reaches for whenever they need something done right.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-pebble shadow-sm">
              <h3 className="text-lg sm:text-xl font-extrabold text-forest mb-4 flex items-center">
                <i className="fas fa-bullseye text-sage mr-3 text-lg"></i> Our Mission
              </h3>
              <ul className="space-y-3">
                {missionStatements.map((statement, idx) => (
                  <li key={idx} className="flex items-start text-xs sm:text-sm text-slateTeal">
                    <span className="w-5 h-5 bg-sage/10 rounded-full flex items-center justify-center shrink-0 mr-3 mt-0.5">
                      <i className="fas fa-check text-sage text-[9px]"></i>
                    </span>
                    <span className="leading-relaxed">{statement}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Block: Pricing Philosophy Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-forest to-forestDark text-pebble p-6 sm:p-8 rounded-3xl border border-sage/20 shadow-lg flex flex-col justify-between h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-sage/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mb-4 flex items-center">
                  <i className="fas fa-hand-holding-usd text-sage mr-3 text-lg"></i> Pricing Policy & Philosophy
                </h3>
                <h4 className="text-xs sm:text-sm font-bold text-mintGrey uppercase tracking-wider mb-2">No Upfront Price List</h4>
                <p className="text-mintGrey text-xs sm:text-sm leading-relaxed mb-4">
                  Sagar Sync deliberately does not display prices on the website at the initial stage. Every client's requirement is unique.
                </p>
                <p className="text-mintGrey/80 text-xs sm:text-sm leading-relaxed mb-6">
                  A logo for a local tea stall is structured differently than one for a law firm. Billing software for a grocery store has different dependencies than one for a coaching centre. We price based on actual scope — not assumptions.
                </p>
              </div>

              <div className="border-t border-sage/20 pt-4">
                <span className="text-[10px] text-mintGrey/60 font-bold block uppercase tracking-widest">Our Promise</span>
                <span className="text-xs text-white font-medium italic">"Listen first, create a concept, and then provide a fair, itemised quote."</span>
              </div>
            </div>
          </div>

        </div>

        {/* "What Sets Sagar Sync Apart" Section */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-3xl font-extrabold text-forest">What Sets Sagar Sync Apart</h3>
            <p className="text-slateTeal text-xs sm:text-sm mt-2">The key values that drive our managed platform ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {setsUsApart.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-pebble shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 bg-sage/10 text-sage rounded-xl flex items-center justify-center text-lg mb-4">
                    <i className={`fas ${val.icon}`}></i>
                  </div>
                  <h4 className="font-extrabold text-base text-forest mb-2">{val.title}</h4>
                  <p className="text-xs text-slateTeal leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
