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
import { LayoutGrid, LayoutList } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  const filterOptions = ['All Files', 'Favorites'];

  return (
    <div>
      <main className="flex h-screen w-full justify-center">
        <section className="w-1/2 p-6">
          <div className="flex justify-between py-4">
            <BulkActionsDropdown
              actions={fileActions}
              onActionSelect={(actionLabel) => {
                if (actionLabel === 'Favorite All') {
                  toggleAllFavorites(filteredFiles.length);
                }
              }}
            />

            <div className="flex items-center space-x-4">
              <button
                className="h-9 rounded-md bg-white p-2 shadow"
                onClick={toggleView}
              >
                {viewMode === 'list' ? (
                  <LayoutGrid className="h-5 w-5" />
                ) : (
                  <LayoutList className="h-5 w-5" />
                )}
              </button>

              <FilterDropdown
                filterOptions={filterOptions}
                onFilterSelect={handleFilterSelect}
                isDisabled={favorites.size === 0}
              />

              <SortDropdownMenu sortKey={sortKey} onSort={toggleSort} />
            </div>
          </div>

          {viewMode === 'list' ? (
            <FilesList
              files={filteredFiles}
              sortKey={sortKey}
              sortOrder={sortOrder}
              onSort={toggleSort}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          ) : (
            <FilesGrid
              files={filteredFiles}
              onToggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          )}
        </section>
      </main>
    </div>
  );
}
