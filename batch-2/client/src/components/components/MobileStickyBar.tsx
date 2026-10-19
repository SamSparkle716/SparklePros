import { Link } from "wouter";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useServiceSelection } from "@/hooks/useServiceSelection";

export default function MobileStickyBar() {
  const { handleCtaClick } = useServiceSelection();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-background border-t shadow-lg" data-testid="mobile-sticky-bar">
      <div className="grid grid-cols-2 gap-2 p-3">
        <Link href="/contact" className="block" onClick={handleCtaClick}>
          <Button variant="outline" className="w-full" size="lg" data-testid="button-call-mobile">
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </Link>
        <Link href="/contact" className="block" onClick={handleCtaClick}>
          <Button className="w-full" size="lg" data-testid="button-book-mobile">
            <Calendar className="w-4 h-4 mr-2" />
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
