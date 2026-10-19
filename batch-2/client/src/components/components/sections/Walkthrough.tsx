import { Card } from "@/components/ui/card";
import WalkthroughForm from "../WalkthroughForm";

export default function Walkthrough() {
  return (
    <section id="walkthrough" className="py-16 lg:py-24 bg-primary/5" data-testid="section-walkthrough">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-walkthrough-title">
            Book a Walkthrough
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto" data-testid="text-walkthrough-subtitle">
            Tell us about your facility. We'll confirm scope and schedule.
          </p>
        </div>

        <Card className="p-6 sm:p-8 lg:p-10 shadow-lg" data-testid="card-walkthrough-form">
          <WalkthroughForm isInline />
        </Card>
      </div>
    </section>
  );
}
