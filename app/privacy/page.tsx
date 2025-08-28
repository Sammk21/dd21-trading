import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Lock className="w-8 h-8 text-primary" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              How we collect, use, and protect your personal information
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  Our Commitment to Privacy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  DD21 Tradings is committed to protecting your privacy and
                  maintaining the confidentiality of your personal and financial
                  information. This privacy policy explains how we collect, use,
                  store, and protect your information in compliance with
                  applicable laws and regulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>We collect the following types of information:</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Personal Information:
                      </h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            Name, address, phone number, email address
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Date of birth, PAN, Aadhaar number</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            Bank account details and investment account
                            information
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Financial Information:
                      </h4>
                      <ul className="space-y-1 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Income, expenses, assets, and liabilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>Investment objectives and risk tolerance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>
                            Transaction history and portfolio information
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>We use your information for the following purposes:</p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Providing investment advisory and financial planning
                        services
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Conducting risk assessment and portfolio analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Compliance with regulatory requirements and reporting
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Communication regarding your investments and market
                        updates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Improving our services and customer experience
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We may share your information in the following
                    circumstances:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>With your explicit consent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        With regulatory authorities as required by law (SEBI,
                        Income Tax Department, etc.)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        With authorized service providers who assist in
                        delivering our services (under strict confidentiality
                        agreements)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>In case of legal proceedings or court orders</span>
                    </li>
                  </ul>
                  <p className="mt-4">
                    We do not sell, rent, or trade your personal information to
                    third parties for marketing purposes.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We implement robust security measures to protect your
                    information:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Encryption of sensitive data in transit and at rest
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>Access controls and authentication mechanisms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Regular security audits and vulnerability assessments
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Employee training on data protection and confidentiality
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Your Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    You have the following rights regarding your personal
                    information:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Right to access and review your personal information
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Right to correct or update inaccurate information
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Right to request deletion of your information (subject
                        to regulatory requirements)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Right to withdraw consent for processing (where
                        applicable)
                      </span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary
                  to provide our services and comply with legal and regulatory
                  requirements. Investment advisory records are typically
                  retained for a minimum of 5 years as per SEBI regulations, or
                  longer if required by law.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    For any privacy-related queries or to exercise your rights,
                    please contact:
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p>
                      <strong>Privacy Officer:</strong> Rajesh Sharma
                    </p>
                    <p>
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:privacy@dd21trading.com"
                        className="text-primary hover:underline"
                      >
                        privacy@dd21trading.com
                      </a>
                    </p>
                    <p>
                      <strong>Phone:</strong> +91-9876543210
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Business District, Mumbai,
                      Maharashtra 400001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Last Updated:</strong> January 2024. This privacy
                  policy may be updated periodically to reflect changes in our
                  practices or applicable laws. We will notify you of any
                  material changes through our website or direct communication.
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
