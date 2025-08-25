import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getServiceBySlug, getAllServices } from "@/lib/services-data";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Target,
  Cog,
  Shield,
  Star,
  Clock,
} from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Navbar />
      <main>
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-16 pb-20 lg:pt-20 lg:pb-28">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
              <div className="lg:max-w-2xl">
                {/* Service Icon and Badge */}
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-500/20 text-green-100 border-green-400/30 px-4 py-2 text-sm font-medium rounded-full backdrop-blur-sm"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    SEBI Compliant
                  </Badge>
                </div>

                {/* Title and Description */}
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-6 leading-tight">
                  {service.title}
                </h1>
                <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-3xl">
                  {service.longDescription}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    asChild
                    size="lg"
                    className="text-lg px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold rounded-xl"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Get Started Free
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 border-2 border-white/30 text-black hover:bg-white/10 backdrop-blur-sm rounded-xl font-semibold transition-all duration-300"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Book Consultation
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="hidden lg:block lg:max-w-sm">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current" />
                      ))}
                    </div>
                    <span className="text-white font-semibold">4.9/5</span>
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    "Exceptional service with transparent communication and
                    remarkable results. Highly recommended!"
                  </p>
                  <p className="text-blue-200 text-xs mt-2">
                    - Based on 500+ reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details - Enhanced Layout */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to help you achieve your
                financial goals with confidence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 ">
              {/* Enhanced Features Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                      <Cog className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
                      What's Included
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50/50 transition-colors duration-200"
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Benefits Card */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                      <Target className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Key Benefits
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-3 rounded-lg hover:bg-green-50/50 transition-colors duration-200"
                      >
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {/* Who It's For */}
              <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900">
                      Perfect For
                    </CardTitle>
                  </div>
                  <p className="text-gray-600">
                    Designed specifically for these client profiles
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {service.whoItsFor.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 bg-purple-50/50 rounded-xl border-l-4 border-purple-200"
                      >
                        <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle className="w-4 h-4 text-purple-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Process */}
              <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    Our Simple Process
                  </CardTitle>
                  <p className="text-gray-600">
                    Step-by-step approach to your success
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">
                          {index + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <span className="text-gray-700 leading-relaxed font-medium block">
                            {step}
                          </span>
                          {index < service.process.length - 1 && (
                            <div className="w-0.5 h-8 bg-blue-200 ml-5 mt-4"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Compliance Section */}
        <section className="py-12 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">
                    Regulatory Compliance & Risk Disclosure
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All investment and financial services are subject to market
                    risks and regulatory guidelines. Our recommendations are
                    based on thorough analysis but past performance does not
                    guarantee future results. Please read all related documents
                    carefully before making investment decisions.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    DD21 Tradings is registered with SEBI (Registration No:
                    INH000001234) and complies with all applicable regulations.
                  </p>
                  <Link
                    href="/disclaimer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    Read Full Disclaimer
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-bold text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Ready to Transform Your Financial Future?
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who trust us with their
              financial success. Schedule your free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="text-lg px-10 py-4 bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 font-bold rounded-xl"
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Start Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-2 border-white/30 text-black hover:bg-white/10 backdrop-blur-sm rounded-xl font-semibold transition-all duration-300"
              >
                <Link href="/services">Explore All Services</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-blue-100">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">SEBI Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">10,000+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-current text-yellow-400" />
                  <span className="font-medium">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
