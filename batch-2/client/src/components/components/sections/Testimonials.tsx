import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

{/* Replace these testimonials with real ones when available */}
const testimonials = [
  {
    quote: "Sparkle Pros is consistent and responsive. Our office looks great every morning.",
    author: "Operations Manager",
    company: "Buffalo",
  },
  {
    quote: "Professional team, easy communication, and dependable schedules.",
    author: "Facility Coordinator",
    company: "",
  },
  {
    quote: "Their carpet cleaning made our lobby look brand new.",
    author: "Property Manager",
    company: "",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 lg:py-24 bg-background" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-testimonials-title">
            What Businesses Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`card-testimonial-${index}`}>
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <blockquote className="text-foreground mb-4 leading-relaxed" data-testid={`text-testimonial-quote-${index}`}>
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-sm">
                  <p className="font-semibold text-foreground" data-testid={`text-testimonial-author-${index}`}>— {testimonial.author}</p>
                  {testimonial.company && (
                    <p className="text-muted-foreground" data-testid={`text-testimonial-company-${index}`}>{testimonial.company}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
