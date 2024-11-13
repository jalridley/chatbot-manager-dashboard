'use-client';

import { File } from '@/types/file';
import { Star } from 'lucide-react';

type FilesGridProps = {
  files: File[];
  onToggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FilesGrid = ({ files, onToggleFavorite, isFavorite }: FilesGridProps) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {files.map((file) => (
        <div className="border p-4" key={file.id}>
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
          <div>{file.fileName}</div>
          <div>{file.dateModified}</div>
          <div>{file.size} KB</div>
          <div>{file.type}</div>
        </div>
      ))}
    </div>
  );
};

export default FilesGrid;
