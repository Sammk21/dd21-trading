import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, PiggyBank, CreditCard, Shield, Users, Calculator } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Options Trading",
    description: "Expert guidance on options strategies with risk management and market analysis.",
    slug: "options-trading",
  },
  {
    icon: PiggyBank,
    title: "Investment Planning",
    description: "Personalized investment portfolios tailored to your financial goals and risk appetite.",
    slug: "investment-planning",
  },
  {
    icon: CreditCard,
    title: "Loans & Credit",
    description: "Assistance with personal loans, home loans, and credit optimization strategies.",
    slug: "loans",
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Comprehensive insurance planning for life, health, and asset protection.",
    slug: "insurance",
  },
  {
    icon: Users,
    title: "Retirement Planning",
    description: "Strategic retirement planning to ensure financial security in your golden years.",
    slug: "retirement",
  },
  {
    icon: Calculator,
    title: "Tax Planning",
    description: "Optimize your tax liability with strategic planning and investment choices.",
    slug: "tax-planning",
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">Our Financial Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial solutions designed to help you build, protect, and grow your wealth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.slug} className="group hover:shadow-lg transition-all duration-300 border-border">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                  >
                    <Link href={`/services/${service.slug}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
