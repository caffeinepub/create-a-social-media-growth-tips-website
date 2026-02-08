import { forwardRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { SiInstagram, SiTiktok, SiYoutube, SiLinkedin, SiX } from 'react-icons/si';

const PlatformTipsSection = forwardRef<HTMLElement>((_, ref) => {
  const platforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: SiInstagram,
      color: 'text-pink-500',
      tips: [
        'Post Reels consistently—they get 3x more reach than static posts',
        'Use all 30 hashtags, mixing popular and niche tags',
        'Post Stories daily to stay top-of-mind',
        'Engage in the first hour after posting for algorithm boost',
        'Use carousel posts for higher engagement rates',
        'Optimize your bio with keywords and a clear CTA'
      ]
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: SiTiktok,
      color: 'text-foreground',
      tips: [
        'Hook viewers in the first 3 seconds',
        'Post 1-3 times daily for maximum visibility',
        'Use trending sounds and participate in challenges',
        'Keep videos between 15-60 seconds for best performance',
        'Add captions—80% of users watch without sound',
        'Engage with comments to boost video performance'
      ]
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: SiYoutube,
      color: 'text-red-500',
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
      icon: SiLinkedin,
      color: 'text-blue-600',
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
      icon: SiX,
      color: 'text-foreground',
      tips: [
        'Tweet 3-5 times daily for consistent visibility',
        'Use threads to share in-depth insights',
        'Engage in trending conversations with relevant takes',
        'Retweet and comment on industry leaders\' posts',
        'Use polls and questions to drive engagement',
        'Keep tweets concise and punchy (under 280 characters)'
      ]
    }
  ];

  return (
    <section ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Platform-Specific</Badge>
          <h2 className="mb-4">Master Each Platform</h2>
          <p className="text-xl text-muted-foreground">
            Every platform has unique algorithms and best practices. Here's what works on each.
          </p>
        </div>

        <Tabs defaultValue="instagram" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8 h-auto">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <TabsTrigger 
                  key={platform.id} 
                  value={platform.id}
                  className="flex items-center space-x-2 py-3"
                >
                  <Icon className={`w-5 h-5 ${platform.color}`} />
                  <span className="hidden sm:inline">{platform.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <TabsContent key={platform.id} value={platform.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${platform.color}`} />
                      </div>
                      <CardTitle className="text-2xl">{platform.name} Growth Tips</CardTitle>
                    </div>
                    <CardDescription>
                      Proven strategies to grow your {platform.name} presence
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {platform.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/50">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                            {idx + 1}
                          </span>
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
});

PlatformTipsSection.displayName = 'PlatformTipsSection';

export default PlatformTipsSection;
