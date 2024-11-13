import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

export const useFavorites = () => {
  // Initialize with empty Set to avoid hydration mismatch
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  // Load favorites from localStorage after mount
  useEffect(() => {
    const storedFavorites = getLocalStorage<number[]>('favorites', []);
    setFavorites(new Set(storedFavorites));
  }, []);

  useEffect(() => {
    setLocalStorage('favorites', Array.from(favorites));
  }, [favorites]);

  const toggleFavorite = (fileId: number) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(fileId)) {
        newFavorites.delete(fileId);
      } else {
        newFavorites.add(fileId);
      }
      return newFavorites;
    });
  };

  const toggleAllFavorites = (totalFiles: number) => {
    setFavorites((prevFavorites) => {
      // If all files are currently favorites, deselect all
      if (prevFavorites.size === totalFiles) {
        return new Set();
      } else {
        // Select all files (create a set of numbers 1 through totalFiles - ids start from 1)
        const allFileIds = new Set<number>();
        for (let i = 1; i <= totalFiles; i++) {
          allFileIds.add(i);
        }
        return allFileIds;
      }
    });
  };

  const isFavorite = (fileId: number) => favorites.has(fileId);
  const isAllFavorite = (totalFiles: number) => favorites.size === totalFiles;

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    toggleAllFavorites,
    isAllFavorite,
  };
};
