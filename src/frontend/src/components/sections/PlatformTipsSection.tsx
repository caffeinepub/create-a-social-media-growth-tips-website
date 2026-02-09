import { forwardRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { SiInstagram, SiTiktok, SiYoutube, SiLinkedin, SiX, SiSnapchat } from 'react-icons/si';
import { platformTips } from '@/content/siteContent';

const PlatformTipsSection = forwardRef<HTMLElement>((_, ref) => {
  const platformIcons = {
    instagram: { icon: SiInstagram, color: 'text-pink-500' },
    tiktok: { icon: SiTiktok, color: 'text-foreground' },
    youtube: { icon: SiYoutube, color: 'text-red-500' },
    linkedin: { icon: SiLinkedin, color: 'text-blue-600' },
    x: { icon: SiX, color: 'text-foreground' },
    snapchat: { icon: SiSnapchat, color: 'text-yellow-400' }
  };

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
          <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full mb-8 h-auto">
            {platformTips.map((platform) => {
              const iconData = platformIcons[platform.id as keyof typeof platformIcons];
              const Icon = iconData.icon;
              return (
                <TabsTrigger 
                  key={platform.id} 
                  value={platform.id}
                  className="flex items-center space-x-2 py-3"
                >
                  <Icon className={`w-5 h-5 ${iconData.color}`} />
                  <span className="hidden sm:inline">{platform.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {platformTips.map((platform) => {
            const iconData = platformIcons[platform.id as keyof typeof platformIcons];
            const Icon = iconData.icon;
            return (
              <TabsContent key={platform.id} value={platform.id}>
                <Card id={`platform-${platform.id}`} className="scroll-mt-24">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${iconData.color}`} />
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
