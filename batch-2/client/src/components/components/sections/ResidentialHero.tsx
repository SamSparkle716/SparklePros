import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { useServiceSelection } from "@/hooks/useServiceSelection";

export default function ResidentialHero() {
  const { handleCtaClick } = useServiceSelection();

  return (
    <section 
      className="relative min-h-[80vh] md:min-h-[80vh] flex items-center"
      data-testid="section-residential-hero"
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/clean%20Bedroom.avif')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" data-testid="text-residential-hero-title">
            Residential Cleaning With Commercial-Grade Reliability
          </h1>
          <p className="text-lg text-white/90 mb-8 leading-relaxed" data-testid="text-residential-hero-subtitle">
            Consistent schedules, trained teams, and detail-driven cleaning — designed to fit your home and your routine.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Link href="/contact" onClick={handleCtaClick}>
              <Button size="lg" className="text-base w-full sm:w-auto" data-testid="button-quote-residential-hero">
                <Calendar className="w-5 h-5 mr-2" />
                Get a Quote
              </Button>
            </Link>
            <Link href="/contact" onClick={handleCtaClick}>
              <Button variant="outline" size="lg" className="text-base w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white" data-testid="button-call-residential-hero">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 716-500-0506
              </Button>
            </Link>
          </div>

          <p className="text-sm text-white/80" data-testid="text-residential-hero-trust-line">
            Fast response. Clear scope. Reliable schedule.
          </p>
        </div>
      </div>
    </section>
  );
}
