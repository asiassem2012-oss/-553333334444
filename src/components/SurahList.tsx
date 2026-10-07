import React, { useState, useMemo } from 'react';
import { Play, Pause, BookOpen, Download, Check, Sparkles, Filter, Search } from 'lucide-react';
import { Reciter, Riwaya, Surah } from '../types/quran';
import { ALL_SURAHS } from '../data/surahsData';
import { cacheSurahAudio, getSurahAudioUrl, isSurahAudioCached } from '../services/quranApi';

interface SurahListProps {
  activeSurah: Surah | null;
  isPlaying: boolean;
  activeReciter: Reciter;
  activeRiwaya: Riwaya;
  onPlaySurah: (surah: Surah) => void;
  onOpenMushaf: (surah: Surah) => void;
  language: 'ar' | 'en';
  searchQuery: string;
}

export const SurahList: React.FC<SurahListProps> = ({
  activeSurah,
  isPlaying,
  activeReciter,
  activeRiwaya,
  onPlaySurah,
  onOpenMushaf,
  language,
  searchQuery
}) => {
  const isAr = language === 'ar';
  const [filterType, setFilterType] = useState<'all' | 'Meccan' | 'Medinan'>('all');
  const [selectedJuz, setSelectedJuz] = useState<number | 'all'>('all');
  const [downloadingMap, setDownloadingMap] = useState<Record<number, boolean>>({});
  const [cachedMap, setCachedMap] = useState<Record<number, boolean>>({});

  // Filter surahs
  const filteredSurahs = useMemo(() => {
    return ALL_SURAHS.filter((surah) => {
      // Query filter
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        surah.name.toLowerCase().includes(q) ||
        surah.englishName.toLowerCase().includes(q) ||
        surah.englishMeaning.toLowerCase().includes(q) ||
        surah.number.toString() === q;

      // Revelation filter
      const matchesType = filterType === 'all' || surah.revelationType === filterType;

      // Juz filter
      const matchesJuz = selectedJuz === 'all' || surah.juz === selectedJuz;

      return matchesQuery && matchesType && matchesJuz;
    });
  }, [searchQuery, filterType, selectedJuz]);

  const handleDownload = async (e: React.MouseEvent, surah: Surah) => {
    e.stopPropagation();
    const url = getSurahAudioUrl(activeReciter, surah.number);
    setDownloadingMap((prev) => ({ ...prev, [surah.number]: true }));
    try {
      await cacheSurahAudio(url);
      setCachedMap((prev) => ({ ...prev, [surah.number]: true }));
    } catch (err) {
      console.warn('Failed to cache audio:', err);
    } finally {
      setDownloadingMap((prev) => ({ ...prev, [surah.number]: false }));
    }
  };

  return (
    <section className="my-8">
      {/* Filters & Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
            <span>{isAr ? 'فهرس سور القرآن الكريم' : 'Surahs of the Holy Quran'}</span>
            <span className="text-xs font-normal text-stone-500 dark:text-stone-400">
              ({filteredSurahs.length} {isAr ? 'سورة' : 'surahs'})
            </span>
          </h2>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
            {isAr
              ? `استمع بصوت ${activeReciter.name} (${activeRiwaya.name}) أو اقرأ في المصحف`
              : `Listen by ${activeReciter.englishName} (${activeRiwaya.englishName}) or read in Mushaf`}
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Revelation type tabs */}
          <div className="flex items-center p-1 bg-stone-100 dark:bg-stone-800 rounded-lg text-xs">
            <button
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filterType === 'all'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              {isAr ? 'الكل' : 'All'}
            </button>
            <button
              onClick={() => setFilterType('Meccan')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filterType === 'Meccan'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              {isAr ? 'مكية' : 'Meccan'}
            </button>
            <button
              onClick={() => setFilterType('Medinan')}
              className={`px-3 py-1 rounded-md transition-colors ${
                filterType === 'Medinan'
                  ? 'bg-white dark:bg-stone-700 text-stone-900 dark:text-stone-100 font-bold shadow-sm'
                  : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
              }`}
            >
              {isAr ? 'مدنية' : 'Medinan'}
            </button>
          </div>

          {/* Juz selector */}
          <select
            value={selectedJuz}
            onChange={(e) => setSelectedJuz(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            className="text-xs bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-amber-500"
          >
            <option value="all">{isAr ? 'جميع الأجزاء (٣٠ جزءاً)' : 'All 30 Juz'}</option>
            {Array.from({ length: 30 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {isAr ? `الجزء ${i + 1}` : `Juz ${i + 1}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Surahs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredSurahs.map((surah) => {
          const isCurrentActive = activeSurah?.number === surah.number;
          const isCurrentlyPlaying = isCurrentActive && isPlaying;
          const isDownloading = downloadingMap[surah.number];
          const isCached = cachedMap[surah.number];

          return (
            <div
              key={surah.number}
              onClick={() => onPlaySurah(surah)}
              className={`p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-3 group cursor-pointer ${
                isCurrentActive
                  ? 'bg-emerald-950/20 dark:bg-emerald-950/40 border-amber-500/80 shadow-md ring-1 ring-amber-500/30'
                  : 'bg-white dark:bg-stone-900/80 border-stone-200 dark:border-stone-800 hover:border-amber-500/40 hover:shadow-sm'
              }`}
            >
              {/* Left/Start: Number & Names */}
              <div className="flex items-center gap-3 min-w-0">
                {/* Number Badge with Ornamental border */}
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 border ${
                  isCurrentActive
                    ? 'bg-amber-500 text-stone-950 border-amber-400 font-extrabold shadow'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 group-hover:border-amber-400/50'
                }`}>
                  {surah.number}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-bold text-base font-arabic ${
                      isCurrentActive ? 'text-amber-600 dark:text-amber-300' : 'text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                    }`}>
                      سورة {surah.name}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                    <span>{surah.englishName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{surah.numberOfAyahs} {isAr ? 'آية' : 'ayahs'}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[10px] px-1 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                      {isAr ? (surah.revelationType === 'Meccan' ? 'مكية' : 'مدنية') : surah.revelationType}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right/End: Quick Action Buttons */}
              <div className="flex items-center gap-1 shrink-0">
                {/* Open in Mushaf button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenMushaf(surah);
                  }}
                  className="p-2 rounded-lg text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  title={isAr ? 'قراءة في المصحف' : 'Read in Mushaf'}
                >
                  <BookOpen className="w-4 h-4" />
                </button>

                {/* Offline Download button */}
                <button
                  type="button"
                  onClick={(e) => handleDownload(e, surah)}
                  disabled={isDownloading || isCached}
                  className={`p-2 rounded-lg transition-colors ${
                    isCached
                      ? 'text-emerald-500 hover:text-emerald-400'
                      : isDownloading
                      ? 'text-amber-500 animate-spin'
                      : 'text-stone-400 hover:text-amber-500 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                  title={isCached ? 'تم التخزين دون اتصال' : 'تحميل للاستماع بدون إنترنت'}
                >
                  {isCached ? <Check className="w-4 h-4 stroke-[2.5]" /> : <Download className="w-4 h-4" />}
                </button>

                {/* Play/Pause Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPlaySurah(surah);
                  }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isCurrentlyPlaying
                      ? 'bg-amber-500 text-stone-950 shadow-md ring-2 ring-amber-400/50'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-500 hover:text-stone-950 group-hover:scale-105'
                  }`}
                  title={isCurrentlyPlaying ? 'إيقاف مؤقت' : 'تشغيل السورة'}
                >
                  {isCurrentlyPlaying ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current mr-0.5" />
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
