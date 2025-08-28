import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Pravin",
    // role: "Business Owner",
    content:
      "Their work is truly inspiring! My trading journey has gotten a boost in it and i have gotten way more successful with the way ive been trading. Not only have i become profitable but the mentorship program has taught me lots of trading concepts.",
    rating: 5,
  },
  {
    name: "Sapna",
    // role: "Software Engineer",
    content:
      "The 1v1 mentorship program is genuinely worth it. It has genuinely given me so much more knowledge on why to take entries in the market , when to take them and the exact stop losses and profits to keep. Their signals generate me profit but also give me good knowledge on the markets",
    rating: 5,
  },
  {
    name: "Manish",
    // role: "Doctor",
    content:
      "Excellent community he has built. In the 1v1 mentorship i had direct access with the owner of the consultancy. His trades are genuinely life changing. Its 90% profitable also but the knowledge i have been provided is worth it.",
    rating: 5,
  },
  {
    name: "Aarav",
    // role: "Entrepreneur",
    content:
      "Excellent community he has built. In the 1v1 mentorship i had direct access with the owner of the consultancy. His trades are genuinely life changing. Its 90% profitable also but the knowledge i have been provided is worth it.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real experiences from clients who trust us with their financial
            future
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
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  {/* <p className="text-sm text-muted-foreground">{testimonial.role}</p> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
