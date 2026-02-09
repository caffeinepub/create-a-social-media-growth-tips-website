import { forwardRef } from 'react';
import { ExternalLink, Wallet, DollarSign, TrendingUp } from 'lucide-react';
import { SiApplepay, SiCashapp } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { usePaymentClickCounts } from '@/hooks/usePaymentClickCounts';

const PaymentMonetizationSection = forwardRef<HTMLElement>((_, ref) => {
  const { getClickCount, recordClick, isError } = usePaymentClickCounts();

  const handlePaymentLinkClick = async (buttonId: string, url: string) => {
    await recordClick(buttonId);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const applePayClicks = getClickCount('apple-pay');
  const cashAppClicks = getClickCount('cash-app');

  return (
    <section ref={ref} className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <DollarSign className="w-3 h-3 mr-1" />
            Monetization
          </Badge>
          <h2 className="mb-4">Get Paid with Apple Pay & Cash App</h2>
          <p className="text-xl text-muted-foreground">
            Share your payment links and start receiving payments from your audience. 
            Boostly helps you share your payment information—all transactions happen directly on Apple Pay or Cash App.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Alert className="mb-8">
            <Wallet className="h-4 w-4" />
            <AlertDescription>
              <strong>How it works:</strong> When visitors click your payment links below, they'll be taken to Apple Pay or Cash App 
              to complete their payment. Boostly does not process payments directly—we simply help you share your payment links with your audience.
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Apple Pay Card */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <SiApplepay className="w-12 h-12" />
                  <Badge variant="secondary">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {applePayClicks} clicks
                  </Badge>
                </div>
                <CardTitle>Apple Pay / Apple Wallet</CardTitle>
                <CardDescription>
                  Accept payments through Apple Pay. Perfect for iPhone users who want a quick, secure way to send you money.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => handlePaymentLinkClick('apple-pay', 'https://www.apple.com/apple-pay/')}
                >
                  <SiApplepay className="w-5 h-5 mr-2" />
                  Send via Apple Pay
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Opens Apple Pay in a new tab
                </p>
              </CardContent>
            </Card>

            {/* Cash App Card */}
            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <SiCashapp className="w-12 h-12 text-[#00D632]" />
                  <Badge variant="secondary">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {cashAppClicks} clicks
                  </Badge>
                </div>
                <CardTitle>Cash App</CardTitle>
                <CardDescription>
                  Receive payments via Cash App. Great for quick peer-to-peer payments with your $Cashtag.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  className="w-full bg-[#00D632] hover:bg-[#00B829] text-black"
                  onClick={() => handlePaymentLinkClick('cash-app', 'https://cash.app/')}
                >
                  <SiCashapp className="w-5 h-5 mr-2" />
                  Send via Cash App
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Opens Cash App in a new tab
                </p>
              </CardContent>
            </Card>
          </div>

          {isError && (
            <Alert variant="destructive" className="mb-8">
              <AlertDescription>
                Click tracking is temporarily unavailable, but your payment links are still working. 
                Visitors can still send you payments.
              </AlertDescription>
            </Alert>
          )}

          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Important Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Setup Required:</strong> You'll need to set up your own Apple Pay or Cash App account 
                and customize these links with your personal payment information.
              </p>
              <p>
                <strong>Getting Paid Per Click:</strong> These payment links allow people to send you money when they 
                complete a payment. If you want to earn money simply from clicks (without requiring a payment), 
                you'll need to set up affiliate programs or advertising networks separately—that's a different business model.
              </p>
              <p>
                <strong>Privacy & Security:</strong> All payment processing happens on Apple Pay or Cash App's secure platforms. 
                Boostly never handles your payment information or transactions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

PaymentMonetizationSection.displayName = 'PaymentMonetizationSection';

export default PaymentMonetizationSection;
