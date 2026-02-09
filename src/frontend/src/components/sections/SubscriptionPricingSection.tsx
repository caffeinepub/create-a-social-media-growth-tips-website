import { forwardRef, useState } from 'react';
import { ExternalLink, Check, CreditCard, TrendingUp, AlertCircle } from 'lucide-react';
import { SiCashapp } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { usePaymentClickCounts } from '@/hooks/usePaymentClickCounts';
import { subscriptionLinks } from '@/config/subscriptionLinks';

const SubscriptionPricingSection = forwardRef<HTMLElement>((_, ref) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('annual');
  const { getClickCount, recordClick, isError } = usePaymentClickCounts();

  const monthlyClicks = getClickCount('subscription-monthly');
  const annualClicks = getClickCount('subscription-annual');

  const handleSubscribe = async (plan: 'monthly' | 'annual') => {
    const url = subscriptionLinks[plan];
    if (!url) return;

    const buttonId = plan === 'monthly' ? 'subscription-monthly' : 'subscription-annual';
    await recordClick(buttonId);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const plans = [
    {
      id: 'monthly' as const,
      name: 'Monthly',
      price: '$6.00',
      period: '/month',
      description: 'Perfect for trying out Boostly',
      features: [
        'All growth tips and strategies',
        'Platform-specific guidance',
        'Content type recommendations',
        'Tools and resources library',
        'Regular updates',
      ],
      clicks: monthlyClicks,
    },
    {
      id: 'annual' as const,
      name: 'Annual',
      price: '$15.99',
      period: '/year',
      description: 'Best value - save over 75%',
      popular: true,
      features: [
        'All growth tips and strategies',
        'Platform-specific guidance',
        'Content type recommendations',
        'Tools and resources library',
        'Regular updates',
        'Priority support',
      ],
      clicks: annualClicks,
    },
  ];

  const selectedPlanData = plans.find((p) => p.id === selectedPlan);
  const selectedUrl = subscriptionLinks[selectedPlan];
  const isUrlConfigured = !!selectedUrl;

  return (
    <section ref={ref} className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <CreditCard className="w-3 h-3 mr-1" />
            Subscription Pricing
          </Badge>
          <h2 className="mb-4">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground">
            Get unlimited access to all Boostly features and grow your social media presence.
          </p>
          <p className="text-sm text-muted-foreground mt-2 font-medium">
            No tax applied to any plan
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Plan Selection */}
          <div className="mb-8">
            <RadioGroup
              value={selectedPlan}
              onValueChange={(value) => setSelectedPlan(value as 'monthly' | 'annual')}
              className="grid md:grid-cols-2 gap-6"
            >
              {plans.map((plan) => (
                <div key={plan.id} className="relative">
                  <RadioGroupItem
                    value={plan.id}
                    id={plan.id}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={plan.id}
                    className="flex cursor-pointer"
                  >
                    <Card
                      className={`w-full transition-all duration-200 ${
                        selectedPlan === plan.id
                          ? 'border-primary border-2 shadow-lg ring-2 ring-primary/20'
                          : 'border-2 hover:border-primary/50'
                      }`}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            {plan.popular && (
                              <Badge className="mt-2">Most Popular</Badge>
                            )}
                          </div>
                          <Badge variant="secondary" className="ml-2">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {plan.clicks} clicks
                          </Badge>
                        </div>
                        <div className="flex items-baseline gap-1 mt-4">
                          <span className="text-4xl font-bold">{plan.price}</span>
                          <span className="text-muted-foreground">{plan.period}</span>
                        </div>
                        <CardDescription className="mt-2">
                          {plan.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Subscribe Button */}
          <div className="text-center mb-8">
            <Button
              size="lg"
              className={`px-12 py-6 text-lg bg-[#00D632] hover:bg-[#00B829] text-black ${
                isUrlConfigured ? 'payment-cta-attention' : ''
              }`}
              disabled={!isUrlConfigured}
              onClick={() => handleSubscribe(selectedPlan)}
            >
              {isUrlConfigured ? (
                <>
                  <SiCashapp className="w-5 h-5 mr-2" />
                  Subscribe to {selectedPlanData?.name}
                  <ExternalLink className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Subscription Link Not Set Up
                </>
              )}
            </Button>
            {isUrlConfigured && (
              <p className="text-xs text-muted-foreground mt-3">
                Opens Cash App in a new tab to complete payment
              </p>
            )}
          </div>

          {/* Setup Alert */}
          {!isUrlConfigured && (
            <Alert className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Setup Required:</strong> To enable subscriptions, add your Cash App payment URL 
                in <code className="text-xs bg-muted px-1 py-0.5 rounded">frontend/src/config/cashAppLinks.ts</code>.
              </AlertDescription>
            </Alert>
          )}

          {/* Error Alert */}
          {isError && (
            <Alert variant="destructive" className="mb-8">
              <AlertDescription>
                Click tracking is temporarily unavailable, but your subscription links are still working. 
                Visitors can still subscribe.
              </AlertDescription>
            </Alert>
          )}

          {/* Information Card */}
          <Card className="bg-muted/50">
            <CardHeader>
              <CardTitle className="text-lg">Subscription Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>Payment via Cash App:</strong> When you click Subscribe, you'll be taken to Cash App 
                to complete your payment. Boostly does not process, collect, or store payments.
              </p>
              <p>
                <strong>No Hidden Fees:</strong> The prices shown are exactly what you pay. 
                No tax, no additional charges.
              </p>
              <p>
                <strong>Cancel Anytime:</strong> Both plans can be cancelled at any time. 
                You'll retain access until the end of your billing period.
              </p>
              <p>
                <strong>Annual Savings:</strong> The annual plan saves you over 75% compared to 
                paying monthly for a full year ($72.00 vs $15.99).
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

SubscriptionPricingSection.displayName = 'SubscriptionPricingSection';

export default SubscriptionPricingSection;
