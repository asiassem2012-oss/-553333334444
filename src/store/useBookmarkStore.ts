/**
 * Quran Comprehensive & Riwayat Engine - Bookmark & Reading History Store
 * إدارة العلامات المرجعية وآخر موضع قراءة
 */

import { useState, useEffect } from 'react';
import { Bookmark } from '../types/quran';

const BOOKMARKS_STORAGE_KEY = 'quran_riwayat_bookmarks_v1';
const LAST_READ_STORAGE_KEY = 'quran_riwayat_last_read_v1';

export interface LastReadPosition {
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  riwayaId: string;
  updatedAt: number;
}

export function useBookmarkStore() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(() => {
    try {
      const stored = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [lastRead, setLastRead] = useState<LastReadPosition | null>(() => {
    try {
      const stored = localStorage.getItem(LAST_READ_STORAGE_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (e) {
      console.warn('Failed to save bookmarks to localStorage', e);
    }
  }, [bookmarks]);

  useEffect(() => {
    if (lastRead) {
      try {
        localStorage.setItem(LAST_READ_STORAGE_KEY, JSON.stringify(lastRead));
      } catch (e) {
        console.warn('Failed to save last read to localStorage', e);
      }
    }
  }, [lastRead]);

  const addBookmark = (surahNumber: number, ayahNumber: number, surahName: string, riwayaId: string, reciterId: string, note?: string) => {
    const newBookmark: Bookmark = {
      id: `${surahNumber}-${ayahNumber}-${Date.now()}`,
      surahNumber,
      ayahNumber,
      surahName,
      riwayaId,
      reciterId,
      createdAt: Date.now(),
      note
    };
    setBookmarks((prev) => [newBookmark, ...prev]);
  };

  const removeBookmark = (id: string) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  const isBookmarked = (surahNumber: number, ayahNumber: number): boolean => {
    return bookmarks.some((b) => b.surahNumber === surahNumber && b.ayahNumber === ayahNumber);
  };

  const saveLastRead = (surahNumber: number, ayahNumber: number, surahName: string, riwayaId: string) => {
    setLastRead({
      surahNumber,
      ayahNumber,
      surahName,
      riwayaId,
      updatedAt: Date.now()
    });
  };

  return {
    bookmarks,
    lastRead,
    addBookmark,
    removeBookmark,
    isBookmarked,
    saveLastRead
  };
}
