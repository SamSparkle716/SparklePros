import { Phone, Mail, MapPin } from "lucide-react";

const serviceAreas = [
  "Buffalo", "Grand Island", "Tonawanda", "Amherst", "Clarence", "Newstead",
  "Cheektowaga", "Lancaster", "Alden", "West Seneca", "Lackawanna", "Hamburg",
  "Orchard Park", "Elma", "Marilla", "Aurora", "Wales", "Evans", "Eden",
  "Boston", "Colden", "Holland", "Brant", "North Collins", "Collins",
  "Concord", "Sardinia"
];

const services = [
  "Routine Cleaning",
  "Commercial Carpet Cleaning",
  "Power Washing"
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="mb-4 flex justify-center">
              <div className="h-24 md:h-28 w-auto">
                <img
                  src="/logo.svg"
                  alt="Sparkle Pros Janitorial Services"
                  className="h-full w-auto object-contain block"
                  loading="lazy"
                  data-testid="img-footer-logo"
                />
              </div>
            </div>
            <p className="text-sm leading-relaxed opacity-80 text-center" data-testid="text-footer-description">
              Sparkle Pros provides commercial cleaning in Buffalo, NY—reliable daily/weekly 
              service, carpet cleaning, and power washing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4" data-testid="text-footer-services-heading">Services</h3>
            <ul className="space-y-2" data-testid="list-footer-services">
              {services.map((service, index) => (
                <li key={service} className="text-sm opacity-80 hover:opacity-100 transition-opacity" data-testid={`text-footer-service-${index}`}>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4" data-testid="text-footer-areas-heading">Service Areas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1" data-testid="list-footer-areas">
              {serviceAreas.slice(0, 12).map((area, index) => (
                <span key={area} className="text-sm opacity-80" data-testid={`text-footer-area-${index}`}>{area}</span>
              ))}
            </div>
            <p className="text-sm text-primary mt-2" data-testid="text-footer-more-areas">+ {serviceAreas.length - 12} more areas</p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4" data-testid="text-footer-contact-heading">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-sm opacity-80" data-testid="text-footer-address">7078 Transit Rd, Buffalo, NY</span>
              </li>
              <li>
                <a 
                  href="tel:716-500-0506" 
                  className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-footer-phone"
                >
                  <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                  716-500-0506
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@sparklepros.us" 
                  className="flex items-center gap-3 text-sm opacity-80 hover:opacity-100 transition-opacity"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                  info@sparklepros.us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80 text-center md:text-left" data-testid="text-footer-trust-line">
              Insured & Bonded • Background-Checked Staff • OSHA-Trained • Green Cleaning
            </p>
            <p className="text-sm opacity-60" data-testid="text-footer-copyright">
              © {currentYear} Sparkle Pros. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
