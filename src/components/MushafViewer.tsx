import React, { useState, useEffect, useRef } from 'react';
import {
  BookOpen,
  Volume2,
  Bookmark,
  Share2,
  ChevronRight,
  ChevronLeft,
  Type,
  Sparkles,
  Check,
  Compass,
  FileText
} from 'lucide-react';
import { Ayah, Reciter, Riwaya, Surah } from '../types/quran';
import { ALL_SURAHS } from '../data/surahsData';
import { fetchSurahVerses } from '../services/quranApi';
import { useBookmarkStore } from '../store/useBookmarkStore';

interface MushafViewerProps {
  currentSurah: Surah;
  activeRiwaya: Riwaya;
  activeReciter: Reciter;
  isPlaying: boolean;
  activeAyahNumber: number | null;
  onPlaySurah: (surah: Surah, startAyah?: number) => void;
  onSelectSurah: (surah: Surah) => void;
  onOpenTafsir: (ayah: Ayah, surah: Surah) => void;
  onOpenReciterPicker?: () => void;
  language: 'ar' | 'en';
}

export const MushafViewer: React.FC<MushafViewerProps> = ({
  currentSurah,
  activeRiwaya,
  activeReciter,
  isPlaying,
  activeAyahNumber,
  onPlaySurah,
  onSelectSurah,
  onOpenTafsir,
  onOpenReciterPicker,
  language
}) => {
  const isAr = language === 'ar';
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<number>(26); // in px
  const [showTranslation, setShowTranslation] = useState<boolean>(false);
  const [selectedAyahForActions, setSelectedAyahForActions] = useState<Ayah | null>(null);
  const [copiedAyahNum, setCopiedAyahNum] = useState<number | null>(null);

  const activeAyahRef = useRef<HTMLSpanElement | null>(null);
  const { addBookmark, isBookmarked, saveLastRead } = useBookmarkStore();

  // Load verses whenever currentSurah changes
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetchSurahVerses(currentSurah.number).then((data) => {
      if (isMounted) {
        setAyahs(data);
        setLoading(false);
      }
    });

    // Save as last read position
    saveLastRead(currentSurah.number, 1, currentSurah.name, activeRiwaya.id);

    return () => {
      isMounted = false;
    };
  }, [currentSurah.number, activeRiwaya.id]);

  // Smooth auto-scroll to playing ayah
  useEffect(() => {
    if (isPlaying && activeAyahRef.current) {
      activeAyahRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [activeAyahNumber, isPlaying]);

  const handleNextSurah = () => {
    const idx = ALL_SURAHS.findIndex((s) => s.number === currentSurah.number);
    if (idx < ALL_SURAHS.length - 1) {
      onSelectSurah(ALL_SURAHS[idx + 1]);
    }
  };

  const handlePrevSurah = () => {
    const idx = ALL_SURAHS.findIndex((s) => s.number === currentSurah.number);
    if (idx > 0) {
      onSelectSurah(ALL_SURAHS[idx - 1]);
    }
  };

  const handleCopyAyah = (ayah: Ayah) => {
    const textToCopy = `${ayah.text} [سورة ${currentSurah.name}: الآية ${ayah.numberInSurah}]`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedAyahNum(ayah.numberInSurah);
    setTimeout(() => setCopiedAyahNum(null), 2000);
  };

  const isWarshScript = activeRiwaya.id === 'warsh';

  return (
    <div className="max-w-4xl mx-auto my-6 px-3 sm:px-6">
      {/* Top Mushaf Controls Bar */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Surah switcher & navigation */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-between md:justify-start">
          <button
            onClick={handlePrevSurah}
            disabled={currentSurah.number === 1}
            className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 disabled:opacity-40 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            title="السورة السابقة"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <select
            value={currentSurah.number}
            onChange={(e) => {
              const selected = ALL_SURAHS.find((s) => s.number === Number(e.target.value));
              if (selected) onSelectSurah(selected);
            }}
            className="text-sm font-bold bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-100 border border-stone-200 dark:border-stone-700 rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500 font-arabic"
          >
            {ALL_SURAHS.map((s) => (
              <option key={s.number} value={s.number}>
                {s.number}. سورة {s.name} ({s.englishName})
              </option>
            ))}
          </select>

          <button
            onClick={handleNextSurah}
            disabled={currentSurah.number === 114}
            className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 disabled:opacity-40 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            title="السورة التالية"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>

        {/* Font size & translation toggles */}
        <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-end text-xs flex-wrap">
          {/* Quick Reciter Switcher Button */}
          {onOpenReciterPicker && (
            <button
              onClick={onOpenReciterPicker}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-800 dark:text-amber-300 border border-amber-500/30 font-bold transition-all cursor-pointer shadow-sm"
              title="تغيير القارئ الصوتي"
            >
              <Volume2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>القارئ: {activeReciter.name.split(' ')[0]} {activeReciter.name.split(' ')[1] || ''}</span>
              <span className="text-[10px] text-amber-700 dark:text-amber-400 underline mr-0.5">تبديل</span>
            </button>
          )}

          {/* Riwaya badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 font-medium">
            <Compass className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{activeRiwaya.name}</span>
          </div>

          {/* Translation toggle */}
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className={`px-2.5 py-1.5 rounded-xl border transition-colors ${
              showTranslation
                ? 'bg-amber-500 text-stone-950 border-amber-500 font-bold'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700'
            }`}
          >
            {isAr ? 'الترجمة' : 'Translation'}
          </button>

          {/* Font Size controls */}
          <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800 p-1 rounded-lg border border-stone-200 dark:border-stone-700">
            <Type className="w-3.5 h-3.5 text-stone-500 mr-1" />
            <button
              onClick={() => setFontSize((prev) => Math.max(18, prev - 2))}
              className="px-2 py-0.5 rounded text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700 font-bold"
              title="تصغير الخط"
            >
              -
            </button>
            <span className="text-[11px] font-mono px-1">{fontSize}</span>
            <button
              onClick={() => setFontSize((prev) => Math.min(42, prev + 2))}
              className="px-2 py-0.5 rounded text-stone-700 dark:text-stone-300 hover:bg-white dark:hover:bg-stone-700 font-bold"
              title="تكبير الخط"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Riwaya Rules Notice Banner */}
      <div className="mb-6 p-3 rounded-xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-stone-700 dark:text-stone-300">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>
            {isAr
              ? `قواعد وأصول رواية ${activeRiwaya.name}: ${activeRiwaya.distinctiveRules[0]} · ${activeRiwaya.distinctiveRules[1] || ''}`
              : `Rules of ${activeRiwaya.englishName}: ${activeRiwaya.distinctiveRules[0]}`}
          </span>
        </div>
        <span className="hidden sm:inline text-[11px] text-stone-500 dark:text-stone-400 font-mono">
          {activeRiwaya.scriptName.split('-')[0]}
        </span>
      </div>

      {/* The Mushaf Page Container */}
      <div className="bg-[#fcfaf5] dark:bg-[#121917] border-2 border-amber-600/30 dark:border-amber-700/40 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden transition-colors">
        {/* Islamic Frame Corners */}
        <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600/40 pointer-events-none rounded-tr-lg"></div>
        <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600/40 pointer-events-none rounded-tl-lg"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600/40 pointer-events-none rounded-br-lg"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600/40 pointer-events-none rounded-bl-lg"></div>

        {/* Surah Ornamental Header Banner */}
        <div className="text-center mb-8 pb-6 border-b border-amber-700/20">
          <div className="inline-block px-8 py-2.5 rounded-2xl bg-gradient-to-r from-amber-600/20 via-emerald-700/20 to-amber-600/20 border border-amber-500/40 mb-3 shadow-inner">
            <h1 className="text-2xl sm:text-3xl font-bold font-quran text-amber-900 dark:text-amber-200 tracking-wide">
              سُورَةُ {currentSurah.name}
            </h1>
          </div>

          <div className="flex items-center justify-center gap-3 text-xs text-stone-600 dark:text-stone-400">
            <span>{currentSurah.revelationType === 'Meccan' ? 'مَكِّيَّةٌ' : 'مَدَنِيَّةٌ'}</span>
            <span aria-hidden="true">·</span>
            <span>{currentSurah.numberOfAyahs} آيات</span>
            <span aria-hidden="true">·</span>
            <span>الجزء {currentSurah.juz}</span>
            <span aria-hidden="true">·</span>
            <span>الصفحة {currentSurah.page}</span>
          </div>

          {/* Bismillah Header (Except Surah 9: At-Tawbah) */}
          {currentSurah.number !== 9 && (
            <div className="mt-6 text-xl sm:text-2xl font-quran text-stone-800 dark:text-amber-100/90 leading-loose">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </div>
          )}
        </div>

        {/* Verses Content */}
        {loading ? (
          <div className="py-20 text-center text-stone-500 space-y-3">
            <div className="w-8 h-8 border-2 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-sm font-arabic">جاري جلب الآيات الكريمة بالرسم العثماني...</p>
          </div>
        ) : (
          <div
            className={`leading-[2.8] text-justify ${
              isWarshScript ? 'font-warsh' : 'font-quran'
            } text-stone-900 dark:text-stone-100 selection:bg-amber-400/30`}
            style={{ fontSize: `${fontSize}px` }}
          >
            {ayahs.map((ayah) => {
              const isPlayingThisAyah = isPlaying && activeAyahNumber === ayah.numberInSurah;
              const bookmarked = isBookmarked(currentSurah.number, ayah.numberInSurah);
              const verseText = (isWarshScript && ayah.textWarsh) ? ayah.textWarsh : ayah.text;

              return (
                <span
                  key={ayah.numberInSurah}
                  ref={isPlayingThisAyah ? activeAyahRef : null}
                  onClick={() => setSelectedAyahForActions(ayah)}
                  className={`inline cursor-pointer px-1 py-0.5 rounded-lg transition-all duration-300 relative group ${
                    isPlayingThisAyah
                      ? 'bg-amber-400/25 dark:bg-amber-500/20 text-amber-950 dark:text-amber-200 ring-2 ring-amber-400/60 shadow-sm'
                      : 'hover:bg-amber-100/60 dark:hover:bg-stone-800/60'
                  }`}
                >
                  {/* Verse Arabic Text */}
                  <span>{verseText}</span>

                  {/* End of Verse Ornamental Symbol with Number */}
                  <span
                    className={`inline-flex items-center justify-center mx-1.5 select-none text-[0.8em] font-sans font-bold ${
                      isPlayingThisAyah
                        ? 'text-amber-700 dark:text-amber-400'
                        : 'text-amber-700/80 dark:text-amber-500/80'
                    }`}
                  >
                    ۝{ayah.numberInSurah}
                  </span>

                  {/* Bookmarked indicator icon */}
                  {bookmarked && (
                    <span className="inline-block align-middle mr-0.5 text-amber-500">
                      ★
                    </span>
                  )}

                  {/* English Translation inline if toggled */}
                  {showTranslation && (
                    <span className="block text-xs font-sans font-normal text-stone-600 dark:text-stone-400 leading-normal my-1 px-2 py-1 bg-amber-500/5 rounded border-r-2 border-amber-500/40">
                      [{ayah.numberInSurah}] {ayah.translation}
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        )}

        {/* Mushaf Page Footer */}
        <div className="mt-12 pt-6 border-t border-amber-700/20 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
          <span>الجزء {currentSurah.juz}</span>
          <span className="font-arabic font-bold text-stone-700 dark:text-stone-300">
            {activeRiwaya.scriptName}
          </span>
          <span>صفحة {currentSurah.page}</span>
        </div>
      </div>

      {/* Selected Ayah Quick Action Modal/Drawer */}
      {selectedAyahForActions && (
        <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl max-w-lg w-full p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom duration-200">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
              <div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 font-arabic">
                  سورة {currentSurah.name} - الآية {selectedAyahForActions.numberInSurah}
                </h3>
                <span className="text-xs text-stone-500">{activeRiwaya.name}</span>
              </div>
              <button
                onClick={() => setSelectedAyahForActions(null)}
                className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 flex items-center justify-center hover:bg-stone-200"
              >
                ✕
              </button>
            </div>

            {/* Ayah preview */}
            <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-stone-800/50 border border-amber-200/40 dark:border-amber-900/30 text-stone-900 dark:text-stone-100 text-lg leading-loose font-quran text-center">
              {selectedAyahForActions.text}
            </div>

            {/* Quick Action buttons */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              {/* Play Ayah */}
              <button
                onClick={() => {
                  onPlaySurah(currentSurah, selectedAyahForActions.numberInSurah);
                  setSelectedAyahForActions(null);
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-amber-500 text-stone-950 font-bold hover:bg-amber-400 transition-colors shadow-sm"
              >
                <Volume2 className="w-4 h-4" />
                <span>استمع للآية</span>
              </button>

              {/* View Tafsir */}
              <button
                onClick={() => {
                  onOpenTafsir(selectedAyahForActions, currentSurah);
                  setSelectedAyahForActions(null);
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-bold hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-emerald-500" />
                <span>عرض التفسير</span>
              </button>

              {/* Add Bookmark */}
              <button
                onClick={() => {
                  addBookmark(
                    currentSurah.number,
                    selectedAyahForActions.numberInSurah,
                    currentSurah.name,
                    activeRiwaya.id,
                    activeReciter.id
                  );
                  setSelectedAyahForActions(null);
                }}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
              >
                <Bookmark className="w-4 h-4 text-amber-500" />
                <span>
                  {isBookmarked(currentSurah.number, selectedAyahForActions.numberInSurah)
                    ? 'في المفضلة ✓'
                    : 'إضافة للمرجعية'}
                </span>
              </button>

              {/* Copy text */}
              <button
                onClick={() => handleCopyAyah(selectedAyahForActions)}
                className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
              >
                {copiedAyahNum === selectedAyahForActions.numberInSurah ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>تم النسخ!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4 text-stone-500" />
                    <span>نسخ الآية</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
