import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building2,
  Stethoscope,
  Store,
  Factory,
  KeyRound,
  GraduationCap,
  Dumbbell,
  Landmark,
  Car,
  Users,
  ClipboardCheck,
  Shield,
  ArrowRight,
} from "lucide-react";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const industries = [
  {
    name: "Office Buildings",
    description: "Daily/weekly cleaning that keeps teams productive and spaces client-ready.",
    icon: Building2,
  },
  {
    name: "Medical & Dental Clinics",
    description: "Detail-focused cleaning with OSHA-trained teams and green options.",
    icon: Stethoscope,
  },
  {
    name: "Retail & Storefronts",
    description: "Clean entrances, floors, and restrooms that protect your brand.",
    icon: Store,
  },
  {
    name: "Industrial & Warehouses",
    description: "Durable cleaning for high-traffic areas and tough environments.",
    icon: Factory,
  },
  {
    name: "Property Management",
    description: "Reliable service across units and common areas with clear reporting.",
    icon: KeyRound,
  },
  {
    name: "Schools & Daycares",
    description: "Consistent sanitation routines that support healthy environments.",
    icon: GraduationCap,
  },
  {
    name: "Gyms & Studios",
    description: "Sweat, high-touch surfaces, and restrooms handled with consistency.",
    icon: Dumbbell,
  },
  {
    name: "Banks & Professional Services",
    description: "Quiet, dependable cleaning that matches professional standards.",
    icon: Landmark,
  },
  {
    name: "Car Dealerships",
    description: "Showrooms and customer areas kept spotless for high-trust presentation.",
    icon: Car,
  },
];

const trustPoints = [
  {
    icon: Users,
    title: "Consistent Teams",
  },
  {
    icon: ClipboardCheck,
    title: "Checklist-Based Cleaning",
  },
  {
    icon: Shield,
    title: "Quality Control",
  },
];

export default function Industries() {
  const { handleCtaClick } = useServiceSelection();

  return (
    <section
      id="industries"
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, rgba(165, 213, 228, 0.08) 0%, rgba(165, 213, 228, 0.15) 50%, rgba(165, 213, 228, 0.08) 100%)" }}
      data-testid="section-industries"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center md:text-left mb-12 md:mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 block" data-testid="text-industries-eyebrow">
            Industries We Serve
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-industries-title">
            Trusted for Professional Facilities Across Erie County
          </h2>
          <p className="text-muted-foreground max-w-2xl" data-testid="text-industries-subtext">
            Different facilities have different requirements. We clean with checklists, consistent scheduling, and clear communication—so you're never guessing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="p-5 h-full rounded-2xl hover-elevate"
              data-testid={`card-industry-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <industry.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1" data-testid={`text-industry-name-${index}`}>
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-industry-desc-${index}`}>
                    {industry.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-6">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3" data-testid={`trust-point-${index}`}>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">{point.title}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto" data-testid="text-trust-strip">
            Commercial cleaning isn't a one-time job—it's a system. Our clients choose Sparkle Pros because the service stays consistent month after month.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" onClick={handleCtaClick}>
            <Button size="lg" data-testid="button-industries-cta">
              Book a Walkthrough
            </Button>
          </Link>
          <a
            href="#process"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            data-testid="link-see-process"
          >
            See Our Process
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
