import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, ClipboardCheck, Leaf, Clock } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Insured & Vetted Team",
    description: "Our staff is background-checked and fully insured for your peace of mind.",
  },
  {
    icon: ClipboardCheck,
    title: "Consistent Cleaning Checklists",
    description: "Every visit follows detailed checklists for reliable, repeatable results.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "Green cleaning products available for a healthier home environment.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Weekly, bi-weekly, or custom schedules that fit your lifestyle.",
  },
];

export default function ResidentialWhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-residential-why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-residential-why-us-title">
            Why Homeowners Choose Sparkle Pros
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover-elevate transition-all" data-testid={`card-residential-why-us-${index}`}>
              <CardHeader>
                <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <reason.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-lg" data-testid={`text-residential-why-us-title-${index}`}>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground" data-testid={`text-residential-why-us-description-${index}`}>{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center font-semibold text-foreground mt-10 text-lg" data-testid="text-residential-why-us-tagline">
          Insured & bonded — professional care for your home.
        </p>
      </div>
    </section>
  );
}
