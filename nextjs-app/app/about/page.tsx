'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function AboutPage() {
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
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-2xl bg-white shadow-md border border-slate-100 flex flex-col gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#c0ecd7] text-[#08261C] flex items-center justify-center font-bold">
              <span className="material-symbols-outlined text-[24px]">payments</span>
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900">
              1. Fair Pay & Guide Dignity Charter
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Porters and mountain guides are the heartbeat of the Himalayas. We enforce strict maximum load limits, provide high-altitude medical insurance, and ensure fair wages.
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
              We bypass commercial hotel chains in favor of authentic family homestays in border hamlets like Tumling, Tsokha, and Siding.
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
              We mandate daily oxygen saturation readings at breakfast and dinner, carry bottled oxygen on routes above 3,500m, and maintain emergency evacuation lines.
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
              We carry boiled or UV-filtered water stations at every camp to eliminate packaged plastic bottles. Every group brings back non-biodegradable waste.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="flex flex-col gap-4">
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#08261C]">
            Frequently Asked Questions
          </h2>
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

      </div>
    </div>
  );
}
