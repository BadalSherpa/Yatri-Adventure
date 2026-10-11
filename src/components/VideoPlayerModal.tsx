import React, { useState } from 'react';
import { VideoStory } from '../data/mockData';

interface VideoPlayerModalProps {
  story: VideoStory | null;
  onClose: () => void;
  onExploreTrek?: (storyId: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  story,
  onClose,
  onExploreTrek,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(35);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-950 text-white rounded-3xl shadow-2xl overflow-hidden border border-slate-800 flex flex-col my-auto max-h-[92vh]">
        
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F2825B] animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-bold text-[#38BDF8]">
              Yatri Adventure Video Journals · 4K HDR
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close video player"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative aspect-video w-full bg-black overflow-hidden group">
          <img
            src={story.thumbnailUrl}
            alt={story.title}
            className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/30" />

          {/* Central Play/Pause Trigger */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#F2825B]/90 hover:bg-[#F2825B] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer z-10"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            <span className="material-symbols-outlined text-[44px]">
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          {/* Video Status Overlay */}
          <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border border-white/10">
            <span className="material-symbols-outlined text-[16px] text-[#38BDF8]">location_on</span>
            <span>{story.location}</span>
            <span>·</span>
            <span className="text-slate-300">{story.altitude}</span>
          </div>

          {/* Bottom Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-2 z-20">
            {/* Scrubber track */}
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(pos * 100));
              }}
              className="w-full h-1.5 bg-white/20 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all relative"
            >
              <div
                className="h-full bg-[#F2825B] transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Playback action buttons */}
            <div className="flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white focus:outline-none cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white focus:outline-none cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isMuted ? 'volume_off' : 'volume_up'}
                  </span>
                </button>
                <span>01:42 / {story.duration}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] uppercase font-bold text-[#c0ecd7]">
                  RAW AUDIO
                </span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] uppercase font-bold text-white">
                  4K 60FPS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Story Details & Route Elevation */}
        <div className="p-6 overflow-y-auto space-y-5 bg-slate-950">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#38BDF8]">
                Expedition Log
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] text-xl sm:text-2xl font-black text-white mt-1">
                {story.videoTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
                {story.description}
              </p>
            </div>

            <button
              onClick={() => {
                if (onExploreTrek) onExploreTrek(story.id);
                onClose();
              }}
              className="shrink-0 px-5 py-3 rounded-full bg-[#F2825B] text-white font-bold text-xs sm:text-sm hover:bg-[#d2633b] transition-all flex items-center gap-2 shadow-lg cursor-pointer"
            >
              <span>Explore Package Details</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Route Highlights and Elevation Profile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Featured Waypoints in Reel
              </span>
              <div className="space-y-2">
                {story.routeHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Altitude Step Chart */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Altitude Ascent Profile
              </span>
              <div className="flex items-end justify-between gap-2 h-20 pt-2 border-b border-slate-800">
                {story.elevationProfile.map((pt, idx) => {
                  const maxEle = Math.max(...story.elevationProfile.map(p => p.elevation));
                  const heightPercent = Math.round((pt.elevation / maxEle) * 100);
                  return (
                    <div key={idx} className="flex flex-col items-center flex-1 h-full justify-end group">
                      <div
                        className="w-full bg-[#c0ecd7]/80 rounded-t-sm group-hover:bg-[#F2825B] transition-colors"
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 pt-1">
                <span>{story.elevationProfile[0]?.point} ({story.elevationProfile[0]?.elevation}m)</span>
                <span>{story.elevationProfile[story.elevationProfile.length - 1]?.point} ({story.elevationProfile[story.elevationProfile.length - 1]?.elevation}m)</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
