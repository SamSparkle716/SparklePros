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
  Zap,
  Wind,
  Lightbulb,
  Layers,
  Hammer,
  Sun
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
  { icon: Sparkles, label: "Detailed Top-to-Bottom Clean" },
  { icon: Zap, label: "First-Time Client Specials" },
  { icon: Clock, label: "Flexible Scheduling" },
  { icon: ClipboardCheck, label: "Comprehensive Checklist" },
];

const standardTasks = [
  "Inside oven & microwave",
  "Inside refrigerator",
  "Baseboard cleaning throughout",
  "Light fixture & fan dusting",
  "Vent & register cleaning",
  "Behind & under furniture",
  "Window sill & track cleaning",
  "Door & door frame wiping",
  "Cabinet exterior cleaning",
  "Detailed edge cleaning",
  "High-reach cobweb removal",
  "Wall spot cleaning",
];

const kitchenDeepTasks = [
  "Inside all appliances",
  "Under sink cabinet cleaning",
  "Backsplash deep scrub",
  "Cabinet interior wipe-down",
  "Exhaust fan cleaning",
  "Grout scrubbing",
];

const bathroomDeepTasks = [
  "Tile & grout deep cleaning",
  "Exhaust fan cleaning",
  "Cabinet interior cleaning",
  "Fixture descaling",
  "Behind toilet cleaning",
  "Shower door track cleaning",
];

const bestForOptions = [
  {
    title: "Pre-Move Cleaning",
    bestFor: "Getting your new home spotless before you move in your belongings.",
    bullets: [
      "Complete sanitization",
      "Every surface detailed",
      "Fresh start guaranteed",
    ],
    ideal: "New Homeowners, Renters",
  },
  {
    title: "Spring Cleaning",
    bestFor: "Seasonal reset to refresh your home after a long winter.",
    bullets: [
      "Windows & sills cleaned",
      "Deep dust removal",
      "Air quality improvement",
    ],
    ideal: "All Homeowners",
  },
  {
    title: "Post-Renovation",
    bestFor: "Removing construction dust and debris after home improvements.",
    bullets: [
      "Construction dust removal",
      "Surface polishing",
      "Detail work on new fixtures",
    ],
    ideal: "Recently Renovated Homes",
    isAddOn: false,
  },
];

const qualityPoints = [
  {
    icon: ClipboardCheck,
    title: "Comprehensive Checklist",
    description: "Detailed task list ensuring every corner gets the attention it deserves.",
  },
  {
    icon: Users,
    title: "Experienced Deep Clean Team",
    description: "Trained specialists who know how to tackle tough cleaning challenges.",
  },
  {
    icon: AlertCircle,
    title: "Pre-Clean Walkthrough",
    description: "We assess your home to identify areas needing special attention.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Effective Products",
    description: "Professional-grade cleaners that are tough on dirt but safe for your family.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guaranteed",
    description: "Not satisfied? We'll return to address any concerns at no extra cost.",
  },
];

const processSteps = [
  { step: "1", title: "Schedule & Assess", description: "We discuss your needs and schedule a convenient time." },
  { step: "2", title: "Pre-Clean Walkthrough", description: "Identify priority areas and any special requests." },
  { step: "3", title: "Deep Clean Service", description: "Our team performs the comprehensive cleaning." },
  { step: "4", title: "Final Inspection", description: "Walk-through to ensure your complete satisfaction." },
];

const idealFor = [
  { icon: Home, label: "First-Time Cleans" },
  { icon: Sun, label: "Seasonal Resets" },
  { icon: Hammer, label: "Post-Renovation" },
  { icon: Layers, label: "Pre-Listing Prep" },
  { icon: Wind, label: "Allergy Relief" },
  { icon: Lightbulb, label: "Special Occasions" },
];

const faqs = [
  {
    question: "How long does a deep cleaning take?",
    answer: "A thorough deep cleaning typically takes 4-8 hours depending on the size of your home and its current condition. We'll provide a time estimate during your consultation.",
  },
  {
    question: "What's the difference between deep cleaning and routine cleaning?",
    answer: "Deep cleaning covers areas not addressed in routine cleanings: inside appliances, behind furniture, baseboards, light fixtures, vents, and detailed scrubbing. It's a comprehensive reset for your home.",
  },
  {
    question: "How often should I get a deep cleaning?",
    answer: "We recommend deep cleaning 2-4 times per year, depending on your lifestyle. Homes with pets, children, or allergies may benefit from more frequent deep cleans.",
  },
  {
    question: "Do I need to prepare anything before the cleaning?",
    answer: "We recommend decluttering surfaces and securing valuables. Our team will handle the rest. We can discuss any specific preparation during scheduling.",
  },
  {
    question: "Can you focus on specific areas of concern?",
    answer: "Absolutely! During our pre-clean walkthrough, let us know which areas need the most attention, and we'll customize our approach accordingly.",
  },
  {
    question: "Is deep cleaning safe for homes with pets or children?",
    answer: "Yes! We use eco-friendly, non-toxic products that are safe for your entire family, including pets. Let us know about any specific sensitivities.",
  },
];

export default function DeepCleaning() {
  const { handleCtaClick } = useServiceSelection();

  useEffect(() => {
    const pageTitle = "Deep Cleaning Buffalo NY | Sparkle Pros Services";
    const pageDescription = "Professional deep cleaning services in Buffalo, NY. First-time cleans, seasonal resets, post-renovation. Insured & bonded, eco-friendly products. Free estimate.";
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
                  Deep Cleaning in Buffalo, NY
                </h1>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A comprehensive top-to-bottom clean that reaches every corner of your home. 
                  Perfect for first-time cleans, seasonal resets, or when your home needs extra attention.
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
                    <Button size="lg" data-testid="button-book-estimate">
                      Get a Free Estimate
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
                    alt="Professional deep cleaning service in a Buffalo NY home"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    data-testid="img-hero-deep-cleaning"
                  />
                </div>
                <Card className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[200px] shadow-lg bg-white/95 dark:bg-card/95 backdrop-blur-sm">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-xs text-foreground font-medium">Every corner, every detail</p>
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
              Detailed attention to areas often missed in routine cleaning.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Deep Cleaning Tasks</CardTitle>
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
                      {kitchenDeepTasks.map((task, index) => (
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
                      {bathroomDeepTasks.map((task, index) => (
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
              Service is customized based on your home's size and specific areas of concern.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              Best For
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Deep cleaning is perfect for these situations.
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
              We deliver exceptional results through experienced professionals and proven methods.
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
              Ideal Situations for Deep Cleaning
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
              Schedule Your Deep Cleaning Today
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Give your home the thorough clean it deserves. Get a free estimate and see the difference a professional deep clean can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" onClick={handleCtaClick}>
                <Button size="lg" variant="secondary" data-testid="button-cta-estimate">
                  Get Your Free Estimate
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
