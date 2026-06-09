import React from 'react';
import { companyState } from '../data/companyData.js';

export default function Portfolio({ onOpenMember }) {
  return (
    <section className="page-transition py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sage font-extrabold tracking-widest text-xs uppercase">The Sync Team</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest mt-1">Direct Verification Portfolios</h2>
          <p className="mt-3 text-sm sm:text-base text-slateTeal max-w-2xl mx-auto">
            We don't hide behind a curtain. Tap on any team member card to view their credentials, exact software tools, and active projects.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.values(companyState.team).map(member => (
            <div 
              key={member.id}
              className="team-card bg-white p-5 rounded-2xl border border-pebble shadow-sm cursor-pointer hover:shadow-md active:scale-98 transition-all flex flex-col items-center text-center justify-between opacity-0"
              onClick={() => onOpenMember(member.id)}
            >
              <div className="relative w-28 h-28 mb-4">
                <div className={`absolute inset-0 ${member.id === 'aman' || member.id === 'priya' ? 'bg-sage' : 'bg-slateTeal'} rounded-full scale-105 opacity-20`}></div>
                <div className="w-28 h-28 rounded-full border-4 border-pebble bg-forest text-pebble flex items-center justify-center font-extrabold text-3xl object-cover relative z-10">
                  {member.initials}
                </div>
              </div>
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-forest">{member.name}</h3>
                <span className="text-[10px] font-bold text-slateTeal uppercase tracking-wider block mt-1">{member.role}</span>
                <div className="mt-3 flex flex-wrap justify-center gap-1">
                  {member.skills.slice(0, 2).map((skill, index) => (
                    <span key={index} className="bg-pebble text-forest text-[9px] font-bold px-2 py-0.5 rounded-full">{skill}</span>
                  ))}
                </div>
              </div>
              <span className={`text-[10px] ${member.id === 'aman' || member.id === 'priya' ? 'text-sage' : 'text-slateTeal'} font-bold block mt-4 uppercase tracking-wider`}>
                Tap to View Works <i className="fas fa-chevron-right ml-1"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
