import type { KeyboardEvent } from "react";
import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Building2, Sparkles, Droplets, HardHat, ChevronDown, Home, Calendar, Truck } from "lucide-react";

const commercialServices = [
  {
    label: "Commercial Routine Cleaning",
    href: "/commercial/services/routine-cleaning",
    description: "Daily/weekly janitorial & checklist cleaning",
    icon: Building2,
  },
  {
    label: "Commercial Carpet Cleaning",
    href: "/commercial/services/carpet-cleaning",
    description: "Hot-water extraction & stain removal",
    icon: Sparkles,
  },
  {
    label: "Power Wash",
    href: "/commercial/services/power-wash",
    description: "Sidewalks, storefronts, loading areas",
    icon: Droplets,
  },
  {
    label: "Post Construction Cleaning",
    href: "/commercial/services/post-construction",
    description: "Final-clean for renovations & new builds",
    icon: HardHat,
  },
];

const residentialServices = [
  {
    label: "Routine Residential Cleaning",
    href: "/residential/services/routine-cleaning",
    description: "Weekly/bi-weekly home cleaning",
    icon: Calendar,
  },
  {
    label: "Deep Cleaning",
    href: "/residential/services/deep-cleaning",
    description: "Detailed first-time or seasonal cleans",
    icon: Sparkles,
  },
  {
    label: "Move-In / Move-Out",
    href: "/residential/services/move-in-move-out",
    description: "Empty-home deep clean for moves",
    icon: Truck,
  },
  {
    label: "Residential Carpet Cleaning",
    href: "/residential/services/carpet-cleaning",
    description: "Professional carpet & upholstery care",
    icon: Home,
  },
];

const allServices = [...commercialServices, ...residentialServices];

interface ServicesDropdownProps {
  isMobile?: boolean;
  onItemClick?: () => void;
  isActive?: boolean;
}

export default function ServicesDropdown({ isMobile = false, onItemClick, isActive = false }: ServicesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuItemsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setFocusedIndex(-1);
    }, 150);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setFocusedIndex(-1);
    }
  };

  const handleItemClick = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
    onItemClick?.();
  };

  const handleKeyDown = useCallback((event: KeyboardEvent<HTMLElement>) => {
    if (!isOpen && (event.key === "Enter" || event.key === " " || event.key === "ArrowDown")) {
      event.preventDefault();
      setIsOpen(true);
      setFocusedIndex(0);
      return;
    }

    if (!isOpen) return;

    switch (event.key) {
      case "Escape":
        event.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
      case "ArrowDown":
        event.preventDefault();
        setFocusedIndex((prev) => (prev + 1) % allServices.length);
        break;
      case "ArrowUp":
        event.preventDefault();
        setFocusedIndex((prev) => (prev - 1 + allServices.length) % allServices.length);
        break;
      case "Tab":
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && menuItemsRef.current[focusedIndex]) {
      menuItemsRef.current[focusedIndex]?.focus();
    }
  }, [focusedIndex, isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (isMobile) {
    return (
      <div className="w-full" ref={dropdownRef}>
        <button
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md transition-colors ${
            isActive
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          }`}
          data-testid="button-services-dropdown-mobile"
          aria-expanded={isOpen}
          aria-haspopup="menu"
          aria-controls="services-menu-mobile"
        >
          <span>Services</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div 
            id="services-menu-mobile"
            className="mt-1 ml-4 border-l-2 border-[#A5D5E4] pl-2" 
            data-testid="dropdown-services-mobile"
            role="menu"
            aria-label="Services submenu"
          >
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-[#A5D5E4]/30">
              Commercial
            </div>
            {commercialServices.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => { menuItemsRef.current[index] = el; }}
                onClick={handleItemClick}
                onKeyDown={handleKeyDown}
                className="flex items-start gap-3 px-4 py-3 rounded-md transition-colors hover:bg-[#A5D5E4]/20 focus:bg-[#A5D5E4]/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                data-testid={`link-service-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                role="menuitem"
                tabIndex={focusedIndex === index ? 0 : -1}
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-medium text-[#195D78] dark:text-[#A5D5E4]">{item.label}</span>
                  <span className="block text-xs text-muted-foreground">{item.description}</span>
                </div>
              </Link>
            ))}
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-t border-b border-[#A5D5E4]/30">
              Residential
            </div>
            {residentialServices.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                ref={(el) => { menuItemsRef.current[commercialServices.length + index] = el; }}
                onClick={handleItemClick}
                onKeyDown={handleKeyDown}
                className="flex items-start gap-3 px-4 py-3 rounded-md transition-colors hover:bg-[#A5D5E4]/20 focus:bg-[#A5D5E4]/20 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                data-testid={`link-service-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                role="menuitem"
                tabIndex={focusedIndex === commercialServices.length + index ? 0 : -1}
              >
                <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-sm font-medium text-[#195D78] dark:text-[#A5D5E4]">{item.label}</span>
                  <span className="block text-xs text-muted-foreground">{item.description}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover-elevate focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
          isActive || isOpen
            ? "text-primary bg-primary/10"
            : "text-muted-foreground hover:text-foreground"
        }`}
        data-testid="button-services-dropdown"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls="services-menu-desktop"
      >
        <span>Services</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div
          id="services-menu-desktop"
          className="absolute top-full left-0 mt-1 w-72 bg-white dark:bg-card border border-[#A5D5E4] rounded-md shadow-lg z-50 max-h-[80vh] overflow-y-auto"
          data-testid="dropdown-services-desktop"
          role="menu"
          aria-label="Services menu"
        >
          <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/30">
            Commercial
          </div>
          {commercialServices.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => { menuItemsRef.current[index] = el; }}
              onClick={handleItemClick}
              onKeyDown={handleKeyDown}
              className="flex items-start gap-3 px-4 py-3 transition-colors hover:bg-[#A5D5E4]/20 focus:bg-[#A5D5E4]/20 focus:outline-none"
              data-testid={`link-service-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              role="menuitem"
              tabIndex={focusedIndex === index ? 0 : -1}
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-medium text-[#195D78] dark:text-[#A5D5E4]">{item.label}</span>
                <span className="block text-xs text-muted-foreground">{item.description}</span>
              </div>
            </Link>
          ))}
          <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider bg-muted/30 border-t border-[#A5D5E4]/30">
            Residential
          </div>
          {residentialServices.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => { menuItemsRef.current[commercialServices.length + index] = el; }}
              onClick={handleItemClick}
              onKeyDown={handleKeyDown}
              className={`flex items-start gap-3 px-4 py-3 transition-colors hover:bg-[#A5D5E4]/20 focus:bg-[#A5D5E4]/20 focus:outline-none ${
                index === residentialServices.length - 1 ? "rounded-b-md" : ""
              }`}
              data-testid={`link-service-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              role="menuitem"
              tabIndex={focusedIndex === commercialServices.length + index ? 0 : -1}
            >
              <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-medium text-[#195D78] dark:text-[#A5D5E4]">{item.label}</span>
                <span className="block text-xs text-muted-foreground">{item.description}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
