import React, { useState } from 'react';
import { PackageItem } from '../data/mockData';

interface PackagesViewProps {
  packages: PackageItem[];
  onSelectPackage: (pkg: PackageItem) => void;
  onOpenPlanTrip: () => void;
}

export const PackagesView: React.FC<PackagesViewProps> = ({
  packages,
  onSelectPackage,
  onOpenPlanTrip,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');

  const filteredPackages = packages
    .filter((pkg) => {
      const matchRegion =
        selectedRegion === 'All' ||
        pkg.region.toLowerCase() === selectedRegion.toLowerCase();
      const matchDifficulty =
        selectedDifficulty === 'All' || pkg.difficulty === selectedDifficulty;
      const matchSearch =
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchRegion && matchDifficulty && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'duration') return a.durationDays - b.durationDays;
      return 0;
    });

  return (
    <div className="w-full pb-20 pt-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
        
        {/* Hero Header for Packages Catalog */}
        <div className="rounded-3xl bg-[#08261C] text-white p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#c0ecd7]">
              Curated Himalayan Catalog
            </span>
            <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Expeditions, Trails & Homestay Retreats
            </h1>
            <p className="font-['Inter'] text-sm sm:text-base text-[#d8dadc]/90 leading-relaxed">
              Every route is vetted for high-altitude acclimatization, guided by certified local mountaineers, and directly benefits village host families.
            </p>
          </div>

          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none w-96 h-96 flex items-center justify-center">
            <span className="material-symbols-outlined text-[320px] text-white">landscape</span>
          </div>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-200">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-3.5 top-3 text-slate-400 text-[20px]">
              search
            </span>
            <input
              type="text"
              placeholder="Search by trek name, mountain peak, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#F2825B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>

          {/* Region Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0">
            {['All', 'Nepal', 'Sandakphu', 'Darjeeling', 'Sikkim'].map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedRegion === reg
                    ? 'bg-[#08261C] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-bold text-slate-500 uppercase">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F2825B]"
            >
              <option value="featured">Featured First</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="duration">Duration (Days)</option>
            </select>
          </div>

        </div>

        {/* Difficulty secondary bar */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase mr-1">Grade:</span>
          {['All', 'Easy', 'Moderate', 'Strenuous'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                selectedDifficulty === diff
                  ? 'bg-[#c0ecd7] text-[#08261C] font-bold'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {diff}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto hidden sm:inline">
            Showing {filteredPackages.length} packages
          </span>
        </div>

        {/* Packages Grid */}
        {filteredPackages.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 flex flex-col items-center gap-3">
            <span className="material-symbols-outlined text-[48px] text-slate-400">travel_explore</span>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl font-bold text-slate-800">
              No packages match your search criteria
            </h3>
            <p className="text-xs text-slate-500 max-w-sm">
              Try adjusting your region or difficulty filters, or craft a customized itinerary with our travel specialists.
            </p>
            <button
              onClick={onOpenPlanTrip}
              className="mt-2 px-6 py-2.5 rounded-full bg-[#F2825B] text-white text-xs font-bold"
            >
              Request Custom Itinerary
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="flex flex-col rounded-2xl overflow-hidden bg-[#030712] text-white shadow-xl hover:shadow-2xl transition-all duration-300 group border border-slate-900"
              >
                {/* Image Box */}
                <div className="relative w-full h-64 overflow-hidden bg-slate-900">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={pkg.imageUrl}
                    alt={pkg.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-black/30" />
                  
                  {/* Badges */}
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

                {/* Body */}
                <div className="p-6 flex flex-col flex-1 justify-between gap-5">
                  <div className="flex flex-col gap-2.5">
                    <h3 className="font-['Plus_Jakarta_Sans'] text-2xl text-white font-bold leading-tight group-hover:text-[#F2825B] transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="font-['Inter'] text-[13px] text-[#d8dadc] line-clamp-3 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Highlights Chips */}
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

                  {/* Footer Meta + CTA */}
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
                      onClick={() => onSelectPackage(pkg)}
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
        )}

      </div>
    </div>
  );
};
