import { forwardRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { growthTips, checklists } from '@/content/growthGuidance';

const CoreGrowthTipsSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Core Strategies</Badge>
          <h2 className="mb-4">Essential Growth Tips</h2>
          <p className="text-xl text-muted-foreground">
            Master these fundamental strategies to build a strong foundation for social media success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {growthTips.map((tip) => (
            <Card key={tip.id} id={`growth-tip-${tip.id}`} className="hover:shadow-soft transition-shadow scroll-mt-24">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">
                      {tip.icon === 'profile' && '👤'}
                      {tip.icon === 'calendar' && '📅'}
                      {tip.icon === 'engagement' && '💬'}
                      {tip.icon === 'hashtag' && '#️⃣'}
                      {tip.icon === 'analytics' && '📊'}
                      {tip.icon === 'collaboration' && '🤝'}
                    </span>
                  </div>
                </div>
                <CardTitle className="text-2xl">{tip.title}</CardTitle>
                <CardDescription className="text-base">{tip.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tip.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16" />

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">Action Plans</Badge>
            <h3 className="mb-4">Actionable Checklists</h3>
            <p className="text-lg text-muted-foreground">
              Use these checklists to stay organized and consistent with your growth efforts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {checklists.map((checklist, idx) => (
              <Card key={idx} id={`checklist-${idx}`} className="bg-card border-2 scroll-mt-24">
                <CardHeader>
                  <CardTitle className="text-xl">{checklist.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {checklist.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 rounded border-2 border-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

CoreGrowthTipsSection.displayName = 'CoreGrowthTipsSection';

export default CoreGrowthTipsSection;
