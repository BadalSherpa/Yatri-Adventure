import React from 'react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (tab: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#08261C] text-[#e6e8ea] pt-16 md:pt-20 pb-10 border-t border-[#08261C]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand Info & WhatsApp */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="Yatri Adventure"
                className="w-9 h-9 rounded-full object-cover shrink-0 shadow-sm"
                src="https://lh3.googleusercontent.com/aida/AEtjO1WRCz5vxHStq4TLI_vEuU5rBODElnQVpnclUK7k2u7PX2y_WXdmC-SVjckFNcOFWB3cmlKyyJflwamVSxhwinYB2FiHi2qrJbr0D2rFRL84-PpO-qvZHARnYlYW2O09SLqr2CGskvr6S23iOQC2csyQvnovC5S_RUslF5b_4fVpb3_fRsbjEPI5rVDQeGk8UlcJIY2kXctWCzZYyiOJRhxtH2zvPquF28W7g1nt7XfAnp9cEUNIVSl1xw"
              />
              <span className="font-['Plus_Jakarta_Sans'] text-[22px] text-white tracking-tight font-extrabold">
                Yatri Adventure
              </span>
            </div>
            
            <p className="font-['Inter'] text-[14px] text-[#d8dadc]/80 leading-relaxed">
              Curating raw, respectful, and transformative Himalayan journeys. We connect soulful explorers with pristine trails, high-altitude ridges, and authentic mountain homestays across the Eastern Himalayas.
            </p>
            
            <div className="flex items-center gap-3 pt-1">
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3e6656] text-white font-['Plus_Jakarta_Sans'] font-semibold text-[13px] hover:bg-[#a5d0bc] hover:text-[#08261C] transition-all shadow-md cursor-pointer"
                href="https://wa.me/919091316662"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <span className="font-['Plus_Jakarta_Sans'] text-[14px] font-bold uppercase tracking-wider text-white">
              Quick Links
            </span>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={(e) => handleNav('packages', e)}
                  className="text-[14px] text-[#d8dadc]/80 hover:text-[#F2825B] transition-colors cursor-pointer text-left"
                >
                  Packages & Expeditions
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('travel-videos', e)}
                  className="text-[14px] text-[#d8dadc]/80 hover:text-[#F2825B] transition-colors cursor-pointer text-left"
                >
                  Travel Videos & Stories
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('about', e)}
                  className="text-[14px] text-[#d8dadc]/80 hover:text-[#F2825B] transition-colors cursor-pointer text-left"
                >
                  About Us & Ethos
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('our-team', e)}
                  className="text-[14px] text-[#d8dadc]/80 hover:text-[#F2825B] transition-colors cursor-pointer text-left"
                >
                  Our Local Guides & Team
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="flex flex-col gap-4">
            <span className="font-['Plus_Jakarta_Sans'] text-[14px] font-bold uppercase tracking-wider text-white">
              Company
            </span>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={(e) => handleNav('contact', e)}
                  className="text-[14px] text-[#d8dadc]/80 hover:text-[#F2825B] transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('about', e)}
                  className="text-[14px] text-[#d8dadc]/80 hover:text-[#F2825B] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy & Ethics
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('about', e)}
                  className="text-[14px] text-[#d8dadc]/80 hover:text-[#F2825B] transition-colors cursor-pointer text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => handleNav('about', e)}
                  className="text-[14px] text-[#d8dadc]/80 hover:text-[#F2825B] transition-colors cursor-pointer text-left"
                >
                  High-Altitude Safety Charter
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Details */}
          <div className="flex flex-col gap-4">
            <span className="font-['Plus_Jakarta_Sans'] text-[14px] font-bold uppercase tracking-wider text-white">
              Contact Details
            </span>
            <div className="flex flex-col gap-3 text-[13px] text-[#d8dadc]/85">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#F2825B] text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>Darjeeling Hills, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[#F2825B] text-[18px] shrink-0">
                  mail
                </span>
                <a
                  className="hover:text-white transition-colors"
                  href="mailto:yatriadventure@gmail.com"
                >
                  yatriadventure@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[#F2825B] text-[18px] shrink-0 mt-0.5">
                  call
                </span>
                <div className="flex flex-col gap-0.5">
                  <a className="hover:text-white transition-colors" href="tel:+919091316662">
                    +91 9091316662
                  </a>
                  <a className="hover:text-white transition-colors" href="tel:+916295235334">
                    +91 6295235334
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                aria-label="Explore Instagram Journal"
                className="w-8 h-8 rounded-full bg-[#030712] flex items-center justify-center text-[#d8dadc] hover:text-[#F2825B] hover:bg-white/10 transition-colors"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">photo_camera</span>
              </a>
              <a
                aria-label="Watch YouTube Expeditions"
                className="w-8 h-8 rounded-full bg-[#030712] flex items-center justify-center text-[#d8dadc] hover:text-[#F2825B] hover:bg-white/10 transition-colors"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">smart_display</span>
              </a>
              <a
                aria-label="Connect on Facebook Community"
                className="w-8 h-8 rounded-full bg-[#030712] flex items-center justify-center text-[#d8dadc] hover:text-[#F2825B] hover:bg-white/10 transition-colors"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[16px]">public</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#d8dadc]/60">
          <p>© 2025 Yatri Adventure. All rights reserved.</p>
          <p>
            Powered by <span className="text-[#F2825B] font-semibold">Coding Humans</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
