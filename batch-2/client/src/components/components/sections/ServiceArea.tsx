import { MapPin } from "lucide-react";

const serviceAreas = [
  "Buffalo", "Grand Island", "Tonawanda", "Amherst", "Clarence", "Newstead",
  "Cheektowaga", "Lancaster", "Alden", "West Seneca", "Lackawanna", "Hamburg",
  "Orchard Park", "Elma", "Marilla", "Aurora", "Wales", "Evans", "Eden",
  "Boston", "Colden", "Holland", "Brant", "North Collins", "Collins",
  "Concord", "Sardinia"
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-16 lg:py-24 bg-muted/30" data-testid="section-service-area">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-service-area-title">
            Serving Buffalo, NY & Surrounding Areas
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2" data-testid="list-service-areas">
              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-foreground py-1"
                  data-testid={`text-service-area-${index}`}
                >
                  <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div 
              className="rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700" 
              data-testid="card-service-area-image"
            >
              <img
                src="/buffalo-skyline.jpg"
                alt="Buffalo, NY skyline - commercial cleaning service area"
                className="w-full h-56 sm:h-72 lg:h-[360px] object-cover object-center"
                data-testid="img-buffalo-skyline"
              />
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-10 max-w-lg mx-auto" data-testid="text-service-area-note">
          Not sure if you're in range? Send your address—we'll confirm quickly.
        </p>
      </div>
    </section>
  );
}
