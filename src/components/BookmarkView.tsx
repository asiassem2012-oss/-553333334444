import React from 'react';
import { Bookmark, BookOpen, Trash2, Clock, Play } from 'lucide-react';
import { useBookmarkStore } from '../store/useBookmarkStore';
import { ALL_SURAHS } from '../data/surahsData';
import { Surah } from '../types/quran';

interface BookmarkViewProps {
  onOpenMushaf: (surah: Surah, startAyah?: number) => void;
  onPlaySurah: (surah: Surah, startAyah?: number) => void;
  language: 'ar' | 'en';
}

export const BookmarkView: React.FC<BookmarkViewProps> = ({
  onOpenMushaf,
  onPlaySurah,
  language
}) => {
  const isAr = language === 'ar';
  const { bookmarks, lastRead, removeBookmark } = useBookmarkStore();

  const handleResumeLastRead = () => {
    if (!lastRead) return;
    const surah = ALL_SURAHS.find((s) => s.number === lastRead.surahNumber) || ALL_SURAHS[0];
    onOpenMushaf(surah, lastRead.ayahNumber);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h2 className="text-2xl font-bold font-arabic text-stone-900 dark:text-stone-100 flex items-center justify-center gap-2">
          <Bookmark className="w-6 h-6 text-amber-500" />
          <span>العلامات المرجعية وسجل القراءة</span>
        </h2>
        <p className="text-xs text-stone-600 dark:text-stone-400">
          تتبع آخر موضع قراءة واحفظ آياتك المفضلة للرجوع إليها في أي وقت.
        </p>
      </div>

      {/* Last Read Position Banner */}
      {lastRead && (
        <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/10 via-emerald-600/10 to-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-stone-950 flex items-center justify-center font-bold shadow-md">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400">
                آخر موضع قراءة محفوظ
              </span>
              <h3 className="text-lg font-bold font-arabic text-stone-900 dark:text-stone-100">
                سورة {lastRead.surahName} - الآية {lastRead.ayahNumber}
              </h3>
              <p className="text-xs text-stone-500">
                {new Date(lastRead.updatedAt).toLocaleDateString('ar-EG', {
                  month: 'short',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>

          <button
            onClick={handleResumeLastRead}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold transition-all shadow flex items-center justify-center gap-2 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>متابعة القراءة الآن</span>
          </button>
        </div>
      )}

      {/* Bookmarks List */}
      <div className="space-y-4">
        <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
          الآيات المحفوظة ({bookmarks.length})
        </h3>

        {bookmarks.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white dark:bg-stone-900 border border-dashed border-stone-300 dark:border-stone-800 text-stone-400 space-y-3">
            <Bookmark className="w-8 h-8 mx-auto text-stone-300 dark:text-stone-700" />
            <p className="text-sm font-arabic">لا توجد علامات مرجعية محفوظة حتى الآن.</p>
            <p className="text-xs text-stone-500">
              يمكنك النقر على أي آية أثناء القراءة في المصحف لحفظها في العلامات المرجعية.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {bookmarks.map((bm) => {
              const surah = ALL_SURAHS.find((s) => s.number === bm.surahNumber) || ALL_SURAHS[0];

              return (
                <div
                  key={bm.id}
                  className="p-4 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-between gap-3 shadow-sm hover:border-amber-400/50 transition-colors"
                >
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100 font-arabic">
                      سورة {bm.surahName} - الآية {bm.ayahNumber}
                    </h4>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {new Date(bm.createdAt).toLocaleDateString('ar-EG')}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => onPlaySurah(surah, bm.ayahNumber)}
                      className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-amber-500 hover:bg-stone-200 transition-colors"
                      title="استماع"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                    </button>

                    <button
                      onClick={() => onOpenMushaf(surah, bm.ayahNumber)}
                      className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-emerald-500 hover:bg-stone-200 transition-colors"
                      title="فتح في المصحف"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => removeBookmark(bm.id)}
                      className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                      title="حذف"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
