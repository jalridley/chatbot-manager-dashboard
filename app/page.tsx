'use client';

import { files } from '@/data/files';
import FilesList from '@/components/FilesList';
import FilesGrid from '@/components/FilesGrid';
import { useState } from 'react';
import { useFileSort } from '@/hooks/useFileSort';
import { useFavorites } from '@/hooks/useFavorites';
import SortDropdownMenu from '@/components/ui/SortDropdownMenu';

export default function Home() {
  const [view, setView] = useState('list');
  const { sortedFiles, sortKey, sortOrder, toggleSort } = useFileSort(files);
  const { favorites, toggleFavorite, favoritesCount, isFavorite } =
    useFavorites();

  const toggleView = () => {
    setView(view === 'list' ? 'grid' : 'list');
  };

  return (
    <div>
      <main className="flex w-full items-center justify-center">
        <section className="w-1/2">
          <div className="flex items-center justify-between">
            <button
              className="rounded-xl border bg-gray-200 p-2"
              onClick={toggleView}
            >
              Toggle View
            </button>
            <SortDropdownMenu sortKey={sortKey} onSort={toggleSort} />
          </div>

          {view === 'list' ? (
            <FilesList
              sortedFiles={sortedFiles}
              sortKey={sortKey}
              sortOrder={sortOrder}
              onSort={toggleSort}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          ) : (
            <FilesGrid
              sortedFiles={sortedFiles}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          )}
        </section>
      </main>
    </div>
  );
}
