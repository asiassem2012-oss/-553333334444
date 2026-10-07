/**
 * Quran Comprehensive & Riwayat Engine - Root Application
 * التطبيق الرئيسي لمحرك القرآن الشامل ومصحف الروايات
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { RiwayaSelector } from './components/RiwayaSelector';
import { QariSelector } from './components/QariSelector';
import { SurahList } from './components/SurahList';
import { MushafViewer } from './components/MushafViewer';
import { TafsirModal } from './components/TafsirModal';
import { StickyAudioPlayer } from './components/StickyAudioPlayer';
import { FullAudioPlayerModal } from './components/FullAudioPlayerModal';
import { RiwayatGuide } from './components/RiwayatGuide';
import { BookmarkView } from './components/BookmarkView';
import { QuickReciterModal } from './components/QuickReciterModal';
import { RadioStationsView } from './components/RadioStationsView';
import { AdhkarView } from './components/AdhkarView';
import { KhatmahTrackerView } from './components/KhatmahTrackerView';
import { RiwayatComparisonView } from './components/RiwayatComparisonView';

import { ActiveTab, Ayah, Riwaya, Surah } from './types/quran';
import { useAudioStore } from './store/useAudioStore';
import { ALL_SURAHS } from './data/surahsData';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('mushaf');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [language, setLanguage] = useState<'ar' | 'en'>('ar');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('quran_theme') === 'dark';
    }
    return false;
  });

  const [isQuickReciterModalOpen, setIsQuickReciterModalOpen] = useState<boolean>(false);
  const [selectedSurahForMushaf, setSelectedSurahForMushaf] = useState<Surah>(ALL_SURAHS[0]);
  const [tafsirState, setTafsirState] = useState<{
    isOpen: boolean;
    ayah: Ayah | null;
    surah: Surah | null;
  }>({
    isOpen: false,
    ayah: null,
    surah: null
  });

  const {
    isPlaying,
    activeSurah,
    activeAyahNumber,
    activeReciter,
    activeRiwaya,
    actions
  } = useAudioStore();

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('quran_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('quran_theme', 'light');
    }
  }, [isDarkMode]);

  // Language direction effect
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const handleOpenTafsir = (ayah: Ayah, surah: Surah) => {
    setTafsirState({
      isOpen: true,
      ayah,
      surah
    });
  };

  const handleOpenMushafForSurah = (surah: Surah, startAyah?: number) => {
    setSelectedSurahForMushaf(surah);
    setActiveTab('mushaf');
    if (startAyah) {
      actions.setActiveAyah(startAyah);
    }
  };

  const handleOpenMushafPage = (pageNumber: number) => {
    // Find surah that matches or starts around this page
    const surah = ALL_SURAHS.find((s) => s.page >= pageNumber) || ALL_SURAHS[0];
    setSelectedSurahForMushaf(surah);
    setActiveTab('mushaf');
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] dark:bg-[#0c1412] text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors duration-200 pb-28">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeRiwaya={activeRiwaya}
        activeReciter={activeReciter}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        language={language}
        setLanguage={setLanguage}
        onOpenReciterPicker={() => setIsQuickReciterModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4">
        
        {/* Tab 1: Mushaf & Reading */}
        {activeTab === 'mushaf' && (
          <div className="space-y-6">
            {/* Quick Riwaya selector strip */}
            <RiwayaSelector
              activeRiwaya={activeRiwaya}
              onSelectRiwaya={(r) => actions.setActiveRiwaya(r)}
              language={language}
            />

            {/* Uthmani Mushaf Reader */}
            <MushafViewer
              currentSurah={selectedSurahForMushaf}
              activeRiwaya={activeRiwaya}
              activeReciter={activeReciter}
              isPlaying={isPlaying && activeSurah?.number === selectedSurahForMushaf.number}
              activeAyahNumber={activeSurah?.number === selectedSurahForMushaf.number ? activeAyahNumber : null}
              onPlaySurah={(surah, ayahNum) => {
                actions.playSurah(surah, ayahNum);
                setSelectedSurahForMushaf(surah);
              }}
              onSelectSurah={(surah) => setSelectedSurahForMushaf(surah)}
              onOpenTafsir={handleOpenTafsir}
              onOpenReciterPicker={() => setIsQuickReciterModalOpen(true)}
              language={language}
            />
          </div>
        )}

        {/* Tab 2: Reciters & Audio Streaming Engine */}
        {activeTab === 'reciters' && (
          <div className="space-y-6">
            {/* Riwaya Selector for choosing recitation tradition */}
            <RiwayaSelector
              activeRiwaya={activeRiwaya}
              onSelectRiwaya={(r) => actions.setActiveRiwaya(r)}
              language={language}
            />

            {/* Exactly 10 distinguished Qaris per selected Riwaya */}
            <QariSelector
              activeRiwaya={activeRiwaya}
              activeReciter={activeReciter}
              isPlaying={isPlaying}
              onSelectReciter={(reciter) => actions.setActiveReciter(reciter)}
              onTogglePlay={() => actions.togglePlayPause()}
              language={language}
            />

            {/* Surah List with instant streaming trigger */}
            <SurahList
              activeSurah={activeSurah}
              isPlaying={isPlaying}
              activeReciter={activeReciter}
              activeRiwaya={activeRiwaya}
              onPlaySurah={(surah) => actions.playSurah(surah)}
              onOpenMushaf={(surah) => handleOpenMushafForSurah(surah)}
              language={language}
              searchQuery={searchQuery}
            />
          </div>
        )}

        {/* Tab 3: Live 24/7 Quran Radio Stations */}
        {activeTab === 'radio' && (
          <RadioStationsView language={language} />
        )}

        {/* Tab 4: Interactive Riwayat Differences Comparison */}
        {activeTab === 'riwayat-compare' && (
          <RiwayatComparisonView
            onPlayRiwayaSurah={(r, s) => {
              actions.setActiveRiwaya(r);
              actions.playSurah(s);
            }}
            language={language}
          />
        )}

        {/* Tab 5: Adhkar & Digital Tasbih */}
        {activeTab === 'adhkar' && (
          <AdhkarView language={language} />
        )}

        {/* Tab 6: Khatmah Tracker */}
        {activeTab === 'khatmah' && (
          <KhatmahTrackerView
            onOpenMushafPage={handleOpenMushafPage}
            language={language}
          />
        )}

        {/* Tab 7: Bookmarks & Reading History */}
        {activeTab === 'bookmarks' && (
          <BookmarkView
            onOpenMushaf={(surah, ayah) => handleOpenMushafForSurah(surah, ayah)}
            onPlaySurah={(surah, ayah) => actions.playSurah(surah, ayah)}
            language={language}
          />
        )}
      </main>

      {/* Tafsir Modal */}
      <TafsirModal
        isOpen={tafsirState.isOpen}
        ayah={tafsirState.ayah}
        surah={tafsirState.surah}
        onClose={() => setTafsirState({ isOpen: false, ayah: null, surah: null })}
        onPlayAyah={(surah, ayahNum) => actions.playSurah(surah, ayahNum)}
        language={language}
      />

      {/* Quick Reciter Switcher Modal (accessible from anywhere) */}
      <QuickReciterModal
        isOpen={isQuickReciterModalOpen}
        onClose={() => setIsQuickReciterModalOpen(false)}
        activeReciter={activeReciter}
        activeRiwaya={activeRiwaya}
        isPlaying={isPlaying}
        onSelectReciter={(reciter, riwaya) => {
          actions.setActiveRiwaya(riwaya, reciter);
        }}
        language={language}
      />

      {/* Sticky Bottom Audio Player Bar */}
      <StickyAudioPlayer
        language={language}
        onOpenReciterPicker={() => setIsQuickReciterModalOpen(true)}
      />

      {/* Fullscreen Audio Player Modal */}
      <FullAudioPlayerModal
        language={language}
        onNavigateToMushaf={() => {
          if (activeSurah) {
            setSelectedSurahForMushaf(activeSurah);
            setActiveTab('mushaf');
          }
        }}
      />
    </div>
  );
}
