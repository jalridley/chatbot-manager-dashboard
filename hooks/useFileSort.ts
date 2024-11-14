import { useState, useMemo } from 'react';
import { File } from '@/types/file';

export type SortKey = 'fileName' | 'dateModified' | 'size' | 'type';
export type SortOrder = 'asc' | 'desc';

// sort options const for displaying in the UI
export const SORT_OPTIONS = [
  { label: 'Name', value: 'fileName' },
  { label: 'Modified', value: 'dateModified' },
  { label: 'Size', value: 'size' },
  { label: 'Type', value: 'type' },
] as const;

// Custom hook for managing sorting functionality on a list of files
export const useFileSort = (files: File[]) => {
  const [sortKey, setSortKey] = useState<SortKey>('fileName');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  // Memoized sorted files array recalculates only when files, sortKey, or sortOrder change
  // optimization to avoid recalculating the sorted array on every render
  const sortedFiles = useMemo(() => {
    // Sort a copy of the files array based on the current sort key and order
    return [...files].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      // If sorting in ascending order, compare values directly
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      // If sorting in descending order, reverse the comparison
      return aValue < bValue ? 1 : -1;
    });
  }, [files, sortKey, sortOrder]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // If a different key is clicked, set it as the new sort key and default to ascending order
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  return {
    sortedFiles,
    sortKey,
    sortOrder,
    toggleSort,
  };
};
