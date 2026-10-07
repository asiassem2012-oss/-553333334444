import React, { useState } from 'react';
import { Radio, Play, Pause, Volume2, Sparkles, Wifi } from 'lucide-react';
import { QURAN_RADIOS } from '../data/radioData';
import { QuranRadio } from '../types/quran';

interface RadioStationsViewProps {
  language: 'ar' | 'en';
}

export const RadioStationsView: React.FC<RadioStationsViewProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [activeStation, setActiveStation] = useState<QuranRadio | null>(null);
  const [isPlayingRadio, setIsPlayingRadio] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [radioAudio] = useState<HTMLAudioElement>(() => new Audio());

  const categories = ['all', 'إذاعات عامة', 'الحرمين الشريفين', 'قراء مخصصون', 'الروايات', 'أدعية ورقية'];

  const filteredStations = QURAN_RADIOS.filter(
    (station) => selectedCategory === 'all' || station.category === selectedCategory
  );

  const toggleStation = (station: QuranRadio) => {
    if (activeStation?.id === station.id && isPlayingRadio) {
      radioAudio.pause();
      setIsPlayingRadio(false);
    } else {
      setActiveStation(station);
      radioAudio.src = station.url;
      radioAudio.play().then(() => {
        setIsPlayingRadio(true);
      }).catch((e) => {
        console.warn('Radio playback error:', e);
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto my-8 px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold">
          <Wifi className="w-3.5 h-3.5 animate-pulse" />
          <span>بث حي ومباشر على مدار الساعة (24/7)</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-arabic text-stone-900 dark:text-stone-100">
          إذاعات القرآن الكريم المباشرة
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          استمع إلى كبرى إذاعات القرآن الكريم العالمية وإذاعات الحرمين الشريفين وإذاعات الروايات ونخبة القراء بجودة صوتية فائقة.
        </p>
      </div>

      {/* Active Radio Banner if playing */}
      {activeStation && isPlayingRadio && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 border border-emerald-500/50 text-stone-100 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center relative">
              <Radio className="w-7 h-7 text-emerald-400" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  بث مباشر حي
                </span>
                <span className="text-xs text-stone-400">{activeStation.bitrate}</span>
              </div>
              <h3 className="text-lg font-bold font-arabic text-amber-200 mt-1">
                {activeStation.name}
              </h3>
              <p className="text-xs text-stone-400 line-clamp-1">{activeStation.description}</p>
            </div>
          </div>

          <button
            onClick={() => toggleStation(activeStation)}
            className="w-full sm:w-auto px-6 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer"
          >
            <Pause className="w-4 h-4 fill-current" />
            <span>إيقاف البث المؤقت</span>
          </button>
        </div>
      )}

      {/* Categories Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl whitespace-nowrap transition-colors border ${
              selectedCategory === cat
                ? 'bg-amber-500 text-stone-950 font-bold border-amber-500 shadow-sm'
                : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-amber-400'
            }`}
          >
            {cat === 'all' ? (isAr ? 'جميع الإذاعات' : 'All Radios') : cat}
          </button>
        ))}
      </div>

      {/* Grid of Stations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStations.map((station) => {
          const isThisActive = activeStation?.id === station.id && isPlayingRadio;

          return (
            <div
              key={station.id}
              onClick={() => toggleStation(station)}
              className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between group ${
                isThisActive
                  ? 'bg-gradient-to-br from-emerald-950/40 via-stone-900 to-amber-950/20 border-emerald-500 shadow-md ring-1 ring-emerald-500/40'
                  : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700">
                    {station.category}
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">{station.bitrate}</span>
                </div>

                <h3 className={`text-base font-bold font-arabic mb-1 ${
                  isThisActive ? 'text-amber-500 dark:text-amber-300' : 'text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                }`}>
                  {station.name}
                </h3>
                <span className="text-xs text-stone-500 dark:text-stone-400 block mb-3 font-mono">
                  {station.englishName}
                </span>

                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-2">
                  {station.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                <span className="text-[11px] text-stone-500 flex items-center gap-1">
                  <Wifi className="w-3.5 h-3.5 text-emerald-500" />
                  <span>بث مباشر</span>
                </span>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleStation(station);
                  }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isThisActive
                      ? 'bg-amber-500 text-stone-950 shadow'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-500 hover:text-stone-950'
                  }`}
                >
                  {isThisActive ? (
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
    </div>
  );
};
