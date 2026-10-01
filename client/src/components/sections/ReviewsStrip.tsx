import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function ReviewsStrip() {
  const [, setLocation] = useLocation();

  return (
    <section 
      className="relative bg-gradient-to-r from-primary to-primary-deep py-4 sm:py-5"
      data-testid="section-reviews-strip"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <span 
              className="text-3xl sm:text-4xl font-bold text-white"
              data-testid="text-rating"
            >
              5.0
            </span>
            
            <div className="flex items-center gap-1" data-testid="stars-container">
              {[...Array(5)].map((_, index) => (
                <Star 
                  key={index} 
                  className="w-5 h-5 sm:w-6 sm:h-6 fill-[#A5D5E4] text-[#A5D5E4]" 
                  data-testid={`star-${index}`}
                />
              ))}
            </div>
            
            <span 
              className="text-white/90 text-sm sm:text-base font-medium"
              data-testid="text-reviews-label"
            >
              Clients Reviews
            </span>
          </div>
          
          <a href="#" data-testid="link-leave-review">
            <Button 
              variant="secondary" 
              size="sm"
              className="whitespace-nowrap"
              data-testid="button-leave-review"
            >
              Leave A Review
            </Button>
          </a>
        </div>
      </div>
      
      <button
        onClick={() => setLocation("/contact")}
        className="hidden lg:flex absolute -bottom-10 right-8 w-20 h-20 rounded-full bg-primary border-4 border-white shadow-lg items-center justify-center cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover-elevate"
        aria-label="Contact Us"
        data-testid="button-contact-badge"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text className="text-[8px] fill-white font-semibold tracking-[0.15em] uppercase">
              <textPath href="#circlePath">
                CONTACT US • CONTACT US • CONTACT US •
              </textPath>
            </text>
          </svg>
          <span className="text-white font-bold text-sm z-10">SP</span>
        </div>
      </button>
    </section>
  );
}
