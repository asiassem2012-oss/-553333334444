import React, { useState } from 'react';
import { Sparkles, Sun, Moon, Award, RotateCcw, Volume2, Check } from 'lucide-react';
import { ADHKAR_DATA } from '../data/adhkarData';
import { DhikrItem } from '../types/quran';

interface AdhkarViewProps {
  language: 'ar' | 'en';
}

export const AdhkarView: React.FC<AdhkarViewProps> = ({ language }) => {
  const isAr = language === 'ar';
  const [activeCategory, setActiveCategory] = useState<'morning' | 'evening' | 'prayer' | 'tasbih'>('morning');
  const [adhkarState, setAdhkarState] = useState<Record<string, number>>({});
  const [tasbihCount, setTasbihCount] = useState<number>(0);
  const [totalTasbih, setTotalTasbih] = useState<number>(0);
  const [selectedTasbihDhikr, setSelectedTasbihDhikr] = useState<string>('سُبْحَانَ اللَّهِ وَبِحَمْدِهِ');

  const filteredAdhkar = ADHKAR_DATA.filter((item) => item.category === activeCategory);

  const incrementCount = (item: DhikrItem) => {
    setAdhkarState((prev) => {
      const current = prev[item.id] || 0;
      if (current < item.count) {
        if ('vibrate' in navigator) {
          navigator.vibrate(30);
        }
        return { ...prev, [item.id]: current + 1 };
      }
      return prev;
    });
  };

  const incrementTasbih = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate(40);
    }
    setTasbihCount((c) => (c + 1) % 34 === 0 && c > 0 ? 1 : c + 1);
    setTotalTasbih((t) => t + 1);
  };

  const resetTasbih = () => {
    setTasbihCount(0);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>حصن المسلم والذكر اليومي</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-arabic text-stone-900 dark:text-stone-100">
          الأذكار والسبحة الإلكترونية
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
          أذكار الصباح والمساء وأدعية الصلاة مع سبحة تفاعلية لتعطير لسانك بذكر الله.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 p-1.5 bg-stone-100 dark:bg-stone-900 rounded-2xl max-w-lg mx-auto text-xs font-medium border border-stone-200 dark:border-stone-800">
        <button
          onClick={() => setActiveCategory('morning')}
          className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeCategory === 'morning'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          <Sun className="w-3.5 h-3.5" />
          <span>أذكار الصباح</span>
        </button>

        <button
          onClick={() => setActiveCategory('evening')}
          className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeCategory === 'evening'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
          <span>أذكار المساء</span>
        </button>

        <button
          onClick={() => setActiveCategory('prayer')}
          className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeCategory === 'prayer'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>أدعية الصلاة</span>
        </button>

        <button
          onClick={() => setActiveCategory('tasbih')}
          className={`flex-1 py-2 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
            activeCategory === 'tasbih'
              ? 'bg-amber-500 text-stone-950 font-bold shadow'
              : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>السبحة</span>
        </button>
      </div>

      {/* Main Tab Content */}
      {activeCategory === 'tasbih' ? (
        /* Digital Tasbih Interface */
        <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-8 max-w-lg mx-auto shadow-lg text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs text-stone-500 font-arabic">اختر الذكر المفضل:</span>
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {[
                'سُبْحَانَ اللَّهِ',
                'الْحَمْدُ لِلَّهِ',
                'لاَ إِلَهَ إِلاَّ اللَّهُ',
                'اللَّهُ أَكْبَرُ',
                'أَسْتَغْفِرُ اللَّهَ',
                'لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ'
              ].map((dhikr) => (
                <button
                  key={dhikr}
                  onClick={() => setSelectedTasbihDhikr(dhikr)}
                  className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                    selectedTasbihDhikr === dhikr
                      ? 'bg-amber-500 text-stone-950 font-bold border-amber-500 shadow'
                      : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                  }`}
                >
                  {dhikr}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Dhikr Display */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 font-quran text-2xl font-bold">
            {selectedTasbihDhikr}
          </div>

          {/* The Big Interactive Rosary Button */}
          <div className="flex flex-col items-center justify-center py-4">
            <button
              onClick={incrementTasbih}
              className="w-48 h-48 rounded-full bg-gradient-to-tr from-emerald-800 via-stone-900 to-amber-700 border-4 border-amber-500 text-amber-100 flex flex-col items-center justify-center shadow-2xl active:scale-95 transition-transform cursor-pointer select-none ring-4 ring-amber-500/20"
            >
              <span className="text-5xl font-extrabold font-mono text-amber-300 tracking-tight">
                {tasbihCount}
              </span>
              <span className="text-xs text-amber-200/80 mt-2 font-arabic">انقر للتسبيح</span>
            </button>
          </div>

          {/* Stats & Reset */}
          <div className="flex items-center justify-between text-xs text-stone-600 dark:text-stone-400 pt-4 border-t border-stone-100 dark:border-stone-800">
            <div>
              <span>مجموع التسبيحات الكلي: </span>
              <strong className="text-amber-600 dark:text-amber-400 font-mono text-sm">{totalTasbih}</strong>
            </div>
            <button
              onClick={resetTasbih}
              className="flex items-center gap-1 text-stone-500 hover:text-stone-800 dark:hover:text-stone-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>تصفير الدورة</span>
            </button>
          </div>
        </div>
      ) : (
        /* List of Adhkar cards with interactive counter */
        <div className="space-y-4">
          {filteredAdhkar.map((item) => {
            const current = adhkarState[item.id] || 0;
            const isCompleted = current >= item.count;

            return (
              <div
                key={item.id}
                onClick={() => incrementCount(item)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer select-none space-y-4 ${
                  isCompleted
                    ? 'bg-emerald-500/5 border-emerald-500/40 text-stone-700 dark:text-stone-300'
                    : 'bg-white dark:bg-stone-900 border-stone-200 dark:border-stone-800 hover:border-amber-400 shadow-sm'
                }`}
              >
                {/* Header with status */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-amber-700 dark:text-amber-400">
                    العدد المطلوب: {item.count}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="text-stone-400">{item.source}</span>
                    <span
                      className={`px-3 py-1 rounded-full font-bold font-mono text-xs ${
                        isCompleted
                          ? 'bg-emerald-500 text-stone-950 shadow'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200'
                      }`}
                    >
                      {isCompleted ? 'اكتمل ✓' : `${current} / ${item.count}`}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <p className="font-quran text-lg sm:text-xl leading-loose text-stone-900 dark:text-stone-100">
                  {item.text}
                </p>

                {/* Virtue */}
                <div className="pt-3 border-t border-stone-100 dark:border-stone-800 text-xs text-stone-500 dark:text-stone-400 flex items-center justify-between">
                  <span>{item.virtue}</span>
                  <span className="text-[11px] text-amber-600 dark:text-amber-400 font-bold">
                    انقر في أي مكان لاحتساب الذكر
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
