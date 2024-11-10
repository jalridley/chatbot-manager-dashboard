import { files } from '@/data/files';
import FilesList from '@/components/FilesList';
import FilesGrid from '@/components/FilesGrid';

export default function Home() {
  return (
    <div>
      <main className="flex w-full items-center justify-center">
        <section className="w-1/2">
          <FilesList files={files} />
          <FilesGrid files={files} />
        </section>
      </main>
    </div>
  );
}
