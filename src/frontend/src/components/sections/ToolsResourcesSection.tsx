import { forwardRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Palette, BarChart3, CheckSquare } from 'lucide-react';

const ToolsResourcesSection = forwardRef<HTMLElement>((_, ref) => {
  const categories = [
    {
      title: 'Content Planning',
      icon: Calendar,
      color: 'text-chart-1',
      resources: [
        { name: 'Notion', description: 'Content calendar and planning', url: 'https://notion.so' },
        { name: 'Trello', description: 'Visual content organization', url: 'https://trello.com' },
        { name: 'Airtable', description: 'Database for content tracking', url: 'https://airtable.com' }
      ]
    },
    {
      title: 'Design Tools',
      icon: Palette,
      color: 'text-chart-2',
      resources: [
        { name: 'Canva', description: 'Easy graphic design for social', url: 'https://canva.com' },
        { name: 'Figma', description: 'Professional design tool', url: 'https://figma.com' },
        { name: 'Adobe Express', description: 'Quick social media graphics', url: 'https://adobe.com/express' }
      ]
    },
    {
      title: 'Analytics & Learning',
      icon: BarChart3,
      color: 'text-chart-3',
      resources: [
        { name: 'Google Analytics', description: 'Track website traffic from social', url: 'https://analytics.google.com' },
        { name: 'HubSpot Academy', description: 'Free social media courses', url: 'https://academy.hubspot.com' },
        { name: 'Social Media Examiner', description: 'Industry news and tips', url: 'https://socialmediaexaminer.com' }
      ]
    },
    {
      title: 'Posting Checklists',
      icon: CheckSquare,
      color: 'text-chart-4',
      resources: [
        { name: 'Pre-Post Checklist', description: 'Verify content quality before posting', url: '#' },
        { name: 'Engagement Checklist', description: 'Daily engagement routine', url: '#' },
        { name: 'Monthly Review', description: 'Track progress and adjust strategy', url: '#' }
      ]
    }
  ];

  return (
    <section ref={ref} className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Resources</Badge>
          <h2 className="mb-4">Tools & Resources</h2>
          <p className="text-xl text-muted-foreground">
            Curated tools and resources to streamline your social media workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card key={idx} className="hover:shadow-soft transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription>
                    Essential tools for {category.title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.resources.map((resource, resourceIdx) => (
                      <a
                        key={resourceIdx}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-sm mb-1 group-hover:text-primary transition-colors">
                            {resource.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {resource.description}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
});

ToolsResourcesSection.displayName = 'ToolsResourcesSection';

export default ToolsResourcesSection;
