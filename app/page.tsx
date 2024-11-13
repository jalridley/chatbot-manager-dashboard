'use client';

import { files } from '@/data/files';
import FilesList from '@/components/FilesList';
import FilesGrid from '@/components/FilesGrid';
import { useState } from 'react';
import { useFileSort } from '@/hooks/useFileSort';
import { useFavorites } from '@/hooks/useFavorites';
import SortDropdownMenu from '@/components/ui/SortDropdownMenu';
import BulkActionsDropdown from '@/components/BulkActionsDropdown';
import FilterDropdown from '@/components/FilterDropdown';

export default function Home() {
  const [viewMode, setViewMode] = useState('list');
  const { sortedFiles, sortKey, sortOrder, toggleSort } = useFileSort(files);
  const {
    favorites,
    toggleFavorite,
    isFavorite,
    toggleAllFavorites,
    isAllFavorite,
  } = useFavorites();
  const [selectedFilter, setSelectedFilter] = useState('All Files');

  const toggleView = () => {
    setViewMode(viewMode === 'list' ? 'grid' : 'list');
  };

  const handleFilterSelect = (filterOption: string) => {
    setSelectedFilter(filterOption);
  };

  // Filter sorted files based on the selected filter - fileName by default
  const filteredFiles =
    selectedFilter === 'Favorites'
      ? sortedFiles.filter((file) => favorites.has(file.id))
      : sortedFiles;

  const fileActions = [
    {
      label: 'Favorite All',
      showCheckmark: isAllFavorite(filteredFiles.length),
    },
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
                toggleAllFavorites(filteredFiles.length);
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

            <FilterDropdown
              filterOptions={['All files', 'Favorites']}
              onFilterSelect={handleFilterSelect}
              isDisabled={favorites.size === 0}
            />

            <SortDropdownMenu sortKey={sortKey} onSort={toggleSort} />
          </div>

          {viewMode === 'list' ? (
            <FilesList
              sortedFiles={filteredFiles}
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
