import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91-9876543210", "+91-9876543211"],
    action: "tel:+91-9876543210",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@dd21trading.com", "support@dd21trading.com"],
    action: "mailto:info@dd21trading.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    details: ["123 Business District", "Mumbai, Maharashtra 400001", "India"],
    action: "https://maps.google.com/?q=123+Business+District+Mumbai",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Contact Form and Map Section */}
        <section className="py-16 bg-muted mt-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div id="contact-form">
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-2">
                      <MessageCircle className="w-6 h-6 text-primary" />
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within
                      24 hours to schedule your free consultation.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Office Location and Hours */}
              <div className="space-y-8">
                {/* Google Maps */}
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl flex items-center gap-2">
                      <MapPin className="w-6 h-6 text-primary" />
                      Our Office Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video rounded-lg overflow-hidden bg-muted mb-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15080.409641071416!2d73.00048425289015!3d19.103162713709594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0da9e93097f%3A0xd54c1cc7981cf314!2sKopar%20Khairane%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1756158641780!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="DD21 Tradings Office Location"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      Located in the heart of Mumbai's business district, easily
                      accessible by public transport and with ample parking
                      facilities.
                    </p>
                  </CardContent>
                </Card>

                {/* Office Hours */}
                <Card className="bg-background">
                  <CardHeader>
                    <CardTitle className="font-heading text-xl flex items-center gap-2">
                      <Clock className="w-6 h-6 text-primary" />
                      Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {officeHours.map((schedule, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                        >
                          <span className="font-medium text-foreground">
                            {schedule.day}
                          </span>
                          <span className="text-muted-foreground">
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-red-200/30 rounded-lg">
                      <p className="text-sm text-red-600">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Emergency consultations available by appointment outside
                        regular hours.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    Is the initial consultation really free?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we offer a completely free 30-minute consultation to
                    understand your financial goals and explain how our services
                    can help you achieve them. There's no obligation to proceed.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    What documents should I bring for consultation?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Please bring your recent salary slips, bank statements,
                    existing investment documents, insurance policies, and any
                    loan statements. This helps us provide more accurate advice.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    How are your advisory fees structured?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our fees are completely transparent with no hidden charges.
                    We offer both asset-based and fixed-fee structures depending
                    on your needs. All fees will be clearly explained during
                    your consultation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading text-lg">
                    Are you really SEBI registered?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, we are registered with SEBI as an Investment Advisor
                    (Registration No: INH000001234). You can verify our
                    registration on the SEBI website. This ensures your
                    investments are protected under regulatory guidelines.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Don't wait to secure your financial future. Schedule your free
              consultation today and take the first step towards achieving your
              financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link href="#contact-form">Schedule Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="tel:+91-9876543210">Call +91-9876543210</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
