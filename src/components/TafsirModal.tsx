import React, { useState } from 'react';
import { Ayah, Surah } from '../types/quran';
import { BookOpen, Copy, Check, Volume2, Globe } from 'lucide-react';

interface TafsirModalProps {
  ayah: Ayah | null;
  surah: Surah | null;
  isOpen: boolean;
  onClose: () => void;
  onPlayAyah?: (surah: Surah, ayahNumber: number) => void;
  language: 'ar' | 'en';
}

export const TafsirModal: React.FC<TafsirModalProps> = ({
  ayah,
  surah,
  isOpen,
  onClose,
  onPlayAyah,
  language
}) => {
  const isAr = language === 'ar';
  const [activeTab, setActiveTab] = useState<'muyassar' | 'jalalayn' | 'ibnkathir' | 'english'>('muyassar');
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen || !ayah || !surah) return null;

  const handleCopyText = (content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getActiveContent = () => {
    switch (activeTab) {
      case 'muyassar':
        return {
          title: 'التفسير الميسر',
          content: ayah.tafsirAlMuyassar || 'التفسير الميسر لآيات الذكر الحكيم إعداد نخبة من علماء التفسير.'
        };
      case 'jalalayn':
        return {
          title: 'تفسير الجلالين (المحلي والسيوطي)',
          content: ayah.tafsirAlJalalayn || 'تفسير الإمامين جلال الدين المحلي وجلال الدين السيوطي.'
        };
      case 'ibnkathir':
        return {
          title: 'تفسير القرآن العظيم (ابن كثير)',
          content: ayah.tafsirIbnKathir || 'تفسير الحافظ عماد الدين إسماعيل بن عمر بن كثير القرشي الدمشقي.'
        };
      case 'english':
        return {
          title: 'English Translation (Saheeh International)',
          content: ayah.translation || 'Saheeh International Quran Translation in clear modern English.'
        };
    }
  };

  const currentTafsir = getActiveContent();

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-5 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between bg-amber-500/5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-stone-900 dark:text-stone-100 font-arabic">
                تفسير سورة {surah.name} - الآية {ayah.numberInSurah}
              </h3>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                {surah.englishName} · Ayah {ayah.numberInSurah}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onPlayAyah && (
              <button
                onClick={() => onPlayAyah(surah, ayah.numberInSurah)}
                className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:text-amber-500 transition-colors"
                title="استماع للآية"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-700"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Verse Banner */}
        <div className="p-5 bg-[#fbf9f4] dark:bg-[#141d1a] border-b border-amber-600/20 text-center">
          <p className="font-quran text-xl sm:text-2xl text-amber-950 dark:text-amber-100 leading-loose">
            {ayah.text}
          </p>
          <span className="inline-block mt-2 text-xs text-amber-700 dark:text-amber-400 font-sans">
            ﴿ سورة {surah.name} : الآية {ayah.numberInSurah} ﴾
          </span>
        </div>

        {/* Tafsir Select Tabs */}
        <div className="flex items-center gap-1.5 p-3 border-b border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('muyassar')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'muyassar'
                ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            التفسير الميسر
          </button>

          <button
            onClick={() => setActiveTab('jalalayn')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'jalalayn'
                ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            تفسير الجلالين
          </button>

          <button
            onClick={() => setActiveTab('ibnkathir')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === 'ibnkathir'
                ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            تفسير ابن كثير
          </button>

          <button
            onClick={() => setActiveTab('english')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1 ${
              activeTab === 'english'
                ? 'bg-amber-500 text-stone-950 font-bold shadow-sm'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>English (Saheeh)</span>
          </button>
        </div>

        {/* Tafsir Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-amber-700 dark:text-amber-400 font-arabic">
              {currentTafsir.title}
            </h4>
            <button
              onClick={() => handleCopyText(currentTafsir.content)}
              className="flex items-center gap-1 text-[11px] text-stone-500 hover:text-amber-600 dark:hover:text-amber-400"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'تم النسخ' : 'نسخ التفسير'}</span>
            </button>
          </div>

          <p className="text-sm sm:text-base leading-relaxed text-stone-800 dark:text-stone-200 font-arabic">
            {currentTafsir.content}
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-100 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-bold hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors"
          >
            إغلاق
          </button>
        </div>

      </div>
    </div>
  );
};
