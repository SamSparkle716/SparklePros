import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import ReviewBadge from "@/components/ReviewBadge";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const bulletPoints = [
  "A consistently clean home—without the hassle",
  "Trusted, background-checked team in your space",
  "Flexible scheduling for homes, rentals, and move-outs",
];

const trustSignals = [
  "Insured & Bonded",
  "Background-Checked Staff",
  "Eco-Friendly Products",
  "Satisfaction Guaranteed",
];

export default function ResidentialElevation() {
  const { handleCtaClick } = useServiceSelection();

  return (
    <section 
      className="py-16 lg:py-24 bg-gradient-to-br from-white via-white to-[hsl(195_58%_77%/0.15)]" 
      data-testid="section-residential-elevation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span 
              className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block"
              data-testid="text-residential-kicker"
            >
              Results Driven
            </span>
            
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight"
              data-testid="text-residential-elevation-heading"
            >
              Residential Cleaning With Commercial-Grade Reliability
            </h2>
            
            <p className="text-muted-foreground mb-4" data-testid="text-residential-paragraph-1">
              Your home deserves the same level of care and professionalism that top businesses expect. A consistently maintained living space creates a healthier environment for your family while giving you more time to focus on what matters most.
            </p>
            
            <p className="text-muted-foreground mb-6" data-testid="text-residential-paragraph-2">
              Sparkle Pros brings commercial-grade standards to residential cleaning throughout Buffalo and surrounding Erie County communities. Our insured and bonded, background-checked teams follow detailed checklists and offer eco-friendly cleaning options—so your home stays spotless with minimal disruption to your routine.
            </p>
            
            <ul className="space-y-3 mb-8" data-testid="list-residential-benefits">
              {bulletPoints.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3"
                  data-testid={`residential-benefit-item-${index}`}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </li>
              ))}
            </ul>
            
            <Link href="/contact" onClick={handleCtaClick}>
              <Button 
                size="lg" 
                className="focus:ring-2 focus:ring-primary focus:ring-offset-2"
                data-testid="button-get-residential-quote"
              >
                Get a Residential Quote
              </Button>
            </Link>
            
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground" data-testid="text-residential-trust-line">
              {trustSignals.map((signal, index) => (
                <span key={index} className="flex items-center">
                  {signal}
                  {index < trustSignals.length - 1 && (
                    <span className="mx-2 text-muted-foreground/50">•</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          
          <div className="order-first lg:order-last relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-border/30 min-h-[280px] sm:min-h-[320px] lg:min-h-[480px]">
              <img
                src="/Res.%20Cleaning%20Supplies.avif"
                alt="Professional cleaning supplies for residential service"
                className="w-full h-full object-cover object-center absolute inset-0"
                data-testid="img-residential-equipment"
              />
            </div>
            
            {/* Desktop: Overlay badge positioned at bottom-right */}
            <div className="hidden lg:block absolute bottom-4 right-4 z-10">
              <ReviewBadge />
            </div>
            
            {/* Mobile: Badge displayed below the image */}
            <div className="lg:hidden mt-4">
              <ReviewBadge />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
