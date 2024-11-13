'use-client';

import { File } from '@/types/file';
import FileCard from '@/components/FileCard';

type FilesGridProps = {
  files: File[];
  onToggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

const FilesGrid = ({ files, onToggleFavorite, isFavorite }: FilesGridProps) => {
  return (
    <div className="grid grid-cols-3 items-stretch gap-8">
      {files.map((file) => (
        <div key={file.id}>
          <FileCard
            file={file}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        </div>
      ))}
    </div>
  );
};

export default FilesGrid;
