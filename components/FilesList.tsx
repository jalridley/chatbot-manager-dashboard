'use-client';

import { File } from '@/types/file';
import { SortKey, SortOrder, SORT_OPTIONS } from '@/hooks/useFileSort';
import {
  Star,
  ChevronDown,
  FileJson,
  FileSpreadsheet,
  FileText,
} from 'lucide-react';

type FilesListProps = {
  files: File[];
  sortKey: SortKey;
  sortOrder: SortOrder;
  onSort: (key: SortKey) => void;
  onToggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FilesList = ({
  files,
  sortKey,
  sortOrder,
  onSort,
  onToggleFavorite,
  isFavorite,
}: FilesListProps) => {
  return (
    <div className="w-full overflow-hidden rounded-md">
      <table className="w-full border-collapse border-b border-b-gray-200">
        {/* Table Header */}
        <thead className="hidden w-full rounded-md bg-gray-200/50 md:table-header-group">
          <tr>
            {/* element hidden to screen readers */}
            <th className="w-auto rounded-l-md pl-6" aria-hidden="true"></th>
            {SORT_OPTIONS.map((option) => (
              <th
                key={option.value}
                className="w-full px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 last:rounded-r-md hover:text-gray-700"
              >
                <button
                  onClick={() => onSort(option.value)}
                  className="flex items-center gap-1"
                >
                  {option.label}
                  {sortKey === option.value &&
                    (sortOrder === 'asc' ? (
                      <ChevronDown className="h-4 w-4 rotate-180" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    ))}
                </button>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {files.length === 0 ? (
            <tr>
              <td colSpan={5} className="col-span-5 py-4 text-center">
                No Results
              </td>
            </tr>
          ) : (
            files.map((file) => (
              <tr key={file.id}>
                <td className="w-auto pl-6">
                  <button
                    aria-pressed={isFavorite(file.id)}
                    aria-label={`Favorite ${file.fileName}`}
                    onClick={() => onToggleFavorite(file.id)}
                    className="flex items-center"
                  >
                    {isFavorite(file.id) ? (
                      <Star className="w-5 fill-yellow-400 text-yellow-400" />
                    ) : (
                      <Star className="w-5 text-gray-400" />
                    )}
                  </button>
                </td>
                <td className="max-w-[200px] overflow-hidden truncate px-6 py-4 sm:max-w-[300px]">
                  {file.fileName}
                </td>
                <td className="hidden text-nowrap px-6 py-4 md:table-cell">
                  {file.dateModified}
                </td>
                <td className="hidden text-nowrap px-6 py-4 md:table-cell">
                  {file.size} KB
                </td>
                <td className="text-nowrap px-6 py-4">
                  <span className="flex items-center">
                    {file.type === 'csv' ? (
                      <FileSpreadsheet className="mr-1 h-5 w-5 text-red-700" />
                    ) : file.type === 'text' ? (
                      <FileText className="mr-1 h-5 w-5 text-blue-700" />
                    ) : file.type === 'json' ? (
                      <FileJson className="mr-1 h-5 w-5 text-teal-700" />
                    ) : null}
                    {file.type}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FilesList;
