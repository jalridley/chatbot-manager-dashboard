import DiscussionCard from '@/components/DiscussionCard';

const topics = [
  {
    title: "AI's Influence on the User Journey",
    question: 'How does AI reshape the user journey in AI-driven applications?',
    content: ['sldfjsldfjsldfj', 'hjdflsjdflsjl', 'sdfjsldfjsldfj'],
    imageUrl: '/images/robot.jpg',
    altText: 'Robot touching large screen',
    width: 2121,
    height: 1414,
  },
  {
    title: 'Emerging Design and Interaction Patterns',
    question:
      'Which new design and usage patterns are emerging as a result of Generative AI?',
    content: ['sldfjsldfjsldfj', 'hjdflsjdflsjl', 'sdfjsldfjsldfj'],
    imageUrl: '/images/fantasy-head.jpeg',
    altText: 'Woman with VR goggles on with a fantasy head',
    width: 2000,
    height: 1333,
  },
  {
    title: 'Opportunities and Challenges',
    question:
      'What unique opportunities does AI present for improving UX/UI and frontend development? What are the key risks or challenges in designing AI-integrated interfaces?',
    content: ['sldfjsldfjsldfj', 'hjdflsjdflsjl', 'sdfjsldfjsldfj'],
    imageUrl: '/images/mobile-brain.png',
    altText: 'Mobile phone with brain illustration',
    width: 945,
    height: 750,
  },
  {
    title: 'Practical Implications and Future Directions',
    question:
      'How do we measure the success of AI-driven FE/UX features? What metrics are most useful?',
    content: ['sldfjsldfjsldfj', 'hjdflsjdflsjl', 'sdfjsldfjsldfj'],
    imageUrl: '/images/future.webp',
    altText: 'Woman at computer screens with futuristic robot head',
    width: 1024,
    height: 683,
  },
];

export default function DiscussionPage() {
  return (
    <div className="space-y-12">
      {topics.map((topic) => (
        <DiscussionCard key={topic.title} topic={topic} />
      ))}
    </div>
  );
}
