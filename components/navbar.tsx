"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       const scrollY = window.scrollY;
       const viewportHeight = window.innerHeight;
       const threshold = viewportHeight * 0.75; // 3/4 of viewport height

       setIsScrolled(scrollY >= threshold);
     };

     // Initial check
     handleScroll();

     window.addEventListener("scroll", handleScroll, { passive: true });
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);


  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "backdrop-blur-md border-b",
        isScrolled
          ? "bg-white/95 border-gray-200 shadow-lg text-black"
          : "bg-black/20 border-white/[0.02] text-white"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 relative bg-primary rounded-lg flex items-center justify-center">
              <Image src="/images/dd21 main.png" alt="logo" fill />
            </div>
            <span className="font-heading font-bold uppercase text-md ">
              <Image
                src={`${
                  isScrolled ? "/images/dd21LogoB.png" : "/images/dd21Logo.png"
                }`}
                alt="logo"
                width={60}
                height={20}
              />
              <Image
                src={`${
                  isScrolled
                    ? "/images/tradingTextB.png"
                    : "/images/tradingText.png"
                }`}
                alt="logo"
                width={100}
                height={30}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className=" hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/about"
              className=" hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className=" hover:text-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/disclaimer"
              className=" hover:text-primary transition-colors"
            >
              Disclaimer
            </Link>
            <Link
              href="/contact"
              className=" hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/disclaimer"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Disclaimer
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
