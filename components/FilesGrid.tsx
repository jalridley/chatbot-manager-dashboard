'use-client';

import { File } from '@/types/file';
import { Star, FileSpreadsheet, FileText, FileJson } from 'lucide-react';

type FilesGridProps = {
  files: File[];
  onToggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FilesGrid = ({ files, onToggleFavorite, isFavorite }: FilesGridProps) => {
  return (
    <div className="grid grid-cols-3 items-stretch gap-8">
      {files.map((file) => (
        <div
          key={file.id}
          className="relative flex h-full items-center rounded-md border bg-white p-4 shadow-lg"
        >
          {/* File Icon */}
          <div className="mr-4 flex-shrink-0">
            {file.type === 'csv' ? (
              <FileSpreadsheet className="h-16 w-16 text-red-700" />
            ) : file.type === 'text' ? (
              <FileText className="h-16 w-16 text-blue-700" />
            ) : file.type === 'json' ? (
              <FileJson className="h-16 w-16 text-teal-700" />
            ) : null}
          </div>

          {/* File Details */}
          <div className="flex-1 space-y-2 pr-8">
            <div className="text-md text-wrap font-bold">{file.fileName}</div>
            <div className="">
              <div className="text-xs text-gray-500">
                Modified: {file.dateModified}
              </div>
              <div className="text-xs text-gray-500">Size: {file.size} KB</div>
              <div className="text-xs capitalize text-gray-500">
                Type: {file.type} Document
              </div>
            </div>
          </div>

          {/* Favorite Star Icon */}
          <button
            aria-pressed={isFavorite(file.id)}
            aria-label={`Favorite ${file.fileName}`}
            onClick={() => onToggleFavorite(file.id)}
            className="absolute right-4 top-4"
          >
            {isFavorite(file.id) ? (
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ) : (
              <Star className="h-5 w-5 text-gray-400" />
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilesGrid;
