import Image from 'next/image';

interface Topic {
  title: string;
  question: string;
  content: string[];
  imageUrl: string;
  altText: string;
  width: number;
  height: number;
}

const DiscussionCard = ({ topic }: { topic: Topic }) => {
  return (
    <article className="grid items-center justify-items-center gap-4 overflow-hidden rounded-lg bg-white shadow-lg md:grid-cols-2 md:gap-12">
      <Image
        src={topic.imageUrl}
        alt={topic.altText}
        width={topic.width}
        height={topic.height}
        className="aspect-square h-full w-full object-cover"
      />
      <div className="flex flex-col justify-center space-y-4 p-6">
        <h2 className="text-xl font-semibold">{topic.title}</h2>
        <h3 className="text-gray-600">{topic.question}</h3>
        <ul className="list-disc pl-6">
          {topic.content.map((bullet) => (
            <li key={bullet} className="text-gray-600">
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default DiscussionCard;
