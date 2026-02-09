export interface BroadTopicGuidanceItem {
  id: string;
  title: string;
  description: string;
  category: 'mental-health' | 'learning' | 'collaboration';
  icon: string;
  tips: string[];
  keywords: string[];
  disclaimer?: string;
}

export const broadTopicGuidance: BroadTopicGuidanceItem[] = [
  {
    id: 'depression-content',
    title: 'Creating Content About Depression',
    description: 'Strategies for sharing authentic mental health content that helps and connects.',
    category: 'mental-health',
    icon: '🌱',
    keywords: ['depression', 'mental health', 'wellness', 'support', 'authentic', 'vulnerable'],
    disclaimer: 'This is not medical advice. If you or someone you know is struggling with depression, please reach out to a qualified mental health professional or trusted person for support.',
    tips: [
      'Share your personal journey authentically while respecting your own boundaries',
      'Focus on hope and recovery alongside the challenges',
      'Use content warnings when discussing difficult topics',
      'Provide resources and helpline information in your content',
      'Create a supportive community by moderating comments thoughtfully',
      'Balance vulnerability with self-care—you don\'t have to share everything',
      'Collaborate with mental health professionals to ensure accuracy',
      'Use storytelling to reduce stigma and normalize conversations'
    ]
  },
  {
    id: 'anxiety-content',
    title: 'Creating Content About Anxiety',
    description: 'Build a community around anxiety awareness with empathy and practical strategies.',
    category: 'mental-health',
    icon: '🧘',
    keywords: ['anxiety', 'stress', 'mental health', 'coping', 'mindfulness', 'calm'],
    disclaimer: 'This is not medical advice. If you or someone you know is struggling with anxiety, please reach out to a qualified mental health professional or trusted person for support.',
    tips: [
      'Share practical coping techniques that have worked for you',
      'Create calming, accessible content formats (breathing exercises, grounding techniques)',
      'Be honest about setbacks—recovery isn\'t linear',
      'Use gentle, non-triggering language and visuals',
      'Offer multiple perspectives and acknowledge that everyone\'s experience is different',
      'Build a safe space by setting clear community guidelines',
      'Partner with therapists or counselors for expert insights',
      'Include self-care reminders and encourage professional help when needed'
    ]
  },
  {
    id: 'baking-learning',
    title: 'Creating Baking & Cooking Content',
    description: 'Share your culinary journey and teach others through engaging food content.',
    category: 'learning',
    icon: '🍰',
    keywords: ['baking', 'cooking', 'recipes', 'food', 'tutorial', 'learn', 'teach', 'kitchen'],
    tips: [
      'Show the process, not just the final result—people love seeing the journey',
      'Break down complex recipes into simple, achievable steps',
      'Share your mistakes and what you learned from them',
      'Use clear, well-lit photos or videos of each step',
      'Provide ingredient substitutions for accessibility',
      'Engage with your audience by asking for their variations and tips',
      'Create themed series (e.g., "Beginner Bread Week" or "Quick Weeknight Dinners")',
      'Share the stories behind recipes—family traditions, cultural significance'
    ]
  },
  {
    id: 'collaborative-learning',
    title: 'Learning & Creating With Others',
    description: 'Strategies for building collaborative content and learning communities.',
    category: 'collaboration',
    icon: '🤝',
    keywords: ['collaboration', 'collab', 'learn together', 'community', 'group', 'team', 'learn with other people', 'learning with others', 'together'],
    tips: [
      'Find collaborators with complementary skills and shared values',
      'Create "learn with me" series where you document your learning journey',
      'Host live sessions where you learn something new together with your audience',
      'Start challenges that encourage community participation (e.g., "30-day skill challenge")',
      'Feature community members and their progress in your content',
      'Create accountability groups or buddy systems within your community',
      'Use collaborative tools and platforms to co-create content',
      'Celebrate milestones and progress together—build a supportive culture',
      'Share resources, courses, and learning materials with your community',
      'Document group projects from start to finish, showing teamwork in action'
    ]
  }
];
