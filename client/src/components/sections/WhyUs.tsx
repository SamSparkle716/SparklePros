import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Award, UserCheck, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Reliable Schedules",
    description: "Consistent service that keeps your facility client-ready.",
  },
  {
    icon: Award,
    title: "Professional Standards",
    description: "OSHA-trained teams with documented processes.",
  },
  {
    icon: UserCheck,
    title: "Trusted Staff",
    description: "Background-checked professionals you can feel confident about.",
  },
  {
    icon: Leaf,
    title: "Green Cleaning Options",
    description: "Cleaner spaces with responsible products and methods.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-24 bg-background" data-testid="section-why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-why-us-title">
            A Cleaning Partner That Reduces Risk
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover-elevate transition-all" data-testid={`card-why-us-${index}`}>
              <CardHeader>
                <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <reason.icon className="w-7 h-7 text-accent" />
                </div>
                <CardTitle className="text-lg" data-testid={`text-why-us-title-${index}`}>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground" data-testid={`text-why-us-description-${index}`}>{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-center font-semibold text-foreground mt-10 text-lg" data-testid="text-why-us-tagline">
          Insured & bonded — built for commercial expectations.
        </p>
      </div>
    </section>
  );
}
