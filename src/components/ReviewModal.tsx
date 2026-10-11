import React, { useState } from 'react';
import { Testimonial } from '../data/mockData';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: Testimonial) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmitReview }) => {
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [packageName, setPackageName] = useState<string>('Goecha-la Trek');
  const [rating, setRating] = useState<number>(5);
  const [review, setReview] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !review.trim()) return;

    const initials = name.trim().charAt(0).toUpperCase();
    const bgColors = ['bg-[#c0ecd7]', 'bg-[#dce2f8]', 'bg-[#ffdbcf]', 'bg-[#f2825b]/20'];
    const textColors = ['text-[#002116]', 'text-[#151b2b]', 'text-[#390c00]', 'text-[#F2825B]'];
    const randomIndex = Math.floor(Math.random() * bgColors.length);

    const newTestimonial: Testimonial = {
      id: `rev-${Date.now()}`,
      name: name.trim(),
      initial: initials,
      avatarBg: bgColors[randomIndex],
      avatarText: textColors[randomIndex],
      rating,
      review: review.trim(),
      packageName,
      verified: true,
      date: 'Just now',
      location: location.trim() || 'Himalayan Trekker',
    };

    onSubmitReview(newTestimonial);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col">
        
        {/* Header */}
        <div className="bg-[#08261C] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#F2825B] text-[22px]">rate_review</span>
            <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-lg text-white">
              Share Your Mountain Story
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Suman Tamang"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
              Hometown / Location (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. New Delhi, India"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Expedition Package
              </label>
              <select
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
              >
                <option value="Goecha-la Trek">Goecha-la Trek</option>
                <option value="Mardi Himal Trek">Mardi Himal Trek</option>
                <option value="Sandakphu Tour">Sandakphu Tour</option>
                <option value="Canyoning Adventure">Canyoning Adventure</option>
                <option value="Darjeeling Heritage Trail">Darjeeling Heritage Trail</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
                Experience Rating
              </label>
              <div className="flex items-center gap-1 py-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="p-1 text-amber-500 hover:scale-110 transition-transform cursor-pointer focus:outline-none"
                  >
                    <span
                      className="material-symbols-outlined text-[24px]"
                      style={{ fontVariationSettings: `'FILL' ${rating >= star ? 1 : 0}` }}
                    >
                      star
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-1">
              Your Review & Guide Feedback
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell others about the trails, homestay hospitality, guide support, and high-altitude safety..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-[#F2825B] focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#F2825B] text-white font-bold text-xs sm:text-sm hover:bg-[#d2633b] transition-all shadow-md cursor-pointer"
            >
              Publish Mountain Review
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
