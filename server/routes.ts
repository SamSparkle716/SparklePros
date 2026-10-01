import type { Express } from "express";
import { createServer, type Server } from "http";
import { walkthroughFormSchema, contactFormSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/walkthrough", async (req, res) => {
    try {
      const result = walkthroughFormSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.toString() 
        });
      }

      const formData = result.data;

      console.log("=== New Walkthrough Request ===");
      console.log("Full Name:", formData.fullName);
      console.log("Company:", formData.companyName);
      console.log("Email:", formData.email);
      console.log("Phone:", formData.phone);
      console.log("Facility Address:", formData.facilityAddress);
      console.log("Facility Type:", formData.facilityType);
      console.log("Services Needed:", formData.servicesNeeded.join(", "));
      console.log("Desired Frequency:", formData.desiredFrequency);
      console.log("Approx. Sq Ft:", formData.approxSqFt || "Not specified");
      console.log("Preferred Time:", formData.preferredTime);
      console.log("Notes:", formData.notes || "None");
      console.log("================================");

      const emailHtml = `
        <h2>New Walkthrough Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.fullName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.companyName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${formData.email}">${formData.email}</a></td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${formData.phone}">${formData.phone}</a></td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Facility Address</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.facilityAddress}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Facility Type</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.facilityType}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Services Needed</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.servicesNeeded.join(", ")}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Desired Frequency</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.desiredFrequency}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Approx. Sq Ft</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.approxSqFt || "Not specified"}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Preferred Time</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.preferredTime}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Notes</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.notes || "None"}</td></tr>
        </table>
        <p style="margin-top: 20px; color: #666;">This lead was submitted through the Sparkle Pros website.</p>
      `;

      try {
        await resend.emails.send({
          from: "Sparkle Pros Website <onboarding@resend.dev>",
          to: "leads@claraavyon.resend.app",
          subject: `New Walkthrough Request: ${formData.companyName}`,
          html: emailHtml,
          replyTo: formData.email,
        });
        console.log("Email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
      }

      return res.status(200).json({ 
        success: true, 
        message: "Walkthrough request received. We'll reach out shortly to confirm." 
      });
    } catch (error) {
      console.error("Error processing walkthrough request:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred. Please try again or call us directly." 
      });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.toString() 
        });
      }

      const formData = result.data;

      console.log("=== New Contact Form Submission ===");
      console.log("Full Name:", formData.fullName);
      console.log("Email:", formData.email);
      console.log("Phone:", formData.phone);
      console.log("Service Category:", formData.serviceCategory);
      console.log("Service Details:", formData.serviceDetails);
      console.log("Message:", formData.message);
      console.log("===================================");

      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.fullName}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${formData.email}">${formData.email}</a></td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${formData.phone}">${formData.phone}</a></td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Service Category</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.serviceCategory}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Service Details</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.serviceDetails}</td></tr>
          <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message</td><td style="padding: 8px; border: 1px solid #ddd;">${formData.message}</td></tr>
        </table>
        <p style="margin-top: 20px; color: #666;">This inquiry was submitted through the Sparkle Pros contact page.</p>
      `;

      try {
        await resend.emails.send({
          from: "Sparkle Pros Website <onboarding@resend.dev>",
          to: "leads@claraavyon.resend.app",
          subject: `New Contact Inquiry: ${formData.fullName}`,
          html: emailHtml,
          replyTo: formData.email,
        });
        console.log("Contact email notification sent successfully");
      } catch (emailError) {
        console.error("Failed to send contact email notification:", emailError);
      }

      return res.status(200).json({ 
        success: true, 
        message: "Message received. We'll get back to you within 24 business hours." 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred. Please try again or call us directly." 
      });
    }
  });

  return httpServer;
}
