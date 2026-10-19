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
  Building2,
  Stethoscope,
  Car,
  ShoppingBag,
  Home,
  Warehouse,
  Phone,
  Clock,
  ClipboardCheck,
  Users,
  MessageSquare,
  Droplets,
  Truck,
  ParkingCircle,
  Store,
  Footprints,
  Factory,
  Trash2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const trustBadges = [
  { icon: Shield, label: "Fully Insured & Bonded" },
  { icon: ShieldCheck, label: "OSHA-Trained Technicians" },
  { icon: Wrench, label: "Commercial-Grade Equipment" },
  { icon: Leaf, label: "Environmentally Responsible Cleaning" },
];

const surfacesWeClean = [
  { icon: Building2, label: "Building Exteriors", description: "Brick, concrete, stucco, siding" },
  { icon: Store, label: "Storefronts & Entryways", description: "High-visibility areas" },
  { icon: Footprints, label: "Sidewalks & Walkways", description: "Pedestrian areas" },
  { icon: ParkingCircle, label: "Parking Lots & Garages", description: "Vehicle traffic areas" },
  { icon: Truck, label: "Loading Docks", description: "Heavy-use zones" },
  { icon: Trash2, label: "Dumpster Pads", description: "Sanitation areas" },
  { icon: Car, label: "Drive-Thrus", description: "Customer-facing lanes" },
  { icon: Factory, label: "Industrial Surfaces", description: "Warehouses & facilities" },
];

const industriesServed = [
  { icon: Building2, label: "Office Buildings" },
  { icon: Stethoscope, label: "Medical & Healthcare Facilities" },
  { icon: ShoppingBag, label: "Retail & Shopping Centers" },
  { icon: Car, label: "Car Dealerships" },
  { icon: Warehouse, label: "Warehouses & Industrial Facilities" },
  { icon: Home, label: "Property Management Companies" },
  { icon: Users, label: "HOAs & Commercial Campuses" },
];

const whyChooseUs = [
  { icon: Clock, text: "Scheduled service to minimize business disruption" },
  { icon: ShieldCheck, text: "OSHA-compliant safety procedures" },
  { icon: UserCheck, text: "Trained, background-checked staff" },
  { icon: Droplets, text: "Proper water runoff and environmental controls" },
  { icon: Users, text: "Consistent results across multi-location properties" },
  { icon: MessageSquare, text: "Clear communication and reporting" },
];

const relatedServices = [
  { title: "Routine Commercial Cleaning", href: "/commercial-cleaning/routine-commercial-cleaning" },
  { title: "Commercial Carpet Cleaning", href: "/commercial-carpet-cleaning" },
];

export default function CommercialPowerWashing() {
  const { handleCtaClick } = useServiceSelection();

  useEffect(() => {
    const pageTitle = "Commercial Power Washing Services | Professional Exterior Cleaning";
    const pageDescription = "Professional commercial power washing for offices, medical facilities, dealerships, and corporate buildings. OSHA-trained technicians, commercial-grade equipment, environmentally responsible.";
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
        <section className="bg-gradient-to-b from-muted/50 to-background py-12 lg:py-16" data-testid="section-hero">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/commercial" className="inline-flex items-center text-primary hover:underline mb-6 text-sm" data-testid="link-back-commercial">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Commercial Cleaning
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-page-title">
                  Commercial Power Washing Services
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Professional exterior cleaning solutions for commercial properties—designed to protect your image, maintain safety, and extend surface lifespan.
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
                      Schedule a Walkthrough
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
                <div className="w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden shadow-md relative">
                  <img
                    src="/power-washing-hero.jpg"
                    alt="Commercial power washing service cleaning exterior of a building"
                    className="w-full h-full object-cover"
                    loading="eager"
                    data-testid="img-hero-power-washing"
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
              Professional Power Washing for Commercial Properties
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Commercial power washing is a specialized exterior cleaning service designed to remove built-up dirt, grease, mold, mildew, gum, and pollutants from high-traffic commercial surfaces. Unlike residential pressure washing, our commercial power washing services use industry-grade equipment, controlled pressure levels, and surface-safe methods to protect your property while delivering a visibly cleaner result.
              </p>
              <p>
                We service properties that require consistent, compliant, and non-disruptive exterior maintenance.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30" data-testid="section-surfaces">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center" data-testid="text-surfaces-title">
              Commercial Surfaces We Service
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              We clean a wide range of commercial surfaces using the right equipment and techniques for each material.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {surfacesWeClean.map((surface, index) => (
                <Card key={index} data-testid={`card-surface-${index}`}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <surface.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base" data-testid={`text-surface-title-${index}`}>{surface.label}</CardTitle>
                        <p className="text-xs text-muted-foreground">{surface.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16" data-testid="section-industries">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center" data-testid="text-industries-title">
              Industries We Support
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Our commercial power washing services are trusted by businesses across Western NY.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {industriesServed.map((industry, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-muted/30 rounded-lg text-center"
                  data-testid={`card-industry-${index}`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <industry.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground" data-testid={`text-industry-${index}`}>{industry.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30" data-testid="section-why-us">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-why-us-title">
              Why Businesses Trust Our Power Washing Services
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-background rounded-lg p-4 border"
                  data-testid={`card-reason-${index}`}
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
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 text-center" data-testid="text-maintenance-title">
              Protect Your Property & Reduce Long-Term Costs
            </h2>
            <div className="prose prose-lg max-w-3xl mx-auto text-muted-foreground text-center">
              <p>
                Routine commercial power washing is not cosmetic—it's preventative maintenance. Removing corrosive contaminants helps prevent premature surface deterioration, slip hazards, and costly repairs. A clean exterior also reinforces professionalism and brand trust for employees, customers, and tenants.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gradient-to-r from-primary to-primary-deep text-primary-foreground" data-testid="section-cta">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" data-testid="text-cta-title">
              Maintain a Clean, Professional Exterior Year-Round
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Schedule a walkthrough with our team to assess your property and receive a customized power washing plan tailored to your facility's needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" onClick={handleCtaClick}>
                <Button size="lg" variant="secondary" data-testid="button-cta-walkthrough">
                  Book a Walkthrough
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

        <section className="py-12 lg:py-16 bg-muted/30" data-testid="section-footer-seo">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              Commercial Power Washing Services You Can Rely On
            </h3>
            <p className="text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              We provide reliable commercial power washing services for businesses that demand consistency, safety, and professionalism. Whether you manage a single location or multiple properties, our team delivers results you can count on.
            </p>
            
            <h4 className="text-lg font-semibold text-foreground mb-4 text-center" data-testid="text-related-title">
              Related Services
            </h4>
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
