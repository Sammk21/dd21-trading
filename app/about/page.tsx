import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, Shield, Users, Target, Award, Calendar, Heart, Eye } from "lucide-react"

const milestones = [
  {
    year: "2020",
    title: "Company Founded",
    description: "FinAdvisor Pro was established with a vision to provide transparent financial advisory services.",
  },
  {
    year: "2021",
    title: "SEBI Registration",
    description:
      "Obtained SEBI registration as Investment Advisor, ensuring regulatory compliance and client protection.",
  },
  {
    year: "2022",
    title: "100+ Clients",
    description: "Reached our first major milestone of serving over 100 satisfied clients across India.",
  },
  {
    year: "2023",
    title: "Service Expansion",
    description: "Expanded our services to include comprehensive retirement planning and tax advisory.",
  },
  {
    year: "2024",
    title: "1000+ Clients",
    description: "Crossed 1000 clients milestone with consistent growth and client satisfaction.",
  },
]

const teamMembers = [
  {
    name: "Rajesh Sharma",
    role: "Founder & Chief Investment Officer",
    credentials: "CFA, MBA Finance",
    experience: "15+ years",
    description:
      "Expert in portfolio management and investment strategies with extensive experience in Indian markets.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Priya Patel",
    role: "Senior Financial Planner",
    credentials: "CFP, CA",
    experience: "12+ years",
    description: "Specializes in retirement planning and tax optimization with a client-first approach.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Amit Kumar",
    role: "Options Trading Specialist",
    credentials: "NISM Certified, FRM",
    experience: "10+ years",
    description: "Expert in derivatives and options trading with focus on risk management strategies.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Complete disclosure of fees, processes, and potential risks. No hidden charges or surprise costs.",
  },
  {
    icon: Shield,
    title: "Compliance",
    description: "Strict adherence to SEBI regulations and industry best practices for client protection.",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your financial success is our priority. We align our recommendations with your goals.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Continuous learning and improvement to provide the best financial advisory services.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="secondary" className="mb-6">
              SEBI Registered Investment Advisor
            </Badge>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">About FinAdvisor Pro</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a SEBI-registered financial advisory firm committed to providing transparent, compliant, and
              personalized financial solutions to help you achieve your financial goals with confidence.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                Work With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Mission, Vision & Values */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Mission & Vision */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-2">
                      <Target className="w-6 h-6 text-primary" />
                      Our Mission
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To democratize access to professional financial advisory services by providing transparent,
                      SEBI-compliant, and personalized financial solutions that empower individuals and businesses to
                      achieve their financial goals with confidence and peace of mind.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-2">
                      <Eye className="w-6 h-6 text-primary" />
                      Our Vision
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To become India's most trusted financial advisory firm, known for our unwavering commitment to
                      transparency, ethical practices, and client success. We envision a future where every individual
                      has access to professional financial guidance.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Values */}
              <div>
                <h2 className="font-heading font-bold text-3xl text-foreground mb-8">Our Core Values</h2>
                <div className="space-y-6">
                  {values.map((value, index) => {
                    const IconComponent = value.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                Key milestones in our mission to provide transparent financial advisory services
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-4" />}
                  </div>
                  <Card className="flex-1 bg-background">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-sm text-primary font-medium">{milestone.year}</span>
                      </div>
                      <CardTitle className="font-heading text-xl">{milestone.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our certified financial advisors bring decades of combined experience in Indian financial markets
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="font-heading text-xl">{member.name}</CardTitle>
                    <p className="text-primary font-medium">{member.role}</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                      <Badge variant="outline">{member.credentials}</Badge>
                      <Badge variant="outline">{member.experience}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">Why Clients Trust Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">SEBI Registered</h3>
                <p className="text-muted-foreground">
                  Fully compliant with regulatory requirements and client protection standards
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">1000+ Clients</h3>
                <p className="text-muted-foreground">Trusted by over 1000 individuals and businesses across India</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">Expert Team</h3>
                <p className="text-muted-foreground">Certified professionals with decades of combined experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join over 1000 satisfied clients who trust us with their financial future. Schedule a free consultation to
              discuss your goals and create a personalized strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
