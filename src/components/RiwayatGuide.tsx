import React, { useState } from 'react';
import { BookOpen, Sparkles, ChevronDown, ChevronUp, Scroll, Compass } from 'lucide-react';
import { RIWAYAT_DATA } from '../data/riwayatData';
import { RIWAYAT_COMPARATIVE_RULES } from '../data/riwayatDifferences';
import { Riwaya } from '../types/quran';

interface RiwayatGuideProps {
  onSelectRiwaya: (riwaya: Riwaya) => void;
  language: 'ar' | 'en';
}

export const RiwayatGuide: React.FC<RiwayatGuideProps> = ({ onSelectRiwaya, language }) => {
  const isAr = language === 'ar';
  const [selectedRiwayaId, setSelectedRiwayaId] = useState<string>('warsh');

  const selectedRiwaya = RIWAYAT_DATA.find((r) => r.id === selectedRiwayaId) || RIWAYAT_DATA[0];
  const comparativeFeatures = RIWAYAT_COMPARATIVE_RULES[selectedRiwayaId] || [];

  return (
    <div className="max-w-5xl mx-auto my-8 px-4 sm:px-6 space-y-8">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 text-xs font-bold">
          <Scroll className="w-3.5 h-3.5" />
          <span>علم القراءات العشر المتواترة</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold font-arabic text-stone-900 dark:text-stone-100">
          معجم الروايات وفروق الأصول والفرش
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
          دليل علمي تأصيلي لأئمة القراءة ورواتهم، مع توضيح القواعد الصوتية والأصولية والفروق الأدائية بين حفص والروايات الأخرى.
        </p>
      </div>

      {/* Riwaya Picker Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {RIWAYAT_DATA.map((r) => {
          const isSelected = r.id === selectedRiwayaId;
          return (
            <button
              key={r.id}
              onClick={() => setSelectedRiwayaId(r.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-amber-500 text-stone-950 border-amber-500 shadow-md ring-2 ring-amber-400/40'
                  : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-amber-400'
              }`}
            >
              {r.name}
            </button>
          );
        })}
      </div>

      {/* Selected Riwaya In-Depth Profile */}
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        {/* Header Profile */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-100 dark:border-stone-800 pb-6">
          <div>
            <div className="flex items-center gap-3">
              <h3 className="text-2xl font-bold font-arabic text-stone-900 dark:text-stone-100">
                رواية {selectedRiwaya.name}
              </h3>
              <span className="text-xs text-stone-500 font-mono">
                {selectedRiwaya.englishName}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 leading-relaxed">
              {selectedRiwaya.description}
            </p>
          </div>

          <button
            onClick={() => onSelectRiwaya(selectedRiwaya)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-stone-100 text-xs font-bold transition-all shrink-0 shadow flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>تفعيل هذه الرواية في المصحف والمشغل</span>
          </button>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1">
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400">الإمام المقرئ</span>
            <p className="text-sm font-bold text-stone-800 dark:text-stone-200">{selectedRiwaya.imam}</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1">
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400">الراوي الناقل</span>
            <p className="text-sm font-bold text-stone-800 dark:text-stone-200">{selectedRiwaya.rawi}</p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1">
            <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400">مناطق الانتشار والتداول</span>
            <p className="text-sm font-bold text-stone-800 dark:text-stone-200">{selectedRiwaya.region}</p>
          </div>
        </div>

        {/* Distinctive Rules List */}
        <div>
          <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>أبرز القواعد والأصول التي تتميز بها هذه الرواية:</span>
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
            {selectedRiwaya.distinctiveRules.map((rule, idx) => (
              <li
                key={idx}
                className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 flex items-start gap-2"
              >
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-400 flex items-center justify-center shrink-0 font-mono text-[10px] mt-0.5 font-bold">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Comparative Rule Examples if available */}
        {comparativeFeatures.length > 0 && (
          <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-4">
            <h4 className="text-sm font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>أمثلة تطبيقية ومقارنة مع رواية حفص عن عاصم:</span>
            </h4>

            <div className="space-y-4">
              {comparativeFeatures.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-xs text-amber-800 dark:text-amber-300">{feat.title}</h5>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-stone-200 dark:bg-stone-700 text-stone-600 dark:text-stone-300">
                      {feat.category}
                    </span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {feat.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2">
                    {feat.examples.map((ex, eIdx) => (
                      <div
                        key={eIdx}
                        className="p-2.5 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-700/60 space-y-1 text-xs"
                      >
                        <span className="font-quran text-base font-bold text-emerald-700 dark:text-emerald-300 block">
                          {ex.word}
                        </span>
                        <div className="text-[11px] text-stone-700 dark:text-stone-300">
                          {ex.ruling}
                        </div>
                        <div className="text-[10px] text-stone-400">
                          مقابل حفص: {ex.comparisonWithHafs}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
