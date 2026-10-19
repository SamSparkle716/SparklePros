import { Link } from "wouter";
import { Building2, Home, ArrowRight, Phone, Mail, MapPin, Users, ClipboardCheck, Calendar, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const commercialBullets = [
  "Office buildings & corporate spaces",
  "Medical & dental facilities",
  "Retail stores & shopping centers",
  "Schools, gyms & warehouses",
];

const residentialBullets = [
  "Deep cleaning & move-in/move-out",
  "Recurring weekly/bi-weekly service",
  "Eco-friendly products available",
  "Trusted local professionals",
];

const trustChips = [
  "Insured & Bonded",
  "Background-Checked Staff",
  "OSHA-Trained",
  "Green Cleaning Options",
];

const serviceAreas = [
  "Buffalo", "Amherst", "Cheektowaga", "Tonawanda", "Clarence", 
  "West Seneca", "Lancaster", "Hamburg", "Orchard Park", "Lackawanna", "Grand Island"
];

const navLinks = [
  { label: "Commercial", href: "#choose" },
  { label: "Residential", href: "#choose" },
  { label: "Service Area", href: "#service-area" },
  { label: "Contact", href: "#contact" },
];

export default function EntryGate() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b" data-testid="entry-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 gap-4 flex-wrap">
            <Link href="/" className="flex items-center" data-testid="link-logo">
              <div className="h-12 md:h-14 w-[200px] md:w-[250px] flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="Sparkle Pros – Commercial & Residential Janitorial Services"
                  className="h-full w-full object-contain block"
                  style={{ maxHeight: "none", maxWidth: "none" }}
                  data-testid="img-header-logo"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" data-testid="nav-entry-desktop">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.replace("#", ""))}
                  className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover-elevate text-muted-foreground whitespace-nowrap"
                  data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <a href="tel:716-500-0506" className="hidden sm:flex">
                <Button variant="outline" size="sm" data-testid="button-call-entry">
                  <Phone className="w-4 h-4 mr-2" />
                  716-500-0506
                </Button>
              </a>
              <Link href="/commercial">
                <Button size="sm" data-testid="button-book-entry">
                  Book a Walkthrough
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center" data-testid="section-entry-hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/buffalo-skyline.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-primary-foreground/80 text-sm font-semibold tracking-wider uppercase mb-4" data-testid="text-eyebrow">
              Buffalo, NY &bull; Erie County
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
              Professional Cleaning for Businesses & Homes
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed" data-testid="text-hero-subtitle">
              Sparkle Pros provides reliable commercial and residential cleaning across Erie County, routine service, carpet cleaning, power washing, and post-construction cleanup.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {trustChips.map((chip) => (
                <Badge 
                  key={chip} 
                  variant="secondary" 
                  className="bg-white/20 text-white border-white/30 backdrop-blur-sm"
                  data-testid={`badge-trust-${chip.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {chip}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("choose")}
                className="text-base"
                data-testid="button-choose-service"
              >
                Choose a Service Type
              </Button>
              <a href="tel:716-500-0506">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base w-full sm:w-auto bg-white/10 border-white/30 text-white backdrop-blur-sm"
                  data-testid="button-call-hero"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call 716-500-0506
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Section */}
      <section id="choose" className="py-16 md:py-24 bg-muted/30" data-testid="section-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-choose-title">
              Choose Your Service Type
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-choose-subtitle">
              Select the cleaning service that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Commercial Card */}
            <Link href="/commercial" data-testid="link-commercial">
              <Card className="cursor-pointer overflow-hidden rounded-2xl border hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="/images/hero-bg.jpg" 
                    alt="Commercial Cleaning"
                    className="w-full h-full object-cover"
                    data-testid="img-commercial-card"
                  />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground" data-testid="badge-recommended">
                    Recommended
                  </Badge>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Building2 className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      Commercial Cleaning
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Professional cleaning services for businesses of all sizes across Western New York.
                  </p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {commercialBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full" data-testid="button-enter-commercial">
                    Enter Commercial Site
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </Link>

            {/* Residential Card */}
            <Link href="/residential" data-testid="link-residential">
              <Card className="cursor-pointer overflow-hidden rounded-2xl border hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src="/clean%20Bedroom.avif" 
                    alt="Residential Cleaning"
                    className="w-full h-full object-cover"
                    data-testid="img-residential-card"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-accent/10">
                      <Home className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                      Residential Cleaning
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    Keep your home spotless with our trusted residential cleaning services.
                  </p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {residentialBullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full" data-testid="button-enter-residential">
                    Enter Residential Site
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* About + Trust Section */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
              About Sparkle Pros
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed" data-testid="text-about-description">
              Sparkle Pros is a Buffalo-based cleaning company serving Erie County with consistent, checklist-driven service. We're built for reliability, clear communication, predictable scheduling, and professional standards that reduce risk for facility managers and homeowners alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Reliable Schedules</h3>
              <p className="text-muted-foreground text-sm">Daily, weekly, and custom plans.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Professional Teams</h3>
              <p className="text-muted-foreground text-sm">Background-checked, OSHA-trained staff.</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <ClipboardCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Quality Control</h3>
              <p className="text-muted-foreground text-sm">Consistent standards and oversight.</p>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/commercial">
              <Button size="lg" data-testid="button-book-about">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Walkthrough
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="service-area" className="py-16 md:py-24 bg-muted/30" data-testid="section-service-area">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-service-area-title">
              Serving Buffalo & Erie County, NY
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8" data-testid="text-service-area-description">
              We provide professional cleaning services throughout Western New York.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {serviceAreas.map((area) => (
              <Badge 
                key={area} 
                variant="secondary" 
                className="text-sm py-1.5 px-3"
                data-testid={`badge-area-${area.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {area}
              </Badge>
            ))}
            <Badge variant="outline" className="text-sm py-1.5 px-3" data-testid="badge-area-surrounding">
              + surrounding towns
            </Badge>
          </div>

          <div className="text-center">
            <Link href="/commercial#service-area">
              <Button variant="outline" size="lg" data-testid="button-view-service-area">
                View Commercial Service Area
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Strip */}
      <section id="contact" className="py-12 md:py-16 bg-primary text-primary-foreground" data-testid="section-contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>
              <p className="text-primary-foreground/80 text-sm">Ready to get started?</p>
            </div>

            <a href="tel:716-500-0506" className="flex items-center justify-center md:justify-start gap-2 hover:opacity-80 transition-opacity" data-testid="link-contact-phone">
              <Phone className="w-5 h-5" />
              <span className="font-medium">716-500-0506</span>
            </a>

            <a href="mailto:Info@sparklepros.us" className="flex items-center justify-center md:justify-start gap-2 hover:opacity-80 transition-opacity" data-testid="link-contact-email">
              <Mail className="w-5 h-5" />
              <span className="font-medium">Info@sparklepros.us</span>
            </a>

            <div className="flex items-center justify-center md:justify-start gap-2" data-testid="text-contact-address">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">7078 Transit Rd, Buffalo, NY</span>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/commercial">
              <Button size="lg" variant="secondary" data-testid="button-book-contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Walkthrough
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12" data-testid="section-entry-footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="h-24 md:h-28 w-auto mb-4 flex justify-center">
                <img
                  src="/logo.svg"
                  alt="Sparkle Pros Janitorial Services"
                  className="h-full w-auto object-contain block"
                  data-testid="img-footer-logo"
                />
              </div>
              <p className="text-sm text-slate-400">
                Commercial & Residential Janitorial Services across Erie County, NY.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/commercial" className="text-sm" data-testid="link-footer-commercial">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link href="/residential" className="text-sm" data-testid="link-footer-residential">
                    Residential
                  </Link>
                </li>
                <li>
                  <button onClick={() => scrollToSection("service-area")} className="text-sm" data-testid="link-footer-service-area">
                    Service Area
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("contact")} className="text-sm" data-testid="link-footer-contact">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="tel:716-500-0506" className="flex items-center gap-2" data-testid="link-footer-phone">
                    <Phone className="w-4 h-4" />
                    716-500-0506
                  </a>
                </li>
                <li>
                  <a href="mailto:Info@sparklepros.us" className="flex items-center gap-2" data-testid="link-footer-email">
                    <Mail className="w-4 h-4" />
                    Info@sparklepros.us
                  </a>
                </li>
                <li className="flex items-center gap-2" data-testid="text-footer-address">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  7078 Transit Rd, Buffalo, NY
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-500">
            &copy; {currentYear} Sparkle Pros. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
