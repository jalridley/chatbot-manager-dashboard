'use client';

import { files } from '@/data/files';
import FilesList from '@/components/FilesList';
import FilesGrid from '@/components/FilesGrid';
import { useState } from 'react';
import { useFileSort } from '@/hooks/useFileSort';

export default function Home() {
  const [view, setView] = useState('list');
  const { sortedFiles, sortKey, sortOrder, toggleSort } = useFileSort(files);

  const toggleView = () => {
    setView(view === 'list' ? 'grid' : 'list');
  };

  return (
    <div>
      <main className="flex w-full items-center justify-center">
        <section className="w-1/2">
          <button
            className="rounded-xl border bg-gray-200 p-2"
            onClick={toggleView}
          >
            Toggle View
          </button>
          {view === 'list' ? (
            <FilesList
              files={sortedFiles}
              sortKey={sortKey}
              sortOrder={sortOrder}
              onSort={toggleSort}
            />
          ) : (
            <FilesGrid files={files} />
          )}
        </section>
      </main>
    </div>
  );
}
