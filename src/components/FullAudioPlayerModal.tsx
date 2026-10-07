import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Repeat,
  Repeat1,
  Sparkles,
  Download,
  ListMusic,
  BookOpen
} from 'lucide-react';
import { useAudioStore } from '../store/useAudioStore';
import { ALL_SURAHS } from '../data/surahsData';
import { cacheSurahAudio, fetchSurahVerses, getSurahAudioUrl } from '../services/quranApi';
import { Ayah, RepeatMode } from '../types/quran';

interface FullAudioPlayerModalProps {
  language: 'ar' | 'en';
  onNavigateToMushaf?: () => void;
}

function formatTime(seconds: number): string {
  if (isNaN(seconds) || seconds < 0) return '00:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

export const FullAudioPlayerModal: React.FC<FullAudioPlayerModalProps> = ({
  language,
  onNavigateToMushaf
}) => {
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
    isPlayerModalOpen,
    actions
  } = useAudioStore();

  const [activeTab, setActiveTab] = useState<'lyrics' | 'queue'>('lyrics');
  const [verses, setVerses] = useState<Ayah[]>([]);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);
  const activeAyahRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (activeSurah) {
      fetchSurahVerses(activeSurah.number).then((data) => {
        setVerses(data);
      });
    }
  }, [activeSurah?.number]);

  // Scroll active ayah into view in lyrics mode
  useEffect(() => {
    if (activeAyahRef.current) {
      activeAyahRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [activeAyahNumber]);

  if (!isPlayerModalOpen || !activeSurah) return null;

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
    actions.seekTo(Number(e.target.value));
  };

  const handleDownloadSurah = async () => {
    if (!activeSurah) return;
    const url = getSurahAudioUrl(activeReciter, activeSurah.number);
    setIsDownloading(true);
    try {
      await cacheSurahAudio(url);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    } catch (e) {
      console.warn('Download error', e);
    } finally {
      setIsDownloading(false);
    }
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-xl flex flex-col text-stone-100 overflow-hidden animate-in fade-in duration-300">
      
      {/* Top Header Bar */}
      <div className="p-4 sm:p-6 flex items-center justify-between border-b border-stone-800/80">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-bold font-arabic text-amber-200">
              المشغل الصوتي الشامل ومزامنة الآيات
            </h2>
            <p className="text-xs text-stone-400">
              {activeRiwaya.name} · {activeReciter.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {onNavigateToMushaf && (
            <button
              onClick={() => {
                actions.setPlayerModalOpen(false);
                onNavigateToMushaf();
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-medium text-stone-300 transition-colors"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <span className="hidden sm:inline">فتح المصحف</span>
            </button>
          )}

          <button
            onClick={() => actions.setPlayerModalOpen(false)}
            className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        {/* Left Column (Lg: 5 Cols): Disc Artwork & Surah Meta */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-3xl bg-stone-900/60 border border-stone-800/80 relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Rotating Geometric Disc */}
          <div className="relative my-4">
            <div
              className={`w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 border-amber-500/50 p-2 shadow-2xl bg-gradient-to-tr from-stone-950 via-emerald-950 to-stone-900 flex items-center justify-center transition-transform ${
                isPlaying ? 'animate-[spin_20s_linear_infinite]' : ''
              }`}
            >
              <div className="w-full h-full rounded-full border-2 border-dashed border-amber-400/40 flex flex-col items-center justify-center text-center p-4">
                <span className="text-3xl sm:text-4xl font-bold font-quran text-amber-200">
                  {activeSurah.name}
                </span>
                <span className="text-xs text-stone-400 font-mono mt-1">
                  {activeSurah.englishName}
                </span>
                <span className="text-[10px] text-emerald-400 mt-2 font-bold">
                  {activeRiwaya.name}
                </span>
              </div>
            </div>

            {/* Center Golden Pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-amber-500 border-4 border-stone-900 shadow-md"></div>
          </div>

          {/* Title & Metadata */}
          <div className="text-center mt-4 space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold font-arabic text-stone-100">
              سورة {activeSurah.name} ({activeSurah.englishMeaning})
            </h3>
            <p className="text-sm text-stone-400 font-arabic">
              بصوت القارئ الشيخ {activeReciter.name}
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-stone-500 pt-1">
              <span>{activeSurah.numberOfAyahs} آية</span>
              <span aria-hidden="true">·</span>
              <span>{activeSurah.revelationType === 'Meccan' ? 'مكية' : 'مدنية'}</span>
              <span aria-hidden="true">·</span>
              <span>الجزء {activeSurah.juz}</span>
            </div>
          </div>

          {/* Offline Download button */}
          <button
            onClick={handleDownloadSurah}
            disabled={isDownloading}
            className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-colors ${
              downloadSuccess
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>
              {downloadSuccess
                ? 'تم التخزين دون اتصال'
                : isDownloading
                ? 'جاري التحميل...'
                : 'تحميل السورة للاستماع بدون إنترنت'}
            </span>
          </button>
        </div>

        {/* Right Column (Lg: 7 Cols): Synchronized Verses or Queue */}
        <div className="lg:col-span-7 flex flex-col rounded-3xl bg-stone-900/60 border border-stone-800/80 overflow-hidden">
          {/* Tabs */}
          <div className="flex items-center p-3 border-b border-stone-800/80 bg-stone-900/80 text-xs font-medium">
            <button
              onClick={() => setActiveTab('lyrics')}
              className={`flex-1 py-2 text-center rounded-xl transition-colors ${
                activeTab === 'lyrics'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              المزامنة الحية للآيات (التتبع الصوتي)
            </button>
            <button
              onClick={() => setActiveTab('queue')}
              className={`flex-1 py-2 text-center rounded-xl transition-colors ${
                activeTab === 'queue'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              قائمة السور (١١٤ سورة)
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {activeTab === 'lyrics' ? (
              // Verses with active highlight
              verses.length > 0 ? (
                verses.map((ayah) => {
                  const isCurrent = activeAyahNumber === ayah.numberInSurah;
                  return (
                    <div
                      key={ayah.numberInSurah}
                      ref={isCurrent ? activeAyahRef : null}
                      onClick={() => actions.seekToAyah(ayah.numberInSurah)}
                      className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 text-right ${
                        isCurrent
                          ? 'bg-amber-500/15 border border-amber-500/50 shadow-md text-amber-200 ring-1 ring-amber-500/30 scale-[1.01]'
                          : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/40'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-quran text-lg sm:text-xl leading-loose flex-1">
                          {ayah.text}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-sans font-bold shrink-0 ${
                            isCurrent
                              ? 'bg-amber-500 text-stone-950 shadow'
                              : 'bg-stone-800 text-stone-400'
                          }`}
                        >
                          {ayah.numberInSurah}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 mt-2 font-sans font-normal leading-relaxed">
                        {ayah.translation}
                      </p>
                    </div>
                  );
                })
              ) : (
                <div className="py-20 text-center text-stone-500">
                  جاري تحميل الآيات الكريمة...
                </div>
              )
            ) : (
              // Queue list
              ALL_SURAHS.map((surah) => {
                const isSelected = activeSurah.number === surah.number;
                return (
                  <div
                    key={surah.number}
                    onClick={() => actions.playSurah(surah)}
                    className={`p-3 rounded-xl flex items-center justify-between cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-amber-500/20 text-amber-200 border border-amber-500/40'
                        : 'hover:bg-stone-800/60 text-stone-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-stone-800 flex items-center justify-center font-bold text-xs font-mono">
                        {surah.number}
                      </span>
                      <div>
                        <h4 className="font-bold text-sm font-arabic">سورة {surah.name}</h4>
                        <span className="text-[11px] text-stone-500">
                          {surah.englishName} · {surah.numberOfAyahs} آية
                        </span>
                      </div>
                    </div>
                    {isSelected && isPlaying && (
                      <span className="text-xs text-amber-400 font-bold">جاري التشغيل...</span>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>

      {/* Bottom Controls Bar in Modal */}
      <div className="p-4 sm:p-6 border-t border-stone-800/80 bg-stone-900/90">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
          
          {/* Scrubber slider */}
          <div className="w-full flex items-center gap-3 text-xs text-stone-400 font-mono">
            <span>{formatTime(currentTime)}</span>
            <div className="flex-1 relative flex items-center">
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-stone-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
            </div>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Main Controls Row */}
          <div className="flex items-center justify-between w-full">
            {/* Playback speed */}
            <button
              onClick={cyclePlaybackRate}
              className="px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-mono text-stone-300"
            >
              {playbackRate}x
            </button>

            {/* Central playback buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => actions.prevSurah()}
                className="p-2 text-stone-400 hover:text-stone-100 transition-colors"
                title="السورة السابقة"
              >
                <SkipForward className="w-5 h-5" />
              </button>

              <button
                onClick={() => actions.togglePlayPause()}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-xl"
              >
                {isLoading ? (
                  <div className="w-6 h-6 border-2 border-stone-950 border-t-transparent rounded-full animate-spin"></div>
                ) : isPlaying ? (
                  <Pause className="w-7 h-7 fill-current" />
                ) : (
                  <Play className="w-7 h-7 fill-current mr-1" />
                )}
              </button>

              <button
                onClick={() => actions.nextSurah()}
                className="p-2 text-stone-400 hover:text-stone-100 transition-colors"
                title="السورة التالية"
              >
                <SkipBack className="w-5 h-5" />
              </button>
            </div>

            {/* Repeat button */}
            <button
              onClick={cycleRepeatMode}
              className={`p-2.5 rounded-xl transition-colors ${
                repeatMode !== 'off'
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  : 'bg-stone-800 text-stone-400 hover:text-stone-200'
              }`}
            >
              {repeatMode === 'surah' ? (
                <Repeat1 className="w-4 h-4" />
              ) : (
                <Repeat className="w-4 h-4" />
              )}
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
