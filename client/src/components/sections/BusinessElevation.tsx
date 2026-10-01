import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import ReviewBadge from "@/components/ReviewBadge";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const bulletPoints = [
  "Enhance Client Confidence & First Impressions",
  "Improve Employee Health & Productivity",
  "Protect Your Investment Through Proper Maintenance",
];

const trustSignals = [
  "Insured & Bonded",
  "Background-Checked Staff",
  "OSHA-Trained",
  "Green Cleaning",
];

export default function BusinessElevation() {
  const { handleCtaClick } = useServiceSelection();

  return (
    <section 
      className="py-16 lg:py-24 bg-gradient-to-br from-white via-white to-[hsl(195_58%_77%/0.15)]" 
      data-testid="section-business-elevation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span 
              className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-4 block"
              data-testid="text-kicker"
            >
              Results Driven
            </span>
            
            <h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight"
              data-testid="text-elevation-heading"
            >
              How Professional Commercial Cleaning Elevates Your Business
            </h2>
            
            <p className="text-muted-foreground mb-4" data-testid="text-paragraph-1">
              In Erie County's competitive business environment, the cleanliness of your facility speaks volumes about your professionalism and attention to detail. A consistently maintained workplace creates a stronger first impression for clients and visitors while supporting employee well-being.
            </p>
            
            <p className="text-muted-foreground mb-6" data-testid="text-paragraph-2">
              Sparkle Pros delivers dependable daily and weekly commercial cleaning throughout Buffalo and surrounding Erie County cities. Our insured and bonded, background-checked, OSHA-trained teams follow detailed checklists and offer green cleaning options—so your building stays client-ready with minimal disruption.
            </p>
            
            <ul className="space-y-3 mb-8" data-testid="list-benefits">
              {bulletPoints.map((point, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3"
                  data-testid={`benefit-item-${index}`}
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
                data-testid="button-raise-standards"
              >
                Raise Your Business Standards
              </Button>
            </Link>
            
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground" data-testid="text-trust-line">
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
                src="/images/janitorial-cart.webp"
                alt="Professional janitorial cleaning cart with supplies"
                className="w-full h-full object-cover object-center absolute inset-0"
                data-testid="img-equipment"
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
