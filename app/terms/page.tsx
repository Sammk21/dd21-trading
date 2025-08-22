import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Scale } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Scale className="w-8 h-8 text-primary" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground">Terms & Conditions</h1>
            </div>
            <p className="text-xl text-muted-foreground">Terms governing the use of our services and website</p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <FileText className="w-6 h-6 text-primary" />
                  Agreement to Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the services of FinAdvisor Pro, you agree to be bound by these Terms and
                  Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Services Provided</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>FinAdvisor Pro provides the following services:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Investment advisory and portfolio management services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Financial planning and retirement planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Tax planning and optimization strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Insurance and loan advisory services</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Client Obligations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>As a client, you agree to:</p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Provide accurate and complete information about your financial situation, investment objectives,
                        and risk tolerance
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Promptly notify us of any material changes in your financial circumstances or investment
                        objectives
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Pay fees as agreed upon in the service agreement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Make independent investment decisions and not hold us liable for investment outcomes</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Fees and Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our fee structure is transparent and will be clearly communicated before engaging our services. Fees
                    may include:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Advisory fees based on assets under management or fixed fee structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>One-time planning fees for specific services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Performance-based fees where applicable and permitted by regulations</span>
                    </li>
                  </ul>
                  <p>All fees are exclusive of applicable taxes and statutory charges.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Confidentiality</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We maintain strict confidentiality of all client information and will not disclose any personal or
                    financial information to third parties without your explicit consent, except as required by law or
                    regulatory authorities.
                  </p>
                  <p>
                    Client information may be shared with our authorized personnel and service providers on a
                    need-to-know basis for providing our services effectively.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Termination</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Either party may terminate the advisory relationship with 30 days written notice. Upon termination:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>All outstanding fees become immediately due and payable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>We will provide a final account statement and return any client documents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Confidentiality obligations will continue beyond termination</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  These terms and conditions are governed by the laws of India. Any disputes arising from these terms
                  will be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Last Updated:</strong> January 2024. We reserve the right to modify these terms at any time.
                  Continued use of our services after modifications constitutes acceptance of the updated terms. For
                  questions about these terms, contact us at{" "}
                  <a href="mailto:legal@finadvisorpro.com" className="text-primary hover:underline">
                    legal@finadvisorpro.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
