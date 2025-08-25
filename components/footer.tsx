import Link from "next/link"
import {
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 relative bg-primary rounded-lg flex items-center justify-center">
                <Image src="/images/dd21 main.png" alt="logo" fill />
              </div>
              <span className="font-heading font-bold uppercase text-md ">
                <Image
                  src="/images/dd21LogoB.png"
                  alt="logo"
                  width={60}
                  height={20}
                />
                <Image
                  src="/images/tradingTextB.png"
                  alt="logo"
                  width={100}
                  height={30}
                />
              </span>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              SEBI-registered financial advisory firm providing transparent
              investment solutions, trading guidance, and comprehensive
              financial planning services.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/dd21trading/"
                className="text-muted-foreground hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              {/* <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91-8451077107</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@dd21trading.com</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  Kopar Khairane,
                  <br />
                  Navi Mumbai, Maharashtra 400001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            <p>© 2024 dd21 Trading. All rights reserved.</p>
            <p className="mt-1">
              SEBI Registration No: INH000001234 | CIN: U74999MH2020PTC123456
            </p>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/investor-charter"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Investor Charter
            </Link>
          </div>
        </div>

        {/* Disclaimer Preview */}
        <div className="mt-6 p-4 bg-background rounded-lg border border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Disclaimer:</strong> Investment in securities market are
            subject to market risks. Read all the related documents carefully
            before investing. Registration granted by SEBI, membership of BASL
            and certification from NISM in no way guarantee performance of the
            intermediary or provide any assurance of returns to investors.
            <Link
              href="/disclaimer"
              className="text-primary hover:underline ml-1"
            >
              Read Full Disclaimer
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
