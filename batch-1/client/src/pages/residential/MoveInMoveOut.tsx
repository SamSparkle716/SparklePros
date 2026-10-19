import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Home,
  Shield,
  ShieldCheck,
  UserCheck,
  Leaf,
  ClipboardCheck,
  Users,
  Phone,
  AlertCircle,
  BadgeCheck,
  Sparkles,
  Key,
  Camera,
  FileCheck,
  DoorOpen,
  Building,
  Truck
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const trustBadges = [
  { icon: Shield, label: "Insured & Bonded" },
  { icon: UserCheck, label: "Background-Checked Staff" },
  { icon: ShieldCheck, label: "Trusted Professionals" },
  { icon: Leaf, label: "Eco-Friendly Products" },
];

const quickScopeItems = [
  { icon: Sparkles, label: "Empty Home Deep Clean" },
  { icon: Camera, label: "Photo-Ready Results" },
  { icon: Clock, label: "Quick Turnaround" },
  { icon: ClipboardCheck, label: "Inspection-Ready Standard" },
];

const standardTasks = [
  "All appliances inside & out",
  "Cabinet interiors & exteriors",
  "Closet cleaning & shelving",
  "Window cleaning (interior)",
  "All floors deep cleaned",
  "Wall spot cleaning & scuffs",
  "Baseboard cleaning",
  "Light fixture & fan cleaning",
  "Door & door frame wiping",
  "Vent & register cleaning",
  "Switch plates & outlet covers",
  "Trim & molding dusting",
];

const kitchenTasks = [
  "Oven & stovetop deep clean",
  "Refrigerator inside & out",
  "Dishwasher interior cleaning",
  "Microwave deep clean",
  "All cabinet interiors",
  "Counters & backsplash",
];

const bathroomTasks = [
  "Toilet complete sanitization",
  "Tub & shower deep scrub",
  "Vanity & sink cleaning",
  "Medicine cabinet interior",
  "Tile & grout cleaning",
  "Exhaust fan cleaning",
];

const bestForOptions = [
  {
    title: "Renters",
    bestFor: "Ensure you get your full security deposit back with a spotless move-out.",
    bullets: [
      "Meets landlord standards",
      "Documentation-ready clean",
      "Deposit protection",
    ],
    ideal: "Apartment & House Renters",
  },
  {
    title: "Home Sellers",
    bestFor: "Make the best impression for showings and final walk-throughs.",
    bullets: [
      "Photo-ready presentation",
      "Buyer-ready condition",
      "Closing day preparation",
    ],
    ideal: "Homeowners Selling",
  },
  {
    title: "Property Managers",
    bestFor: "Quick turnaround between tenants with professional results.",
    bullets: [
      "Consistent quality",
      "Flexible scheduling",
      "Bulk pricing available",
    ],
    ideal: "Landlords, Property Managers",
    isAddOn: false,
  },
];

const qualityPoints = [
  {
    icon: ClipboardCheck,
    title: "Move-Out Checklist",
    description: "Comprehensive task list that meets landlord and property manager standards.",
  },
  {
    icon: Users,
    title: "Experienced Move Team",
    description: "Specialists trained in empty-home deep cleaning techniques.",
  },
  {
    icon: AlertCircle,
    title: "Rush Service Available",
    description: "Need it done fast? We offer expedited scheduling for tight deadlines.",
  },
  {
    icon: ShieldCheck,
    title: "Inspection-Ready",
    description: "Our cleaning meets the standards required for property inspections.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guaranteed",
    description: "We'll address any concerns before your final walk-through.",
  },
];

const processSteps = [
  { step: "1", title: "Schedule Service", description: "Tell us your move date and property details." },
  { step: "2", title: "Pre-Clean Assessment", description: "We identify any special attention areas." },
  { step: "3", title: "Complete Deep Clean", description: "Thorough cleaning of the entire property." },
  { step: "4", title: "Final Walkthrough", description: "Quality check before you hand over keys." },
];

const idealFor = [
  { icon: DoorOpen, label: "Move-Out Cleans" },
  { icon: Key, label: "Move-In Prep" },
  { icon: Building, label: "Apartments" },
  { icon: Home, label: "Houses" },
  { icon: Truck, label: "Quick Turnarounds" },
  { icon: FileCheck, label: "Inspections" },
];

const faqs = [
  {
    question: "How far in advance should I book move-in/move-out cleaning?",
    answer: "We recommend booking at least 3-5 days in advance for standard service. For rush requests, contact us and we'll do our best to accommodate your timeline.",
  },
  {
    question: "Will this help me get my security deposit back?",
    answer: "Our move-out cleaning is designed to meet landlord expectations and help maximize your deposit return. We follow a comprehensive checklist that addresses all common inspection points.",
  },
  {
    question: "Can you clean a home with furniture still inside?",
    answer: "While we can clean around furniture, we achieve the best results in empty homes where we can access all surfaces, walls, and floors completely.",
  },
  {
    question: "Do you offer same-day or next-day service?",
    answer: "We offer rush service when our schedule permits. Contact us for availability and any additional fees for expedited booking.",
  },
  {
    question: "What if there are stains or damage that won't clean?",
    answer: "We'll document any permanent stains or damage and provide you with a report. Our goal is to maximize cleanliness and help set realistic expectations for inspections.",
  },
  {
    question: "Do you work with property management companies?",
    answer: "Yes! We work with many property managers in the Buffalo area and offer volume pricing for multiple units. Ask about our property management program.",
  },
];

export default function MoveInMoveOut() {
  const { handleCtaClick } = useServiceSelection();

  useEffect(() => {
    const pageTitle = "Move-In / Move-Out Cleaning Buffalo NY | Sparkle Pros Services";
    const pageDescription = "Professional move-in and move-out cleaning in Buffalo, NY. Empty home deep clean for renters, sellers, and property managers. Inspection-ready results.";
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
      document.title = "Sparkle Pros - Residential Cleaning in Buffalo, NY";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-muted/50 to-background py-12 lg:py-14">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/residential" className="inline-flex items-center text-primary hover:underline mb-6 text-sm" data-testid="link-back-residential">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Residential Cleaning
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="max-w-xl">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight" data-testid="text-page-title">
                  Move-In / Move-Out Cleaning in Buffalo, NY
                </h1>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Empty-home deep cleaning that gets your property inspection-ready and photo-perfect. 
                  Ideal for renters, sellers, and property managers who need professional results.
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
                    <Button size="lg" data-testid="button-book-cleaning">
                      Book Move Cleaning
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
              
              <div className="relative">
                <div className="aspect-[16/10] rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700">
                  <img
                    src="/routine-cleaning-hero.jpg"
                    alt="Professional move-out cleaning service for an empty home in Buffalo NY"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    data-testid="img-hero-move-cleaning"
                  />
                </div>
                <Card className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[200px] shadow-lg bg-white/95 dark:bg-card/95 backdrop-blur-sm">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                      <Key className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-xs text-foreground font-medium">Inspection-ready results</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30 border-y">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {quickScopeItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center md:justify-start">
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              What's Included
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Complete property cleaning from top to bottom.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Full Property Tasks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {standardTasks.map((task, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{task}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Kitchen Deep Clean</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {kitchenTasks.map((task, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg">Bathroom Deep Clean</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {bathroomTasks.map((task, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{task}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground text-center mt-6 italic">
              Service scope is based on property size and condition. We'll provide a detailed quote upfront.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              Best For
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Move cleaning is perfect for these situations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {bestForOptions.map((option, index) => (
                <Card key={index} className={option.isAddOn ? "border-accent/50" : ""}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{option.title}</CardTitle>
                      {option.isAddOn && (
                        <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded">Add-On</span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{option.bestFor}</p>
                    <ul className="space-y-2 mb-4">
                      {option.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t">
                      <p className="text-xs text-muted-foreground">
                        <span className="font-medium">Ideal For:</span> {option.ideal}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              Quality & Trust
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              We deliver inspection-ready results through proven processes and experienced teams.
            </p>
            
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                {qualityPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Card className="bg-muted/30">
                <CardHeader>
                  <CardTitle className="text-lg">Our Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {processSteps.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Ideal Situations for Move Cleaning
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {idealFor.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border hover-elevate">
                  <item.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-foreground text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/95 to-secondary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Ready to Schedule Your Move Cleaning?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get your property inspection-ready with our professional move-in/move-out cleaning. 
              Fast turnaround, guaranteed results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" onClick={handleCtaClick}>
                <Button size="lg" variant="secondary" data-testid="button-cta-booking">
                  Book Your Move Cleaning
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
