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
  Droplets,
  Wind,
  ThermometerSun,
  Dog,
  Heart,
  Footprints
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const trustBadges = [
  { icon: Shield, label: "Insured & Bonded" },
  { icon: UserCheck, label: "Background-Checked Staff" },
  { icon: ShieldCheck, label: "Professional Equipment" },
  { icon: Leaf, label: "Eco-Friendly Solutions" },
];

const quickScopeItems = [
  { icon: Droplets, label: "Hot Water Extraction" },
  { icon: Sparkles, label: "Stain Treatment" },
  { icon: Wind, label: "Deodorizing" },
  { icon: ThermometerSun, label: "Quick Dry Technology" },
];

const standardTasks = [
  "Pre-inspection & spot identification",
  "Pre-treatment of stains",
  "Hot water extraction cleaning",
  "Edge & corner cleaning",
  "Deodorizing treatment",
  "Speed drying setup",
  "Post-cleaning inspection",
  "Furniture pad placement",
  "High-traffic area focus",
  "Pet stain treatment",
  "Allergen reduction treatment",
  "Carpet grooming for appearance",
];

const stainTreatments = [
  "Pet urine & odor treatment",
  "Food & beverage stains",
  "Mud & dirt removal",
  "Grease & oil spots",
  "Red wine treatment",
  "Coffee & tea stains",
];

const additionalServices = [
  "Area rug cleaning",
  "Upholstery cleaning",
  "Stair carpet cleaning",
  "Carpet protection application",
  "Odor neutralization",
  "Spot warranty program",
];

const bestForOptions = [
  {
    title: "Pet Owners",
    bestFor: "Homes with dogs, cats, and other furry family members.",
    bullets: [
      "Pet odor elimination",
      "Urine stain removal",
      "Allergen reduction",
    ],
    ideal: "Pet-Friendly Households",
  },
  {
    title: "Allergy Sufferers",
    bestFor: "Reduce allergens trapped in carpet fibers.",
    bullets: [
      "Deep allergen extraction",
      "Dust mite reduction",
      "Hypoallergenic products",
    ],
    ideal: "Allergy-Prone Families",
  },
  {
    title: "High-Traffic Homes",
    bestFor: "Families with kids, frequent guests, or active households.",
    bullets: [
      "Restores carpet appearance",
      "Extends carpet life",
      "Removes embedded dirt",
    ],
    ideal: "Active Families, Entertaining Homes",
    isAddOn: false,
  },
];

const qualityPoints = [
  {
    icon: ClipboardCheck,
    title: "Pre-Cleaning Inspection",
    description: "We assess your carpets and identify problem areas before we begin.",
  },
  {
    icon: Users,
    title: "Trained Technicians",
    description: "Our team is trained in the latest carpet cleaning methods and equipment.",
  },
  {
    icon: AlertCircle,
    title: "Spot Treatment Focus",
    description: "Stubborn stains get special attention with targeted treatment solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Safe for Pets & Kids",
    description: "We use eco-friendly, non-toxic cleaning solutions safe for your entire family.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guaranteed",
    description: "If any spot reappears within 14 days, we'll re-treat it free of charge.",
  },
];

const processSteps = [
  { step: "1", title: "Inspection", description: "We identify stains, traffic patterns, and problem areas." },
  { step: "2", title: "Pre-Treatment", description: "Spots and stains receive targeted treatment." },
  { step: "3", title: "Deep Extraction", description: "Hot water extraction removes dirt and allergens." },
  { step: "4", title: "Speed Dry & Groom", description: "Quick-dry setup and carpet grooming for best results." },
];

const idealFor = [
  { icon: Dog, label: "Pet Owners" },
  { icon: Heart, label: "Allergy Relief" },
  { icon: Footprints, label: "High Traffic" },
  { icon: Home, label: "Family Homes" },
  { icon: Sparkles, label: "Stain Removal" },
  { icon: Wind, label: "Odor Removal" },
];

const faqs = [
  {
    question: "How long does carpet cleaning take?",
    answer: "Most homes take 2-4 hours depending on carpet size and condition. We'll provide a time estimate when you schedule your service.",
  },
  {
    question: "How long until my carpet is dry?",
    answer: "With our quick-dry technology, carpets typically dry within 4-8 hours. We provide tips to speed up drying and can set up air movers if needed.",
  },
  {
    question: "Can you remove pet urine odors?",
    answer: "Yes! We have specialized enzyme treatments designed specifically for pet urine that neutralize odors at the source, not just mask them.",
  },
  {
    question: "Is hot water extraction safe for all carpets?",
    answer: "We assess your carpet type before cleaning. Hot water extraction is safe for most carpets, but we'll recommend alternative methods if your carpet requires special care.",
  },
  {
    question: "Should I vacuum before you arrive?",
    answer: "We include a thorough vacuuming as part of our service, so there's no need to vacuum beforehand. Just remove any small items from the floor.",
  },
  {
    question: "How often should I have my carpets professionally cleaned?",
    answer: "We recommend professional cleaning every 12-18 months for most homes. Homes with pets, children, or allergies may benefit from cleaning every 6-12 months.",
  },
];

export default function ResidentialCarpetCleaning() {
  const { handleCtaClick } = useServiceSelection();

  useEffect(() => {
    const pageTitle = "Residential Carpet Cleaning Buffalo NY | Sparkle Pros Services";
    const pageDescription = "Professional residential carpet cleaning in Buffalo, NY. Hot water extraction, stain treatment, pet odor removal. Safe for families & pets. Free estimate.";
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
                  Residential Carpet Cleaning in Buffalo, NY
                </h1>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Professional carpet cleaning that removes deep-set dirt, stubborn stains, and odors. 
                  Using hot water extraction and eco-friendly solutions for a healthier, fresher home.
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
                    src="/carpet-cleaning-hero.jpg"
                    alt="Professional residential carpet cleaning service in Buffalo NY"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    data-testid="img-hero-carpet-cleaning"
                  />
                </div>
                <Card className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[200px] shadow-lg bg-white/95 dark:bg-card/95 backdrop-blur-sm">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-xs text-foreground font-medium">Deep extraction cleaning</p>
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
              Comprehensive carpet cleaning for a fresher, healthier home.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Carpet Cleaning Process</CardTitle>
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
                    <CardTitle className="text-lg">Stain Treatments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {stainTreatments.map((task, index) => (
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
                    <CardTitle className="text-lg">Additional Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {additionalServices.map((task, index) => (
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
              Pricing based on square footage and carpet condition. We'll provide an accurate quote before we begin.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              Best For
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Professional carpet cleaning is perfect for these situations.
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
              We deliver exceptional results through professional equipment and trained technicians.
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
              Ideal Situations for Carpet Cleaning
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
              Ready for Fresh, Clean Carpets?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a free estimate for professional carpet cleaning. Healthier carpets for your family and pets.
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
