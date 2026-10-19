import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles, Droplets, HardHat, ArrowRight } from "lucide-react";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const services = [
  {
    icon: Calendar,
    title: "Routine Cleaning",
    description:
      "Recurring cleaning for facilities that need consistent results—restrooms, breakrooms, common areas, dusting, trash removal, floors, and detail work.",
    href: "/commercial/services/routine-cleaning",
  },
  {
    icon: Sparkles,
    title: "Commercial Carpet Cleaning",
    description:
      "Deep extraction to remove stains, odors, and traffic wear—ideal for offices, lobbies, and high-traffic areas.",
    href: "/commercial/services/carpet-cleaning",
  },
  {
    icon: Droplets,
    title: "Power Washing",
    description:
      "Exterior cleaning for entrances, sidewalks, storefronts, loading areas, and grime-heavy surfaces—boost curb appeal instantly.",
    href: "/commercial/services/power-wash",
  },
  {
    icon: HardHat,
    title: "Post Construction Cleaning",
    description:
      "Final-clean services after renovations or new builds—dust removal, debris pickup, detailed wipe-downs, glass cleaning, and floors—so your space is move-in ready.",
    href: "/commercial/services/post-construction",
  },
];

export default function Services() {
  const { handleCtaClick } = useServiceSelection();

  return (
    <section id="services" className="py-16 lg:py-24 bg-background" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Commercial Cleaning Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Choose recurring cleaning or specialty services—built for professional facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const cardContent = (
              <Card 
                className={`transition-all duration-200 h-full ${service.href ? "cursor-pointer hover:scale-[1.02] hover:shadow-lg" : "hover-elevate"}`} 
                data-testid={`card-service-${index}`}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg lg:text-xl" data-testid={`text-service-title-${index}`}>
                    {service.title}
                    {service.href && <ArrowRight className="inline-block w-4 h-4 ml-2 opacity-50" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-service-description-${index}`}>{service.description}</p>
                </CardContent>
              </Card>
            );

            if (service.href) {
              return (
                <Link key={index} href={service.href} className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg">
                  {cardContent}
                </Link>
              );
            }

            return <div key={index}>{cardContent}</div>;
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" onClick={handleCtaClick}>
            <Button size="lg" variant="outline" data-testid="button-services-cta">
              Book a walkthrough
              <ArrowRight className="w-4 h-4 ml-2" />
              get a cleaning plan and schedule
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
