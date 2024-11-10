import { File } from '@/types/file';

// TODO: styling in a table format to show list view of files
const FilesList = ({ files }: { files: File[] }) => {
  return (
    <div>
      {files.map((file) => (
        <div className="flex justify-between border" key={file.id}>
          <div>
            <p>{file.fileName}</p>
          </div>
          <div className="flex space-x-4">
            <p>{file.dateModified}</p>
            <p>{file.size}</p>
            <p>{file.type}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilesList;
