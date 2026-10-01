import { ClipboardList, FileText, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Walkthrough & Scope",
    step: 1,
  },
  {
    icon: FileText,
    title: "Clear Plan & Schedule",
    step: 2,
  },
  {
    icon: Truck,
    title: "Service Delivery",
    step: 3,
  },
  {
    icon: CheckCircle,
    title: "Quality Control",
    step: 4,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 lg:py-24 bg-muted/30" data-testid="section-process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-process-title">
            Simple Process. Consistent Results.
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, index) => (
            <div key={index} className="text-center relative" data-testid={`process-step-${index}`}>
              <div className="relative inline-block mb-4">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-primary flex items-center justify-center mx-auto">
                  <item.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm" data-testid={`text-step-number-${index}`}>
                  {item.step}
                </div>
              </div>
              <h3 className="font-semibold text-foreground text-sm lg:text-base" data-testid={`text-step-title-${index}`}>
                {item.title}
              </h3>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
