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
  Building2,
  Shield,
  ShieldCheck,
  UserCheck,
  Leaf,
  Sun,
  Moon,
  ClipboardCheck,
  Users,
  Stethoscope,
  Car,
  ShoppingBag,
  Home,
  Warehouse,
  Phone,
  FileCheck,
  AlertCircle,
  BadgeCheck,
  Sparkles
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

const quickScopeItems = [
  { icon: Calendar, label: "Daily / Weekly Programs" },
  { icon: Sparkles, label: "Monthly Deep Cleaning Add-On" },
  { icon: Clock, label: "Daytime or After-Hours" },
  { icon: ClipboardCheck, label: "Checklist + Supervisor QA" },
];

const standardTasks = [
  "Trash removal & liner replacement",
  "Dusting of desks, fixtures & ledges",
  "Vacuuming carpets & mats",
  "Mopping hard floors",
  "Spot cleaning walls & doors",
  "Glass & mirror cleaning (interior)",
  "Breakroom counter wiping",
  "Kitchen sink & appliance wipe-down",
  "Lobby & entrance upkeep",
  "Elevator & stairwell cleaning",
  "Conference room reset",
  "Detail work & edge cleaning",
];

const highTouchTasks = [
  "Door handles & push plates",
  "Light switches",
  "Elevator buttons",
  "Handrails",
  "Shared equipment surfaces",
  "Reception desk areas",
];

const restroomTasks = [
  "Toilet & urinal sanitization",
  "Sink & counter disinfection",
  "Mirror polishing",
  "Floor mopping with disinfectant",
  "Restocking paper & soap",
  "Trash removal",
];

const frequencyOptions = [
  {
    title: "Daily Cleaning",
    bestFor: "High-traffic facilities needing consistent presentation and hygiene every day.",
    bullets: [
      "Full scope cleaning each visit",
      "Restrooms serviced daily",
      "Trash removed nightly",
    ],
    facilities: "Offices, Medical, Dealerships",
  },
  {
    title: "Weekly Cleaning",
    bestFor: "Lower-traffic spaces that need regular maintenance without daily service.",
    bullets: [
      "Comprehensive weekly deep clean",
      "All common areas addressed",
      "Flexible day scheduling",
    ],
    facilities: "Small Offices, Retail, Warehouses",
  },
  {
    title: "Monthly Deep Cleaning",
    bestFor: "Add-on service for detailed work beyond routine scope.",
    bullets: [
      "Baseboard & vent cleaning",
      "Light fixture dusting",
      "High-reach cobweb removal",
    ],
    facilities: "All Facility Types",
    isAddOn: true,
  },
];

const qualityPoints = [
  {
    icon: ClipboardCheck,
    title: "Checklist-Driven Service",
    description: "Every visit follows a detailed task checklist tailored to your facility.",
  },
  {
    icon: Users,
    title: "Supervisor Inspections",
    description: "Regular quality audits ensure standards are maintained consistently.",
  },
  {
    icon: AlertCircle,
    title: "Issue Reporting & Resolution",
    description: "Rapid response system for any concerns or special requests.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    description: "Proper chemical labeling, SDS sheets, and safety protocols in place.",
  },
  {
    icon: BadgeCheck,
    title: "Vetted & Trained Staff",
    description: "Background checks, ongoing training, and professional conduct standards.",
  },
];

const processSteps = [
  { step: "1", title: "Walkthrough & Scope", description: "We assess your facility and understand your needs." },
  { step: "2", title: "Custom Plan & Schedule", description: "Tailored cleaning plan with clear pricing." },
  { step: "3", title: "Onboarding & Kickoff", description: "Team assignment and access coordination." },
  { step: "4", title: "Ongoing QA + Reporting", description: "Regular inspections and performance updates." },
];

const industries = [
  { icon: Building2, label: "Offices" },
  { icon: Stethoscope, label: "Medical/Dental" },
  { icon: Car, label: "Car Dealerships" },
  { icon: ShoppingBag, label: "Retail" },
  { icon: Home, label: "Property Management" },
  { icon: Warehouse, label: "Warehouses" },
];

const faqs = [
  {
    question: "How quickly can you start service?",
    answer: "After your walkthrough and approval, we can typically begin within 3–5 business days. For urgent needs, ask about expedited onboarding.",
  },
  {
    question: "Do you provide cleaning supplies and equipment?",
    answer: "Yes, we supply all professional-grade cleaning products, equipment, and consumables. We can also accommodate special product requests or green cleaning preferences.",
  },
  {
    question: "What happens if we're not satisfied with a cleaning?",
    answer: "We have a rapid resolution process. Contact us within 24 hours and we'll send a supervisor to address any issues at no additional charge.",
  },
  {
    question: "Are your staff background-checked?",
    answer: "Absolutely. All team members undergo thorough background screening, reference checks, and ongoing training before being assigned to any facility.",
  },
  {
    question: "Can you clean during business hours or after hours?",
    answer: "We offer flexible scheduling including early morning, daytime, evening, and overnight options to minimize disruption to your operations.",
  },
  {
    question: "How do you handle security and access?",
    answer: "We follow strict key/access protocols, maintain detailed logs, and can work with your building management or security team to ensure compliance with your policies.",
  },
];

export default function RoutineCommercialCleaning() {
  const { handleCtaClick } = useServiceSelection();

  useEffect(() => {
    const pageTitle = "Routine Commercial Cleaning Buffalo NY | Sparkle Pros Services";
    const pageDescription = "Reliable routine commercial cleaning in Buffalo, NY. Insured & bonded, background-checked staff, OSHA-trained. Free walkthrough and custom cleaning plans.";
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
                  Routine Commercial Cleaning in Buffalo, NY
                </h1>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Consistent, reliable cleaning that keeps your facility compliant, professional, 
                  and ready for business—with minimal disruption to your operations.
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
                      Book a Free Walkthrough
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
                    alt="Professional janitorial team providing routine commercial cleaning in an office building in Buffalo NY"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                    data-testid="img-hero-routine-cleaning"
                  />
                </div>
                <Card className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 max-w-[200px] shadow-lg bg-white/95 dark:bg-card/95 backdrop-blur-sm">
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
              Comprehensive cleaning tailored to your facility's needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Standard Routine Tasks</CardTitle>
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
                    <CardTitle className="text-lg">High-Touch Disinfection Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {highTouchTasks.map((task, index) => (
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
                    <CardTitle className="text-lg">Restroom & Breakroom Standards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {restroomTasks.map((task, index) => (
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
              Scope is customized after walkthrough based on traffic, floor types, and compliance needs.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 text-center">
              Frequency Options
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Choose the schedule that fits your facility's needs and budget.
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
                        <span className="font-medium">Typical Facilities:</span> {option.facilities}
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
              Quality Control & Compliance
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              We maintain the highest standards through systematic processes and accountability.
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
              Industries We Serve
            </h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background border hover-elevate">
                  <industry.icon className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium text-foreground text-center">{industry.label}</span>
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
              Schedule a Walkthrough (Free Quote Included)
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let us assess your facility and create a customized cleaning plan that fits your needs and budget. 
              No obligation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" onClick={handleCtaClick}>
                <Button size="lg" variant="secondary" data-testid="button-cta-walkthrough">
                  Book Your Free Walkthrough
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
