import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { PackagesView } from './components/PackagesView';
import { AboutView } from './components/AboutView';
import { TeamView } from './components/TeamView';
import { VideosView } from './components/VideosView';
import { ContactView } from './components/ContactView';
import { PackageDetailModal } from './components/PackageDetailModal';
import { PlanTripModal } from './components/PlanTripModal';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { ReviewModal } from './components/ReviewModal';
import {
  PACKAGES_DATA,
  VIDEO_STORIES,
  TESTIMONIALS_DATA,
  PackageItem,
  VideoStory,
  Testimonial,
} from './data/mockData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoStory | null>(null);
  const [isPlanTripOpen, setIsPlanTripOpen] = useState<boolean>(false);
  const [isReviewOpen, setIsReviewOpen] = useState<boolean>(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    try {
      const saved = localStorage.getItem('yatri_testimonials');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // fallback
    }
    return TESTIMONIALS_DATA;
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleAddReview = (newReview: Testimonial) => {
    const updated = [newReview, ...testimonials];
    setTestimonials(updated);
    try {
      localStorage.setItem('yatri_testimonials', JSON.stringify(updated));
    } catch (e) {}
    showToast(`Thank you, ${newReview.name}! Your review has been added.`);
  };

  const handleBookingSuccess = (details: { pkgName: string; travelers: number; date: string; name: string }) => {
    showToast(`Inquiry sent for ${details.pkgName}! We will reach out shortly.`);
  };

  const handleExploreTrekFromVideo = (storyId: string) => {
    if (storyId.includes('sandakphu')) {
      const pkg = PACKAGES_DATA.find((p) => p.id === 'sandakphu-tour');
      if (pkg) setSelectedPackage(pkg);
    } else if (storyId.includes('annapurna')) {
      const pkg = PACKAGES_DATA.find((p) => p.id === 'mardi-himal');
      if (pkg) setSelectedPackage(pkg);
    } else {
      const pkg = PACKAGES_DATA[0];
      setSelectedPackage(pkg);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col font-['Inter'] selection:bg-[#F2825B] selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-4 sm:right-8 z-50 bg-[#08261C] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-[#c0ecd7]/30 animate-in slide-in-from-top-3 fade-in duration-200">
          <span className="material-symbols-outlined text-[#c0ecd7] text-[20px]">check_circle</span>
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-white/60 hover:text-white ml-2 text-xs"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Global Header */}
      <Header
        currentTab={currentTab}
        onNavigate={(tab) => setCurrentTab(tab)}
        onOpenPlanTrip={() => setIsPlanTripOpen(true)}
      />

      {/* Main View Container */}
      <main className="w-full pt-20 flex-1">
        {currentTab === 'home' && (
          <HomeView
            packages={PACKAGES_DATA}
            videoStories={VIDEO_STORIES}
            testimonials={testimonials}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onSelectVideo={(video) => setSelectedVideo(video)}
            onNavigate={(tab) => setCurrentTab(tab)}
            onOpenPlanTrip={() => setIsPlanTripOpen(true)}
            onOpenReviewModal={() => setIsReviewOpen(true)}
          />
        )}

        {currentTab === 'packages' && (
          <PackagesView
            packages={PACKAGES_DATA}
            onSelectPackage={(pkg) => setSelectedPackage(pkg)}
            onOpenPlanTrip={() => setIsPlanTripOpen(true)}
          />
        )}

        {currentTab === 'about' && (
          <AboutView
            onNavigate={(tab) => setCurrentTab(tab)}
            onOpenPlanTrip={() => setIsPlanTripOpen(true)}
          />
        )}

        {currentTab === 'our-team' && (
          <TeamView
            onOpenPlanTrip={() => setIsPlanTripOpen(true)}
            onNavigate={(tab) => setCurrentTab(tab)}
          />
        )}

        {currentTab === 'travel-videos' && (
          <VideosView
            onSelectVideo={(video) => setSelectedVideo(video)}
            onOpenPlanTrip={() => setIsPlanTripOpen(true)}
          />
        )}

        {currentTab === 'contact' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => setCurrentTab(tab)} />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="Support chat" className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/919091316662"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#3e6656] text-white flex items-center justify-center shadow-2xl hover:bg-[#264e3f] hover:scale-105 active:scale-95 transition-all duration-200 group ring-4 ring-white/80 cursor-pointer"
          title="Chat directly with our Darjeeling team on WhatsApp"
        >
          <span className="material-symbols-outlined text-[28px]">chat</span>
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </aside>

      {/* Package Detail Modal */}
      <PackageDetailModal
        pkg={selectedPackage}
        onClose={() => setSelectedPackage(null)}
        onBookSuccess={handleBookingSuccess}
      />

      {/* Custom Plan Your Trip Modal */}
      <PlanTripModal
        isOpen={isPlanTripOpen}
        onClose={() => setIsPlanTripOpen(false)}
      />

      {/* Video Player Modal */}
      <VideoPlayerModal
        story={selectedVideo}
        onClose={() => setSelectedVideo(null)}
        onExploreTrek={handleExploreTrekFromVideo}
      />

      {/* Testimonial Review Modal */}
      <ReviewModal
        isOpen={isReviewOpen}
        onClose={() => setIsReviewOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
}
