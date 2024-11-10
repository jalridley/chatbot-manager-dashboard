import { File } from '@/types/file';

const FilesGrid = ({ sortedFiles }: { sortedFiles: File[] }) => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {sortedFiles.map((file) => (
        <div className="border p-4" key={file.id}>
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
