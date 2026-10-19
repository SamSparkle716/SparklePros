import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

export default function Residential() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4 py-12">
      <div className="w-full max-w-lg flex flex-col items-center text-center">
        <img
          src="/logo.svg"
          alt="Sparkle Pros"
          className="h-16 md:h-20 mb-8"
          data-testid="img-logo"
        />

        <div className="p-4 rounded-full bg-accent/10 mb-6">
          <Sparkles className="h-12 w-12 text-accent" />
        </div>

        <h1
          className="text-2xl md:text-3xl font-bold mb-3 text-foreground"
          data-testid="text-coming-soon-title"
        >
          Residential Cleaning — Coming Soon
        </h1>

        <p className="text-muted-foreground mb-8 text-lg" data-testid="text-coming-soon-message">
          We're working on bringing our residential cleaning services to you. Check back soon!
        </p>

        <Link href="/">
          <Button variant="outline" size="lg" data-testid="button-go-back">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </Link>
      </div>
    </div>
  );
}
