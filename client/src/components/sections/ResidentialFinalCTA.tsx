import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { useServiceSelection } from "@/hooks/useServiceSelection";

export default function ResidentialFinalCTA() {
  const { handleCtaClick } = useServiceSelection();

  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground" data-testid="section-residential-final-cta">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" data-testid="text-residential-final-cta-title">
          Ready for a Cleaner, More Relaxed Home?
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto" data-testid="text-residential-final-cta-subtitle">
          Schedule a quote and get a cleaning plan that fits your home and routine.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" onClick={handleCtaClick}>
            <Button
              size="lg"
              variant="secondary"
              className="text-base bg-white text-primary"
              data-testid="button-quote-residential-final"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get a Quote
            </Button>
          </Link>
          <Link href="/contact" onClick={handleCtaClick}>
            <Button
              size="lg"
              variant="outline"
              className="text-base w-full sm:w-auto border-white/30 text-white"
              data-testid="button-call-residential-final"
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
