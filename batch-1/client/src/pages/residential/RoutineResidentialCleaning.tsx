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
  Sofa,
  Bath,
  UtensilsCrossed,
  Bed,
  DoorOpen,
  Trash2
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
  { icon: Calendar, label: "Weekly / Bi-Weekly / Monthly" },
  { icon: Sparkles, label: "Consistent Quality Every Visit" },
  { icon: Clock, label: "Flexible Scheduling" },
  { icon: ClipboardCheck, label: "Detailed Cleaning Checklists" },
];

const standardTasks = [
  "Dusting all surfaces & furniture",
  "Vacuuming carpets & rugs",
  "Mopping hard floors",
  "Kitchen counters & appliances (exterior)",
  "Bathroom sanitization",
  "Trash removal & liner replacement",
  "Mirror & glass cleaning",
  "Bed making (linens straightened)",
  "Light switch & door handle wiping",
  "Cobweb removal (reachable areas)",
  "Entryway & hallway cleaning",
  "General tidying & organization",
];

const kitchenTasks = [
  "Counter & backsplash wiping",
  "Stovetop & range cleaning",
  "Microwave interior & exterior",
  "Sink & faucet sanitization",
  "Appliance exterior wiping",
  "Floor sweeping & mopping",
];

const bathroomTasks = [
  "Toilet cleaning & sanitization",
  "Shower & tub scrubbing",
  "Sink & vanity cleaning",
  "Mirror polishing",
  "Floor mopping with disinfectant",
  "Restocking toilet paper",
];

const frequencyOptions = [
  {
    title: "Weekly Cleaning",
    bestFor: "Busy families and professionals who want a consistently clean home without the hassle.",
    bullets: [
      "Full home cleaning each visit",
      "All rooms addressed weekly",
      "Same day/time each week",
    ],
    homes: "Families, Pet Owners, Busy Professionals",
  },
  {
    title: "Bi-Weekly Cleaning",
    bestFor: "Homeowners who maintain their space but need regular professional upkeep.",
    bullets: [
      "Thorough cleaning every two weeks",
      "More detailed attention each visit",
      "Great balance of cost & cleanliness",
    ],
    homes: "Couples, Small Families, Retirees",
  },
  {
    title: "Monthly Cleaning",
    bestFor: "Those who keep up with daily tasks but want a monthly refresh.",
    bullets: [
      "Comprehensive monthly deep clean",
      "Extra attention to detail",
      "Budget-friendly option",
    ],
    homes: "Singles, Light-Use Homes",
    isAddOn: false,
  },
];

const qualityPoints = [
  {
    icon: ClipboardCheck,
    title: "Checklist-Driven Service",
    description: "Every visit follows a detailed task checklist tailored to your home's needs.",
  },
  {
    icon: Users,
    title: "Consistent Team",
    description: "The same trusted cleaners each visit who know your home and preferences.",
  },
  {
    icon: AlertCircle,
    title: "Easy Communication",
    description: "Quick response to any special requests or concerns between visits.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Trusted",
    description: "All staff are background-checked, insured, and professionally trained.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll come back and make it right at no extra charge.",
  },
];

const processSteps = [
  { step: "1", title: "Free Consultation", description: "We learn about your home and cleaning needs." },
  { step: "2", title: "Custom Plan", description: "Tailored cleaning schedule with transparent pricing." },
  { step: "3", title: "First Cleaning", description: "Your dedicated team begins service." },
  { step: "4", title: "Ongoing Quality", description: "Consistent results with regular check-ins." },
];

const homeTypes = [
  { icon: Home, label: "Single Family" },
  { icon: DoorOpen, label: "Apartments" },
  { icon: Bed, label: "Condos" },
  { icon: Sofa, label: "Townhouses" },
  { icon: Bath, label: "Multi-Unit" },
  { icon: UtensilsCrossed, label: "Vacation Homes" },
];

const faqs = [
  {
    question: "What's included in routine residential cleaning?",
    answer: "Our routine cleaning covers all living areas including dusting, vacuuming, mopping, kitchen cleaning, bathroom sanitization, and trash removal. We follow a detailed checklist customized to your home.",
  },
  {
    question: "Do I need to be home during the cleaning?",
    answer: "No, many of our clients provide us with a key or access code. We maintain strict security protocols and all our staff are background-checked and bonded.",
  },
  {
    question: "Can I change my cleaning schedule?",
    answer: "Absolutely! We understand life changes. Just give us 24-48 hours notice to reschedule, and we'll accommodate your new time.",
  },
  {
    question: "Do you bring your own supplies?",
    answer: "Yes, we bring all professional-grade, eco-friendly cleaning supplies and equipment. If you prefer specific products, just let us know.",
  },
  {
    question: "What if I'm not satisfied with the cleaning?",
    answer: "Your satisfaction is guaranteed. If anything isn't up to your standards, contact us within 24 hours and we'll return to address it at no additional cost.",
  },
  {
    question: "Do you offer services for pet owners?",
    answer: "Yes! We're experienced with pet-friendly homes. We pay special attention to pet hair, odors, and areas your furry friends frequent.",
  },
];

export default function RoutineResidentialCleaning() {
  const { handleCtaClick } = useServiceSelection();

  useEffect(() => {
    const pageTitle = "Routine Residential Cleaning Buffalo NY | Sparkle Pros Services";
    const pageDescription = "Reliable routine residential cleaning in Buffalo, NY. Weekly, bi-weekly, or monthly service. Insured & bonded, background-checked staff. Free consultation.";
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
                  Routine Residential Cleaning in Buffalo, NY
                </h1>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Enjoy a consistently clean home with our reliable weekly, bi-weekly, or monthly cleaning service. 
                  Predictable scheduling, consistent results, and a spotless home waiting for you.
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
                    <Button size="lg" data-testid="button-book-consultation">
                      Book a Free Consultation
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
                    alt="Professional house cleaner providing routine residential cleaning in a Buffalo NY home"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    data-testid="img-hero-routine-residential-cleaning"
                  />
                </div>
                <Card className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[200px] shadow-lg bg-white/95 dark:bg-card/95 backdrop-blur-sm">
                  <CardContent className="p-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <p className="text-xs text-foreground font-medium">Same team every visit</p>
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
              Comprehensive cleaning tailored to your home's needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Standard Cleaning Tasks</CardTitle>
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
                    <CardTitle className="text-lg">Kitchen Cleaning</CardTitle>
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
                    <CardTitle className="text-lg">Bathroom Cleaning</CardTitle>
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
              Cleaning scope is customized during your consultation based on home size and specific needs.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              Frequency Options
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Choose the schedule that fits your lifestyle and budget.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {frequencyOptions.map((option, index) => (
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
                        <span className="font-medium">Best For:</span> {option.homes}
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
              We maintain the highest standards through trusted professionals and consistent service.
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
              Homes We Clean
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {homeTypes.map((home, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border hover-elevate">
                  <home.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-foreground text-center">{home.label}</span>
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
              Get Your Free Cleaning Consultation
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let us learn about your home and create a customized cleaning plan that fits your needs and budget. 
              No obligation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" onClick={handleCtaClick}>
                <Button size="lg" variant="secondary" data-testid="button-cta-consultation">
                  Book Your Free Consultation
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
