import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  HardHat,
  Shield,
  ShieldCheck,
  UserCheck,
  Leaf,
  Phone,
  Building2,
  Warehouse,
  Stethoscope,
  ShoppingBag,
  Home,
  Clock
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const trustBadges = [
  { icon: Shield, label: "Insured & Bonded" },
  { icon: UserCheck, label: "Background-Checked Staff" },
  { icon: ShieldCheck, label: "OSHA-Trained" },
  { icon: Leaf, label: "Green Cleaning Options" },
];

const whatsIncluded = [
  "Construction dust removal from all surfaces",
  "Debris and material cleanup",
  "Detailed wipe-down of fixtures and finishes",
  "Interior glass and window cleaning",
  "Floor cleaning (sweep, mop, vacuum)",
  "Baseboard and trim detail cleaning",
  "Light fixture and vent cleaning",
  "Cabinet interior wipe-downs",
  "Hardware and handle polishing",
  "Final touch-up and inspection",
];

const whoItsFor = [
  { icon: Building2, label: "General Contractors" },
  { icon: Home, label: "Property Managers" },
  { icon: Building2, label: "Office Buildouts" },
  { icon: ShoppingBag, label: "Retail Spaces" },
  { icon: Stethoscope, label: "Medical Buildouts" },
  { icon: Warehouse, label: "Industrial Facilities" },
];

const safetyStandards = [
  {
    icon: ShieldCheck,
    title: "OSHA-Trained Crews",
    description: "Our teams follow proper safety protocols for post-construction environments.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Bonded",
    description: "Complete liability coverage protects your property and project.",
  },
  {
    icon: UserCheck,
    title: "Background-Checked Staff",
    description: "All team members undergo thorough screening before assignment.",
  },
  {
    icon: Leaf,
    title: "Green Cleaning Options",
    description: "Eco-friendly products available for LEED and sustainability requirements.",
  },
];

const processSteps = [
  { step: "1", title: "Site Assessment", description: "We evaluate the scope and timeline requirements." },
  { step: "2", title: "Custom Cleaning Plan", description: "Detailed plan based on project size and finishes." },
  { step: "3", title: "Professional Execution", description: "Our trained crews complete the final clean." },
  { step: "4", title: "Final Walkthrough", description: "Inspection to ensure move-in ready standards." },
];

export default function PostConstructionCleaning() {
  const { handleCtaClick } = useServiceSelection();

  useEffect(() => {
    const pageTitle = "Post Construction Cleaning Erie County NY | Sparkle Pros";
    const pageDescription = "Professional post construction cleaning in Buffalo and Erie County, NY. Final-clean services for renovations and new builds. Insured, OSHA-trained, move-in ready results.";
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

    return () => {
      document.title = "Sparkle Pros - Commercial Cleaning in Buffalo, NY";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-muted/50 to-background py-12 lg:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/commercial" className="inline-flex items-center text-primary hover:underline mb-6 text-sm" data-testid="link-back-commercial">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Commercial Cleaning
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight" data-testid="text-page-title">
                  Post Construction Cleaning in Erie County, NY
                </h1>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional final-clean services for contractors and property managers throughout Buffalo 
                  and Erie County. We transform construction sites into move-in ready spaces—removing dust, 
                  debris, and residue so your project is ready for occupancy.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-6">
                  {trustBadges.map((badge, index) => (
                    <div key={index} className="flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-md px-3 py-1.5 text-sm">
                      <badge.icon className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{badge.label}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" onClick={handleCtaClick}>
                    <Button size="lg" data-testid="button-book-walkthrough">
                      Book a Walkthrough
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
              
              <div className="relative w-full">
                <div className="w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700">
                  <img
                    src="/post-construction-hero-new.jpg"
                    alt="Post-construction cleaning crew vacuuming construction debris from newly finished commercial floor"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    data-testid="img-hero-post-construction-cleaning"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
                <Card className="absolute bottom-4 right-4 max-w-[200px] shadow-lg bg-white/95 dark:bg-card/95 backdrop-blur-sm">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-xs text-foreground font-medium">Response within 1 business day</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              What's Included
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Comprehensive final cleaning to prepare your space for occupancy.
            </p>
            
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-2 gap-3">
                  {whatsIncluded.map((item, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <p className="text-sm text-muted-foreground text-center mt-6 italic">
              Scope is customized based on project size, finishes, and timeline requirements.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Who It's For
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {whoItsFor.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border">
                  <item.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              Safety & Standards
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Professional protocols to protect your property and ensure quality results.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {safetyStandards.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Our Process
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {processSteps.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-5">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/95 to-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Book a Walkthrough
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let us assess your construction site and provide a detailed cleaning plan. 
              Serving Buffalo, Amherst, Cheektowaga, Tonawanda, and all of Erie County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" onClick={handleCtaClick}>
                <Button size="lg" variant="secondary" data-testid="button-cta-walkthrough">
                  Schedule Your Walkthrough
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
      </main>
      <Footer />
    </div>
  );
}
