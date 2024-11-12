import { useState, useMemo } from 'react';
import { File } from '@/types/file';

export type SortKey = 'fileName' | 'dateModified' | 'size' | 'type';
export type SortOrder = 'asc' | 'desc';

export const SORT_OPTIONS = [
  { label: 'Name', value: 'fileName' },
  { label: 'Modified', value: 'dateModified' },
  { label: 'Size', value: 'size' },
  { label: 'Type', value: 'type' },
] as const;

export const useFileSort = (files: File[]) => {
  const [sortKey, setSortKey] = useState<SortKey>('fileName');
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  const sortedFiles = useMemo(() => {
    return [...files].sort((a, b) => {
      const aValue = a[sortKey];
      const bValue = b[sortKey];

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      }
      return aValue < bValue ? 1 : -1;
    });
  }, [files, sortKey, sortOrder]);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
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
