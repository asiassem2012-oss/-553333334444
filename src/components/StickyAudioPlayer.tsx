import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Repeat,
  Repeat1,
  Maximize2,
  Sparkles,
  FastForward
} from 'lucide-react';
import { useAudioStore } from '../store/useAudioStore';
import { RepeatMode } from '../types/quran';

interface StickyAudioPlayerProps {
  language: 'ar' | 'en';
  onOpenReciterPicker?: () => void;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export const StickyAudioPlayer: React.FC<StickyAudioPlayerProps> = ({ language, onOpenReciterPicker }) => {
  const isAr = language === 'ar';
  const {
    isPlaying,
    currentTime,
    duration,
    buffered,
    volume,
    isMuted,
    playbackRate,
    repeatMode,
    isLoading,
    activeSurah,
    activeAyahNumber,
    activeReciter,
    activeRiwaya,
    actions
  } = useAudioStore();

  const [showVolumePopup, setShowVolumePopup] = useState<boolean>(false);

  if (!activeSurah) return null;

  const cyclePlaybackRate = () => {
    const rates = [0.75, 1.0, 1.25, 1.5, 2.0];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    actions.setPlaybackRate(nextRate);
  };

  const cycleRepeatMode = () => {
    const modes: RepeatMode[] = ['off', 'continuous', 'surah', 'ayah'];
    const currentIndex = modes.indexOf(repeatMode);
    const nextMode = modes[(currentIndex + 1) % modes.length];
    actions.setRepeatMode(nextMode);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = Number(e.target.value);
    actions.seekTo(target);
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-md border-t border-amber-900/40 text-stone-100 shadow-2xl transition-all">
      {/* Mini Seek bar on very top edge */}
      <div className="relative w-full h-1 bg-stone-800 cursor-pointer group">
        {/* Buffered bar */}
        <div
          className="absolute top-0 bottom-0 right-0 bg-stone-700/60"
          style={{ width: `${buffered}%` }}
        />
        {/* Progress bar */}
        <div
          className="absolute top-0 bottom-0 right-0 bg-gradient-to-l from-amber-400 to-amber-600"
          style={{ width: `${progressPct}%` }}
        />
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleSeek}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* 1. Left: Active Surah & Reciter Info */}
        <div
          onClick={() => actions.setPlayerModalOpen(true)}
          className="flex items-center gap-3 cursor-pointer group min-w-0 max-w-[200px] sm:max-w-xs"
        >
          {/* Animated Disc / Monogram */}
          <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-600 to-emerald-800 flex items-center justify-center shrink-0 border border-amber-500/40 shadow">
            {isPlaying ? (
              <div className="flex items-end gap-0.5 h-4">
                <span className="w-0.5 bg-amber-200 animate-soundwave-1"></span>
                <span className="w-0.5 bg-amber-200 animate-soundwave-2"></span>
                <span className="w-0.5 bg-amber-200 animate-soundwave-3"></span>
                <span className="w-0.5 bg-amber-200 animate-soundwave-4"></span>
              </div>
            ) : (
              <span className="text-xs font-bold text-amber-200 font-arabic">
                {activeSurah.name.slice(0, 2)}
              </span>
            )}
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <h4 className="font-bold text-sm text-amber-100 truncate group-hover:text-amber-400 font-arabic">
                سورة {activeSurah.name}
              </h4>
              {activeAyahNumber && (
                <span className="text-[10px] text-amber-400 font-mono hidden sm:inline">
                  (آية {activeAyahNumber})
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <p className="text-[11px] text-stone-400 truncate">
                {activeReciter.name} · <span className="text-emerald-400">{activeRiwaya.name}</span>
              </p>
              {onOpenReciterPicker && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenReciterPicker();
                  }}
                  className="text-[10px] text-amber-400 hover:text-amber-300 underline font-medium cursor-pointer shrink-0"
                >
                  [تغيير]
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2. Middle: Audio Playback Controls & Timeline */}
        <div className="flex-1 max-w-xl flex flex-col items-center">
          {/* Main buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Previous Surah button */}
            <button
              onClick={() => actions.prevSurah()}
              className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors"
              title={isAr ? 'السورة السابقة' : 'Previous Surah'}
            >
              <SkipForward className="w-4 h-4" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => actions.togglePlayPause()}
              disabled={isLoading}
              className="w-10 h-10 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center hover:bg-amber-400 active:scale-95 transition-all shadow-md"
              title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin"></div>
              ) : isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current mr-0.5" />
              )}
            </button>

            {/* Next Surah button */}
            <button
              onClick={() => actions.nextSurah()}
              className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors"
              title={isAr ? 'السورة التالية' : 'Next Surah'}
            >
              <SkipBack className="w-4 h-4" />
            </button>
          </div>

          {/* Time scrubber on larger screens */}
          <div className="w-full hidden md:flex items-center gap-2 text-[11px] text-stone-400 font-mono mt-1">
            <span className="w-10 text-right">{formatTime(currentTime)}</span>
            <div className="flex-1 relative flex items-center">
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>
            <span className="w-10 text-left">{formatTime(duration)}</span>
          </div>
        </div>

        {/* 3. Right: Speed, Repeat, Volume, Expand */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Speed selector */}
          <button
            onClick={cyclePlaybackRate}
            className="px-2 py-1 rounded text-[11px] font-mono text-stone-300 hover:bg-stone-800 transition-colors border border-stone-800"
            title="سرعة التلاوة"
          >
            {playbackRate}x
          </button>

          {/* Repeat mode */}
          <button
            onClick={cycleRepeatMode}
            className={`p-1.5 rounded transition-colors ${
              repeatMode !== 'off'
                ? 'text-amber-400 bg-amber-500/10'
                : 'text-stone-400 hover:text-stone-200'
            }`}
            title={
              repeatMode === 'surah'
                ? 'تكرار السورة'
                : repeatMode === 'ayah'
                ? 'تكرار الآية'
                : repeatMode === 'continuous'
                ? 'تشغيل متتابع'
                : 'بدون تكرار'
            }
          >
            {repeatMode === 'surah' ? (
              <Repeat1 className="w-4 h-4" />
            ) : (
              <Repeat className="w-4 h-4" />
            )}
          </button>

          {/* Volume toggle */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => actions.toggleMute()}
              onMouseEnter={() => setShowVolumePopup(true)}
              className="p-1.5 text-stone-400 hover:text-stone-200 transition-colors"
              title="مستوى الصوت"
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4 text-red-400" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>

            {/* Volume slider popover */}
            {showVolumePopup && (
              <div
                onMouseLeave={() => setShowVolumePopup(false)}
                className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-stone-800 p-2 rounded-xl shadow-xl border border-stone-700 flex flex-col items-center"
              >
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={(e) => actions.setVolume(Number(e.target.value))}
                  className="w-20 h-1 accent-amber-500 cursor-pointer"
                />
              </div>
            )}
          </div>

          {/* Maximize to full player */}
          <button
            onClick={() => actions.setPlayerModalOpen(true)}
            className="p-1.5 text-stone-400 hover:text-amber-400 transition-colors"
            title="المشغل الشامل"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
