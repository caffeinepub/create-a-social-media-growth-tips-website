import { forwardRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { broadTopicGuidance } from '@/content/broadTopicGuidance';

const BroadTopicGuidanceSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Content Guidance</Badge>
          <h2 className="mb-4">Create Meaningful Content</h2>
          <p className="text-xl text-muted-foreground">
            Whether you're sharing about mental health, teaching new skills, or building learning communities—here's how to create content that truly connects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {broadTopicGuidance.map((item) => (
            <Card key={item.id} id={`broad-guidance-${item.id}`} className="hover:shadow-soft transition-shadow scroll-mt-24">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {item.category === 'mental-health' && 'Mental Health'}
                    {item.category === 'learning' && 'Learning'}
                    {item.category === 'collaboration' && 'Collaboration'}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">{item.title}</CardTitle>
                <CardDescription className="text-base">{item.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {item.disclaimer && (
                  <Alert className="border-amber-500/50 bg-amber-50 dark:bg-amber-950/20">
                    <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-500" />
                    <AlertDescription className="text-xs text-amber-900 dark:text-amber-200">
                      {item.disclaimer}
                    </AlertDescription>
                  </Alert>
                )}
                <ul className="space-y-3">
                  {item.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{tip}</span>
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

BroadTopicGuidanceSection.displayName = 'BroadTopicGuidanceSection';

export default BroadTopicGuidanceSection;
