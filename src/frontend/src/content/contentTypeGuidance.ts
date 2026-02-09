export interface ContentTypeGuidanceItem {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  tips: string[];
  keywords: string[];
  disclaimer?: string;
}

export const contentTypeGuidance: ContentTypeGuidanceItem[] = [
  {
    id: 'relatable-content',
    title: 'Relatable Content',
    description: 'Create content that resonates with everyday experiences and builds genuine connections.',
    category: 'Personal',
    icon: '😊',
    keywords: ['relatable', 'everyday', 'real life', 'authentic', 'genuine', 'connection', 'personal'],
    tips: [
      'Share everyday moments that others can see themselves in—morning routines, small victories, daily struggles',
      'Use humor to highlight universal experiences (forgetting passwords, awkward social moments)',
      'Be specific about your experiences—details make content more relatable than vague statements',
      'Show the "behind the scenes" of your life, not just the highlight reel',
      'Use captions that invite others to share their similar experiences',
      'React to common situations with genuine emotions—people connect with authenticity',
      'Create "POV" content that captures shared perspectives',
      'Don\'t try to be perfect—vulnerability and imperfection are highly relatable'
    ]
  },
  {
    id: 'personal-real-life',
    title: 'Personal / Real-Life Content',
    description: 'Share your authentic life story and experiences to build deeper audience connections.',
    category: 'Personal',
    icon: '📖',
    keywords: ['personal', 'real life', 'story', 'authentic', 'life', 'experience', 'journey', 'vlog'],
    tips: [
      'Document your daily life honestly—the good, the challenging, and the mundane',
      'Share personal milestones and how you got there',
      'Talk about your values, beliefs, and what matters to you',
      'Create "day in the life" content that shows your real routine',
      'Share lessons learned from personal experiences',
      'Be selective about privacy—share what feels comfortable, not everything',
      'Use storytelling techniques: beginning, middle, end, and emotional arc',
      'Invite your audience into your world while maintaining healthy boundaries'
    ]
  },
  {
    id: 'mental-health-emotional',
    title: 'Mental Health & Emotional Content',
    description: 'Create supportive content around mental health and emotional well-being.',
    category: 'Wellness',
    icon: '💚',
    keywords: ['mental health', 'emotional', 'wellness', 'self-care', 'therapy', 'feelings', 'support', 'anxiety', 'depression'],
    disclaimer: 'This is not medical advice. If you or someone you know is struggling with mental health, please reach out to a qualified mental health professional or trusted person for support.',
    tips: [
      'Share your mental health journey with honesty while respecting your boundaries',
      'Provide content warnings for potentially triggering topics',
      'Focus on hope, recovery, and coping strategies alongside challenges',
      'Include mental health resources and helpline information',
      'Normalize conversations about therapy, medication, and seeking help',
      'Create a safe, supportive community through thoughtful moderation',
      'Collaborate with mental health professionals for accurate information',
      'Balance vulnerability with self-care—you don\'t have to share everything',
      'Use your platform to reduce stigma and promote understanding'
    ]
  },
  {
    id: 'educational-content',
    title: 'Educational Content',
    description: 'Teach and share knowledge in engaging, accessible ways.',
    category: 'Learning',
    icon: '📚',
    keywords: ['educational', 'learning', 'teaching', 'tutorial', 'how-to', 'explain', 'knowledge', 'lesson'],
    tips: [
      'Break complex topics into digestible, bite-sized pieces',
      'Use clear visuals, diagrams, or demonstrations to enhance understanding',
      'Start with the basics before moving to advanced concepts',
      'Make learning fun with storytelling, humor, or interesting examples',
      'Encourage questions and create space for discussion',
      'Provide actionable takeaways that viewers can apply immediately',
      'Use multiple formats: videos, infographics, written guides, quizzes',
      'Share your own learning journey—show that you\'re still growing too',
      'Cite sources and encourage critical thinking'
    ]
  },
  {
    id: 'entertainment-content',
    title: 'Entertainment Content',
    description: 'Create fun, engaging content that entertains and delights your audience.',
    category: 'Entertainment',
    icon: '🎭',
    keywords: ['entertainment', 'fun', 'comedy', 'humor', 'sketch', 'parody', 'funny', 'entertaining'],
    tips: [
      'Hook viewers immediately—the first 3 seconds are crucial',
      'Use timing and pacing to build anticipation and deliver punchlines',
      'Create recurring characters, formats, or series that audiences look forward to',
      'Stay current with trends but add your unique twist',
      'Use editing, music, and effects to enhance comedic timing',
      'Test different types of humor to see what resonates with your audience',
      'Collaborate with other creators for fresh perspectives and cross-promotion',
      'Keep content positive and avoid humor that punches down or hurts others'
    ]
  },
  {
    id: 'aesthetic-creative',
    title: 'Aesthetic & Creative Content',
    description: 'Craft visually stunning content that showcases your artistic vision.',
    category: 'Creative',
    icon: '🎨',
    keywords: ['aesthetic', 'creative', 'art', 'visual', 'design', 'photography', 'artistic', 'beautiful'],
    tips: [
      'Develop a consistent visual style—color palette, filters, composition',
      'Pay attention to lighting—natural light often works best',
      'Use the rule of thirds and other composition techniques',
      'Create mood boards to plan your aesthetic direction',
      'Experiment with different angles, perspectives, and framing',
      'Edit thoughtfully—enhance without over-processing',
      'Share your creative process and behind-the-scenes work',
      'Curate your feed or profile to tell a cohesive visual story',
      'Draw inspiration from art, nature, fashion, and other creators'
    ]
  },
  {
    id: 'music-audio',
    title: 'Music & Audio Content',
    description: 'Create compelling audio-driven content that resonates with listeners.',
    category: 'Creative',
    icon: '🎵',
    keywords: ['music', 'audio', 'sound', 'song', 'singing', 'musician', 'podcast', 'voice'],
    tips: [
      'Invest in decent audio quality—clear sound is essential',
      'Use trending sounds and music to boost discoverability',
      'Create original music or covers that showcase your unique style',
      'Share your music-making process—writing, recording, producing',
      'Engage with music challenges and duets on platforms like TikTok',
      'Tell stories through your music or explain the meaning behind songs',
      'Collaborate with other musicians for fresh sounds and new audiences',
      'Use audio strategically in non-music content to set mood and tone',
      'Build playlists or share music recommendations to connect with fans'
    ]
  },
  {
    id: 'fashion-beauty',
    title: 'Fashion & Beauty',
    description: 'Share style inspiration, beauty tips, and personal expression through fashion.',
    category: 'Lifestyle',
    icon: '💄',
    keywords: ['fashion', 'beauty', 'style', 'makeup', 'outfit', 'clothing', 'skincare', 'hair'],
    tips: [
      'Show outfit ideas for different occasions, seasons, and budgets',
      'Create "get ready with me" content that\'s relatable and engaging',
      'Share styling tips: how to mix and match, accessorize, or thrift',
      'Be inclusive—showcase diverse body types, skin tones, and styles',
      'Review products honestly and share what actually works for you',
      'Teach techniques step-by-step (makeup tutorials, hair styling)',
      'Share your personal style evolution and what inspires you',
      'Create lookbooks, hauls, or capsule wardrobe guides',
      'Engage with trends while staying true to your personal aesthetic'
    ]
  },
  {
    id: 'motivational-inspirational',
    title: 'Motivational & Inspirational',
    description: 'Inspire and uplift your audience with positive, empowering content.',
    category: 'Wellness',
    icon: '✨',
    keywords: ['motivational', 'inspirational', 'motivation', 'inspiration', 'positive', 'uplifting', 'empowering'],
    tips: [
      'Share personal stories of overcoming challenges and growth',
      'Use powerful visuals and music to amplify your message',
      'Keep messages authentic—avoid toxic positivity or empty platitudes',
      'Provide actionable advice alongside inspiration',
      'Celebrate small wins and progress, not just big achievements',
      'Create morning routines, affirmations, or daily motivation series',
      'Share quotes, but add your personal perspective or story',
      'Be honest about struggles—real inspiration includes the hard parts',
      'Encourage your audience to take action and believe in themselves'
    ]
  }
];
