import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { useServiceSelection } from "@/hooks/useServiceSelection";

export default function FinalCTA() {
  const { handleCtaClick } = useServiceSelection();

  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground" data-testid="section-final-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" data-testid="text-final-cta-title">
          Ready for a Cleaner, More Reliable Facility?
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto" data-testid="text-final-cta-subtitle">
          Book a walkthrough and get a clear cleaning plan with a dependable schedule.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" onClick={handleCtaClick}>
            <Button
              size="lg"
              variant="secondary"
              className="text-base bg-white text-primary"
              data-testid="button-book-final"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Walkthrough
            </Button>
          </Link>
          <Link href="/contact" onClick={handleCtaClick}>
            <Button
              size="lg"
              variant="outline"
              className="text-base w-full sm:w-auto border-white/30 text-white"
              data-testid="button-call-final"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 716-500-0506
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
