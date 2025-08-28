import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getServiceBySlug, getAllServices } from "@/lib/services-data";
import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Target, Cog } from "lucide-react";
import { notFound } from "next/navigation";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 lg:py-24 text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-primary-foreground" />
              </div>
              <Badge
                variant="secondary"
                className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30"
              >
                SEBI Compliant
              </Badge>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              {service.title}
            </h1>
            <p className="text-xl leading-relaxed mb-8 text-primary-foreground/90">
              {service.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Cog className="w-6 h-6 text-primary" />
                    <CardTitle className="font-heading text-2xl">
                      What's Included
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-6 h-6 text-primary" />
                    <CardTitle className="font-heading text-2xl">
                      Key Benefits
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who It's For & Process */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Who It's For */}
              <Card className="bg-background">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-6 h-6 text-primary" />
                    <CardTitle className="font-heading text-2xl">
                      Who It's For
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.whoItsFor.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Process */}
              <Card className="bg-background">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">
                    Our Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground mt-1">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Compliance Disclaimer */}
        <section className="py-12 bg-background border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                Important Compliance Information
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All investment and financial services are subject to market
                risks and regulatory guidelines. Our recommendations are based
                on thorough analysis but past performance does not guarantee
                future results. Please read all related documents carefully
                before making investment decisions. DD21 Tradings is registered
                with SEBI (CIN: U67200MH2004PTC144103) and complies with all
                applicable regulations.
              </p>
              <div className="mt-4">
                <Link
                  href="/disclaimer"
                  className="text-primary hover:underline text-sm"
                >
                  Read Full Disclaimer →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Schedule a free consultation with our certified financial advisors
              to discuss your specific needs and create a customized strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
