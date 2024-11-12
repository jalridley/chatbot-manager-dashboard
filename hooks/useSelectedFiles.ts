import { useCallback, useState } from 'react';

export const useSelectedFiles = () => {
  const [selectedFiles, setSelectedFiles] = useState<Set<number>>(new Set());

  // do not save to local storage like useFavourites

  const toggleSelectFile = (fileId: number) => {
    setSelectedFiles((prev) => {
      const newSelections = new Set(prev);
      if (newSelections.has(fileId)) {
        newSelections.delete(fileId);
      } else {
        newSelections.add(fileId);
      }
      return newSelections;
    });
  };

  const isSelected = useCallback(
    (fileId: number) => selectedFiles.has(fileId),
    [selectedFiles],
  );

  return {
    selectedFiles,
    toggleSelectFile,
    isSelected,
  };
};
