import { forwardRef } from 'react';
import { ExternalLink, Wallet, DollarSign, TrendingUp, AlertCircle } from 'lucide-react';
import { SiCashapp } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { usePaymentClickCounts } from '@/hooks/usePaymentClickCounts';
import { cashAppPaymentUrl } from '@/config/cashAppLinks';

const PaymentMonetizationSection = forwardRef<HTMLElement>((_, ref) => {
  const { getClickCount, recordClick, isError } = usePaymentClickCounts();

  const handlePaymentLinkClick = async (buttonId: string, url: string) => {
    await recordClick(buttonId);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const cashAppClicks = getClickCount('cash-app');
  const isCashAppConfigured = cashAppPaymentUrl.trim() !== '';

  return (
    <section ref={ref} className="bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <DollarSign className="w-3 h-3 mr-1" />
            Monetization
          </Badge>
          <h2 className="mb-4">Get Paid with Cash App</h2>
          <p className="text-xl text-muted-foreground">
            Share your Cash App payment link and start receiving payments from your audience. 
            Boostly links visitors to your Cash App—all transactions happen directly on Cash App.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Alert className="mb-8">
            <Wallet className="h-4 w-4" />
            <AlertDescription>
              <strong>How it works:</strong> When visitors click your payment link below, they'll be taken to Cash App 
              to complete their payment. Boostly does not process, collect, or store payments—we simply link out to your Cash App payment page.
            </AlertDescription>
          </Alert>

          {!isCashAppConfigured && (
            <Alert variant="destructive" className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Setup Required</AlertTitle>
              <AlertDescription>
                Your Cash App payment link is not configured yet. To enable payments, update the <code className="text-xs bg-muted px-1 py-0.5 rounded">cashAppPaymentUrl</code> in <code className="text-xs bg-muted px-1 py-0.5 rounded">frontend/src/config/cashAppLinks.ts</code> with your Cash App payment link or $Cashtag URL.
              </AlertDescription>
            </Alert>
          )}

          <div className="mb-12">
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
                <CardTitle>Cash App Payment</CardTitle>
                <CardDescription>
                  Receive payments via Cash App. Visitors will be taken to your Cash App payment page to complete their payment.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  size="lg"
                  className="w-full bg-[#00D632] hover:bg-[#00B829] text-black"
                  onClick={() => handlePaymentLinkClick('cash-app', cashAppPaymentUrl)}
                  disabled={!isCashAppConfigured}
                >
                  <SiCashapp className="w-5 h-5 mr-2" />
                  Pay via Cash App
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  {isCashAppConfigured ? 'Opens Cash App in a new tab' : 'Link not configured'}
                </p>
              </CardContent>
            </Card>
          </div>

          {isError && (
            <Alert variant="destructive" className="mb-8">
              <AlertDescription>
                Click tracking is temporarily unavailable, but your payment link is still working. 
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
                <strong>Setup Required:</strong> You'll need to set up your own Cash App account 
                and configure your payment link in the Boostly app settings (see alert above if not yet configured).
              </p>
              <p>
                <strong>How Payments Work:</strong> These payment links allow people to send you money when they 
                complete a payment on Cash App. If you want to earn money simply from clicks (without requiring a payment), 
                you'll need to set up affiliate programs or advertising networks separately—that's a different business model.
              </p>
              <p>
                <strong>Privacy & Security:</strong> All payment processing happens on Cash App's secure platform. 
                Boostly never handles your payment information or transactions—we only link out to your Cash App payment page.
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
