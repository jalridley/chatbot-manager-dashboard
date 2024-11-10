'use-client';

import { File } from '@/types/file';
import { SortKey, SortOrder, SORT_OPTIONS } from '@/hooks/useFileSort';

type FilesListProps = {
  sortedFiles: File[];
  sortKey: SortKey;
  sortOrder: SortOrder;
  onSort: (key: SortKey) => void;
};

// TODO: styling in a table format to show list view of files
const FilesList = ({
  sortedFiles,
  sortKey,
  sortOrder,
  onSort,
}: FilesListProps) => {
  return (
    <div className="rounded-lg bg-white shadow">
      <div className="grid grid-cols-4 gap-4 bg-gray-50 px-6 py-3">
        {SORT_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => onSort(option.value)}
            className="flex items-center gap-1 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700"
          >
            {option.label}
            {sortKey === option.value &&
              (sortOrder === 'asc' ? ' (icon-up)' : ' (icon-down)')}
          </button>
        ))}
      </div>
      <div className="divide-y divide-gray-200">
        {sortedFiles.map((file) => (
          <div key={file.id} className="grid grid-cols-4 gap-4 px-6 py-4">
            <div>{file.fileName}</div>
            <div>{file.dateModified}</div>
            <div>{file.size}</div>
            <div>{file.type}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilesList;
