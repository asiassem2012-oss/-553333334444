import React from 'react';
import { Check, Sparkles, Compass, Scroll } from 'lucide-react';
import { Riwaya } from '../types/quran';
import { RIWAYAT_DATA } from '../data/riwayatData';

interface RiwayaSelectorProps {
  activeRiwaya: Riwaya;
  onSelectRiwaya: (riwaya: Riwaya) => void;
  language: 'ar' | 'en';
}

export const RiwayaSelector: React.FC<RiwayaSelectorProps> = ({
  activeRiwaya,
  onSelectRiwaya,
  language
}) => {
  const isAr = language === 'ar';

  return (
    <section className="my-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Scroll className="w-5 h-5 text-amber-500" />
            <h2 className="text-lg font-bold text-stone-900 dark:text-stone-100">
              {isAr ? 'اختر الرواية القرآنية المتواترة' : 'Select Official Quranic Riwaya'}
            </h2>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-0.5">
            {isAr
              ? 'تدعم المنظومة كافة الروايات المتواترة رسمياً مع ١٠ قراء متميزين لكل رواية'
              : 'Full support for official mutawatir riwayat with 10 distinguished Qaris each'}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 self-start sm:self-auto">
          <Compass className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>{isAr ? `الرواية النشطة: ${activeRiwaya.name}` : `Active: ${activeRiwaya.englishName}`}</span>
        </div>
      </div>

      {/* Horizontal Scrollable Riwaya Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {RIWAYAT_DATA.map((riwaya) => {
          const isSelected = activeRiwaya.id === riwaya.id;
          return (
            <button
              key={riwaya.id}
              onClick={() => onSelectRiwaya(riwaya)}
              className={`relative text-right p-4 rounded-xl transition-all duration-200 border flex flex-col justify-between group cursor-pointer ${
                isSelected
                  ? 'bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950/40 text-amber-50 border-amber-500/70 shadow-md ring-1 ring-amber-500/50'
                  : 'bg-white dark:bg-stone-900/80 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-800 hover:border-amber-500/40 hover:shadow-sm'
              }`}
            >
              {/* Header with Name and Badge */}
              <div className="flex items-start justify-between gap-2 mb-2 w-full">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-base font-bold ${isSelected ? 'text-amber-300' : 'text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400'}`}>
                      {riwaya.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-500 dark:text-stone-400 block mt-0.5">
                    {riwaya.englishName}
                  </span>
                </div>

                {isSelected ? (
                  <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shrink-0 shadow">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                ) : (
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border border-stone-200/60 dark:border-stone-700/60">
                    ١٠ قراء
                  </span>
                )}
              </div>

              {/* Imam & Region */}
              <div className="text-xs space-y-1 mb-3 w-full">
                <div className="text-stone-600 dark:text-stone-300 line-clamp-1">
                  <span className="text-stone-400 dark:text-stone-500">{isAr ? 'الإمام: ' : 'Imam: '}</span>
                  {riwaya.imam.split('(')[0]}
                </div>
                <div className="text-stone-500 dark:text-stone-400 text-[11px] line-clamp-1">
                  <span className="text-stone-400 dark:text-stone-500">{isAr ? 'الانتشار: ' : 'Region: '}</span>
                  {riwaya.region.split('/')[0]}
                </div>
              </div>

              {/* Distinctive rule teaser */}
              <div className="w-full pt-2 border-t border-stone-100 dark:border-stone-800/80 text-[11px] text-amber-700 dark:text-amber-400 line-clamp-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 shrink-0" />
                <span>{riwaya.distinctiveRules[0]}</span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
