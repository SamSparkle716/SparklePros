import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer daily and weekly cleaning?",
    answer:
      "Yes, we provide both daily and weekly commercial cleaning schedules. We work with you to determine the frequency that best fits your facility's needs and traffic patterns.",
  },
  {
    question: "Do you clean after business hours?",
    answer:
      "Absolutely. We offer after-hours cleaning to minimize disruption to your operations. Our teams can work evenings, nights, or early mornings based on your schedule.",
  },
  {
    question: "Are you insured and bonded?",
    answer:
      "Yes, Sparkle Pros is fully insured and bonded. This protects both your facility and our team, giving you peace of mind with every service.",
  },
  {
    question: "Are your staff background-checked and trained?",
    answer:
      "All our team members undergo thorough background checks before joining. They also receive comprehensive training including OSHA safety protocols and our quality standards.",
  },
  {
    question: "Do you offer green cleaning?",
    answer:
      "Yes, we offer green cleaning options using eco-friendly products and methods. Our responsible cleaning approach creates healthier spaces for your employees and visitors.",
  },
  {
    question: "Do you provide carpet cleaning and power washing?",
    answer:
      "Yes, in addition to our regular commercial cleaning services, we offer commercial carpet cleaning and power washing. These specialty services can be scheduled as one-time or recurring needs.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 lg:py-24 bg-background" data-testid="section-faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full" data-testid="accordion-faq">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-item-${index}`}>
              <AccordionTrigger className="text-left text-foreground" data-testid={`accordion-trigger-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground" data-testid={`accordion-content-${index}`}>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
