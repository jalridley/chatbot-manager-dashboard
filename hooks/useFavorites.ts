import { useState, useEffect } from 'react';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

export const useFavorites = () => {
  const initializeFavorites = (): Set<number> => {
    const storedFavorites = getLocalStorage<number[]>('favorites', []);
    return new Set(storedFavorites);
  };

  const [favorites, setFavorites] = useState<Set<number>>(initializeFavorites);

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
