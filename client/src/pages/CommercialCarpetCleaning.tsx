import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Shield,
  ShieldCheck,
  UserCheck,
  Leaf,
  Wrench,
  Droplets,
  Sparkles,
  Target,
  Building2,
  Stethoscope,
  Car,
  Landmark,
  ShoppingBag,
  Home,
  Calendar,
  Phone,
  Clock,
  ClipboardCheck,
  Users,
  MessageSquare
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const trustBadges = [
  { icon: Shield, label: "Insured & Bonded" },
  { icon: UserCheck, label: "Background-Checked Technicians" },
  { icon: ShieldCheck, label: "OSHA-Trained Staff" },
  { icon: Wrench, label: "Commercial-Grade Equipment" },
  { icon: Leaf, label: "Green & Low-Odor Solutions" },
];

const cleaningMethods = [
  {
    icon: Droplets,
    title: "Low-Moisture Carpet Cleaning",
    features: [
      "Ideal for offices and occupied spaces",
      "Fast drying times (1-2 hours)",
      "Minimal disruption to operations",
    ],
  },
  {
    icon: Sparkles,
    title: "Hot Water Extraction (Steam Cleaning)",
    features: [
      "Deep soil and allergen removal",
      "Recommended for high-traffic areas",
      "Periodic restorative cleaning",
    ],
  },
  {
    icon: Target,
    title: "Spot & Stain Treatment",
    features: [
      "Coffee, grease, ink, and traffic lanes",
      "Targeted treatment without full shutdown",
      "Preserve carpet appearance between deep cleans",
    ],
  },
];

const facilitiesServed = [
  { icon: Building2, label: "Corporate Office Buildings" },
  { icon: Stethoscope, label: "Medical & Dental Offices" },
  { icon: Car, label: "Car Dealerships" },
  { icon: Landmark, label: "Financial Institutions" },
  { icon: ShoppingBag, label: "Retail & Showrooms" },
  { icon: Home, label: "Property Management Firms" },
];

const whyChooseUs = [
  { icon: Clock, text: "Flexible after-hours scheduling" },
  { icon: ClipboardCheck, text: "Documented cleaning processes" },
  { icon: Users, text: "Consistent crews & quality control" },
  { icon: ShieldCheck, text: "Compliance-focused operations" },
  { icon: MessageSquare, text: "Clear communication with facility managers" },
];

const maintenanceOptions = [
  { title: "Monthly", description: "High-traffic lobbies, entrances, and showrooms" },
  { title: "Quarterly", description: "Standard office environments and common areas" },
  { title: "Semi-Annual", description: "Lower-traffic spaces and private offices" },
  { title: "Custom Schedule", description: "Based on your facility's traffic and needs" },
];

const relatedServices = [
  { title: "Routine Commercial Cleaning", href: "/commercial-cleaning/routine-commercial-cleaning" },
  { title: "Floor Stripping & Waxing", href: "/commercial#services" },
  { title: "Commercial Janitorial Services", href: "/commercial#services" },
];

export default function CommercialCarpetCleaning() {
  const { handleCtaClick } = useServiceSelection();

  useEffect(() => {
    const pageTitle = "Commercial Carpet Cleaning Services | Professional Deep Carpet Care";
    const pageDescription = "Professional commercial carpet cleaning for offices, medical facilities, dealerships, and corporate buildings. Low-moisture, hot water extraction, OSHA-trained staff.";
    const pageUrl = window.location.href;
    
    document.title = pageTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", pageDescription);
    }

    const setOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("property", property);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setOrCreateMeta("og:title", pageTitle);
    setOrCreateMeta("og:description", pageDescription);
    setOrCreateMeta("og:type", "website");
    setOrCreateMeta("og:url", pageUrl);
    setOrCreateMeta("og:image", "");

    return () => {
      document.title = "Sparkle Pros - Commercial Cleaning in Buffalo, NY";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-muted/50 to-background py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/commercial" className="inline-flex items-center text-primary hover:underline mb-6 text-sm" data-testid="link-back-commercial">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Commercial Cleaning
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
                  Commercial Carpet Cleaning Services
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Professional carpet care designed for corporate environments, high-traffic facilities, and businesses that demand consistency.
                </p>

                <div className="flex flex-wrap gap-3 mb-8" data-testid="text-trust-signals">
                  {trustBadges.map((badge, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-md px-3 py-1.5 text-sm"
                      data-testid={`badge-trust-${index}`}
                    >
                      <badge.icon className="w-4 h-4 text-primary" />
                      <span className="text-foreground" data-testid={`text-badge-${index}`}>{badge.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" onClick={handleCtaClick}>
                    <Button size="lg" data-testid="button-book-walkthrough">
                      Book a Carpet Cleaning Walkthrough
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/contact" onClick={handleCtaClick}>
                    <Button size="lg" variant="outline" data-testid="button-call">
                      <Phone className="w-4 h-4 mr-2" />
                      Call 716-500-0506
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-md relative">
                  <img
                    src="/carpet-cleaning-hero.jpg"
                    alt="Commercial carpet cleaning using professional extraction equipment"
                    className="w-full h-full object-cover"
                    loading="eager"
                    data-testid="img-hero-carpet-cleaning"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-card/95 backdrop-blur-sm rounded-md p-3 shadow-sm">
                    <p className="text-sm font-medium text-foreground">We respond within 1 business day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16" data-testid="section-overview">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4" data-testid="text-overview-title">
              Professional Carpet Cleaning for Commercial Facilities
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Our commercial carpet cleaning services are designed for businesses that require a clean, professional appearance without operational disruption. We service offices, medical facilities, dealerships, retail spaces, and multi-tenant buildings using commercial-grade equipment and trained technicians.
              </p>
              <p>
                Whether you need scheduled maintenance or restorative deep cleaning, our process extends carpet life, improves indoor air quality, and maintains a professional environment for employees and clients.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30" data-testid="section-methods">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center" data-testid="text-methods-title">
              Our Commercial Carpet Cleaning Methods
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              We use the right method for your facility's needs, traffic levels, and timeline.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {cleaningMethods.map((method, index) => (
                <Card key={index} data-testid={`card-method-${index}`}>
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <method.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg" data-testid={`text-method-title-${index}`}>{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {method.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16" data-testid="section-facilities">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center" data-testid="text-facilities-title">
              Facilities We Serve
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Our commercial carpet cleaning services are trusted by a wide range of industries.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {facilitiesServed.map((facility, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-muted/30 rounded-lg text-center"
                  data-testid={`card-facility-${index}`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <facility.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground" data-testid={`text-facility-${index}`}>{facility.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30" data-testid="section-standards">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-standards-title">
              Built for Commercial Standards
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-background rounded-lg p-4 border"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16" data-testid="section-maintenance">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center" data-testid="text-maintenance-title">
              Scheduled Carpet Maintenance Programs
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Most corporate clients choose a scheduled carpet maintenance plan to reduce long-term costs and maintain consistent appearance standards.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {maintenanceOptions.map((option, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <CardTitle className="text-base">{option.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gradient-to-r from-primary to-primary-deep text-primary-foreground" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" data-testid="text-cta-title">
              Schedule a Carpet Cleaning Walkthrough
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              We assess square footage, traffic levels, and carpet type to provide an accurate, professional quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" onClick={handleCtaClick}>
                <Button size="lg" variant="secondary" data-testid="button-cta-walkthrough">
                  Book a Carpet Cleaning Walkthrough
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact" onClick={handleCtaClick}>
                <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground" data-testid="button-cta-call">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 716-500-0506
                </Button>
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-4">
              We respond within 1 business day.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30" data-testid="section-related">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center" data-testid="text-related-title">
              Related Services
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((service, index) => (
                <Link key={index} href={service.href}>
                  <Button variant="outline" data-testid={`link-related-service-${index}`}>
                    {service.title}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
