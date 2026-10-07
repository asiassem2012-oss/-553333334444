/**
 * Quran Comprehensive & Riwayat Engine - Type Definitions
 * تعريفات أنواع البيانات لمحرك القرآن الشامل ومصحف الروايات
 */

export type RevelationType = 'Meccan' | 'Medinan';

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishMeaning: string;
  numberOfAyahs: number;
  revelationType: RevelationType;
  juz: number;
  page: number;
  approxDuration?: string;
}

export interface Reciter {
  id: string;
  name: string;
  englishName: string;
  style: 'مرتل' | 'مجود' | 'معلم' | 'حدر';
  audioBaseUrl: string;
  availableSurahsCount: number;
  country: string;
  avatarSeed: string;
  bio?: string;
}

export interface Riwaya {
  id: string;
  name: string;
  englishName: string;
  imam: string;
  rawi: string;
  region: string;
  scriptName: string;
  fontClass: string;
  distinctiveRules: string[];
  description: string;
  reciters: Reciter[]; // Exactly 10 distinguished Qaris per Riwaya
}

export interface Ayah {
  number: number;
  numberInSurah: number;
  juz: number;
  page: number;
  text: string;
  textWarsh?: string;
  translation: string;
  tafsirAlMuyassar: string;
  tafsirAlJalalayn: string;
  tafsirIbnKathir: string;
  audioAyahUrl?: string;
}

export type RepeatMode = 'off' | 'surah' | 'ayah' | 'continuous';

export interface AudioPlaybackState {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  buffered: number;
  volume: number;
  playbackRate: number;
  repeatMode: RepeatMode;
  isLoading: boolean;
  activeSurah: Surah | null;
  activeAyahNumber: number | null;
  activeReciter: Reciter;
  activeRiwaya: Riwaya;
  queue: Surah[];
  isPlayerModalOpen: boolean;
  isMuted: boolean;
}

export interface Bookmark {
  id: string;
  surahNumber: number;
  ayahNumber: number;
  surahName: string;
  riwayaId: string;
  reciterId: string;
  createdAt: number;
  note?: string;
}

export interface QuranRadio {
  id: string;
  name: string;
  englishName: string;
  url: string;
  category: string;
  description: string;
  bitrate?: string;
}

export interface DhikrItem {
  id: string;
  category: 'morning' | 'evening' | 'sleep' | 'prayer' | 'tasbih';
  text: string;
  count: number;
  virtue: string;
  source: string;
}

export interface KhatmahPlan {
  id: string;
  title: string;
  targetDays: number;
  currentPage: number;
  totalPages: number;
  startDate: number;
  lastUpdated: number;
}

export type ActiveTab =
  | 'mushaf'
  | 'reciters'
  | 'radio'
  | 'riwayat-compare'
  | 'adhkar'
  | 'khatmah'
  | 'bookmarks';
