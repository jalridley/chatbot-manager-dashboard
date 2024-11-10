import FilesList from '@/components/FilesList';
import { files } from '@/data/files';

export default function Home() {
  return (
    <div>
      <main className="flex w-full items-center justify-center">
        <section className="w-1/2">
          <FilesList files={files} />
        </section>
      </main>
    </div>
  );
}
