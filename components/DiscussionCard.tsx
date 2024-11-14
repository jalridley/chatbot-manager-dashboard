import Image from 'next/image';

interface Content {
  subheader: string;
  text: string[];
}

interface Topic {
  title: string;
  question: string;
  content: Content[];
  imageUrl: string;
  altText: string;
  width: number;
  height: number;
}

interface DiscussionCardProps {
  topic: Topic;
}

const renderTextList = (text: string[] = []) => {
  return text.map((bullet) => <li key={bullet}>{bullet}</li>);
};

const DiscussionCard = ({ topic }: DiscussionCardProps) => {
  return (
    <article className="grid items-center overflow-hidden rounded-lg bg-white shadow-lg md:grid-cols-2">
      <Image
        src={topic.imageUrl}
        alt={topic.altText}
        width={topic.width}
        height={topic.height}
        className="aspect-square h-full w-full object-cover"
      />
      <div className="flex flex-col justify-center space-y-4 p-4 md:p-8">
        <h2 className="text-xl font-semibold">{topic.title}</h2>
        <h3>{topic.question}</h3>

        {topic.content.map((content, index) => (
          <div key={index} className="space-y-2">
            <h4 className="font-medium">{content.subheader}</h4>
            <ul className="list-disc pl-6">{renderTextList(content.text)}</ul>
          </div>
        ))}
      </div>
    </article>
  );
};

export default DiscussionCard;
