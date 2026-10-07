import React, { useState } from 'react';
import { Volume2, Sparkles, BookOpen, Check, ArrowRightLeft, Compass } from 'lucide-react';
import { ALL_SURAHS } from '../data/surahsData';
import { RIWAYAT_DATA } from '../data/riwayatData';
import { Riwaya, Surah } from '../types/quran';

interface RiwayatComparisonViewProps {
  onPlayRiwayaSurah: (riwaya: Riwaya, surah: Surah) => void;
  language: 'ar' | 'en';
}

interface VerseDifference {
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  ruleTitle: string;
  category: string;
  explanation: string;
  variants: {
    riwayaName: string;
    riwayaId: string;
    text: string;
    phoneticNote: string;
    readerStyle: string;
  }[];
}

const COMPARATIVE_AYAH_CASES: VerseDifference[] = [
  {
    surahNumber: 1,
    surahName: 'الفاتحة',
    ayahNumber: 4,
    ruleTitle: 'قراءة الألف في (مالك / مَلِكِ)',
    category: 'فرش الحروف',
    explanation: 'قرأ عاصم (حفص وشعبة) والكسائي وخلف العاشر بإثبات ألف بعد الميم (مَالِكِ)، بينما قرأ باقي العشرة بحذف الألف (مَلِكِ).',
    variants: [
      {
        riwayaName: 'حفص عن عاصم',
        riwayaId: 'hafs',
        text: 'مَـٰلِكِ يَوْمِ ٱلدِّينِ',
        phoneticNote: 'إثبات الألف بمد حركتين (مَالِك)',
        readerStyle: 'مشاري العفاسي / الحصري'
      },
      {
        riwayaName: 'ورش عن نافع',
        riwayaId: 'warsh',
        text: 'مَلِكِ يَوْمِ الدِّينِ',
        phoneticNote: 'حذف الألف مع كسر اللام (مَلِكِ) من المُلك العام',
        readerStyle: 'العيون الكوشي / القزابري'
      },
      {
        riwayaName: 'قالون عن نافع',
        riwayaId: 'qaloon',
        text: 'مَلِكِ يَوْمِ الدِّينِ',
        phoneticNote: 'قراءة بغير ألف (مَلِكِ)',
        readerStyle: 'الحذيفي / الدوكالي'
      },
      {
        riwayaName: 'السوسي عن أبي عمرو',
        riwayaId: 'susi',
        text: 'الرَّحِيمِّلِكِ يَوْمِ الدِّينِ (مع الوصل)',
        phoneticNote: 'إدغام ميم الرحيم في ميم ملك (الإدغام الكبير)',
        readerStyle: 'عبد الرشيد صوفي'
      }
    ]
  },
  {
    surahNumber: 1,
    surahName: 'الفاتحة',
    ayahNumber: 6,
    ruleTitle: 'الصاد والسين وإشمام الزاي في (الصِّرَاطَ)',
    category: 'أصول وفرش',
    explanation: 'قرأ الجمهور بالصاد الخالصة (الصِّرَاط)، وقرأ قنبل عن ابن كثير ورويس بالسين (السِّرَاط)، وقرأ حمزة (خلف وخلاد) بإشمام الصاد زياً ممزوجة.',
    variants: [
      {
        riwayaName: 'حفص عن عاصم',
        riwayaId: 'hafs',
        text: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        phoneticNote: 'صاد مفخمة مطبقة خالصة',
        readerStyle: 'العفاسي / المنشاوي'
      },
      {
        riwayaName: 'قنبل عن ابن كثير',
        riwayaId: 'qunbul',
        text: 'اهْدِنَا السِّرَاطَ الْمُسْتَقِيمَ',
        phoneticNote: 'سين مرققة خالصة (السِّرَاط)',
        readerStyle: 'عبد الرشيد صوفي / السلطني'
      },
      {
        riwayaName: 'خلف عن حمزة',
        riwayaId: 'khalaf_hamzah',
        text: 'اهْدِنَا الزِّرَاطَ الْمُسْتَقِيمَ (إشمام)',
        phoneticNote: 'إشمام الصاد صوت الزاي الممزوج في كل القرآن',
        readerStyle: 'عبد الرشيد صوفي'
      }
    ]
  },
  {
    surahNumber: 1,
    surahName: 'الفاتحة',
    ayahNumber: 7,
    ruleTitle: 'صلة ميم الجمع وكسر أو ضم الهاء في (عَلَيْهِمْ)',
    category: 'أصول ميم الجمع',
    explanation: 'تختلف الروايات بين إسكان الميم، أو صلتها بواو لفظية (عَلَيْهِمُو)، أو ضم الهاء لحمزة ويعقوب (عَلَيْهُم).',
    variants: [
      {
        riwayaName: 'حفص عن عاصم',
        riwayaId: 'hafs',
        text: 'صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ',
        phoneticNote: 'كسر الهاء وإسكان الميم بدون صلة',
        readerStyle: 'حفص القياسي'
      },
      {
        riwayaName: 'قالون عن نافع والبزي',
        riwayaId: 'qaloon',
        text: 'أَنْعَمْتَ عَلَيْهِمُو غَيْرِ الْمَغْضُوبِ عَلَيْهِمُو',
        phoneticNote: 'صلة ميم الجمع بواو لفظية وصلاً (عَلَيْهِمُو)',
        readerStyle: 'الحصري (قالون)'
      },
      {
        riwayaName: 'رويس وحمزة',
        riwayaId: 'ruways',
        text: 'أَنْعَمْتَ عَلَيْهُم غَيْرِ الْمَغْضُوبِ عَلَيْهُم',
        phoneticNote: 'ضم هاء الضمير (عَلَيْهُم)',
        readerStyle: 'عبد الرشيد صوفي (رويس)'
      }
    ]
  },
  {
    surahNumber: 112,
    surahName: 'الإخلاص',
    ayahNumber: 4,
    ruleTitle: 'همز وإبدال (كُفُوًا / كُفُؤًا)',
    category: 'أصول الهمز والواو',
    explanation: 'قرأ حفص بضم الفاء وإبدال الهمزة واواً منونة بالفتح (كُفُوًا)، بينما قرأ حمزة بسكون الفاء والهمز (كُفْءًا)، وقرأ باقي القراء بضم الفاء والهمز (كُفُؤًا).',
    variants: [
      {
        riwayaName: 'حفص عن عاصم',
        riwayaId: 'hafs',
        text: 'وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ',
        phoneticNote: 'ضم الفاء مع واو مفتوحة بدون همز',
        readerStyle: 'العفاسي'
      },
      {
        riwayaName: 'ورش وقالون',
        riwayaId: 'warsh',
        text: 'وَلَمْ يَكُن لَّهُۥ كُفُؤًا أَحَدٌ',
        phoneticNote: 'ضم الفاء مع همزة محققة منونة',
        readerStyle: 'العيون الكوشي'
      },
      {
        riwayaName: 'خلف عن حمزة',
        riwayaId: 'khalaf_hamzah',
        text: 'وَلَمْ يَكُن لَّهُۥ كُفْءًا اَحَدٌ',
        phoneticNote: 'إسكان الفاء مع همز مع السكت على التنوين',
        readerStyle: 'عبد الرشيد صوفي'
      }
    ]
  }
];

export const RiwayatComparisonView: React.FC<RiwayatComparisonViewProps> = ({
  onPlayRiwayaSurah,
  language
}) => {
  const isAr = language === 'ar';
  const [selectedCaseIdx, setSelectedCaseIdx] = useState<number>(0);

  const activeCase = COMPARATIVE_AYAH_CASES[selectedCaseIdx];

  const handleListenRiwaya = (variantRiwayaId: string) => {
    const targetRiwaya = RIWAYAT_DATA.find((r) => r.id === variantRiwayaId) || RIWAYAT_DATA[0];
    const surah = ALL_SURAHS.find((s) => s.number === activeCase.surahNumber) || ALL_SURAHS[0];
    onPlayRiwayaSurah(targetRiwaya, surah);
  };

  return (
    <div className="max-w-5xl mx-auto my-8 px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold">
          <ArrowRightLeft className="w-3.5 h-3.5" />
          <span>المختبر المقارن لأوجه القراءات</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-arabic text-stone-900 dark:text-stone-100">
          مقارنة الروايات وأوجه الخلاف
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
          اختر الآية الكريمة وقارن بين قراءات الأئمة في الكلمة الواحدة مع توضيح الفروق الصوتية والنحوية واستمع لكل رواية فوراً.
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        {COMPARATIVE_AYAH_CASES.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCaseIdx(idx)}
            className={`px-4 py-2.5 rounded-2xl whitespace-nowrap transition-all border font-bold ${
              selectedCaseIdx === idx
                ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md'
                : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-amber-400'
            }`}
          >
            سورة {item.surahName} (الآية {item.ayahNumber}): {item.ruleTitle}
          </button>
        ))}
      </div>

      {/* Main Comparative Card */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Header Info */}
        <div className="border-b border-stone-100 dark:border-stone-800 pb-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold font-arabic text-stone-900 dark:text-stone-100">
              {activeCase.ruleTitle}
            </h3>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold">
              {activeCase.category}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            {activeCase.explanation}
          </p>
        </div>

        {/* Variants List */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
            أوجه القراءة بين الروايات:
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeCase.variants.map((v, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-700/80 flex flex-col justify-between space-y-4 hover:border-amber-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-sm text-amber-700 dark:text-amber-400 font-arabic">
                      {v.riwayaName}
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono">
                      {v.readerStyle}
                    </span>
                  </div>

                  {/* Quranic Text */}
                  <div className="p-3 rounded-xl bg-white dark:bg-stone-900 border border-amber-500/20 text-stone-900 dark:text-amber-100 font-quran text-xl leading-loose my-2 text-center">
                    {v.text}
                  </div>

                  {/* Phonetic Note */}
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed mt-2">
                    <strong className="text-stone-400 font-normal">الضابط الصوتي: </strong>
                    {v.phoneticNote}
                  </p>
                </div>

                {/* Listen button */}
                <button
                  onClick={() => handleListenRiwaya(v.riwayaId)}
                  className="w-full py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-800 dark:text-amber-300 hover:text-stone-950 text-xs font-bold transition-all border border-amber-500/30 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>الاستماع بصوت هذه الرواية</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
