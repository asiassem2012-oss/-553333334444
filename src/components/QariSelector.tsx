import React from 'react';
import { Headphones, Volume2, Award, Play, Pause, Globe } from 'lucide-react';
import { Reciter, Riwaya } from '../types/quran';

interface QariSelectorProps {
  activeRiwaya: Riwaya;
  activeReciter: Reciter;
  isPlaying: boolean;
  onSelectReciter: (reciter: Reciter) => void;
  onTogglePlay: () => void;
  language: 'ar' | 'en';
}

export const QariSelector: React.FC<QariSelectorProps> = ({
  activeRiwaya,
  activeReciter,
  isPlaying,
  onSelectReciter,
  onTogglePlay,
  language
}) => {
  const isAr = language === 'ar';
  const reciters = activeRiwaya.reciters;

  return (
    <section className="my-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <div className="flex items-center gap-2">
            <Headphones className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-xl font-bold text-stone-900 dark:text-stone-100">
              {isAr
                ? `قراء رواية ${activeRiwaya.name} (١٠ قراء متميزين)`
                : `Reciters of ${activeRiwaya.englishName} (10 Distinguished Qaris)`}
            </h2>
          </div>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
            {isAr
              ? 'تسجيلات كاملة لجميع سور القرآن الكريم ببث صوتي فائق النقاوة'
              : 'Complete audio recordings for all 114 Surahs with high-fidelity streaming'}
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 self-start sm:self-auto">
          <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>{isAr ? `القارئ الحالي: ${activeReciter.name}` : `Selected: ${activeReciter.englishName}`}</span>
        </div>
      </div>

      {/* Grid of Exactly 10 Qaris */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {reciters.map((qari, index) => {
          const isSelected = activeReciter.id === qari.id;
          const isCurrentlyStreaming = isSelected && isPlaying;

          return (
            <div
              key={qari.id}
              onClick={() => onSelectReciter(qari)}
              className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? 'bg-gradient-to-b from-stone-900 to-emerald-950 text-stone-100 border-amber-500 shadow-md ring-1 ring-amber-500/40'
                  : 'bg-white dark:bg-stone-900/90 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-800 hover:border-amber-500/50 hover:shadow-sm'
              }`}
            >
              {/* Order number badge */}
              <div className="flex items-center justify-between mb-3">
                <span className={`text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border ${
                  isSelected
                    ? 'bg-amber-500 text-stone-950 border-amber-400'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 border-stone-200 dark:border-stone-700'
                }`}>
                  {index + 1}
                </span>

                <div className="flex items-center gap-1.5">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded border ${
                    qari.style === 'معلم'
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
                      : qari.style === 'مجود'
                      ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20'
                      : 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
                  }`}>
                    {qari.style}
                  </span>

                  <span className="flex items-center gap-0.5 text-[10px] text-stone-500 dark:text-stone-400">
                    <Globe className="w-3 h-3 text-stone-400" />
                    {qari.country}
                  </span>
                </div>
              </div>

              {/* Avatar / Monogram */}
              <div className="flex items-center gap-3 my-2">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 border shadow-inner ${
                  isSelected
                    ? 'bg-gradient-to-br from-amber-600 to-emerald-700 text-amber-100 border-amber-400/50'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                }`}>
                  {qari.name.slice(0, 2)}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className={`font-bold text-sm truncate ${
                    isSelected ? 'text-amber-200' : 'text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400'
                  }`}>
                    {qari.name}
                  </h3>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 truncate">
                    {qari.englishName}
                  </p>
                </div>
              </div>

              {/* Bio Snippet */}
              <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-2 my-2 leading-relaxed">
                {qari.bio || 'تسجيل كامل لكافة سور القرآن الكريم مع ضبط أصول الرواية.'}
              </p>

              {/* Actions & Equalizer */}
              <div className="pt-3 mt-1 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-stone-500 dark:text-stone-400">
                  <Volume2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>١١٤ سورة</span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isSelected) {
                      onTogglePlay();
                    } else {
                      onSelectReciter(qari);
                    }
                  }}
                  className={`p-1.5 rounded-lg flex items-center justify-center transition-transform active:scale-95 ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 hover:bg-amber-400 shadow'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-500 hover:text-stone-950'
                  }`}
                  title={isCurrentlyStreaming ? 'إيقاف مؤقت' : 'تشغيل'}
                >
                  {isCurrentlyStreaming ? (
                    <Pause className="w-4 h-4 fill-current" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                </button>
              </div>

              {/* Animated wave if actively playing */}
              {isCurrentlyStreaming && (
                <div className="absolute top-2 left-2 flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-amber-400 animate-soundwave-1"></span>
                  <span className="w-0.5 bg-amber-400 animate-soundwave-2"></span>
                  <span className="w-0.5 bg-amber-400 animate-soundwave-3"></span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
