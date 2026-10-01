import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { walkthroughFormSchema, type WalkthroughFormData } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle2, Phone, Loader2 } from "lucide-react";

const facilityTypes = [
  "Office",
  "Medical/Dental",
  "Retail",
  "Industrial/Warehouse",
  "School/Daycare",
  "Gym",
  "Bank/Professional Services",
  "Car Dealership",
  "Other",
];

const frequencies = [
  "Daily",
  "2–3x/week",
  "Weekly",
  "Bi-weekly",
  "Monthly",
  "One-time",
];

const preferredTimes = ["Morning", "Midday", "Afternoon", "Evening"];

const servicesOptions = [
  { id: "routine", label: "Routine Cleaning" },
  { id: "carpet", label: "Carpet Cleaning" },
  { id: "power-washing", label: "Power Washing" },
];

interface WalkthroughFormProps {
  onSuccess?: () => void;
  isInline?: boolean;
}

export default function WalkthroughForm({ onSuccess, isInline = false }: WalkthroughFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<WalkthroughFormData>({
    resolver: zodResolver(walkthroughFormSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      facilityAddress: "",
      facilityType: "",
      servicesNeeded: [],
      desiredFrequency: "",
      approxSqFt: "",
      preferredTime: "",
      notes: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: WalkthroughFormData) => {
      const response = await apiRequest("POST", "/api/walkthrough", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      setTimeout(() => {
        onSuccess?.();
      }, 3000);
    },
  });

  const onSubmit = async (data: WalkthroughFormData) => {
    submitMutation.mutate(data);
  };

  const FormContent = () => (
    <>
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center" data-testid="form-success-state">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2" data-testid="text-success-title">
            Thank You!
          </h3>
          <p className="text-muted-foreground max-w-sm" data-testid="text-success-message">
            Thanks — we'll reach out shortly to confirm your walkthrough.
          </p>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" data-testid="walkthrough-form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John Smith" {...field} data-testid="input-full-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Acme Corp" {...field} data-testid="input-company-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@company.com" {...field} data-testid="input-email" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(716) 555-0123" {...field} data-testid="input-phone" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="facilityAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Facility Address *</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St, Buffalo, NY" {...field} data-testid="input-address" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="facilityType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Facility Type *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-facility-type">
                          <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {facilityTypes.map((type) => (
                          <SelectItem key={type} value={type} data-testid={`option-facility-${type.toLowerCase().replace(/\s+/g, "-")}`}>
                            {type}
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
                name="desiredFrequency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Desired Frequency *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-frequency">
                          <SelectValue placeholder="Select frequency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {frequencies.map((freq) => (
                          <SelectItem key={freq} value={freq} data-testid={`option-frequency-${freq.toLowerCase().replace(/\s+/g, "-")}`}>
                            {freq}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="servicesNeeded"
              render={() => (
                <FormItem>
                  <FormLabel>Services Needed *</FormLabel>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {servicesOptions.map((service) => (
                      <FormField
                        key={service.id}
                        control={form.control}
                        name="servicesNeeded"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(service.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, service.id])
                                    : field.onChange(
                                        field.value?.filter((value) => value !== service.id)
                                      );
                                }}
                                data-testid={`checkbox-${service.id}`}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              {service.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="approxSqFt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Approx. Sq Ft (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="10,000" {...field} data-testid="input-sqft" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Walkthrough Time *</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger data-testid="select-time">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {preferredTimes.map((time) => (
                          <SelectItem key={time} value={time} data-testid={`option-time-${time.toLowerCase()}`}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about any specific requirements..."
                      className="resize-none"
                      rows={3}
                      {...field}
                      data-testid="textarea-notes"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full" 
                size="lg" 
                disabled={submitMutation.isPending}
                data-testid="button-submit-form"
              >
                {submitMutation.isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Book My Walkthrough"
                )}
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-3 flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Prefer to book by phone? Call{" "}
                <a href="tel:716-500-0506" className="text-primary font-medium" data-testid="link-call-phone">
                  716-500-0506
                </a>
              </p>
            </div>
          </form>
        </Form>
      )}
    </>
  );

  if (isInline) {
    return <FormContent />;
  }

  return (
    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-xl" data-testid="text-dialog-title">Book a Walkthrough</DialogTitle>
        <DialogDescription data-testid="text-dialog-description">
          Tell us about your facility. We'll confirm scope and schedule.
        </DialogDescription>
      </DialogHeader>
      <FormContent />
    </DialogContent>
  );
}
