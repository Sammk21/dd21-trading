import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import ServicesOverview from "@/components/services-overview";
import { WhyChooseUs } from "@/components/why-choose-us";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import PricingPage from "@/components/pricing";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <CTASection />
        <ServicesOverview />
        <PricingPage />¡
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
