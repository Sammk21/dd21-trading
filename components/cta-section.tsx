import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
          Wat to make ₹1Cr/month click button below?
        </h2>
        <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          Get started with a free consultation and discover how our transparent,
          SEBI-compliant services can help you achieve your financial goals.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          ></Button>
        </div>
      </div>
    </section>
  );
}
