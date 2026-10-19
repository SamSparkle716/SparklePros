import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Stethoscope, 
  ShoppingBag, 
  Warehouse, 
  GraduationCap,
  Car,
  Home,
  Users,
  MapPin,
  CheckCircle2,
  Sparkles,
  Shield
} from "lucide-react";

const industriesByArea = [
  {
    icon: Building2,
    title: "Office Buildings & Corporate Campuses",
    description: "From downtown Buffalo high-rises to suburban office parks in Amherst and Williamsville, we provide comprehensive cleaning for professional workspaces of all sizes.",
    areas: ["Buffalo", "Amherst", "Williamsville", "Clarence", "Orchard Park"]
  },
  {
    icon: Stethoscope,
    title: "Medical & Healthcare Facilities",
    description: "Hospitals, clinics, dental offices, and specialty care centers require stringent sanitation standards. Our trained crews understand healthcare cleaning protocols.",
    areas: ["Buffalo", "Cheektowaga", "West Seneca", "Amherst", "Tonawanda"]
  },
  {
    icon: ShoppingBag,
    title: "Retail & Shopping Centers",
    description: "Clean retail environments drive customer confidence. We service malls, strip centers, and standalone stores throughout Erie County.",
    areas: ["Cheektowaga", "Hamburg", "Amherst", "Buffalo", "Orchard Park"]
  },
  {
    icon: Warehouse,
    title: "Industrial & Warehouse Facilities",
    description: "Manufacturing plants, distribution centers, and warehouses in Lancaster, Cheektowaga, and Tonawanda trust us for reliable industrial cleaning.",
    areas: ["Lancaster", "Cheektowaga", "Tonawanda", "Lackawanna", "Depew"]
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Schools, training centers, and educational facilities across Erie County rely on our thorough cleaning to maintain healthy learning environments.",
    areas: ["Buffalo", "Amherst", "Cheektowaga", "Tonawanda", "West Seneca"]
  },
  {
    icon: Car,
    title: "Car Dealerships & Auto Services",
    description: "Showrooms, service bays, and customer areas require specialized attention. We keep automotive businesses looking their best.",
    areas: ["West Seneca", "Amherst", "Cheektowaga", "Hamburg", "Tonawanda"]
  },
];

const serviceTypes = [
  {
    title: "Routine Commercial Cleaning",
    description: "Daily, weekly, or custom-scheduled cleaning for offices, lobbies, restrooms, break rooms, and common areas. Consistent service that keeps your facility presentable every day.",
    benefits: ["Flexible scheduling", "Consistent crews", "Quality inspections", "Green cleaning options"]
  },
  {
    title: "Commercial Carpet Cleaning",
    description: "Deep extraction cleaning removes embedded dirt, stains, and allergens from high-traffic carpet areas. Extends carpet life and improves indoor air quality.",
    benefits: ["Hot water extraction", "Fast drying times", "Stain treatment", "Deodorizing"]
  },
  {
    title: "Commercial Power Washing",
    description: "Exterior cleaning for building facades, sidewalks, parking lots, loading docks, and entryways. Removes grime, mold, and pollutants to maintain curb appeal.",
    benefits: ["Surface-safe methods", "Environmental controls", "OSHA-compliant", "Scheduled service"]
  },
];

export default function ErieCountySEO() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-erie-county-seo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-erie-county-title">
            Commercial Cleaning Services Across Erie County, NY
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sparkle Pros delivers professional commercial cleaning throughout Erie County, serving businesses in Buffalo and surrounding communities with reliable, thorough service.
          </p>
        </div>

        <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground mb-12" data-testid="text-erie-intro">
          <p>
            Looking for commercial cleaning in Erie County, NY? As a locally owned company based in Buffalo, Sparkle Pros understands the unique needs of Erie County businesses. From the bustling downtown Buffalo business district to the growing corporate parks in Amherst and the industrial facilities in Cheektowaga and Lancaster, we provide customized cleaning solutions tailored to each property's requirements.
          </p>
          <p>
            Our team of trained, background-checked professionals provides office cleaning in Buffalo, NY and surrounding communities. We serve office buildings, medical facilities, retail centers, warehouses, educational institutions, and more. Whether you need daily janitorial services, periodic deep cleaning, or specialized power washing, we deliver consistent results that protect your business image and create healthier environments for employees and customers.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center" data-testid="text-industries-by-area-title">
            Industries We Serve Across Erie County
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesByArea.map((industry, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-industry-area-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <industry.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{industry.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{industry.description}</p>
                  <div className="flex flex-wrap gap-1" data-testid={`list-industry-areas-${index}`}>
                    {industry.areas.map((area, areaIndex) => (
                      <span 
                        key={areaIndex}
                        className="text-xs bg-primary/5 text-primary px-2 py-0.5 rounded"
                        data-testid={`tag-area-${index}-${areaIndex}`}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center" data-testid="text-services-detail-title">
            Our Commercial Cleaning Services in Detail
          </h3>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto" data-testid="accordion-services">
            {serviceTypes.map((service, index) => (
              <AccordionItem key={index} value={`service-${index}`} data-testid={`accordion-item-${index}`}>
                <AccordionTrigger className="text-left" data-testid={`accordion-trigger-${index}`}>
                  <span className="font-semibold">{service.title}</span>
                </AccordionTrigger>
                <AccordionContent data-testid={`accordion-content-${index}`}>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2" data-testid={`list-benefits-${index}`}>
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-sm" data-testid={`benefit-${index}-${benefitIndex}`}>
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="bg-muted/30 rounded-lg p-6 lg:p-8 mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center" data-testid="text-local-expertise-title">
            Why Erie County Businesses Choose Sparkle Pros
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Local Knowledge</h4>
              <p className="text-sm text-muted-foreground">
                Based in Buffalo, we understand Erie County's business landscape and can respond quickly to your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Trusted Professionals</h4>
              <p className="text-sm text-muted-foreground">
                Fully insured, bonded, and background-checked staff you can trust in your facility.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Consistent Quality</h4>
              <p className="text-sm text-muted-foreground">
                Regular quality inspections ensure every visit meets our high standards.
              </p>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="max-w-3xl mx-auto" data-testid="accordion-local-faq">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center" data-testid="text-local-faq-title">
            Frequently Asked Questions About Commercial Cleaning in Erie County
          </h3>
          <AccordionItem value="faq-1" data-testid="accordion-faq-1">
            <AccordionTrigger className="text-left">
              Do you provide commercial cleaning services outside of Buffalo?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Yes, we serve all of Erie County including Amherst, Cheektowaga, Tonawanda, West Seneca, Hamburg, Lancaster, Orchard Park, Clarence, Grand Island, Lackawanna, and many more communities. Our central Buffalo location allows us to efficiently serve businesses throughout the county.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-2" data-testid="accordion-faq-2">
            <AccordionTrigger className="text-left">
              What types of commercial properties do you clean in Erie County?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                We clean a wide variety of commercial properties including office buildings, medical facilities, retail stores, shopping centers, warehouses, manufacturing plants, educational institutions, car dealerships, property management buildings, and HOA common areas. If you have a commercial space that needs professional cleaning, we can help.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-3" data-testid="accordion-faq-3">
            <AccordionTrigger className="text-left">
              How do I get a quote for commercial cleaning in my area?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Simply schedule a free walkthrough consultation. We'll visit your property, assess your specific cleaning needs, and provide a customized quote. Whether you're in downtown Buffalo, suburban Amherst, or industrial Cheektowaga, we'll work with your schedule to find a convenient time.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-4" data-testid="accordion-faq-4">
            <AccordionTrigger className="text-left">
              Do you offer green or eco-friendly cleaning options?
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Yes, we offer environmentally responsible cleaning solutions for businesses that prioritize sustainability. Our green cleaning options use EPA-certified products that are effective yet gentle on the environment, without compromising cleaning quality.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
