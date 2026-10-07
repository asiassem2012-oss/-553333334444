/**
 * Quran Comprehensive & Riwayat Engine - Audio Store
 * مخزن حالة المشغل الصوتي الشامل والتحكم في البث والخلفية
 */

import { useState, useEffect, useRef, useCallback } from 'react';
import { AudioPlaybackState, Reciter, RepeatMode, Riwaya, Surah } from '../types/quran';
import { ALL_SURAHS } from '../data/surahsData';
import { RIWAYAT_DATA } from '../data/riwayatData';
import { getSurahAudioUrl, isSurahAudioCached } from '../services/quranApi';

// Default initial state
const defaultRiwaya: Riwaya = RIWAYAT_DATA[0]; // حفص عن عاصم
const defaultReciter: Reciter = defaultRiwaya.reciters[0]; // مشاري العفاسي
const defaultSurah: Surah = ALL_SURAHS[0]; // الفاتحة

// Global singleton audio element & state listeners
let globalAudio: HTMLAudioElement | null = null;

let globalState: AudioPlaybackState = {
  isPlaying: false,
  currentTime: 0,
  duration: 0,
  buffered: 0,
  volume: 0.9,
  playbackRate: 1.0,
  repeatMode: 'continuous',
  isLoading: false,
  activeSurah: defaultSurah,
  activeAyahNumber: 1,
  activeReciter: defaultReciter,
  activeRiwaya: defaultRiwaya,
  queue: ALL_SURAHS,
  isPlayerModalOpen: false,
  isMuted: false
};

const listeners = new Set<(state: AudioPlaybackState) => void>();

function notify() {
  listeners.forEach((listener) => listener({ ...globalState }));
}

function getAudio(): HTMLAudioElement {
  if (!globalAudio && typeof window !== 'undefined') {
    globalAudio = new Audio();
    globalAudio.preload = 'metadata';

    globalAudio.addEventListener('loadstart', () => {
      globalState.isLoading = true;
      notify();
    });

    globalAudio.addEventListener('canplay', () => {
      globalState.isLoading = false;
      notify();
    });

    globalAudio.addEventListener('loadedmetadata', () => {
      if (globalAudio) {
        globalState.duration = globalAudio.duration || 0;
        notify();
      }
    });

    globalAudio.addEventListener('timeupdate', () => {
      if (!globalAudio) return;
      globalState.currentTime = globalAudio.currentTime || 0;
      globalState.duration = globalAudio.duration || globalState.duration;

      // Estimate active ayah progress for synchronization
      if (globalState.activeSurah && globalState.duration > 0) {
        const totalAyahs = globalState.activeSurah.numberOfAyahs;
        const fraction = Math.min(1, Math.max(0, globalState.currentTime / globalState.duration));
        const estimatedAyah = Math.min(totalAyahs, Math.floor(fraction * totalAyahs) + 1);
        if (estimatedAyah !== globalState.activeAyahNumber) {
          globalState.activeAyahNumber = estimatedAyah;
        }
      }

      // Calculate buffer progress
      if (globalAudio.buffered.length > 0) {
        try {
          const bufferedEnd = globalAudio.buffered.end(globalAudio.buffered.length - 1);
          globalState.buffered = globalAudio.duration ? (bufferedEnd / globalAudio.duration) * 100 : 0;
        } catch (e) {
          // ignore
        }
      }
      notify();
    });

    globalAudio.addEventListener('play', () => {
      globalState.isPlaying = true;
      globalState.isLoading = false;
      notify();
      setupMediaSession();
    });

    globalAudio.addEventListener('pause', () => {
      globalState.isPlaying = false;
      notify();
    });

    globalAudio.addEventListener('ended', () => {
      handleAudioEnded();
    });

    globalAudio.addEventListener('error', (e) => {
      console.warn('Audio playback error, will attempt fallback:', e);
      globalState.isLoading = false;
      globalState.isPlaying = false;
      notify();
    });
  }
  return globalAudio!;
}

function handleAudioEnded() {
  if (globalState.repeatMode === 'surah') {
    const audio = getAudio();
    audio.currentTime = 0;
    audio.play().catch(console.error);
    return;
  }

  if (globalState.repeatMode === 'ayah') {
    const audio = getAudio();
    // Replay active segment
    audio.currentTime = 0;
    audio.play().catch(console.error);
    return;
  }

  if (globalState.repeatMode === 'continuous') {
    audioActions.nextSurah();
    return;
  }

  globalState.isPlaying = false;
  notify();
}

/**
 * إعداد إشعارات شاشة القفل والتحكم بالخلفية عبر MediaSession API
 * Background playback & Lock screen notification controls setup
 */
function setupMediaSession() {
  if (typeof window === 'undefined' || !('mediaSession' in navigator)) return;

  const surah = globalState.activeSurah;
  const reciter = globalState.activeReciter;
  const riwaya = globalState.activeRiwaya;

  if (!surah || !reciter) return;

  try {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: `سورة ${surah.name} (${surah.englishName})`,
      artist: `${reciter.name} - ${riwaya.name}`,
      album: `محرك القرآن الشامل ومصحف الروايات`,
      artwork: [
        {
          src: 'https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=512&q=80',
          sizes: '512x512',
          type: 'image/jpeg'
        }
      ]
    });

    navigator.mediaSession.setActionHandler('play', () => audioActions.togglePlayPause());
    navigator.mediaSession.setActionHandler('pause', () => audioActions.togglePlayPause());
    navigator.mediaSession.setActionHandler('previoustrack', () => audioActions.prevSurah());
    navigator.mediaSession.setActionHandler('nexttrack', () => audioActions.nextSurah());
    navigator.mediaSession.setActionHandler('seekbackward', (details) => {
      const skipTime = details.seekOffset || 10;
      audioActions.seekTo(Math.max(globalState.currentTime - skipTime, 0));
    });
    navigator.mediaSession.setActionHandler('seekforward', (details) => {
      const skipTime = details.seekOffset || 10;
      audioActions.seekTo(Math.min(globalState.currentTime + skipTime, globalState.duration));
    });
  } catch (err) {
    // Non-critical, ignore
  }
}

/**
 * إجراءات التحكم بالمشغل الصوتي الشامل
 * Global audio player actions
 */
export const audioActions = {
  async playSurah(surah: Surah, startAyah?: number) {
    const audio = getAudio();
    globalState.activeSurah = surah;
    globalState.activeAyahNumber = startAyah || 1;
    globalState.isLoading = true;
    notify();

    const url = getSurahAudioUrl(globalState.activeReciter, surah.number);
    audio.src = url;
    audio.playbackRate = globalState.playbackRate;
    audio.volume = globalState.isMuted ? 0 : globalState.volume;

    try {
      await audio.play();
      setupMediaSession();
    } catch (err) {
      console.warn('Playback autoplay restriction or network issue:', err);
      globalState.isLoading = false;
      notify();
    }
  },

  async togglePlayPause() {
    const audio = getAudio();
    if (!audio.src && globalState.activeSurah) {
      return this.playSurah(globalState.activeSurah);
    }

    if (globalState.isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (e) {
        if (globalState.activeSurah) {
          this.playSurah(globalState.activeSurah);
        }
      }
    }
  },

  nextSurah() {
    if (!globalState.activeSurah) return;
    const currentIndex = ALL_SURAHS.findIndex((s) => s.number === globalState.activeSurah?.number);
    const nextIndex = (currentIndex + 1) % ALL_SURAHS.length;
    this.playSurah(ALL_SURAHS[nextIndex]);
  },

  prevSurah() {
    if (!globalState.activeSurah) return;
    const currentIndex = ALL_SURAHS.findIndex((s) => s.number === globalState.activeSurah?.number);
    const prevIndex = (currentIndex - 1 + ALL_SURAHS.length) % ALL_SURAHS.length;
    this.playSurah(ALL_SURAHS[prevIndex]);
  },

  seekTo(seconds: number) {
    const audio = getAudio();
    audio.currentTime = seconds;
    globalState.currentTime = seconds;
    notify();
  },

  seekToAyah(ayahNumberInSurah: number) {
    if (!globalState.activeSurah || globalState.duration <= 0) return;
    const totalAyahs = globalState.activeSurah.numberOfAyahs;
    const targetFraction = Math.max(0, Math.min(1, (ayahNumberInSurah - 1) / totalAyahs));
    const targetTime = targetFraction * globalState.duration;
    this.seekTo(targetTime);
    globalState.activeAyahNumber = ayahNumberInSurah;
    notify();
  },

  setPlaybackRate(rate: number) {
    const audio = getAudio();
    audio.playbackRate = rate;
    globalState.playbackRate = rate;
    notify();
  },

  setRepeatMode(mode: RepeatMode) {
    globalState.repeatMode = mode;
    notify();
  },

  setVolume(vol: number) {
    const audio = getAudio();
    const clamped = Math.max(0, Math.min(1, vol));
    audio.volume = clamped;
    globalState.volume = clamped;
    if (clamped > 0) globalState.isMuted = false;
    notify();
  },

  toggleMute() {
    const audio = getAudio();
    globalState.isMuted = !globalState.isMuted;
    audio.volume = globalState.isMuted ? 0 : globalState.volume;
    notify();
  },

  setActiveRiwaya(riwaya: Riwaya, reciter?: Reciter) {
    globalState.activeRiwaya = riwaya;
    // Default to first reciter in this Riwaya if not provided or doesn't belong
    const targetReciter = reciter || riwaya.reciters[0];
    globalState.activeReciter = targetReciter;
    notify();

    // If currently playing, resume with same surah using new reciter
    if (globalState.isPlaying && globalState.activeSurah) {
      this.playSurah(globalState.activeSurah, globalState.activeAyahNumber || 1);
    }
  },

  setActiveReciter(reciter: Reciter) {
    globalState.activeReciter = reciter;
    notify();
    if (globalState.isPlaying && globalState.activeSurah) {
      this.playSurah(globalState.activeSurah, globalState.activeAyahNumber || 1);
    }
  },

  setActiveAyah(ayahNum: number) {
    globalState.activeAyahNumber = ayahNum;
    notify();
  },

  setPlayerModalOpen(open: boolean) {
    globalState.isPlayerModalOpen = open;
    notify();
  }
};

/**
 * خطاف React للاشتراك في حالة المشغل الصوتي
 * React hook subscribing to audio store
 */
export function useAudioStore(): AudioPlaybackState & { actions: typeof audioActions } {
  const [state, setState] = useState<AudioPlaybackState>(globalState);

  useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  return {
    ...state,
    actions: audioActions
  };
}
