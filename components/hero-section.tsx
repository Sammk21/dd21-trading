"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, PackageCheck, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { BlurPanel } from "./blur-panel";
import { Button } from "./ui/button";
import Link from "next/link";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const AnimatedText = ({
    text,
    delay = 0,
  }: {
    text: string;
    delay?: number;
  }) => {
    const words = text.split(" ");

    return (
      <span className="inline-block">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block mr-3 last:mr-0">
            {word.split("").map((char, charIndex) => {
              const totalIndex =
                words.slice(0, wordIndex).join("").length +
                wordIndex +
                charIndex;
              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: delay + totalIndex * 0.03,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))}
      </span>
    );
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-screen xl:h-screen overflow-hidden"
    >
      {/* Background Image with Cinematic Effects */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Image
          src="https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="DD21 Trading - Your Trading advisor"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center flex-col px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-0"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-7xl mx-auto text-center text-white">
          <Reveal>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-4 sm:mb-6">
              <AnimatedText text="Transparent Financial &" delay={0.5} />
              <br />
              <span className="italic font-light bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                <AnimatedText text="Trading Solutions." delay={1.1} />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.7,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              SEBI-registered research, investment, and planning services
              designed to help you achieve your financial goals with complete
              transparency and expert guidance.
            </motion.p>
          </Reveal>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.9,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            <Button 
              asChild 
              size="lg" 
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto hover:scale-105 transition-transform duration-200"
            >
              <Link href="/services" className="flex items-center justify-center gap-2">
                Explore Services <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-200"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Info Strip - Made more responsive */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center p-4 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.2,
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
      >
        <BlurPanel className="w-full max-w-2xl px-4 py-3 sm:px-6 sm:py-4 bg-black/20 backdrop-blur-md border-white/20 rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <PackageCheck className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">SEBI Registered</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Latest Market Updates</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium">Trusted Advisors</span>
            </div>
          </div>
        </BlurPanel>
      </motion.div>
    </section>
  );
}