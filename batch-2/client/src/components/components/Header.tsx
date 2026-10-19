import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import ServicesDropdown from "./ServicesDropdown";
import { useServiceSelection } from "@/hooks/useServiceSelection";

const navItems = [
  { label: "Industries", href: "#industries", isAnchor: true },
  { label: "Reviews", href: "#reviews", isAnchor: true },
  { label: "FAQ", href: "#faq", isAnchor: true },
  { label: "Service Area", href: "#service-area", isAnchor: true },
  { label: "Contact Us", href: "/contact", isAnchor: false },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { handleCtaClick } = useServiceSelection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-primary text-primary-foreground py-2 text-sm" data-testid="section-top-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span data-testid="text-location">Serving Buffalo, NY & surrounding areas</span>
          <span className="text-center sm:text-right text-xs sm:text-sm opacity-90" data-testid="text-trust-signals">
            Insured & Bonded • Background-Checked • OSHA-Trained • Green Cleaning
          </span>
        </div>
      </div>
      
      <header
        className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
        data-testid="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 gap-4">
            <Link href="/" className="flex items-center" data-testid="link-logo">
              <div className="h-12 md:h-14 w-[200px] md:w-[250px] flex items-center justify-center">
                <img
                  src="/logo.svg"
                  alt="Sparkle Pros – Commercial & Residential Janitorial Services"
                  className="h-full w-full object-contain block"
                  style={{ maxHeight: "none", maxWidth: "none" }}
                  data-testid="img-logo"
                />
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
              <ServicesDropdown isActive={activeSection === "services"} />
              {navItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover-elevate whitespace-nowrap ${
                      activeSection === item.href.replace("#", "")
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium rounded-md transition-colors hover-elevate whitespace-nowrap text-muted-foreground hover:text-foreground"
                    onClick={item.href === "/contact" ? handleCtaClick : undefined}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link href="/contact" className="hidden sm:flex" onClick={handleCtaClick}>
                <Button variant="outline" size="sm" data-testid="button-call-header">
                  <Phone className="w-4 h-4 mr-2" />
                  716-500-0506
                </Button>
              </Link>

              <Link href="/contact" className="hidden sm:flex" onClick={handleCtaClick}>
                <Button size="sm" data-testid="button-book-header">
                  Book a Walkthrough
                </Button>
              </Link>

              <button
                className="lg:hidden p-2 rounded-md hover-elevate"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t" data-testid="nav-mobile">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              <ServicesDropdown 
                isMobile={true} 
                onItemClick={() => setIsMobileMenuOpen(false)}
                isActive={activeSection === "services"} 
              />
              {navItems.map((item) => (
                item.isAnchor ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                      activeSection === item.href.replace("#", "")
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-nav-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-sm font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                    onClick={() => {
                      if (item.href === "/contact") handleCtaClick();
                      setIsMobileMenuOpen(false);
                    }}
                    data-testid={`link-nav-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
