import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesOverview } from "@/components/services-overview"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-background to-muted py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
              Comprehensive Financial Services
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From investment planning to retirement strategies, we offer a complete suite of SEBI-compliant financial
              services designed to help you achieve your financial goals with transparency and expertise.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="/contact" className="flex items-center gap-2">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Services Overview */}
        <ServicesOverview />

        {/* Additional CTA Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our certified financial advisors are ready to help you create a customized financial strategy that aligns
              with your unique goals and circumstances.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-transparent">
                <Link href="tel:+91-9876543210">Call +91-9876543210</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
