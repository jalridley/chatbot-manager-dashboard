import { File } from '@/types/file';
import { Checkbox } from './ui/checkbox';
import { Star } from 'lucide-react';
import { useState } from 'react';

const FilesGrid = ({ sortedFiles }: { sortedFiles: File[] }) => {
  const [isFavorite, setIsFavourite] = useState(false);

  return (
    <div className="grid grid-cols-5 gap-4">
      {sortedFiles.map((file) => (
        <div className="border p-4" key={file.id}>
          <div className="flex items-center">
            <Checkbox aria-label={`Select ${file.fileName}`} />
          </div>
          <button
            aria-pressed={isFavorite} // true if favorited, false otherwise
            aria-label={`Favorite ${file.fileName}`} // Describes the button’s purpose
            onClick={() => setIsFavourite(!isFavorite)}
            className="flex items-center"
          >
            {isFavorite ? (
              <Star className="w-5 fill-yellow-400 text-yellow-400" />
            ) : (
              <Star className="w-5 text-gray-400" />
            )}
          </button>
          <div>{file.fileName}</div>
          <div>{file.dateModified}</div>
          <div>{file.size}</div>
          <div>{file.type}</div>
        </div>
      ))}
    </div>
  );
};

export default FilesGrid;
