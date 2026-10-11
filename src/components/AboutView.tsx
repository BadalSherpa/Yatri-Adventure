import React, { useState } from 'react';

interface AboutViewProps {
  onNavigate: (tab: string) => void;
  onOpenPlanTrip: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate, onOpenPlanTrip }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do I need prior mountaineering experience for Sandakphu or Mardi Himal?',
      a: 'Sandakphu Tour can be done comfortably via 4x4 Land Rover or as a moderate trek suitable for beginners with basic cardio fitness. Mardi Himal Trek is rated moderate and requires stamina for 5-7 hours of uphill walking each day. Our guides pace your trek carefully to prevent altitude sickness.'
    },
    {
      q: 'How does Yatri Adventure ensure high-altitude safety?',
      a: 'Safety is non-negotiable. Every expedition carries a medical first-aid kit, pulse oximeter for twice-daily SpO2 logs, emergency bottled oxygen, and satellite communication devices. Our guides are Wilderness First Responder (WFR) certified by the Himalayan Mountaineering Institute (HMI).'
    },
    {
      q: 'What makes your homestay model ethical and fair-trade?',
      a: 'Unlike third-party tour aggregators who squeeze village hosts with heavy commissions, we pay 100% of the homestay accommodation and meal fee directly to the local family heads. We also supply water filtration setups and solar battery stations to remote village partners.'
    },
    {
      q: 'Can custom dietary requirements (e.g. strict vegetarian or Jain food) be accommodated?',
      a: 'Yes! Himalayan mountain meals on our routes are predominantly vegetarian, freshly prepared using local ingredients (organic greens, lentils, buckwheat, and warm mountain rice). Inform us during booking and our trail cook team will customize your food.'
    }
  ];

  return (
    <div className="w-full pb-20 pt-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        
        {/* Hero Header */}
        <div className="rounded-3xl bg-[#08261C] text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl flex flex-col gap-4">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#c0ecd7]">
              Our Ethos & Himalayan Heritage
            </span>
            <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl font-black text-white leading-tight">
              Rooted in the Mountains. Guided by Locals.
            </h1>
            <p className="font-['Inter'] text-base text-[#d8dadc]/90 leading-relaxed">
              Yatri Adventure was founded in the mist-laden ridges of Darjeeling by native Himalayan guides who grew up navigating the sacred passes of Singalila, Kanchenjunga, and Nepal.
            </p>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none bg-gradient-to-l from-[#38BDF8] to-transparent" />
        </div>

        {/* 4 Pillars Grid */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-[#3e6656] font-bold">
              Our 4 Mountain Pillars
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#08261C]">
              Why trekking with Yatri is different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white shadow-md border border-slate-100 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#c0ecd7] text-[#08261C] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[24px]">payments</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900">
                1. Fair Pay & Guide Dignity Charter
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Porters and mountain guides are the heartbeat of the Himalayas. We enforce strict maximum load limits (under 20kg), provide high-altitude medical insurance, and ensure fair wages well above government minimum guidelines.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white shadow-md border border-slate-100 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#ffdbcf] text-[#390c00] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[24px]">cottage</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900">
                2. Direct Village Homestay Economics
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We bypass commercial hotel chains in favor of authentic family homestays in border hamlets like Tumling, Tsokha, and Siding. Your stay directly finances village school supplies and mountain healthcare initiatives.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white shadow-md border border-slate-100 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#dce2f8] text-[#151b2b] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[24px]">health_and_safety</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900">
                3. High-Altitude Safety Protocols
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Acute Mountain Sickness (AMS) can affect anyone. We mandate daily oxygen saturation (SpO2) readings at breakfast and dinner, carry bottled oxygen on all routes above 3,500m, and maintain direct emergency helipad contacts.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white shadow-md border border-slate-100 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#3e6656]/20 text-[#3e6656] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-[24px]">eco</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900">
                4. Zero-Single-Use-Plastic Trails
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We carry boiled or UV-filtered water stations at every camp to eliminate packaged plastic bottles. Every Yatri group brings back all non-biodegradable trash down from the National Parks for proper municipal recycling.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-['Plus_Jakarta_Sans'] text-xs uppercase tracking-widest text-[#3e6656] font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-[#08261C]">
              Preparation & Mountain Logistics
            </h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-['Plus_Jakarta_Sans'] font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-[20px] text-slate-500 shrink-0">
                    {openFaq === idx ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#030712] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-white">
              Ready to explore with certified local guides?
            </h3>
            <p className="text-sm text-[#d8dadc]/80">
              Speak directly with our field team in Darjeeling to craft your journey.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenPlanTrip}
              className="px-6 py-3 rounded-full bg-[#F2825B] text-white font-bold text-xs sm:text-sm hover:bg-[#d2633b] transition-all shadow-md cursor-pointer"
            >
              Plan Custom Trip
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full bg-white/10 text-white font-bold text-xs sm:text-sm hover:bg-white/20 transition-all border border-white/10 cursor-pointer"
            >
              Contact Desk
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
