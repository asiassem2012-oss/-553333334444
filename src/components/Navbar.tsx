import React from 'react';
import {
  BookOpen,
  Headphones,
  Library,
  Bookmark as BookmarkIcon,
  Moon,
  Sun,
  Search,
  Sparkles,
  Radio,
  ArrowRightLeft,
  CalendarCheck,
  Flame,
  Volume2,
  Download
} from 'lucide-react';
import { ActiveTab, Reciter, Riwaya } from '../types/quran';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  activeRiwaya: Riwaya;
  activeReciter: Reciter;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  onOpenReciterPicker?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  activeRiwaya,
  activeReciter,
  searchQuery,
  setSearchQuery,
  isDarkMode,
  setIsDarkMode,
  language,
  setLanguage,
  onOpenReciterPicker
}) => {
  const isAr = language === 'ar';

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-stone-900/90 border-b border-amber-900/30 text-stone-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-700 to-amber-700 flex items-center justify-center shadow-lg border border-amber-500/30">
              <BookOpen className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-base sm:text-lg tracking-tight text-amber-100">
                  {isAr ? 'محرك القرآن الشامل ومصحف الروايات' : 'Quran Comprehensive & Riwayat'}
                </h1>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/50">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  {activeRiwaya.name}
                </span>
              </div>
              <p className="text-[11px] text-stone-400 hidden sm:block">
                {isAr
                  ? 'بث صوتي مباشر لعشر روايات مع نخبة القراء ومصحف الرسم العثماني'
                  : 'Multi-Riwayat streaming engine with 10 Qaris & Uthmani Mushaf'}
              </p>
            </div>
          </div>

          {/* Search bar in header */}
          <div className="flex-1 max-w-sm hidden md:block">
            <div className="relative">
              <Search className="w-4 h-4 text-stone-400 absolute right-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isAr ? 'ابحث عن سورة، قارئ، أو رواية...' : 'Search Surah, Reciter, or Riwaya...'}
                className="w-full bg-stone-800/80 border border-stone-700/60 rounded-xl pr-9 pl-3 py-1.5 text-xs text-stone-100 placeholder:text-stone-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Quick Reciter Switcher Button & Controls */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Quick Choose Reciter button */}
            {onOpenReciterPicker && (
              <button
                onClick={onOpenReciterPicker}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
                title="اختيار القارئ"
              >
                <Volume2 className="w-4 h-4" />
                <span className="hidden sm:inline">اختيار القارئ:</span>
                <span className="truncate max-w-[100px] sm:max-w-none">{activeReciter.name.split(' ')[0]}</span>
              </button>
            )}

            {/* Download Source Code button */}
            <a
              href="/quran-app-source.zip"
              download="quran-app-source.zip"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-800/80 hover:bg-emerald-700 text-stone-100 font-bold text-xs border border-emerald-500/40 shadow transition-all cursor-pointer"
              title="تحميل كود المشروع بالكامل (ZIP)"
            >
              <Download className="w-3.5 h-3.5 text-emerald-300" />
              <span className="hidden sm:inline">تحميل الكود</span>
            </a>

            {/* Language toggle */}
            <button
              onClick={() => setLanguage(isAr ? 'en' : 'ar')}
              className="px-2.5 py-1.5 text-xs rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700/60 transition-colors font-medium"
              title="Toggle Language"
            >
              {isAr ? 'EN' : 'عربي'}
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700/60 transition-colors"
              title={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-stone-300" />}
            </button>
          </div>
        </div>

        {/* Navigation Tabs - Comprehensive Pages */}
        <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-2 border-t border-stone-800/80 scrollbar-none text-xs font-medium">
          <button
            onClick={() => setActiveTab('mushaf')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'mushaf'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isAr ? 'المصحف والقراءات' : 'Mushaf Reader'}</span>
          </button>

          <button
            onClick={() => setActiveTab('reciters')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'reciters'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span>{isAr ? 'القراء والبث الصوتي' : 'Reciters & Audio'}</span>
          </button>

          <button
            onClick={() => setActiveTab('radio')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'radio'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <Radio className="w-3.5 h-3.5" />
            <span>{isAr ? 'إذاعات القرآن 24/7' : 'Live Radio'}</span>
          </button>

          <button
            onClick={() => setActiveTab('riwayat-compare')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'riwayat-compare'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>{isAr ? 'مقارنة الروايات' : 'Riwayat Differences'}</span>
          </button>

          <button
            onClick={() => setActiveTab('adhkar')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'adhkar'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isAr ? 'الأذكار والسبحة' : 'Adhkar & Tasbih'}</span>
          </button>

          <button
            onClick={() => setActiveTab('khatmah')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'khatmah'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>{isAr ? 'متابعة الختمة' : 'Khatmah Tracker'}</span>
          </button>

          <button
            onClick={() => setActiveTab('bookmarks')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl whitespace-nowrap transition-all ${
              activeTab === 'bookmarks'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
            }`}
          >
            <BookmarkIcon className="w-3.5 h-3.5" />
            <span>{isAr ? 'العلامات المرجعية' : 'Bookmarks'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

