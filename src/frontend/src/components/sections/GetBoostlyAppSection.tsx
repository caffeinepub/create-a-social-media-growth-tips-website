import { forwardRef } from 'react';
import { Smartphone, Download, Chrome, Apple, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { usePwaInstall } from '@/hooks/usePwaInstall';

interface GetBoostlyAppSectionProps {
  onScrollToVideoLessons?: () => void;
}

const GetBoostlyAppSection = forwardRef<HTMLElement, GetBoostlyAppSectionProps>(({ onScrollToVideoLessons }, ref) => {
  const { isInstallable, isInstalled, install } = usePwaInstall();

  const handleInstall = async () => {
    await install();
  };

  return (
    <section id="get-app" ref={ref} className="section-spacing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Smartphone className="w-3 h-3 mr-1" />
            Progressive Web App
          </Badge>
          <h2 className="mb-4">Get the Boostly App</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Install Boostly on your device for quick access to growth tips anytime, anywhere—even offline.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Install Button (when supported) */}
          {isInstallable && !isInstalled && (
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-lg mb-1">Install Boostly Now</h3>
                    <p className="text-sm text-muted-foreground">
                      One click to add Boostly to your home screen
                    </p>
                  </div>
                  <Button size="lg" onClick={handleInstall} className="flex-shrink-0">
                    <Download className="w-5 h-5 mr-2" />
                    Install App
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Already Installed */}
          {isInstalled && (
            <>
              <Card className="border-green-500/20 bg-green-500/5">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/10 mb-3">
                      <Download className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">App Installed!</h3>
                    <p className="text-sm text-muted-foreground">
                      Boostly is ready to use on your device
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Video Lessons Callout */}
              {onScrollToVideoLessons && (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-left">
                        <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
                          <Video className="w-5 h-5 text-primary" />
                          <h3 className="font-semibold text-lg">Start Here</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Watch our Video Lessons to improve your speaking and presentation skills
                        </p>
                      </div>
                      <Button 
                        size="lg" 
                        onClick={onScrollToVideoLessons}
                        className="flex-shrink-0"
                      >
                        <Video className="w-5 h-5 mr-2" />
                        Watch Video Lessons
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}

          {/* Installation Instructions */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* iOS Instructions */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Apple className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">iOS (Safari)</CardTitle>
                </div>
                <CardDescription>Install on iPhone or iPad</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">1</span>
                    <span>Open this page in Safari browser</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">2</span>
                    <span>Tap the Share button (square with arrow)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">3</span>
                    <span>Scroll down and tap "Add to Home Screen"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">4</span>
                    <span>Tap "Add" to confirm</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Android Instructions */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Chrome className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Android (Chrome)</CardTitle>
                </div>
                <CardDescription>Install on Android device</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">1</span>
                    <span>Open this page in Chrome browser</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">2</span>
                    <span>Tap the menu (three dots) in the top right</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">3</span>
                    <span>Tap "Add to Home screen" or "Install app"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">4</span>
                    <span>Tap "Install" to confirm</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            {/* Desktop Instructions */}
            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Chrome className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Desktop (Chrome/Edge)</CardTitle>
                </div>
                <CardDescription>Install on Windows, Mac, or Linux</CardDescription>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">1</span>
                    <span>Look for the install icon in the address bar (computer with arrow)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">2</span>
                    <span>Click the icon and select "Install"</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold">3</span>
                    <span>Boostly will open in its own window and be added to your applications</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>

          {/* Benefits */}
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Why Install?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Quick access from your home screen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Works offline after first visit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Faster loading times</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Native app-like experience</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

GetBoostlyAppSection.displayName = 'GetBoostlyAppSection';

export default GetBoostlyAppSection;
