import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles, Home, HardHat, Building2, ArrowRight } from "lucide-react";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Professional home cleaning for busy families and homeowners who want a consistently clean living space.",
  },
  {
    icon: Calendar,
    title: "Routine Airbnb & Rental Cleaning",
    description:
      "Reliable turnover cleaning for short-term rentals, vacation properties, and Airbnb hosts.",
  },
  {
    icon: Sparkles,
    title: "Deep Clean",
    description:
      "Thorough top-to-bottom cleaning for seasonal refreshes, special occasions, or first-time service.",
  },
  {
    icon: Building2,
    title: "Move-in / Move-Out Cleaning",
    description:
      "Complete empty-home cleaning for moves, lease turnovers, and property inspections.",
  },
  {
    icon: HardHat,
    title: "Post Construction Cleaning",
    description:
      "Dust removal, debris cleanup, and detail cleaning after renovations or new construction.",
  },
];

export default function ResidentialServices() {
  const { handleCtaClick } = useServiceSelection();

  return (
    <section id="services" className="py-16 lg:py-24 bg-background" data-testid="section-residential-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-residential-services-title">
            Residential Cleaning Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-residential-services-subtitle">
            Choose recurring cleaning or specialty services—tailored for your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="transition-all duration-200 h-full cursor-default hover:shadow-lg" 
              data-testid={`card-residential-service-${index}`}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-lg lg:text-xl" data-testid={`text-residential-service-title-${index}`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed" data-testid={`text-residential-service-description-${index}`}>{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" onClick={handleCtaClick}>
            <Button size="lg" variant="outline" data-testid="button-residential-services-cta">
              Get a quote
              <ArrowRight className="w-4 h-4 ml-2" />
              find your cleaning plan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
