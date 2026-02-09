// Centralized content for search indexing
export interface PlatformTip {
  id: string;
  name: string;
  tips: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const platformTips: PlatformTip[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    tips: [
      'Post Reels consistently—they get 3x more reach than static posts',
      'Use all 30 hashtags, mixing popular and niche tags',
      'Post Stories daily to stay top-of-mind',
      'Engage in the first hour after posting for algorithm boost',
      'Use carousel posts for higher engagement rates',
      'Optimize your bio with keywords and a clear CTA',
      'Be authentic—share your real personality, not a filtered version. Teens connect with genuine voices',
      'Tell stories from your everyday life: school moments, hobbies, weekend adventures. Relatability beats perfection',
      'Put your own spin on trends instead of copying them exactly. Show your unique perspective',
      'Protect your privacy: avoid sharing your school name, exact location, or daily routines',
      'Use humor and self-awareness—don\'t take yourself too seriously. Laugh at the awkward moments',
      'Share behind-the-scenes content: homework struggles, creative process, or learning something new'
    ]
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    tips: [
      'Hook viewers in the first 3 seconds',
      'Post 1-3 times daily for maximum visibility',
      'Use trending sounds and participate in challenges',
      'Keep videos between 15-60 seconds for best performance',
      'Add captions—80% of users watch without sound',
      'Engage with comments to boost video performance',
      'Show your authentic self—quirks, interests, and real reactions. Teens spot fake energy instantly',
      'Share relatable everyday moments: getting ready for school, study sessions, friend hangouts, family dynamics',
      'Join trends but make them yours—add your personality, inside jokes, or unique twist',
      'Never share identifying details: school uniforms, street signs, house numbers, or your exact location',
      'Use storytelling: "storytime" videos about real experiences resonate more than polished content',
      'Be vulnerable when appropriate—sharing struggles (mental health, school stress) builds genuine connection'
    ]
  },
  {
    id: 'youtube',
    name: 'YouTube',
    tips: [
      'Create compelling thumbnails with high contrast and text',
      'Front-load value in the first 30 seconds',
      'Optimize titles with keywords (50-60 characters)',
      'Use YouTube Shorts to reach new audiences',
      'Post consistently on the same day/time each week',
      'Create playlists to increase watch time'
    ]
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    tips: [
      'Share personal stories and professional insights',
      'Post during business hours (Tue-Thu, 8am-2pm)',
      'Use document carousels for high engagement',
      'Comment thoughtfully on others\' posts daily',
      'Keep posts concise—under 150 words performs best',
      'Use 3-5 relevant hashtags maximum'
    ]
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    tips: [
      'Tweet 3-5 times daily for consistent visibility',
      'Use threads to share in-depth insights',
      'Engage in trending conversations with relevant takes',
      'Retweet and comment on industry leaders\' posts',
      'Use polls and questions to drive engagement',
      'Keep tweets concise and punchy (under 280 characters)'
    ]
  },
  {
    id: 'snapchat',
    name: 'Snapchat',
    tips: [
      'Post to your Story multiple times daily to stay visible',
      'Use Snapchat\'s native creative tools—filters, lenses, stickers—for authentic content',
      'Keep Snaps casual and spontaneous—perfection isn\'t the goal',
      'Engage directly with friends through Snaps and chats to build stronger connections',
      'Use Spotlight for viral potential—post entertaining, high-quality vertical videos',
      'Leverage location tags and trending topics to increase discoverability',
      'Create exclusive content for your close friends list to reward loyal followers',
      'Be consistent with posting times so friends know when to expect your content',
      'Use Snap Map thoughtfully—share your location only with trusted friends',
      'Experiment with different content types: behind-the-scenes, day-in-the-life, quick tips'
    ]
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How long does it take to see results?',
    answer: 'Growth timelines vary by platform and strategy, but most people see noticeable results within 30-90 days of consistent effort. The key is posting regularly, engaging authentically, and tracking what works. Quick wins like optimizing your profile can show immediate improvements in conversion rates.'
  },
  {
    id: 'faq-2',
    question: 'How often should I post on each platform?',
    answer: 'Posting frequency varies by platform: Instagram (3-5 posts + daily Stories), TikTok (1-3 videos daily), YouTube (1-2 videos weekly + Shorts), LinkedIn (3-5 posts weekly), and X/Twitter (3-5 tweets daily). Quality always beats quantity—focus on creating valuable content consistently rather than posting just to post.'
  },
  {
    id: 'faq-3',
    question: 'Should I focus on one platform or multiple?',
    answer: 'Start with one platform where your target audience is most active, master it, then expand. Trying to be everywhere at once often leads to burnout and mediocre results. Once you have a solid system and content workflow on one platform, you can repurpose content across others.'
  },
  {
    id: 'faq-4',
    question: 'Do I need to use paid ads to grow?',
    answer: 'No, organic growth is absolutely possible with the right strategies. Focus on creating valuable content, engaging authentically, and using platform features (Reels, Shorts, Stories) that get algorithmic boost. Paid ads can accelerate growth but aren\'t required, especially when starting out.'
  },
  {
    id: 'faq-5',
    question: 'How do I deal with low engagement?',
    answer: 'Low engagement often signals a mismatch between your content and audience needs. Review your analytics to see what content performs best, ask your audience what they want to see, post at optimal times, and focus on creating content that invites interaction (questions, polls, challenges). Also, engage with others—social media is a two-way street.'
  },
  {
    id: 'faq-6',
    question: 'What\'s the best time to post?',
    answer: 'Optimal posting times vary by platform and audience. Generally: Instagram (11am-1pm, 7-9pm), TikTok (6-10am, 7-11pm), LinkedIn (Tue-Thu, 8am-2pm), YouTube (2-4pm weekdays), X/Twitter (9am-3pm). However, check your analytics to find when YOUR specific audience is most active.'
  },
  {
    id: 'faq-7',
    question: 'How do I accept payments with Cash App?',
    answer: 'Boostly helps you share your Cash App payment link with your audience. When someone clicks your payment button, they\'re taken to Cash App to complete the transaction—Boostly does not process, collect, or store payments. Important: These links let people send you money when they complete a payment on Cash App. If you want to earn money simply from clicks (without requiring a payment), you\'ll need to set up affiliate programs or advertising networks separately, as that\'s a different business model entirely.'
  }
];
