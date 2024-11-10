import { File } from '@/types/file';

// TODO: styling the grid/icons
const FilesGrid = ({ files }: { files: File[] }) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {files.map((file) => (
        <div className="border p-4" key={file.id}>
          <p>{file.fileName}</p>
          <p>{file.dateModified}</p>
          <p>{file.size}</p>
          <p>{file.type}</p>
        </div>
      ))}
    </div>
  );
};

export default FilesGrid;
