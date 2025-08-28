import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, AlertCircle } from "lucide-react"

export default function InvestorCharterPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6">
              SEBI Mandated Document
            </Badge>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Users className="w-8 h-8 text-primary" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
                Investor Charter
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Your rights and our responsibilities as a SEBI registered
              Investment Advisor
            </p>
          </div>
        </section>

        {/* Charter Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Vision & Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Vision:
                    </h4>
                    <p>
                      To be the most trusted Investment Advisor, helping
                      investors achieve their financial goals through
                      transparent, ethical, and professional advisory services.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Mission:
                    </h4>
                    <p>
                      To provide comprehensive, unbiased, and client-centric
                      investment advisory services while maintaining the highest
                      standards of integrity, transparency, and regulatory
                      compliance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Your Rights as an Investor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>As our client, you have the right to:</p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Receive honest, transparent, and unbiased investment
                        advice suitable to your risk profile and investment
                        objectives
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Be informed about all fees, charges, and potential
                        conflicts of interest before engaging our services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Receive regular updates on your portfolio performance
                        and market developments
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Access your investment records and receive timely
                        responses to your queries and concerns
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Privacy and confidentiality of your personal and
                        financial information as per applicable laws
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Fair treatment without discrimination and the right to
                        terminate the advisory relationship with appropriate
                        notice
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Our Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>As your Investment Advisor, we commit to:</p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Act in your best interest and provide advice that is
                        suitable to your financial situation and investment
                        objectives
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Maintain complete transparency in our fee structure and
                        disclose any potential conflicts of interest
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Comply with all applicable SEBI regulations and maintain
                        the required registrations and certifications
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Maintain confidentiality of your information and use it
                        only for providing advisory services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Provide timely and accurate information about your
                        investments and respond to your queries promptly
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Maintain proper books of accounts and provide access to
                        regulatory authorities when required
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Services Offered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Investment Advisory Services:
                    </h4>
                    <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                      <li>• Portfolio Management & Asset Allocation</li>
                      <li>• Equity & Mutual Fund Recommendations</li>
                      <li>• Fixed Income Investment Strategies</li>
                      <li>• Options Trading Guidance</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">
                      Financial Planning Services:
                    </h4>
                    <ul className="space-y-1 text-muted-foreground text-sm ml-4">
                      <li>• Retirement Planning</li>
                      <li>• Tax Planning & Optimization</li>
                      <li>• Insurance & Risk Management</li>
                      <li>• Loan & Credit Advisory</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Grievance Redressal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    If you have any complaints or grievances, please follow this
                    process:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Contact Our Compliance Officer
                        </h4>
                        <p className="text-sm">
                          <strong>Name:</strong> Rajesh Sharma
                          <br />
                          <strong>Email:</strong>{" "}
                          <a
                            href="mailto:compliance@finadvisorpro.com"
                            className="text-primary hover:underline"
                          >
                            compliance@finadvisorpro.com
                          </a>
                          <br />
                          <strong>Phone:</strong> +91-9876543210
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          SEBI Complaints Redressal System (SCORES)
                        </h4>
                        <p className="text-sm">
                          If not satisfied with our response, you can file a
                          complaint at{" "}
                          <a
                            href="https://scores.sebi.gov.in"
                            className="text-primary hover:underline"
                          >
                            scores.sebi.gov.in
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          Ombudsman
                        </h4>
                        <p className="text-sm">
                          As a final resort, you can approach the Securities
                          Market Ombudsman appointed by SEBI
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Important Regulatory Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <div className="bg-muted p-4 rounded-lg space-y-2">
                    <p>
                      <strong>Validity:</strong> Permanent (subject to
                      compliance with SEBI regulations)
                    </p>
                    <p>
                      <strong>CIN:</strong>U67200MH2004PTC144103
                    </p>
                    <p>
                      <strong>Registered Office:</strong> 123 Business District,
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                  <p className="text-sm">
                    <strong>Disclaimer:</strong> Registration granted by SEBI
                    and certification from NISM in no way guarantee performance
                    of the intermediary or provide any assurance of returns to
                    investors. The securities market is subject to market risks.
                    Please read all related documents carefully before
                    investing.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Last Updated:</strong> January 2024. This Investor
                  Charter is prepared in accordance with SEBI guidelines and is
                  subject to periodic updates. For the latest version, please
                  visit our website or contact our compliance officer.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
