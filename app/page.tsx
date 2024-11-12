'use client';

import { files } from '@/data/files';
import FilesList from '@/components/FilesList';
import FilesGrid from '@/components/FilesGrid';
import { useState, useEffect } from 'react';
import { useFileSort } from '@/hooks/useFileSort';
import { useFavorites } from '@/hooks/useFavorites';
import SortDropdownMenu from '@/components/ui/SortDropdownMenu';
import BulkActionsDropdown from '@/components/BulkActionsDropdown';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

export default function Home() {
  const [viewMode, setViewMode] = useState('list');

  const { sortedFiles, sortKey, sortOrder, toggleSort } = useFileSort(files);
  const { toggleFavorite, isFavorite, toggleAllFavorites, isAllFavorite } =
    useFavorites();

  const toggleView = () => {
    setViewMode(viewMode === 'list' ? 'grid' : 'list');
  };

  const fileActions = [
    { label: 'Favorite All', showCheckmark: isAllFavorite(sortedFiles.length) },
    { label: 'Delete', showCheckmark: false },
  ];

  return (
    <div>
      <main className="flex w-full items-center justify-center">
        <section className="w-1/2">
          <BulkActionsDropdown
            actions={fileActions}
            onActionSelect={(actionLabel) => {
              if (actionLabel === 'Favorite All') {
                toggleAllFavorites(sortedFiles.length);
              }
            }}
          />
          <div className="flex items-center justify-between">
            <button
              className="rounded-xl border bg-gray-200 p-2"
              onClick={toggleView}
            >
              Toggle View
            </button>
            <SortDropdownMenu sortKey={sortKey} onSort={toggleSort} />
          </div>

          {viewMode === 'list' ? (
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
