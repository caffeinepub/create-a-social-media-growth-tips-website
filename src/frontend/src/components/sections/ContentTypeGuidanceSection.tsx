import { forwardRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { contentTypeGuidance } from '@/content/contentTypeGuidance';

const ContentTypeGuidanceSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Content Types</Badge>
          <h2 className="mb-4">Create Content That Resonates</h2>
          <p className="text-xl text-muted-foreground">
            Master different content types to connect with your audience across TikTok, Instagram, YouTube, and Snapchat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {contentTypeGuidance.map((item) => (
            <Card 
              key={item.id} 
              id={`content-type-guidance-${item.id}`}
              className="scroll-mt-24"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <div className="text-4xl">{item.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {item.disclaimer && (
                  <Alert className="mb-4 border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
                    <AlertDescription className="text-sm text-amber-800 dark:text-amber-200">
                      {item.disclaimer}
                    </AlertDescription>
                  </Alert>
                )}
                <ul className="space-y-2">
                  {item.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-sm">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-muted-foreground">{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
});

ContentTypeGuidanceSection.displayName = 'ContentTypeGuidanceSection';

export default ContentTypeGuidanceSection;
