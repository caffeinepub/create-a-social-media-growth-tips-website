export interface GrowthTip {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: string;
}

export interface Checklist {
  title: string;
  items: string[];
}

export const growthTips: GrowthTip[] = [
  {
    id: 'profile',
    title: 'Profile Optimization',
    description: 'Your profile is your first impression. Make it count.',
    icon: 'profile',
    points: [
      'Use a clear, high-quality profile picture that represents your brand',
      'Write a compelling bio that clearly states what you do and who you help',
      'Include relevant keywords for discoverability',
      'Add a call-to-action and link to your website or landing page',
      'Ensure consistency across all social platforms'
    ]
  },
  {
    id: 'content',
    title: 'Content Strategy',
    description: 'Create content that resonates with your target audience.',
    icon: 'calendar',
    points: [
      'Define your niche and stick to it for consistent messaging',
      'Mix educational, entertaining, and promotional content (80/20 rule)',
      'Use storytelling to create emotional connections',
      'Repurpose content across multiple platforms',
      'Focus on quality over quantity—one great post beats ten mediocre ones'
    ]
  },
  {
    id: 'consistency',
    title: 'Consistency & Scheduling',
    description: 'Show up regularly to stay top-of-mind with your audience.',
    icon: 'calendar',
    points: [
      'Post at optimal times when your audience is most active',
      'Maintain a consistent posting schedule (3-5 times per week minimum)',
      'Use scheduling tools to plan content in advance',
      'Batch create content to save time and maintain consistency',
      'Track what times and days perform best for your audience'
    ]
  },
  {
    id: 'engagement',
    title: 'Engagement & Community',
    description: 'Build relationships, not just followers.',
    icon: 'engagement',
    points: [
      'Respond to comments and messages within 24 hours',
      'Ask questions to encourage conversation',
      'Engage with other accounts in your niche daily',
      'Create content that invites participation (polls, questions, challenges)',
      'Show appreciation for your community with shoutouts and features'
    ]
  },
  {
    id: 'hashtags',
    title: 'Hashtags & SEO',
    description: 'Increase discoverability with strategic keyword usage.',
    icon: 'hashtag',
    points: [
      'Research and use a mix of popular and niche-specific hashtags',
      'Create a branded hashtag for your community',
      'Use 5-10 relevant hashtags per post (varies by platform)',
      'Optimize captions with keywords for search',
      'Monitor trending topics and join relevant conversations'
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Iteration',
    description: 'Data-driven decisions lead to better results.',
    icon: 'analytics',
    points: [
      'Review analytics weekly to identify top-performing content',
      'Track key metrics: engagement rate, reach, follower growth',
      'A/B test different content formats and posting times',
      'Double down on what works, eliminate what doesn\'t',
      'Set specific, measurable goals and track progress monthly'
    ]
  },
  {
    id: 'collaboration',
    title: 'Cross-Promotion & Collaboration',
    description: 'Leverage partnerships to reach new audiences.',
    icon: 'collaboration',
    points: [
      'Collaborate with creators in complementary niches',
      'Guest post or appear on podcasts in your industry',
      'Cross-promote content across all your social channels',
      'Join engagement pods or communities for mutual support',
      'Tag and mention relevant accounts to increase visibility'
    ]
  }
];

export const checklists: Checklist[] = [
  {
    title: 'Profile Optimization Checklist',
    items: [
      'Professional profile picture uploaded',
      'Compelling bio with clear value proposition',
      'Relevant keywords included in bio',
      'Link to website or landing page added',
      'Contact information visible',
      'Consistent branding across platforms',
      'Highlights/featured content organized'
    ]
  },
  {
    title: 'Weekly Growth Routine',
    items: [
      'Monday: Plan content for the week',
      'Tuesday: Create and schedule 3-5 posts',
      'Wednesday: Engage with 20+ accounts in your niche',
      'Thursday: Respond to all comments and messages',
      'Friday: Review analytics and adjust strategy',
      'Saturday: Share user-generated content or behind-the-scenes',
      'Sunday: Rest or engage casually with community'
    ]
  }
];
