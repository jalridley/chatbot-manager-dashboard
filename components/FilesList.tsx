import { File } from '@/types/file';
import { SortKey, SortOrder, SORT_OPTIONS } from '@/hooks/useFileSort';
import { Checkbox } from './ui/checkbox';

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
    <div className="w-full rounded-lg bg-white shadow">
      <table className="w-full border-collapse">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            {/* element hidden to screen readers */}
            <th className="w-auto pl-6" aria-hidden="true"></th>
            {SORT_OPTIONS.map((option) => (
              <th
                key={option.value}
                className="w-full px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 hover:text-gray-700"
              >
                <button
                  onClick={() => onSort(option.value)}
                  className="flex items-center gap-1"
                >
                  {option.label}
                  {sortKey === option.value &&
                    (sortOrder === 'asc' ? ' (icon-up)' : ' (icon-down)')}
                </button>
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {sortedFiles.map((file) => (
            <tr key={file.id}>
              <td className="w-auto pl-6">
                <Checkbox aria-label={`Select ${file.fileName}`} />
              </td>
              <td className="max-w-[300px] overflow-hidden truncate px-6 py-4">
                {file.fileName}
              </td>
              <td className="text-nowrap px-6 py-4">{file.dateModified}</td>
              <td className="text-nowrap px-6 py-4">{file.size}</td>
              <td className="text-nowrap px-6 py-4">{file.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilesList;
