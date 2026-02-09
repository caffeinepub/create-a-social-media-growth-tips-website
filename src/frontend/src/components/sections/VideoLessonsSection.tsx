import { forwardRef } from 'react';
import { Video, Youtube, Play, ExternalLink } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { videoLessons } from '@/content/videoLessons';

const VideoLessonsSection = forwardRef<HTMLElement>((_, ref) => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'YouTube':
        return <Youtube className="w-5 h-5" />;
      case 'TikTok':
        return <SiTiktok className="w-5 h-5" />;
      default:
        return <Video className="w-5 h-5" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'YouTube':
        return 'bg-red-500/10 text-red-600 border-red-500/20';
      case 'TikTok':
        return 'bg-pink-500/10 text-pink-600 border-pink-500/20';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  const handleWatchVideo = (videoUrl: string) => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="video-lessons" ref={ref} className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Video className="w-3 h-3 mr-1" />
            Video Lessons
          </Badge>
          <h2 className="mb-4">Learn to Speak & Present Like a Pro</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Master the art of speaking on camera and presenting yourself to the world. Watch our curated video lessons to improve your content creation skills on YouTube, TikTok, and beyond.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {videoLessons.map((lesson) => (
            <Card 
              key={lesson.id} 
              id={`video-lesson-${lesson.id}`}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${getPlatformColor(lesson.platform)}`}>
                    {getPlatformIcon(lesson.platform)}
                  </div>
                  <Badge variant="secondary" className="flex-shrink-0">
                    {lesson.platform}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{lesson.title}</CardTitle>
                <CardDescription>{lesson.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {lesson.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {lesson.videoUrl ? (
                  <Button 
                    onClick={() => handleWatchVideo(lesson.videoUrl!)}
                    className="w-full"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Watch Video
                    <ExternalLink className="w-3 h-3 ml-2" />
                  </Button>
                ) : (
                  <Alert>
                    <Video className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      Video link coming soon
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                New video lessons are added regularly. Check back often to continue improving your content creation skills!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

VideoLessonsSection.displayName = 'VideoLessonsSection';

export default VideoLessonsSection;
