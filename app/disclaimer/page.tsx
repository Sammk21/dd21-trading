import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Shield } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <AlertTriangle className="w-8 h-8 text-primary" />
              <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
                Disclaimer
              </h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Important information regarding our services, risks, and
              regulatory compliance
            </p>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center gap-2">
                  <Shield className="w-6 h-6 text-primary" />
                  General Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  DD21 Tradings is a SEBI registered Investment Advisor
                  (Registration No: INH000001234). This disclaimer contains
                  important information about our services, associated risks,
                  and regulatory compliance requirements.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Investment in securities market are subject to market risks.
                  Read all the related documents carefully before investing.
                  Registration granted by SEBI, membership of BASL and
                  certification from NISM in no way guarantee performance of the
                  intermediary or provide any assurance of returns to investors.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Investment Risks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      All investments are subject to market risks and the value
                      of investments may go up or down depending upon market
                      conditions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Past performance is not indicative of future results.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Investors should consider their investment objectives and
                      risk tolerance before making investment decisions.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Mutual fund investments are subject to market risks.
                      Please read the scheme information document carefully
                      before investing.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Advisory Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our advisory services are provided based on information
                    available to us and our analysis of market conditions.
                    However, we do not guarantee the accuracy or completeness of
                    such information or analysis.
                  </p>
                  <p>
                    Investment advice is provided based on the client's risk
                    profile, investment objectives, and financial situation as
                    disclosed by the client. Any changes in these factors should
                    be immediately communicated to us.
                  </p>
                  <p>
                    We do not guarantee any specific returns or performance and
                    shall not be liable for any losses arising from investment
                    decisions made based on our advice.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Regulatory Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong>SEBI Registration:</strong> INH000001234
                  </p>
                  <p>
                    <strong>CIN:</strong> U74999MH2020PTC123456
                  </p>
                  <p>
                    <strong>Registered Office:</strong>Kopar Khairane, Navi
                    Mumbai, Maharashtra 400709
                  </p>
                  <p>
                    <strong>Compliance Officer:</strong> Darren Dias
                    (compliance@dd21trading.com)
                  </p>
                  <p>
                    For any complaints or grievances, please contact our
                    compliance officer or write to SEBI at{" "}
                    <a
                      href="mailto:scores@sebi.gov.in"
                      className="text-primary hover:underline"
                    >
                      scores@sebi.gov.in
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading text-xl">
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    DD21 Tradings shall not be liable for any direct, indirect,
                    incidental, special, or consequential damages arising from
                    the use of our services or reliance on our advice.
                  </p>
                  <p>
                    Our liability, if any, shall be limited to the fees paid by
                    the client for our services in the preceding 12 months.
                  </p>
                  <p>
                    Clients are advised to seek independent legal, tax, and
                    accounting advice before making any investment decisions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Last Updated:</strong> January 2024. This disclaimer
                  is subject to change without prior notice. Please check this
                  page regularly for updates. For any queries regarding this
                  disclaimer, please contact us at{" "}
                  <a
                    href="mailto:legal@finadvisorpro.com"
                    className="text-primary hover:underline"
                  >
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
  );
}
