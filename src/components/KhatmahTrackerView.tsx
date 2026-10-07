import React, { useState, useEffect } from 'react';
import { BookOpen, Calendar, CheckCircle2, Flame, Sparkles, Target, Trophy } from 'lucide-react';
import { ALL_SURAHS } from '../data/surahsData';
import { Surah } from '../types/quran';

interface KhatmahTrackerViewProps {
  onOpenMushafPage: (page: number) => void;
  language: 'ar' | 'en';
}

const STORAGE_KEY = 'quran_khatmah_progress_v1';

export const KhatmahTrackerView: React.FC<KhatmahTrackerViewProps> = ({
  onOpenMushafPage,
  language
}) => {
  const isAr = language === 'ar';
  const totalPages = 604;

  const [targetDays, setTargetDays] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved).targetDays || 30 : 30;
    } catch {
      return 30;
    }
  });

  const [currentPage, setCurrentPage] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved).currentPage || 1 : 1;
    } catch {
      return 1;
    }
  });

  const [pagesReadToday, setPagesReadToday] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved).pagesReadToday || 0 : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          targetDays,
          currentPage,
          pagesReadToday,
          lastUpdated: Date.now()
        })
      );
    } catch (e) {
      console.warn('Failed to save khatmah progress', e);
    }
  }, [targetDays, currentPage, pagesReadToday]);

  const percentage = Math.min(100, Math.round((currentPage / totalPages) * 100));
  const dailyTarget = Math.ceil(totalPages / targetDays);
  const remainingPages = Math.max(0, totalPages - currentPage);
  const estimatedDaysLeft = Math.ceil(remainingPages / (dailyTarget || 1));

  // Determine current Juz from page
  const currentJuz = Math.min(30, Math.ceil(currentPage / 20.13));

  const addPages = (count: number) => {
    setCurrentPage((prev) => Math.min(totalPages, prev + count));
    setPagesReadToday((prev) => prev + count);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold">
          <Trophy className="w-3.5 h-3.5" />
          <span>متابعة الختمة القرآنية والورد اليومي</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-arabic text-stone-900 dark:text-stone-100">
          جدول الختمة ومتابعة القراءة
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
          حدد مدة ختم القرآن، وتتبع وردك اليومي صفحة بصفحة حتى تمام الختمة المباركة.
        </p>
      </div>

      {/* Main Progress Card */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Top metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1">
            <span className="text-[11px] text-stone-500 dark:text-stone-400">الصفحة الحالية</span>
            <div className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">
              {currentPage} / {totalPages}
            </div>
            <span className="text-[10px] text-stone-400">الجزء {currentJuz}</span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-1">
            <span className="text-[11px] text-stone-500 dark:text-stone-400">نسبة الإنجاز</span>
            <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">
              {percentage}%
            </div>
            <span className="text-[10px] text-stone-400">متبقي {remainingPages} صفحة</span>
          </div>

          <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-1">
            <span className="text-[11px] text-stone-500 dark:text-stone-400">الورد اليومي المطلوب</span>
            <div className="text-2xl font-bold font-mono text-blue-600 dark:text-blue-400">
              {dailyTarget} <span className="text-xs">صفحة</span>
            </div>
            <span className="text-[10px] text-stone-400">تقريباً جزء يومياً</span>
          </div>

          <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/20 space-y-1">
            <span className="text-[11px] text-stone-500 dark:text-stone-400">قراءة اليوم</span>
            <div className="text-2xl font-bold font-mono text-purple-600 dark:text-purple-400">
              {pagesReadToday} <span className="text-xs">صفحة</span>
            </div>
            <span className="text-[10px] text-stone-400">
              {pagesReadToday >= dailyTarget ? 'اكتمل ورد اليوم ✓' : 'واصل القراءة'}
            </span>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-600 dark:text-stone-400 font-bold">
            <span>سورة الفاتحة (صفحة 1)</span>
            <span>سورة الناس (صفحة 604)</span>
          </div>

          <div className="h-4 w-full bg-stone-100 dark:bg-stone-800 rounded-full overflow-hidden p-0.5 border border-stone-200 dark:border-stone-700">
            <div
              className="h-full bg-gradient-to-l from-amber-500 to-emerald-600 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Quick Add Pages buttons */}
        <div className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-500" />
            <span className="text-xs font-bold text-stone-800 dark:text-stone-200">
              تسجيل قراءة صفحات إضافية:
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => addPages(1)}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold border border-stone-200 dark:border-stone-600 hover:border-amber-500 shadow-sm transition-all"
            >
              + صفحة واحدة
            </button>
            <button
              onClick={() => addPages(5)}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold border border-stone-200 dark:border-stone-600 hover:border-amber-500 shadow-sm transition-all"
            >
              + ٥ صفحات (ربع حزب)
            </button>
            <button
              onClick={() => addPages(20)}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold shadow transition-all"
            >
              + جزء كامل (٢٠ صفحة)
            </button>
          </div>
        </div>

        {/* Target Plan Selector */}
        <div className="pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-stone-600 dark:text-stone-400">
            <Calendar className="w-4 h-4 text-stone-500" />
            <span>خطة مدة الختمة:</span>
            {[10, 20, 30, 60].map((days) => (
              <button
                key={days}
                onClick={() => setTargetDays(days)}
                className={`px-2.5 py-1 rounded-lg border transition-all ${
                  targetDays === days
                    ? 'bg-amber-500 text-stone-950 font-bold border-amber-500 shadow-sm'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700'
                }`}
              >
                {days} يوماً
              </button>
            ))}
          </div>

          <button
            onClick={() => onOpenMushafPage(currentPage)}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-stone-100 text-xs font-bold shadow flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>فتح صفحة {currentPage} في المصحف</span>
          </button>
        </div>
      </div>
    </div>
  );
};
