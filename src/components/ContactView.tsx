import React, { useState } from 'react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: 'Sandakphu & Singalila',
    travelers: '2',
    date: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppDirectUrl = () => {
    const text = encodeURIComponent(
      `Hello Yatri Adventure! My name is ${formData.name || 'Traveler'}. I am inquiring about ${formData.region} for ${formData.travelers} people. Message: ${formData.message || 'Please send route and pricing details.'}`
    );
    return `https://wa.me/919091316662?text=${text}`;
  };

  return (
    <div className="w-full pb-20 pt-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Header */}
        <div className="rounded-3xl bg-[#08261C] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#c0ecd7]">
              Connect With Our Mountain Desk
            </span>
            <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl font-black text-white leading-tight">
              Let's Talk Himalayan Escapes
            </h1>
            <p className="font-['Inter'] text-sm sm:text-base text-[#d8dadc]/90 leading-relaxed">
              Based in the Darjeeling Hills, our local coordination team answers permit queries, route conditions, snow forecasts, and homestay availability.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none">
            <span className="material-symbols-outlined text-[280px] text-white">support_agent</span>
          </div>
        </div>

        {/* 2-Column Split: Form + Direct Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl shadow-md border border-slate-100">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px]">mark_email_read</span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-bold text-slate-900">
                  Message Dispatched to Base Camp!
                </h3>
                <p className="text-sm text-slate-600 max-w-md">
                  Thank you, <strong>{formData.name}</strong>. Our Darjeeling desk team will reach out via WhatsApp / phone within 4 business hours with custom pricing and route advice.
                </p>
                <div className="flex gap-3 pt-2">
                  <a
                    href={getWhatsAppDirectUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-[#3e6656] text-white font-bold text-xs flex items-center gap-2 hover:bg-[#264e3f]"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>Chat Instantly on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        region: 'Sandakphu & Singalila',
                        travelers: '2',
                        date: '',
                        message: '',
                      });
                    }}
                    className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h2 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-slate-900 mb-1">
                  Send Us an Inquiry
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suman Tamang"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 90913 16662"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="traveler@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Himalayan Region
                    </label>
                    <select
                      value={formData.region}
                      onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                    >
                      <option value="Sandakphu & Singalila">Sandakphu & Singalila Ridge (WB)</option>
                      <option value="Nepal Himalayas">Nepal Himalayas (Mardi Himal / ABC)</option>
                      <option value="Sikkim Kanchenjunga">West Sikkim (Goecha La / Dzongri)</option>
                      <option value="Darjeeling Hills">Darjeeling Tea Valleys & Canyoning</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                      Estimated Travel Date / Month
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mid November or Spring 2026"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                    Your Trip Goals & Questions
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your group's fitness level, preference for homestays or tents, and any custom stops..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <a
                    href={getWhatsAppDirectUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-full bg-[#3e6656] text-white font-bold text-xs sm:text-sm flex items-center gap-2 hover:bg-[#264e3f] transition-all cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Chat on WhatsApp Instead</span>
                  </a>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-[#F2825B] text-white font-bold text-xs sm:text-sm hover:bg-[#d2633b] transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Submit Inquiry</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Contact info & map details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Direct Cards */}
            <div className="p-6 rounded-3xl bg-white shadow-md border border-slate-100 flex flex-col gap-5">
              <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900">
                Direct Contact Information
              </h3>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#c0ecd7] text-[#08261C] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">location_on</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Headquarters Base
                  </span>
                  <p className="text-sm font-semibold text-slate-800">
                    Darjeeling Hills, West Bengal, India - 734101
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Field coordination hubs in Manebhanjan & Yuksam
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#ffdbcf] text-[#390c00] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Official Email
                  </span>
                  <a
                    href="mailto:yatriadventure@gmail.com"
                    className="text-sm font-semibold text-[#3e6656] hover:underline"
                  >
                    yatriadventure@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#dce2f8] text-[#151b2b] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Helpline Numbers
                  </span>
                  <div className="flex flex-col gap-0.5 text-sm font-semibold text-slate-800">
                    <a href="tel:+919091316662" className="hover:text-[#F2825B]">
                      +91 90913 16662 (Primary Desk & WhatsApp)
                    </a>
                    <a href="tel:+916295235334" className="hover:text-[#F2825B]">
                      +91 62952 35334 (Operations & Logistics)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* High-Altitude Protocol Box */}
            <div className="p-6 rounded-3xl bg-[#030712] text-white flex flex-col gap-3 shadow-md border border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
                <span className="material-symbols-outlined text-[18px]">emergency</span>
                <span>24/7 Mountain Emergency Watch</span>
              </div>
              <h4 className="font-['Plus_Jakarta_Sans'] text-base font-bold text-white">
                Trail Medical & Evacuation Network
              </h4>
              <p className="text-xs text-[#d8dadc]/80 leading-relaxed">
                During active expeditions, our Darjeeling Operations team monitors live weather sat-feeds and coordinates with Singalila National Park rangers and military medical stations along the border.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
