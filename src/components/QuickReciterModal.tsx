import React, { useState, useMemo } from 'react';
import { X, Search, Check, Volume2, Globe, Headphones, Sparkles } from 'lucide-react';
import { Reciter, Riwaya } from '../types/quran';
import { RIWAYAT_DATA } from '../data/riwayatData';

interface QuickReciterModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeReciter: Reciter;
  activeRiwaya: Riwaya;
  isPlaying: boolean;
  onSelectReciter: (reciter: Reciter, riwaya: Riwaya) => void;
  language: 'ar' | 'en';
}

export const QuickReciterModal: React.FC<QuickReciterModalProps> = ({
  isOpen,
  onClose,
  activeReciter,
  activeRiwaya,
  isPlaying,
  onSelectReciter,
  language
}) => {
  const isAr = language === 'ar';
  const [search, setSearch] = useState<string>('');
  const [selectedRiwayaFilter, setSelectedRiwayaFilter] = useState<string>('all');

  // Flatten all reciters with their corresponding riwaya
  const allRecitersWithRiwaya = useMemo(() => {
    const list: { reciter: Reciter; riwaya: Riwaya }[] = [];
    RIWAYAT_DATA.forEach((r) => {
      r.reciters.forEach((rec) => {
        list.push({ reciter: rec, riwaya: r });
      });
    });
    return list;
  }, []);

  const filteredReciters = useMemo(() => {
    return allRecitersWithRiwaya.filter(({ reciter, riwaya }) => {
      const q = search.trim().toLowerCase();
      const matchesSearch =
        !q ||
        reciter.name.toLowerCase().includes(q) ||
        reciter.englishName.toLowerCase().includes(q) ||
        reciter.country.toLowerCase().includes(q) ||
        riwaya.name.toLowerCase().includes(q);

      const matchesRiwaya =
        selectedRiwayaFilter === 'all' || riwaya.id === selectedRiwayaFilter;

      return matchesSearch && matchesRiwaya;
    });
  }, [allRecitersWithRiwaya, search, selectedRiwayaFilter]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between bg-amber-500/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
              <Headphones className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-stone-900 dark:text-stone-100 font-arabic">
                {isAr ? 'اختر القارئ المفضل للرواية' : 'Choose Your Preferred Reciter'}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {isAr
                  ? `أكثر من 100 قارئ معتمد عبر كافة الروايات المتواترة`
                  : 'Over 100 certified Qaris across all mutawatir Riwayat'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Riwaya Tabs */}
        <div className="p-4 border-b border-stone-100 dark:border-stone-800 space-y-3 bg-stone-50 dark:bg-stone-900/50">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={isAr ? 'ابحث باسم القارئ، البلد، أو الرواية...' : 'Search by Qari name, country, or Riwaya...'}
              className="w-full bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-xl pr-10 pl-4 py-2 text-sm text-stone-900 dark:text-stone-100 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              autoFocus
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Riwaya filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <button
              onClick={() => setSelectedRiwayaFilter('all')}
              className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
                selectedRiwayaFilter === 'all'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                  : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700'
              }`}
            >
              {isAr ? 'جميع الروايات' : 'All Riwayat'}
            </button>
            {RIWAYAT_DATA.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelectedRiwayaFilter(r.id)}
                className={`px-3 py-1 rounded-lg whitespace-nowrap transition-colors ${
                  selectedRiwayaFilter === r.id
                    ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                    : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200 dark:border-stone-700'
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>

        {/* Reciters List Grid */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filteredReciters.length === 0 ? (
            <div className="col-span-full py-16 text-center text-stone-400">
              {isAr ? 'لا يوجد قارئ مطابق لبحثك' : 'No reciter matches your search'}
            </div>
          ) : (
            filteredReciters.map(({ reciter, riwaya }) => {
              const isSelected = activeReciter.id === reciter.id;
              const isStreamingNow = isSelected && isPlaying;

              return (
                <div
                  key={`${riwaya.id}-${reciter.id}`}
                  onClick={() => {
                    onSelectReciter(reciter, riwaya);
                    onClose();
                  }}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-gradient-to-br from-amber-500/15 via-emerald-950/20 to-stone-900 border-amber-500 shadow-md ring-1 ring-amber-500/50'
                      : 'bg-white dark:bg-stone-800/80 border-stone-200 dark:border-stone-700/80 hover:border-amber-400 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                        isSelected
                          ? 'bg-amber-500 text-stone-950 font-bold shadow'
                          : 'bg-stone-100 dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                      }`}>
                        {reciter.name.slice(0, 2)}
                      </div>

                      <div className="min-w-0">
                        <h4 className={`font-bold text-sm truncate font-arabic ${
                          isSelected ? 'text-amber-600 dark:text-amber-300' : 'text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                        }`}>
                          {reciter.name}
                        </h4>
                        <span className="text-[11px] text-stone-500 dark:text-stone-400 truncate block">
                          {reciter.englishName}
                        </span>
                      </div>
                    </div>

                    {isSelected ? (
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-stone-100 dark:bg-stone-700 text-stone-500 dark:text-stone-400">
                        {reciter.style}
                      </span>
                    )}
                  </div>

                  <div className="pt-2 border-t border-stone-100 dark:border-stone-700/60 flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                    <span className="text-emerald-700 dark:text-emerald-400 font-medium">
                      {riwaya.name}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {reciter.country}
                    </span>
                  </div>

                  {isStreamingNow && (
                    <div className="mt-2 text-[10px] text-amber-500 font-bold flex items-center gap-1">
                      <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                      <span>جاري البث الآن...</span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 flex justify-between items-center text-xs text-stone-500">
          <span>{filteredReciters.length} قارئ متاح</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-bold hover:bg-stone-300 dark:hover:bg-stone-700"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
