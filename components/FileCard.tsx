import { FileSpreadsheet, FileText, FileJson, Star } from 'lucide-react';
import { File } from '@/types/file';

interface FileCardProps {
  file: File;
  isFavorite: (is: number) => boolean;
  onToggleFavorite: (id: number) => void;
}

const FileCard = ({ file, isFavorite, onToggleFavorite }: FileCardProps) => {
  const renderFileIcon = () => {
    switch (file.type) {
      case 'csv':
        return <FileSpreadsheet className="h-16 w-16 text-red-700" />;
      case 'text':
        return <FileText className="h-16 w-16 text-blue-700" />;
      case 'json':
        return <FileJson className="h-16 w-16 text-teal-700" />;
      default:
        return null;
    }
  };

  return (
    <article className="relative flex h-full items-center rounded-md border bg-white p-4 shadow-lg">
      {/* File Icon */}
      <figure
        className="mr-4 flex-shrink-0"
        aria-label={`File type: ${file.type}`}
      >
        {renderFileIcon()}
      </figure>

      {/* File Details */}
      <section className="flex-1 space-y-2 pr-8">
        <h2 className="text-wrap font-bold" title={file.fileName}>
          {file.fileName}
        </h2>

        <div>
          <time className="text-xs text-gray-500" dateTime={file.dateModified}>
            Modified: {file.dateModified}
          </time>
          <p className="text-xs text-gray-500">Size: {file.size} KB</p>
          <p className="text-xs capitalize text-gray-500">
            Type: {file.type} Document
          </p>
        </div>
      </section>

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
    </article>
  );
};

export default FileCard;
