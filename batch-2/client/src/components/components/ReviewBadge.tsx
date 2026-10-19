import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function ReviewBadge() {
  return (
    <div 
      className="bg-white/95 dark:bg-card/95 backdrop-blur-sm border border-slate-200 dark:border-border shadow-md rounded-xl p-4"
      role="complementary"
      aria-label="Client reviews rating"
      data-testid="review-badge"
    >
      <div className="flex items-center gap-3">
        <span 
          className="text-2xl font-bold text-foreground"
          data-testid="text-rating"
        >
          5.0
        </span>
        
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, index) => (
              <Star 
                key={index} 
                className="w-4 h-4 fill-primary text-primary" 
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-medium">
            Client Reviews
          </span>
        </div>
      </div>
      
      <a 
        href="#" 
        className="block mt-3"
        data-testid="link-leave-review"
      >
        <Button 
          size="sm"
          className="w-full text-xs"
          data-testid="button-leave-review"
        >
          Leave a Review
        </Button>
      </a>
    </div>
  );
}
