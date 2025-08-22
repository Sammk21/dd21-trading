"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Send, AlertCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        }, 5000);
      } else {
        throw new Error(data.error || "Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="font-heading font-semibold text-xl text-green-800 mb-2">
            Message Sent Successfully! 🎉
          </h3>
          <p className="text-green-700 mb-4">
            Thank you for contacting us! We've sent you a confirmation email and
            will get back to you within 24 hours to schedule your free
            consultation.
          </p>
          <div className="bg-green-100 p-4 rounded-lg mb-4">
            <p className="text-green-800 font-medium mb-2">
              📧 Check your email for confirmation
            </p>
            <p className="text-green-700 text-sm">
              We've sent detailed information about next steps to{" "}
              <strong>{formData.email}</strong>
            </p>
          </div>
          <p className="text-sm text-green-600">
            For urgent matters, please call us directly at{" "}
            <a
              href="tel:+91-9876543210"
              className="text-green-800 hover:underline font-semibold"
            >
              +91-9876543210
            </a>
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Card className="bg-red-50 border-red-200">
          <CardContent className="p-4 flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" />
            <div>
              <p className="text-red-800 font-medium">Submission Failed</p>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-gray-100 placeholder:text-gray-400"
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-gray-100 placeholder:text-gray-400"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91-9876543210"
            value={formData.phone}
            onChange={handleChange}
            required
            className="bg-gray-100 placeholder:text-gray-400 "
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            disabled={isSubmitting}
            className="flex h-10 w-full rounded-md border border-input bg-gray-100 placeholder:text-gray-400 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Select a service</option>
            <option value="investment-planning">Investment Planning</option>
            <option value="options-trading">Options Trading</option>
            <option value="retirement-planning">Retirement Planning</option>
            <option value="tax-planning">Tax Planning</option>
            <option value="insurance">Insurance Planning</option>
            <option value="loans">Loans & Credit</option>
            <option value="general">General Inquiry</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your financial goals and how we can help you..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="bg-gray-100 placeholder:text-gray-400 resize-none"
          disabled={isSubmitting}
        />
      </div>

      <div className="bg-muted p-4 rounded-lg">
        <p className="text-sm text-muted-foreground leading-relaxed">
          By submitting this form, you agree to our{" "}
          <a href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms" className="text-primary hover:underline">
            Terms & Conditions
          </a>
          . We'll use your information only to provide you with financial
          advisory services and will never share it with third parties without
          your consent.
        </p>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full text-lg py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
