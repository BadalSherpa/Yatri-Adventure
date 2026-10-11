import React, { useState } from 'react';

interface PlanTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage?: (packageId: string) => void;
}

export const PlanTripModal: React.FC<PlanTripModalProps> = ({ isOpen, onClose, onSelectPackage }) => {
  const [step, setStep] = useState<number>(1);
  const [region, setRegion] = useState<string>('Sandakphu & Singalila');
  const [tripType, setTripType] = useState<string>('Trek');
  const [duration, setDuration] = useState<string>('4-6 Days');
  const [groupSize, setGroupSize] = useState<number>(2);
  const [fitnessLevel, setFitnessLevel] = useState<string>('Moderate');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [travelMonth, setTravelMonth] = useState<string>('November 2025');
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const getEstimatedCostRange = () => {
    let base = 12000;
    if (region.includes('Nepal')) base = 24000;
    if (region.includes('Sikkim')) base = 28000;
    if (tripType === 'Canyoning') base = 4500;
    if (tripType === '4x4') base = 16000;
    return `₹${base.toLocaleString('en-IN')} - ₹${(base * 1.35).toLocaleString('en-IN')}`;
  };

  const getWhatsAppSummaryUrl = () => {
    const summary = encodeURIComponent(
      `Hello Yatri Adventure! I would like a custom plan:\n` +
      `• Region: ${region}\n` +
      `• Type: ${tripType}\n` +
      `• Duration: ${duration}\n` +
      `• Travelers: ${groupSize}\n` +
      `• Fitness: ${fitnessLevel}\n` +
      `• Month: ${travelMonth}\n` +
      `• Name: ${name || 'Explorer'}\n` +
      `• Contact: ${phone || 'N/A'}`
    );
    return `https://wa.me/919091316662?text=${summary}`;
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col my-auto max-h-[90vh]">
        
        {/* Header Bar */}
        <div className="bg-[#08261C] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
          
          <div className="flex items-center gap-2 text-[#c0ecd7] text-xs font-bold uppercase tracking-wider mb-1">
            <span className="material-symbols-outlined text-[18px]">tune</span>
            <span>Himalayan Trip Architect</span>
          </div>
          <h2 className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-white">
            Plan Your Custom Expedition
          </h2>
          <p className="text-xs text-[#d8dadc]/80 mt-1">
            Tailor-made itineraries with local certified guides, homestays, and high-altitude safety support.
          </p>

          {/* Stepper Progress */}
          <div className="flex items-center gap-2 mt-4">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`h-1.5 flex-1 rounded-full transition-all ${
                  step >= num ? 'bg-[#F2825B]' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Modal Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#c0ecd7] text-[#08261C] flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[36px]">travel_explore</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] text-2xl font-black text-[#08261C]">
                Your Custom Plan is Ready!
              </h3>
              <p className="text-sm text-slate-600 max-w-md">
                Estimated budget: <strong className="text-slate-900 font-bold">{getEstimatedCostRange()} / person</strong>.
                Our Darjeeling operations lead will curate your bespoke route.
              </p>

              <div className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs sm:text-sm space-y-1.5 text-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Region:</span>
                  <span className="font-bold">{region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Experience Type:</span>
                  <span className="font-bold">{tripType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Group Size & Fitness:</span>
                  <span className="font-bold">{groupSize} Travelers ({fitnessLevel})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Month:</span>
                  <span className="font-bold">{travelMonth}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                <a
                  href={getWhatsAppSummaryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-[#3e6656] text-white font-bold text-sm flex items-center gap-2 hover:bg-[#264e3f] shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Send Request on WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded-full bg-slate-200 text-slate-800 font-bold text-sm hover:bg-slate-300"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <div>
              {step === 1 && (
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-2">
                      1. Where in the Himalayas would you like to explore?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {[
                        { title: 'Sandakphu & Singalila Ridge', desc: 'Highest point in WB (11,930 ft), Everest & Kanchenjunga panoramas' },
                        { title: 'Nepal Himalayas', desc: 'Mardi Himal, Annapurna Base Camp, Fishtail peaks' },
                        { title: 'West Sikkim High Alps', desc: 'Goecha La, Dzongri, sacred Samiti Lake & Kanchenjunga sanctuary' },
                        { title: 'Darjeeling Tea & Waterfalls', desc: 'Pine forests, canyoning rappelling, heritage tea bungalows' },
                      ].map((item) => (
                        <button
                          key={item.title}
                          type="button"
                          onClick={() => setRegion(item.title)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                            region === item.title
                              ? 'border-[#08261C] bg-[#c0ecd7]/30 ring-1 ring-[#08261C]'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="font-bold text-sm text-slate-900">{item.title}</div>
                          <div className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-2">
                      2. Travel Style & Primary Activity
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'Trek', icon: 'hiking', label: 'Alpine Trekking' },
                        { id: '4x4', icon: 'minor_crash', label: '4x4 Land Rover' },
                        { id: 'Canyoning', icon: 'kayaking', label: 'Waterfall Canyoning' },
                        { id: 'Homestay', icon: 'cottage', label: 'Peaceful Homestay' },
                      ].map((style) => (
                        <button
                          key={style.id}
                          type="button"
                          onClick={() => setTripType(style.id)}
                          className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 text-center cursor-pointer ${
                            tripType === style.id
                              ? 'border-[#F2825B] bg-[#ffdbcf]/25 text-[#F2825B]'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <span className="material-symbols-outlined text-[24px]">{style.icon}</span>
                          <span className="text-xs font-bold">{style.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="flex flex-col gap-5">
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-2">
                      3. Duration & Ideal Travel Window
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['1-2 Days', '3-4 Days', '5-7 Days', '8-12 Days'].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDuration(d)}
                          className={`py-3 px-2 rounded-xl border text-center text-xs font-bold cursor-pointer ${
                            duration === d
                              ? 'border-[#08261C] bg-[#c0ecd7]/30 text-[#08261C]'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Group Size (Travelers)
                      </label>
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => setGroupSize(Math.max(1, groupSize - 1))}
                          className="w-10 h-10 rounded-xl bg-slate-100 font-bold hover:bg-slate-200"
                        >
                          -
                        </button>
                        <span className="font-['Plus_Jakarta_Sans'] font-bold text-lg w-8 text-center">
                          {groupSize}
                        </span>
                        <button
                          type="button"
                          onClick={() => setGroupSize(groupSize + 1)}
                          className="w-10 h-10 rounded-xl bg-slate-100 font-bold hover:bg-slate-200"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Physical Fitness Level
                      </label>
                      <select
                        value={fitnessLevel}
                        onChange={(e) => setFitnessLevel(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                      >
                        <option value="Beginner">Beginner (Comfortable walking 2-3 hours)</option>
                        <option value="Moderate">Moderate (Active walker, regular fitness)</option>
                        <option value="Advanced">Advanced (Experienced alpine hiker)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Preferred Travel Month
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. October 2025 or Spring 2026"
                      value={travelMonth}
                      onChange={(e) => setTravelMonth(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <h3 className="font-bold text-sm text-slate-900">
                    4. Where should we send your customized itinerary?
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Ananya Das"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 90913 16662"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Summary preview */}
                  <div className="p-4 rounded-2xl bg-[#08261C] text-white flex items-center justify-between mt-2">
                    <div>
                      <span className="text-xs text-[#c0ecd7] font-semibold block">Estimated Price Range</span>
                      <span className="font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-white">
                        {getEstimatedCostRange()}
                      </span>
                    </div>
                    <div className="text-right text-xs text-slate-300">
                      <span>Direct Homestays & Guides</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-6 mt-4 border-t border-slate-100">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    Back
                  </button>
                ) : <div />}

                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full bg-[#F2825B] text-white font-bold text-xs sm:text-sm hover:bg-[#d2633b] transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <span>{step === 3 ? 'Generate Custom Plan' : 'Continue'}</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
