import { forwardRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

const FaqSection = forwardRef<HTMLElement>((_, ref) => {
  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Growth timelines vary by platform and strategy, but most people see noticeable results within 30-90 days of consistent effort. The key is posting regularly, engaging authentically, and tracking what works. Quick wins like optimizing your profile can show immediate improvements in conversion rates.'
    },
    {
      question: 'How often should I post on each platform?',
      answer: 'Posting frequency varies by platform: Instagram (3-5 posts + daily Stories), TikTok (1-3 videos daily), YouTube (1-2 videos weekly + Shorts), LinkedIn (3-5 posts weekly), and X/Twitter (3-5 tweets daily). Quality always beats quantity—focus on creating valuable content consistently rather than posting just to post.'
    },
    {
      question: 'Should I focus on one platform or multiple?',
      answer: 'Start with one platform where your target audience is most active, master it, then expand. Trying to be everywhere at once often leads to burnout and mediocre results. Once you have a solid system and content workflow on one platform, you can repurpose content across others.'
    },
    {
      question: 'Do I need to use paid ads to grow?',
      answer: 'No, organic growth is absolutely possible with the right strategies. Focus on creating valuable content, engaging authentically, and using platform features (Reels, Shorts, Stories) that get algorithmic boost. Paid ads can accelerate growth but aren\'t required, especially when starting out.'
    },
    {
      question: 'How do I deal with low engagement?',
      answer: 'Low engagement often signals a mismatch between your content and audience needs. Review your analytics to see what content performs best, ask your audience what they want to see, post at optimal times, and focus on creating content that invites interaction (questions, polls, challenges). Also, engage with others—social media is a two-way street.'
    },
    {
      question: 'What\'s the best time to post?',
      answer: 'Optimal posting times vary by platform and audience. Generally: Instagram (11am-1pm, 7-9pm), TikTok (6-10am, 7-11pm), LinkedIn (Tue-Thu, 8am-2pm), YouTube (2-4pm weekdays), X/Twitter (8-10am, 6-9pm). However, check your own analytics—your audience\'s behavior is what matters most.'
    },
    {
      question: 'How important are hashtags?',
      answer: 'Hashtags remain important for discoverability, especially on Instagram and TikTok. Use a mix of popular (100K+ posts), medium (10K-100K), and niche (under 10K) hashtags. Research what your target audience and competitors use. On LinkedIn and X, use 3-5 relevant hashtags. YouTube relies more on video titles and descriptions than hashtags.'
    },
    {
      question: 'Should I buy followers or engagement?',
      answer: 'Never. Bought followers are fake accounts that don\'t engage, which actually hurts your reach and credibility. Platforms can detect and penalize this behavior. Focus on organic growth—it takes longer but builds a real, engaged community that actually converts into customers, clients, or fans.'
    }
  ];

  return (
    <section ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">FAQ</Badge>
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Common questions about growing your social media presence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem 
                key={idx} 
                value={`item-${idx}`}
                className="border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
});

FaqSection.displayName = 'FaqSection';

export default FaqSection;
