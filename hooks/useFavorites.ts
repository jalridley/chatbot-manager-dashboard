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

  const isFavorite = (fileId: number) => favorites.has(fileId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    favoritesCount: favorites.size,
  };
};
