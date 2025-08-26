import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Business Owner",
    content:
      "DD21 Tradings helped me diversify my portfolio and achieve consistent returns. Their transparent approach and SEBI compliance gave me complete confidence.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    content:
      "The retirement planning service was exactly what I needed. Clear explanations, no hidden fees, and a strategy that fits my goals perfectly.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Doctor",
    content:
      "Their options trading guidance helped me understand the market better. Professional, ethical, and always available for questions.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    role: "Entrepreneur",
    content:
      "Excellent tax planning advice that saved me significant money. The team is knowledgeable and truly cares about client success.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from clients who trust us with their financial future
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
