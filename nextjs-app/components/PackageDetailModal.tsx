'use client';

import React, { useState } from 'react';
import { PackageItem } from '../data/mockData';

interface PackageDetailModalProps {
  pkg: PackageItem | null;
  onClose: () => void;
  onBookSuccess?: (details: { pkgName: string; travelers: number; date: string; name: string }) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  onClose,
  onBookSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'itinerary' | 'inclusions' | 'gear' | 'book'>('overview');
  const [travelers, setTravelers] = useState<number>(2);
  const [bookingDate, setBookingDate] = useState<string>('2025-11-15');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialNote, setSpecialNote] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!pkg) return null;

  const totalPrice = pkg.price * travelers;

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (onBookSuccess) {
      onBookSuccess({
        pkgName: pkg.title,
        travelers,
        date: bookingDate,
        name: fullName || 'Himalayan Explorer',
      });
    }
  };

  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `Hello Yatri Adventure! I would like to book the "${pkg.title}" (${pkg.duration}) for ${travelers} travelers on ${bookingDate}. Name: ${fullName || 'Trekker'}. Contact: ${phone || 'N/A'}`
    );
    return `https://wa.me/919091316662?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden my-auto border border-slate-100 flex flex-col max-h-[92vh]">
        
        {/* Header Hero Area */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden shrink-0 bg-slate-900">
          <img
            src={pkg.imageUrl}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors z-20 cursor-pointer shadow-lg"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
            <span className="px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-md text-[12px] font-bold uppercase tracking-wider text-white">
              {pkg.locationDisplay}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#3e6656]/90 backdrop-blur-md text-[12px] font-semibold text-[#c0ecd7]">
              {pkg.duration}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#F2825B]/90 backdrop-blur-md text-[12px] font-bold text-white">
              {pkg.difficulty} Grade
            </span>
          </div>

          {/* Title and Base Stats */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
            <div>
              <div className="flex items-center gap-1.5 text-[#38BDF8] text-xs font-semibold mb-1">
                <span className="material-symbols-outlined text-[16px]">{pkg.altitudeIcon}</span>
                <span>{pkg.altitudeDisplay}</span>
                <span>·</span>
                <span>Season: {pkg.bestSeason}</span>
              </div>
              <h2 className="font-['Plus_Jakarta_Sans'] text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {pkg.title}
              </h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 shrink-0">
              <span className="text-[11px] uppercase tracking-wider text-slate-300 block">Starting From</span>
              <span className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-white">
                ₹{pkg.price.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-slate-300 ml-1">/ person</span>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 px-6 bg-slate-50 overflow-x-auto shrink-0">
          {[
            { id: 'overview', label: 'Overview & Highlights' },
            { id: 'itinerary', label: 'Day-by-Day Route' },
            { id: 'inclusions', label: 'Inclusions & Rules' },
            { id: 'gear', label: 'Gear Checklist' },
            { id: 'book', label: 'Book Expedition' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-3 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#F2825B] text-[#F2825B]'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {activeTab === 'overview' && (
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">About This Expedition</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">Key Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {pkg.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5"
                    >
                      <span className="material-symbols-outlined text-[#3e6656] text-[20px]">
                        verified
                      </span>
                      <span className="font-semibold text-xs sm:text-sm text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div>
                  <span className="text-[11px] text-slate-500 font-medium uppercase block">Altitude Peak</span>
                  <span className="font-bold text-sm text-slate-900">{pkg.altitudeDisplay}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-medium uppercase block">Difficulty</span>
                  <span className="font-bold text-sm text-slate-900">{pkg.difficulty}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-medium uppercase block">Ideal Season</span>
                  <span className="font-bold text-sm text-slate-900">{pkg.bestSeason}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-500 font-medium uppercase block">Group Size</span>
                  <span className="font-bold text-sm text-slate-900">{pkg.groupSize}</span>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveTab('book')}
                  className="px-6 py-3 rounded-full bg-[#F2825B] text-white font-bold text-sm hover:bg-[#d2633b] transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Check Dates & Reserve Spot</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}

          {activeTab === 'itinerary' && (
            <div className="flex flex-col gap-4">
              <p className="text-xs text-slate-500">
                Detailed day-by-day mountain progression designed for safe acclimatization and optimal pacing.
              </p>
              <div className="relative pl-6 sm:pl-8 border-l-2 border-[#c0ecd7] space-y-6">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="relative group">
                    <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-[#08261C] text-white font-black text-xs flex items-center justify-center shadow-md">
                      D{day.day}
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex flex-col gap-1.5 hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="font-bold text-sm sm:text-base text-slate-900">
                          Day {day.day}: {day.title}
                        </h4>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
                          {day.altitude}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {day.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-[#3e6656] font-medium pt-1">
                        <span className="material-symbols-outlined text-[16px]">bed</span>
                        <span>Overnight Stay: {day.stay}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <span className="material-symbols-outlined text-[20px]">check_circle</span>
                  <span>Included in the Package</span>
                </div>
                <div className="space-y-2">
                  {pkg.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100">
                      <span className="material-symbols-outlined text-emerald-600 text-[18px] shrink-0 mt-0.5">done</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                  <span className="material-symbols-outlined text-[20px]">cancel</span>
                  <span>Not Included</span>
                </div>
                <div className="space-y-2">
                  {pkg.exclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-rose-50/50 p-2.5 rounded-xl border border-rose-100">
                      <span className="material-symbols-outlined text-rose-500 text-[18px] shrink-0 mt-0.5">close</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gear' && (
            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm leading-relaxed">
                <span className="font-bold">Essential Gear Guidance:</span> Proper mountain gear is critical for high altitude health and safety. We verify all client equipment prior to departure from base.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.gearChecklist.map((gear, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#c0ecd7] text-[#08261C] flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-slate-800">{gear}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'book' && (
            <div>
              {isSubmitted ? (
                <div className="text-center py-10 flex flex-col items-center gap-4 bg-emerald-50 rounded-2xl border border-emerald-100 p-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                    <span className="material-symbols-outlined text-[36px]">check</span>
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#08261C]">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md">
                    Thank you {fullName || 'Traveler'}. Our local Darjeeling expedition coordinator has received your request for <strong>{pkg.title}</strong> for <strong>{travelers} trekkers</strong> on <strong>{bookingDate}</strong>.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full bg-[#3e6656] text-white font-bold text-sm flex items-center gap-2 hover:bg-[#264e3f] shadow-md"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Chat Immediately on WhatsApp</span>
                    </a>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 rounded-full bg-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-300"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="flex flex-col gap-6">
                  <div className="p-4 rounded-2xl bg-[#08261C] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-[#c0ecd7] font-semibold uppercase tracking-wider block">Estimated Total</span>
                      <div className="flex items-baseline gap-2">
                        <span className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold">
                          ₹{totalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-300">
                          (₹{pkg.price.toLocaleString('en-IN')} × {travelers} {travelers === 1 ? 'person' : 'people'})
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs bg-white/10 px-3 py-2 rounded-xl border border-white/10">
                      <span className="material-symbols-outlined text-amber-300 text-[18px]">info</span>
                      <span>No immediate payment required. We verify slot availability first.</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Number of Travelers
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setTravelers(Math.max(1, travelers - 1))}
                          className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-lg flex items-center justify-center cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-xl w-8 text-center">
                          {travelers}
                        </span>
                        <button
                          type="button"
                          onClick={() => setTravelers(travelers + 1)}
                          className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-lg flex items-center justify-center cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Preferred Departure Date
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        required
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                        Special Requests / Medical or Dietary Info
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Any prior high-altitude experience, vegetarian requirements, or gear rental needed?"
                        value={specialNote}
                        onChange={(e) => setSpecialNote(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
                    <a
                      href={getWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-full bg-[#3e6656] text-white font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#264e3f] transition-all cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">chat</span>
                      <span>Instant WhatsApp Inquiry</span>
                    </a>

                    <button
                      type="submit"
                      className="px-6 py-3 rounded-full bg-[#F2825B] text-white font-bold text-xs sm:text-sm hover:bg-[#d2633b] transition-all shadow-md flex items-center gap-2 cursor-pointer"
                    >
                      <span>Submit Expedition Booking</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
