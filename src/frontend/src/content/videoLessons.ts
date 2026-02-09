export interface VideoLesson {
  id: string;
  title: string;
  description: string;
  platform: 'YouTube' | 'TikTok' | 'General';
  tags: string[];
  videoUrl?: string;
}

export const videoLessons: VideoLesson[] = [
  {
    id: 'speaking-confidence',
    title: 'Speaking with Confidence on Camera',
    description: 'Learn how to speak naturally and confidently on camera. Master your tone, pacing, and body language to create engaging content that resonates with your audience.',
    platform: 'General',
    tags: ['speaking', 'confidence', 'presentation', 'camera presence'],
    videoUrl: 'https://youtu.be/AYcqLymo6M4?si=oXI9wB5JR8c1UUur'
  },
  {
    id: 'youtube-getting-started',
    title: 'Getting Started on YouTube',
    description: 'A complete guide to launching your YouTube channel. Learn how to set up your channel, create your first video, optimize for search, and build an audience from scratch.',
    platform: 'YouTube',
    tags: ['YouTube', 'getting started', 'channel setup', 'video creation'],
    videoUrl: 'https://youtu.be/hvrLd5KKm0s?si=OZGyztKLlSUU6OkG'
  },
  {
    id: 'tiktok-getting-started',
    title: 'Getting Started on TikTok',
    description: 'Master TikTok from day one. Discover how to create viral-worthy content, use trending sounds, leverage hashtags, and grow your following on the fastest-growing platform.',
    platform: 'TikTok',
    tags: ['TikTok', 'getting started', 'viral content', 'trends'],
    videoUrl: 'https://youtu.be/ICU-j1pItlA?si=TY7dOVpeQ7DIGCIh'
  },
  {
    id: 'presentation-skills',
    title: 'Presenting Yourself to the World',
    description: 'Build your personal brand and online presence. Learn how to present yourself authentically, create a consistent image across platforms, and make a lasting impression.',
    platform: 'General',
    tags: ['personal brand', 'presentation', 'authenticity', 'image'],
    videoUrl: 'https://youtu.be/VNkaGh7wQt0?si=6TxjwpNIVev4u0wS'
  },
  {
    id: 'content-planning-youtube',
    title: 'Planning Your YouTube Content Strategy',
    description: 'Create a sustainable content strategy for YouTube. Learn how to research topics, plan video series, batch create content, and maintain consistency.',
    platform: 'YouTube',
    tags: ['YouTube', 'content strategy', 'planning', 'consistency'],
    videoUrl: undefined // Placeholder - add URL when available
  },
  {
    id: 'tiktok-trends',
    title: 'Riding TikTok Trends Effectively',
    description: 'Stay ahead of the curve on TikTok. Learn how to identify trending sounds and challenges early, adapt them to your niche, and maximize your reach.',
    platform: 'TikTok',
    tags: ['TikTok', 'trends', 'viral', 'sounds', 'challenges'],
    videoUrl: undefined // Placeholder - add URL when available
  }
];
