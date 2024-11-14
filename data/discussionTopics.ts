import { Topic } from '@/types/topic';

export const topics: Topic[] = [
  {
    title: "AI's Influence on the User Journey",
    question: 'How does AI reshape the user journey in AI-driven applications?',
    content: [
      {
        subheader: 'The Good:',
        text: [
          'Personalized: Tailored interactions based on user data.',
          'Human Intuition: interfaces like voice and gesture control.',
          'Predictive: Anticipating user needs for smoother experiences.',
        ],
      },
      {
        subheader: 'The Ugly:',
        text: [
          'Overreliance: Potential for diminished human connection.',
          'Privacy: The feeling of being watched and surveilled from data collection.',
          'The unknown: Long-term effects of AI on society and individuals.',
        ],
      },
    ],
    imageUrl: '/images/robot.jpg',
    altText: 'Robot touching large screen',
    width: 2121,
    height: 1414,
  },
  {
    title: 'Emerging Design and Interaction Patterns',
    question:
      'Which new design and usage patterns are emerging as a result of Generative AI?',
    content: [
      {
        subheader: 'The Good:',
        text: [
          'Chat Interfaces: More natural and engaging interactions.',
          'Design: AI-assisted creativity for quick designs.',
          'Adaptive: Dynamically adjusting to user needs.',
        ],
      },
      {
        subheader: 'The Ugly:',
        text: [
          'Learning Curve: Difficult for non-technical users.',
          'Generic Outcomes: Designs become less original and creative.',
          'Copyright: Models trained on artists, designer, writer’s works.',
        ],
      },
    ],
    imageUrl: '/images/fantasy-head.jpeg',
    altText: 'Woman with VR goggles on with a fantasy head',
    width: 2000,
    height: 1333,
  },
  {
    title: 'Opportunities and Challenges',
    question:
      'What unique opportunities does AI present for improving UX/UI and frontend development? What are the key risks or challenges in designing AI-integrated interfaces?',
    content: [
      {
        subheader: 'The Good:',
        text: [
          'Enhanced User Experience: The development of more human-like interactions.',
          'Increased Efficiency: Automation of routine tasks.',
          'Innovative Solutions: AI-driven breakthroughs in design and development excite and inspire.',
        ],
      },
      {
        subheader: 'The Ugly:',
        text: [
          'Ethical Concerns: Bias, privacy, and transparency issues passed from developer to AI to user.',
          'Accessibility: Not leaving behind challenged, elderly, impoverished or non-technical users',
          'When to draw the line: blurred lines of when AI features are a real user need',
        ],
      },
    ],
    imageUrl: '/images/mobile-brain.png',
    altText: 'Mobile phone with brain illustration',
    width: 945,
    height: 750,
  },
  {
    title: 'Practical Implications and Future Directions',
    question:
      'How do we measure the success of AI-driven FE/UX features? What metrics are most useful?',
    content: [
      {
        subheader: 'The Good:',
        text: [
          'Success Metrics: Surveyed user feedback and KPIs like engagement rates, task completion times, and user retention',
          'Model Accuracy: Regularity assess the accuracy of AI models in making predictions or recommendations.',
          'Ethical Guidelines: Ensuring and monitoring responsible AI development and use.',
        ],
      },
      {
        subheader: 'The Ugly:',
        text: [
          'Bias in user data: AI algorithms are difficult to monitor and ping pong existing biases between creator, maintainer and user.',
          'Privacy: Ethics of collecting user data for metrics and training is a new hot topic.',
        ],
      },
    ],
    imageUrl: '/images/future.webp',
    altText: 'Woman at computer screens with futuristic robot head',
    width: 1024,
    height: 683,
  },
];
