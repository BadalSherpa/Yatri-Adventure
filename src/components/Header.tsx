import React, { useState } from 'react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  onOpenPlanTrip: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, onOpenPlanTrip }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Packages' },
    { id: 'about', label: 'About' },
    { id: 'our-team', label: 'Our Team' },
    { id: 'travel-videos', label: 'Travel Videos' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#f7f9fb]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#eceef0]/60">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3.5 min-w-0 text-left focus:outline-none group cursor-pointer"
        >
          <img
            alt="Yatri Adventure Logo"
            className="w-10 h-10 rounded-full object-cover shrink-0 shadow-sm ring-1 ring-black/5 group-hover:scale-105 transition-transform"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WRCz5vxHStq4TLI_vEuU5rBODElnQVpnclUK7k2u7PX2y_WXdmC-SVjckFNcOFWB3cmlKyyJflwamVSxhwinYB2FiHi2qrJbr0D2rFRL84-PpO-qvZHARnYlYW2O09SLqr2CGskvr6S23iOQC2csyQvnovC5S_RUslF5b_4fVpb3_fRsbjEPI5rVDQeGk8UlcJIY2kXctWCzZYyiOJRhxtH2zvPquF28W7g1nt7XfAnp9cEUNIVSl1xw"
          />
          <div className="flex flex-col truncate">
            <span className="font-['Plus_Jakarta_Sans'] text-[21px] text-[#08261C] tracking-tight font-extrabold truncate leading-tight">
              Yatri Adventure
            </span>
            <span className="text-[11px] font-semibold text-[#45464c] uppercase tracking-wider hidden sm:inline-block">
              Live the experience
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 p-1 bg-[#f2f4f6] rounded-full">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 text-[14px] font-bold rounded-full transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#c0ecd7] text-[#446c5c] shadow-xs'
                    : 'text-[#45464c] hover:text-[#191c1e] hover:bg-[#eceef0]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA and Profile */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenPlanTrip}
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 rounded-full bg-[#F2825B] text-white font-['Plus_Jakarta_Sans'] font-bold text-[13px] sm:text-[14px] shadow-[0_4px_20px_rgba(242,130,91,0.35)] hover:bg-[#d2633b] hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Plan Your Trip
          </button>

          {/* Profile Button with dropdown */}
          <div className="relative">
            <button
              onClick={() => setProfileOpen(!profileOpen)}
              className="w-9 h-9 rounded-full overflow-hidden shrink-0 ring-2 ring-[#e6e8ea] hover:ring-[#F2825B] transition-all cursor-pointer focus:outline-none"
              title="Traveler Profile & Bookings"
              aria-label="Traveler profile"
            >
              <img
                alt="Profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WRCz5vxHStq4TLI_vEuU5rBODElnQVpnclUK7k2u7PX2y_WXdmC-SVjckFNcOFWB3cmlKyyJflwamVSxhwinYB2FiHi2qrJbr0D2rFRL84-PpO-qvZHARnYlYW2O09SLqr2CGskvr6S23iOQC2csyQvnovC5S_RUslF5b_4fVpb3_fRsbjEPI5rVDQeGk8UlcJIY2kXctWCzZYyiOJRhxtH2zvPquF28W7g1nt7XfAnp9cEUNIVSl1xw"
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-3 w-64 rounded-2xl bg-white shadow-2xl border border-slate-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-[#c0ecd7] flex items-center justify-center text-[#08261C] font-bold text-sm">
                    YA
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-sm text-[#08261C] truncate">Himalayan Explorer</span>
                    <span className="text-xs text-slate-500 truncate">explorer@yatriadventure.com</span>
                  </div>
                </div>
                <div className="py-2 flex flex-col gap-1">
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      onNavigate('packages');
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg text-left w-full cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#3e6656]">hiking</span>
                    Saved Expeditions
                  </button>
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      onOpenPlanTrip();
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg text-left w-full cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#F2825B]">edit_calendar</span>
                    Custom Itinerary Builder
                  </button>
                  <a
                    href="https://wa.me/919091316662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 rounded-lg text-left w-full cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    Direct WhatsApp Desk
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center rounded-full bg-[#f2f4f6] text-[#08261C] hover:bg-[#e6e8ea] transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-5 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-['Plus_Jakarta_Sans'] font-bold text-base transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#c0ecd7] text-[#08261C]'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="material-symbols-outlined text-[20px] text-[#3e6656]">check</span>}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanTrip();
                }}
                className="w-full py-3 rounded-xl bg-[#F2825B] text-white font-bold text-center text-sm shadow-md"
              >
                Plan Your Custom Trip
              </button>
              <a
                href="https://wa.me/919091316662"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-[#3e6656] text-white font-bold text-center text-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                WhatsApp Us Directly
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
