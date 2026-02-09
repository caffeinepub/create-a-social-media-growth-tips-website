import { forwardRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { faqs } from '@/content/siteContent';

const FaqSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} className="bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">Questions</Badge>
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about growing your social media presence.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                id={faq.id}
                className="bg-card border rounded-lg px-6 scroll-mt-24"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
