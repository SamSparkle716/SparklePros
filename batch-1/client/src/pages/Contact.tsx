import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "wouter";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MapPin, CheckCircle2, ChevronRight, Clock, Shield, Send, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mainServices, serviceDetails, getSelectedService, saveSelectedService, type MainService } from "@/data/services";

const contactInfo = [
  { icon: Phone, label: "Call Now", value: "716-500-0506", href: "tel:716-500-0506" },
  { icon: Mail, label: "Email", value: "info@sparklepros.us", href: "mailto:info@sparklepros.us" },
  { icon: MapPin, label: "Service Area", value: "Buffalo, NY & surrounding areas", href: null },
];

const serviceBenefits = [
  "Free cleaning assessments",
  "Custom quote preparation",
  "Flexible scheduling options",
  "Emergency service available",
  "Background-checked staff",
  "Quality inspections",
];

const responseSteps = [
  { number: "01", text: "We respond within 24 business hours" },
  { number: "02", text: "Fast turnaround on walkthroughs" },
  { number: "03", text: "Clear scope + itemized quote" },
  { number: "04", text: "Ongoing support when needed" },
];

export default function Contact() {
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState<MainService | null>(null);
  const [showServicePicker, setShowServicePicker] = useState(false);
  const [currentDetails, setCurrentDetails] = useState<string[]>([]);

  useEffect(() => {
    document.title = "Contact Us | Sparkle Pros Commercial Cleaning Buffalo NY";
    
    const description = "Contact Sparkle Pros for professional commercial cleaning services in Buffalo, NY. Get a free assessment, custom quote, and flexible scheduling. Call 716-500-0506.";
    
    const setOrCreateMeta = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    setOrCreateMeta("description", description);
    setOrCreateMeta("og:title", "Contact Sparkle Pros | Commercial Cleaning Buffalo NY", true);
    setOrCreateMeta("og:description", description, true);
    setOrCreateMeta("og:type", "website", true);
    setOrCreateMeta("og:url", "https://sparklepro716.com/contact", true);

    const storedService = getSelectedService();
    if (storedService) {
      setSelectedService(storedService);
      setCurrentDetails(serviceDetails[storedService]);
    }
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      serviceCategory: "",
      serviceDetails: "",
      message: "",
    },
  });

  useEffect(() => {
    if (selectedService) {
      form.setValue("serviceCategory", selectedService);
      setCurrentDetails(serviceDetails[selectedService]);
      form.setValue("serviceDetails", "");
    }
  }, [selectedService, form]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 business hours.",
        });
        form.reset();
      } else {
        toast({
          title: "Something went wrong",
          description: result.message || "Please try again or call us directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again or call us at 716-500-0506.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleServiceChange = (service: MainService) => {
    setSelectedService(service);
    saveSelectedService(service);
    setShowServicePicker(false);
  };

  const handleCategoryChange = (category: string) => {
    const service = category as MainService;
    setSelectedService(service);
    saveSelectedService(service);
    setCurrentDetails(serviceDetails[service]);
    form.setValue("serviceCategory", category);
    form.setValue("serviceDetails", "");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section 
        className="relative py-16 lg:py-24 bg-gradient-to-br from-primary via-primary-deep to-primary overflow-hidden"
        data-testid="section-contact-hero"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full" />
          <div className="absolute bottom-10 right-20 w-48 h-48 border border-white rounded-full" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rotate-45" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-white/80 mb-6" data-testid="nav-breadcrumb">
            <Link href="/commercial" className="hover:text-white transition-colors" data-testid="link-breadcrumb-home">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white" data-testid="text-breadcrumb-current">Contact Us</span>
          </nav>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-3xl"
            data-testid="text-hero-heading"
          >
            Connect with Sparkle Pros Services Commercial Cleaning Experts
          </h1>
        </div>
      </section>

      <section className="py-12 lg:py-20" data-testid="section-contact-content">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedService && (
            <div className="mb-8 p-4 bg-primary/5 border border-primary/20 rounded-lg" data-testid="selected-service-banner">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium" data-testid="text-selected-service">
                    Selected Service: <span className="text-primary">{selectedService}</span>
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setShowServicePicker(!showServicePicker)}
                  className="text-sm text-primary font-medium hover:underline flex items-center gap-1"
                  data-testid="button-change-service"
                >
                  Change
                  <ChevronDown className={`w-4 h-4 transition-transform ${showServicePicker ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              {showServicePicker && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2" data-testid="service-picker">
                  {mainServices.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceChange(service)}
                      className={`p-3 rounded-md text-left text-sm font-medium transition-colors ${
                        selectedService === service
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover-elevate'
                      }`}
                      data-testid={`button-service-${service.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <p 
            className="text-lg text-muted-foreground max-w-3xl mb-12"
            data-testid="text-intro"
          >
            Ready to elevate your facility's cleanliness standards? Our Buffalo-based team provides 
            comprehensive commercial cleaning solutions tailored to your business needs. Reach out 
            today for a free assessment and discover why Erie County businesses trust Sparkle Pros.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="h-fit" data-testid="card-contact-info">
              <CardContent className="p-6 lg:p-8 space-y-8">
                <div className="space-y-4" data-testid="list-contact-info">
                  {contactInfo.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-4"
                      data-testid={`contact-info-${index}`}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a 
                            href={item.href} 
                            className="text-foreground font-medium hover:text-primary transition-colors"
                            data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-6" data-testid="section-service-benefits">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Our Service Benefits
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceBenefits.map((benefit, index) => (
                      <li 
                        key={index} 
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        data-testid={`benefit-${index}`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6" data-testid="section-response-commitment">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Quick Response Commitment
                  </h3>
                  <div className="space-y-3">
                    {responseSteps.map((step, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3"
                        data-testid={`response-step-${index}`}
                      >
                        <span className="text-2xl font-bold text-primary/30">{step.number}</span>
                        <p className="text-sm text-muted-foreground pt-1">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-contact-form">
              <CardContent className="p-6 lg:p-8">
                <span 
                  className="text-xs font-semibold text-primary uppercase tracking-wider"
                  data-testid="text-form-kicker"
                >
                  Get In Touch
                </span>
                <h2 
                  className="text-2xl font-bold mt-2 mb-6"
                  data-testid="text-form-heading"
                >
                  Professional Cleaning Solutions Start Here
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="form-contact">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Smith" 
                              {...field} 
                              data-testid="input-fullname"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="(716) 555-0123" 
                                {...field} 
                                data-testid="input-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="john@company.com" 
                                {...field} 
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="serviceCategory"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Category *</FormLabel>
                          <Select 
                            onValueChange={handleCategoryChange} 
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-service-category">
                                <SelectValue placeholder="Choose a service category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {mainServices.map((service) => (
                                <SelectItem 
                                  key={service} 
                                  value={service}
                                  data-testid={`option-category-${service.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service Details *</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            value={field.value}
                            disabled={currentDetails.length === 0}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-service-details">
                                <SelectValue placeholder={currentDetails.length === 0 ? "Select a category first" : "Choose service details"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {currentDetails.map((detail) => (
                                <SelectItem 
                                  key={detail} 
                                  value={detail}
                                  data-testid={`option-detail-${detail.toLowerCase().replace(/\s+/g, "-")}`}
                                >
                                  {detail}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your facility and cleaning needs..."
                              className="min-h-[120px] resize-none"
                              {...field} 
                              data-testid="textarea-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                      data-testid="button-submit"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {isSubmitting ? "Sending..." : "Request a Walkthrough"}
                    </Button>

                    <p 
                      className="text-xs text-muted-foreground text-center"
                      data-testid="text-privacy"
                    >
                      We never sell your info.
                    </p>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
