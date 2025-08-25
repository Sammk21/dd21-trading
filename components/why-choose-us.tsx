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

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-3 sm:mb-4">
            Why Choose DD21 Tradings?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            We're committed to providing transparent, compliant, and
            personalized financial guidance
          </p>
        </div>

        {/* Features Grid - Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="text-center border-border bg-background hover:shadow-md transition-shadow duration-200"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg sm:text-xl leading-tight">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}