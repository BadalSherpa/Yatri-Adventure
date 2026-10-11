import React, { useState } from 'react';
import { VideoStory, VIDEO_STORIES } from '../data/mockData';

interface VideosViewProps {
  onSelectVideo: (story: VideoStory) => void;
  onOpenPlanTrip: () => void;
}

export const VideosView: React.FC<VideosViewProps> = ({ onSelectVideo, onOpenPlanTrip }) => {
  const [filter, setFilter] = useState<string>('All');

  return (
    <div className="w-full pb-20 pt-6">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        
        {/* Header */}
        <div className="rounded-3xl bg-[#030712] text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl border border-white/10">
          <div className="relative z-10 max-w-2xl flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest text-[#F2825B]">
              Cinematic Mountain Cinema
            </span>
            <h1 className="font-['Plus_Jakarta_Sans'] text-3xl sm:text-5xl font-black text-white leading-tight">
              Watch Experiences Before You Book Them
            </h1>
            <p className="font-['Inter'] text-sm sm:text-base text-[#d8dadc]/90 leading-relaxed">
              Unfiltered video journals shot on location with 4K drone cinematography across Nepal, Sikkim, and Singalila ridgelines.
            </p>
          </div>

          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-25 pointer-events-none flex items-center justify-center">
            <span className="material-symbols-outlined text-[300px] text-white">smart_display</span>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {VIDEO_STORIES.map((story) => (
            <div
              key={story.id}
              onClick={() => onSelectVideo(story)}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 p-4 border border-slate-100 cursor-pointer"
            >
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900 mb-4">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={story.thumbnailUrl}
                  alt={story.title}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#F2825B] text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[28px] translate-x-0.5">
                      play_arrow
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/70 text-white font-['Plus_Jakarta_Sans'] text-[11px] font-bold">
                  {story.duration}
                </div>

                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-[#38BDF8]">
                  {story.location}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 flex-1 justify-between">
                <div>
                  <span className="font-['Plus_Jakarta_Sans'] text-[11px] uppercase tracking-wider text-[#3e6656] font-bold">
                    {story.altitude}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-slate-900 group-hover:text-[#F2825B] transition-colors leading-snug">
                    {story.videoTitle}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {story.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#3e6656] font-bold">
                  <span>{story.routeKicker}</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Prompt */}
        <div className="p-8 rounded-3xl bg-[#08261C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-bold text-white">
              Want a custom video log of your private expedition?
            </h3>
            <p className="text-xs sm:text-sm text-[#d8dadc]/80 mt-1">
              We offer certified adventure drone cinematographers for private group bookings.
            </p>
          </div>
          <button
            onClick={onOpenPlanTrip}
            className="px-6 py-3 rounded-full bg-[#F2825B] text-white font-bold text-xs sm:text-sm hover:bg-[#d2633b] transition-all shadow-md shrink-0 cursor-pointer"
          >
            Inquire Expedition Video Pack
          </button>
        </div>

      </div>
    </div>
  );
};
