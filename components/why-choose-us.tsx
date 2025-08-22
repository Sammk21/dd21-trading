import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Shield, Users, Heart } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Complete Transparency",
    description: "Full disclosure of fees, processes, and investment strategies. No hidden charges or surprise costs.",
  },
  {
    icon: Shield,
    title: "SEBI Compliance",
    description:
      "Fully registered and compliant with SEBI regulations, ensuring your investments are protected and legitimate.",
  },
  {
    icon: Users,
    title: "Expert Advisors",
    description: "Our team of certified financial planners brings decades of experience in Indian financial markets.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    description:
      "Your financial success is our priority. We align our recommendations with your personal goals and risk tolerance.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose FinAdvisor Pro?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing transparent, compliant, and personalized financial guidance
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <Card key={index} className="text-center border-border bg-background">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
