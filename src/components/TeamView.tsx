import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';

interface TeamViewProps {
  onOpenPlanTrip: () => void;
  onNavigate: (tab: string) => void;
}

export const TeamView: React.FC<TeamViewProps> = ({ onOpenPlanTrip, onNavigate }) => {
  return (
    <div className="w-full pb-20 pt-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Header */}
        <div className="rounded-3xl bg-[#08261C] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#c0ecd7]">
              Our Mountain Family
            </span>
            <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl font-black text-white leading-tight">
              Meet the Himalayan Guides & Guardians
            </h1>
            <p className="font-['Inter'] text-sm sm:text-base text-[#d8dadc]/90 leading-relaxed">
              Every Yatri adventure is led by native Himalayan professionals with certified alpine training from the Himalayan Mountaineering Institute (HMI) and international Wilderness First Responder credentials.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none">
            <span className="material-symbols-outlined text-[280px] text-white">hiking</span>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl bg-white p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {/* Avatar with experience badge */}
                <div className="relative shrink-0">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover shadow-md"
                  />
                  <span className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#08261C] text-[#c0ecd7] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {member.experienceYears}+ Yrs Exp
                  </span>
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs font-semibold text-[#F2825B] uppercase tracking-wider">
                    {member.role}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-0.5">
                    <span className="material-symbols-outlined text-[16px] text-slate-400">home_pin</span>
                    <span>Hometown: {member.hometown}</span>
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <p className="text-sm text-slate-600 leading-relaxed">
                {member.bio}
              </p>

              {/* Badges / Languages / Certs */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                    Alpine Certifications
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-[11px] font-medium border border-emerald-100"
                      >
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-2">
                  <div className="flex items-center gap-1 text-slate-500">
                    <span className="material-symbols-outlined text-[16px] text-[#3e6656]">translate</span>
                    <span>Languages: {member.languages.join(', ')}</span>
                  </div>
                  <div className="text-xs font-semibold text-[#3e6656]">
                    Favorite Ridge: {member.favoriteTrek}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenPlanTrip}
                  className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-[#F2825B] hover:text-white text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Request {member.name.split(' ')[0]} for Your Trek</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Training Banner */}
        <div className="rounded-3xl bg-[#030712] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#c0ecd7] text-[#08261C] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[32px]">verified_user</span>
            </div>
            <div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-white">
                100% Certified Field Team
              </h3>
              <p className="text-xs sm:text-sm text-[#d8dadc]/80 mt-0.5">
                All mountain guides refresh high-altitude medical CPR and swiftwater rescue drills every 6 months.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919091316662"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#3e6656] text-white font-bold text-xs sm:text-sm hover:bg-[#a5d0bc] hover:text-[#08261C] transition-all shrink-0 flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span>Talk to Lead Guide</span>
          </a>
        </div>

      </div>
    </div>
  );
};
