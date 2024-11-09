import { mockData } from '@/data/mockData';

export default function Home() {
  return (
    <div>
      <main className="flex w-full items-center justify-center">
        <div className="w-1/2">
          {mockData.map((data) => (
            <div className="flex justify-between border" key={data.id}>
              <div>
                <p>{data.fileName}</p>
              </div>
              <div className="flex space-x-4">
                <p>{data.dateModified}</p>
                <p>{data.size}</p>
                <p>{data.type}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
