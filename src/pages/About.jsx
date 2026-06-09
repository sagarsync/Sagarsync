import React from 'react';

export default function About() {
  return (
    <section className="page-transition py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sage font-extrabold tracking-widest text-xs uppercase">Who We Are</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest mt-1">Born In Sagar, Engineered For Scale</h2>
          <p className="mt-3 text-sm sm:text-base text-slateTeal max-w-2xl mx-auto">
            A collaborative 4-person dream team combined to solve structural, developmental, and creative promotional challenges for modern local brands.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold mb-4 text-forest">Grounded In Honesty & Verification</h3>
            <p className="text-slateTeal text-sm leading-relaxed mb-4">
              Sagar Sync was formed after identifying a major problem: offline firms in Madhya Pradesh wasting massive funds on distant agencies who don't understand the regional audience.
            </p>
            <p className="text-slateTeal text-sm leading-relaxed mb-6">
              We solve this through absolute visibility. Our portal showcases verified team profiles, exact technical specializations, and real project code records, so you know exactly whose hands are holding your future.
            </p>
            <div className="border-l-4 border-sage pl-4 italic text-forest text-sm font-medium">
              "Bridging modern tech stacks directly to Makroniya and Sagar Lake's commercial ecosystems."
            </div>
          </div>

          <div className="relative flex justify-center w-full">
            <div className="w-full max-w-md bg-white border border-pebble rounded-3xl p-6 sm:p-8 shadow-lg">
              <h4 className="font-extrabold text-forest text-base sm:text-lg mb-4 text-left">Our Operational Workflow</h4>
              <ul className="space-y-4 text-left text-xs sm:text-sm">
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-sage/10 text-sage font-bold flex items-center justify-center shrink-0 mr-3">1</span>
                  <div>
                    <strong>Physical Site Mapping:</strong> We visit client venues across Makroniya and Sagar City limits to assess CAD measurements or shoot media.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-slateTeal/10 text-slateTeal font-bold flex items-center justify-center shrink-0 mr-3">2</span>
                  <div>
                    <strong>Synchronized Blueprinting:</strong> Development, CAD layouts, and promotional scripting are prepared in parallel by dedicated specialists.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-sage/10 text-sage font-bold flex items-center justify-center shrink-0 mr-3">3</span>
                  <div>
                    <strong>Digital Launch & Local SEO:</strong> Deployment on fast CDN clouds paired with accurate Google Maps Business registration for maximum traction.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
