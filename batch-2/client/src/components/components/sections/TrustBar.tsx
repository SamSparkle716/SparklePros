import { Card } from "@/components/ui/card";
import { CalendarDays, ShieldCheck, Leaf, Moon } from "lucide-react";

const features = [
  {
    icon: CalendarDays,
    title: "Consistent Schedules",
    description: "Daily, weekly, or monthly plans with reliable crews and clear checklists.",
  },
  {
    icon: ShieldCheck,
    title: "Insured & Bonded Staff",
    description: "Fully insured and bonded, with background-checked team members.",
  },
  {
    icon: Leaf,
    title: "OSHA + Green Options",
    description: "OSHA-trained teams with green cleaning options available upon request.",
  },
  {
    icon: Moon,
    title: "After-Hours Service",
    description: "Night and off-hour cleaning to minimize disruption to your business.",
  },
];

export default function TrustBar() {
  return (
    <section 
      className="relative z-20 -mt-16 md:-mt-20 pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8" 
      data-testid="section-trust-bar"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-5 lg:p-6 text-center hover-elevate" 
              data-testid={`card-trust-feature-${index}`}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-base mb-2" data-testid={`text-trust-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-trust-description-${index}`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
