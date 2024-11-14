import DiscussionCard from '@/components/DiscussionCard';
import { topics } from '@/data/discussionTopics';

export default function DiscussionPage() {
  return (
    <div className="space-y-12">
      {topics.map((topic) => (
        <DiscussionCard key={topic.title} topic={topic} />
      ))}
    </div>
  );
}
