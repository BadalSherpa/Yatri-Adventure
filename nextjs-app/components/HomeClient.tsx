'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  PACKAGES_DATA,
  VIDEO_STORIES,
  TESTIMONIALS_DATA,
  PackageItem,
  VideoStory,
  Testimonial,
} from '../data/mockData';
import { PackageDetailModal } from './PackageDetailModal';
import { PlanTripModal } from './PlanTripModal';
import { VideoPlayerModal } from './VideoPlayerModal';
import { ReviewModal } from './ReviewModal';

export const HomeClient: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoStory | null>(null);
  const [isPlanTripOpen, setIsPlanTripOpen] = useState<boolean>(false);
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(TESTIMONIALS_DATA);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const featuredPackages = PACKAGES_DATA.slice(0, 3);
  const featuredVideos = VIDEO_STORIES.slice(0, 3);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const handleAddReview = (newRev: Testimonial) => {
    setTestimonials([newRev, ...testimonials]);
    showToast(`Thank you, ${newRev.name}! Your review has been added.`);
  };

  const handleExploreTrekFromVideo = (storyId: string) => {
    if (storyId.includes('sandakphu')) {
      const pkg = PACKAGES_DATA.find((p) => p.id === 'sandakphu-tour');
      if (pkg) setSelectedPackage(pkg);
    } else {
      const pkg = PACKAGES_DATA[0];
      setSelectedPackage(pkg);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 bg-[#08261C] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#c0ecd7]/30">
          <span className="material-symbols-outlined text-[#c0ecd7] text-[20px]">check_circle</span>
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* 1. HERO SECTION */}
      <section className="relative w-full -mt-20 overflow-hidden bg-[#030712] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-65 scale-105 transition-transform duration-1000"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvbuXp-e4Ca2-W9UrW7IGHGC9upuXpZheGJlfan-sb4_VueZeF5p9ABADgvm_1d-Z7EwqDE7DPJiSW6Sp3vVvVkcLV3xE5qwL3zFgJNiMCJZtxLaN9AqQNpsP7WqSChkROuy0qFP-_AjpgbPfKlmx5ZTY5Ow4wLn0a76F2kgm8QYLkomWLLxAiUM-V7Bi8d26Buc7CTsJ5v_FV1Il8ARhZfUTbWarE7v-yOra94misTQJC6TmHxsuo')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-[#030712]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08261C]/80 via-transparent to-[#030712]/70" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 md:pb-24 flex flex-col justify-between">
          <div className="max-w-4xl flex flex-col gap-4 sm:gap-6">
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md shadow-sm border border-white/10">
              <span className="material-symbols-outlined text-[#F2825B] text-[18px]">landscape</span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase tracking-widest text-white font-semibold">
                Premium Travel Experiences
              </span>
            </div>

            <h1 className="font-['Plus_Jakarta_Sans'] text-4xl sm:text-5xl lg:text-[56px] text-white font-extrabold tracking-tight leading-[1.1] drop-shadow-md">
              Discover stays, journeys, and mountain escapes crafted for you.
            </h1>

            <p className="font-['Inter'] text-base sm:text-lg text-[#e6e8ea]/90 max-w-2xl leading-relaxed pt-1">
              Explore curated tour packages, peaceful homestays, local experiences, and personalized travel support from one modern platform.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3 sm:pt-4">
              <Link
                href="/packages"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F2825B] text-white font-['Plus_Jakarta_Sans'] font-bold text-[14px] shadow-xl shadow-[#F2825B]/30 hover:bg-[#d2633b] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Packages</span>
                <span className="material-symbols-outlined text-[18px]">north_east</span>
              </Link>

              <button
                onClick={() => setIsPlanTripOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 text-white backdrop-blur-lg font-['Plus_Jakarta_Sans'] font-bold text-[14px] hover:bg-white/25 border border-white/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Plan Custom Trip</span>
                <span className="material-symbols-outlined text-[18px]">tune</span>
              </button>
            </div>
          </div>

          <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 sm:p-5 rounded-2xl bg-[#030712]/75 backdrop-blur-xl shadow-2xl border border-white/10">
            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#3e6656]/30 flex items-center justify-center shrink-0 text-[#38BDF8]">
                <span className="material-symbols-outlined text-[26px]">hiking</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h2 className="font-['Plus_Jakarta_Sans'] text-[18px] text-white font-bold">Curated Trips</h2>
                <p className="font-['Inter'] text-[13px] text-[#d8dadc] leading-snug">
                  Handpicked travel experiences for families, couples, and groups.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#3e6656]/30 flex items-center justify-center shrink-0 text-[#F2825B]">
                <span className="material-symbols-outlined text-[26px]">support_agent</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h2 className="font-['Plus_Jakarta_Sans'] text-[18px] text-white font-bold">Local Support</h2>
                <p className="font-['Inter'] text-[13px] text-[#d8dadc] leading-snug">
                  Connect with trusted local operators and homestay owners.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#3e6656]/30 flex items-center justify-center shrink-0 text-[#c0ecd7]">
                <span className="material-symbols-outlined text-[26px]">calendar_month</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h2 className="font-['Plus_Jakarta_Sans'] text-[18px] text-white font-bold">Easy Booking</h2>
                <p className="font-['Inter'] text-[13px] text-[#d8dadc] leading-snug">
                  Send inquiry or booking request directly from the package page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED PACKAGES */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f7f9fb]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] uppercase tracking-widest text-[#3e6656] font-bold">
                Featured Packages
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#08261C] font-extrabold tracking-tight">
                Trips worth remembering
              </h2>
            </div>
            
            <Link
              href="/packages"
              className="group inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-[14px] font-bold text-[#3e6656] hover:text-[#08261C] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>View all packages</span>
              <span className="material-symbols-outlined text-[20px] transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {featuredPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="flex flex-col rounded-2xl overflow-hidden bg-[#030712] text-white shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-900"
              >
                <div className="relative w-full h-64 overflow-hidden bg-slate-900">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={pkg.imageUrl}
                    alt={pkg.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-black/30" />
                  
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#030712]/80 backdrop-blur-md font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {pkg.locationDisplay}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#3e6656]/90 backdrop-blur-md font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#c0ecd7]">
                      {pkg.duration}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[#38BDF8] font-['Plus_Jakarta_Sans'] text-[12px] font-bold">
                    <span className="material-symbols-outlined text-[16px]">{pkg.altitudeIcon}</span>
                    <span>{pkg.altitudeDisplay}</span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-white font-bold leading-tight group-hover:text-[#F2825B] transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="font-['Inter'] text-[13px] text-[#d8dadc] line-clamp-3 leading-relaxed">
                      {pkg.description}
                    </p>

                    <div className="pt-1 flex flex-wrap gap-1.5">
                      {pkg.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-md bg-white/10 font-['Plus_Jakarta_Sans'] text-[11px] font-medium text-[#e6e8ea]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between gap-3 bg-white/5 -mx-6 -mb-6 p-6 border-t border-white/5">
                    <div className="flex flex-col">
                      <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase tracking-wider text-[#d8dadc]/80 font-medium">
                        Starting From
                      </span>
                      <span className="font-['Plus_Jakarta_Sans'] text-[24px] text-white font-black">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="px-5 py-2.5 rounded-full bg-white text-[#08261C] font-['Plus_Jakarta_Sans'] font-bold text-[13px] hover:bg-[#F2825B] hover:text-white transition-all shadow-md inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRAVEL STORIES */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#030712] text-white relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="font-['Plus_Jakarta_Sans'] text-[12px] uppercase tracking-widest text-[#F2825B] font-bold">
                Travel Stories
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Watch experiences before you book them.
              </h2>
              <p className="font-['Inter'] text-sm sm:text-base text-[#d8dadc]/80 max-w-xl">
                Real expeditions shot on location across Sikkim, Nepal, and Bengal high ridges.
              </p>
            </div>

            <Link
              href="/videos"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#38BDF8] hover:text-white transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>Explore Video Theater</span>
              <span className="material-symbols-outlined text-[18px]">play_circle</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {featuredVideos.map((video) => (
              <div
                key={video.id}
                onClick={() => setSelectedVideo(video)}
                className="group flex flex-col rounded-2xl overflow-hidden bg-white/5 hover:bg-white/10 transition-all duration-300 p-4 shadow-lg cursor-pointer border border-white/5"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-[#08261C]/40 mb-4">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={video.thumbnailUrl}
                    alt={video.title}
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#F2825B] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-[28px] translate-x-0.5">play_arrow</span>
                    </div>
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-white font-['Plus_Jakarta_Sans'] text-[11px] font-bold">
                    {video.duration}
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase tracking-wider text-[#38BDF8] font-bold">
                    Travel Story
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg text-white font-bold group-hover:text-[#F2825B] transition-colors">
                    {video.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 font-['Plus_Jakarta_Sans'] text-[13px] text-[#d8dadc]/80 group-hover:text-white transition-colors pt-1">
                    {video.routeKicker}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#f7f9fb]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col items-center text-center gap-1 max-w-2xl mx-auto">
            <span className="font-['Plus_Jakarta_Sans'] text-[12px] uppercase tracking-widest text-[#3e6656] font-bold">
              Testimonials
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-[#08261C] font-extrabold tracking-tight">
              Loved by travelers
            </h2>
            <p className="font-['Inter'] text-sm sm:text-base text-[#45464c]">
              Genuine expedition experiences and safety ratings from our mountain trekkers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
            {testimonials.slice(0, 3).map((t) => (
              <article
                key={t.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-full ${t.avatarBg} ${t.avatarText} flex items-center justify-center font-['Plus_Jakarta_Sans'] text-lg font-bold shadow-sm shrink-0`}
                    >
                      {t.initial}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-['Plus_Jakarta_Sans'] text-[17px] text-[#08261C] font-bold">
                        {t.name}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <div className="flex text-amber-500">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <span
                              key={s}
                              className="material-symbols-outlined text-[16px]"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              star
                            </span>
                          ))}
                        </div>
                        <span className="font-['Plus_Jakarta_Sans'] text-[11px] text-[#45464c] font-semibold">
                          5/5 Experience
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <span className="text-[#F2825B]/20 text-6xl font-serif font-black absolute -top-5 -left-2 select-none pointer-events-none">
                      “
                    </span>
                    <p className="font-['Inter'] text-[14px] text-[#191c1e] leading-relaxed relative z-10 pt-2">
                      {t.review}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 flex items-center justify-between border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="font-['Plus_Jakarta_Sans'] text-[10px] uppercase tracking-wider text-[#45464c] font-semibold">
                      Travel Package
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[13px] text-[#3e6656] font-bold">
                      {t.packageName}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#c0ecd7] text-[#264e3f] font-['Plus_Jakarta_Sans'] text-[11px] font-bold">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Verified
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center pt-2">
            <button
              onClick={() => setIsReviewOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-[#3e6656] hover:bg-[#3e6656] hover:text-white border border-[#3e6656]/30 font-['Plus_Jakarta_Sans'] font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">rate_review</span>
              <span>Share Your Mountain Trek Review</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. DUSK CTA */}
      <section className="w-full pb-16 sm:pb-20 lg:pb-24 pt-4 bg-[#f7f9fb]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#030712] text-white p-8 sm:p-12 md:p-16 shadow-2xl flex flex-col items-center text-center gap-6 border border-white/10">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity pointer-events-none"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAQT1MIiLXay1Yw_1qU3CQAZ4SplpHw2pmPuhf7tafG2s5nnCoI54EsTcAwrhoo1EhFtn-IDEUcJebsGQFnRIwPIiT_aMC4Kg9kuC4j8oRxhfA75owBkJKwDZL2VUscjtovwdSuSdXMqmwHHHW8_Bdr_mKZkfd5Bhw-X4JnPzvEHZ6Vpy7Ssk2_CNOSvabyVfM8HKsc6OnkI9x-Fw29VTY6ISL-2xdOWXq2To5Fo37qtD3DEVUPDXHP')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent" />

            <div className="relative z-10 flex flex-col items-center max-w-2xl gap-4">
              <div className="w-14 h-14 rounded-full bg-[#F2825B]/20 flex items-center justify-center text-[#F2825B] mb-1">
                <span className="material-symbols-outlined text-[32px]">travel_explore</span>
              </div>

              <h2 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Ready to plan your next escape?
              </h2>

              <p className="font-['Inter'] text-base sm:text-lg text-[#e6e8ea] leading-relaxed">
                Send us your travel preference and we'll help you find the right package.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-[#030712] font-['Plus_Jakarta_Sans'] font-bold text-[14px] hover:bg-[#F2825B] hover:text-white transition-all duration-300 shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Start Planning</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>

                <a
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#3e6656] text-white font-['Plus_Jakarta_Sans'] font-bold text-[14px] hover:bg-[#a5d0bc] hover:text-[#08261C] transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
                  href="https://wa.me/919091316662"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>WhatsApp Us (+91 9091316662)</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-5 text-[#d8dadc] font-['Inter'] text-[13px]">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#c0ecd7] text-[18px]">check_circle</span>
                  <span>Local Certified Guides</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#c0ecd7] text-[18px]">check_circle</span>
                  <span>Safe High-Altitude Protocols</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#c0ecd7] text-[18px]">check_circle</span>
                  <span>Direct Homestay Fair Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookSuccess={() => showToast('Inquiry sent successfully!')}
      />
      <PlanTripModal
        isOpen={isPlanTripOpen}
        onClose={() => setIsPlanTripOpen(false)}
      />
      <VideoPlayerModal
        story={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onExploreTrek={handleExploreTrekFromVideo}
      />
      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
};
