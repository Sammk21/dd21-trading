import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import WhatsAppIcon from "@/components/whatsappIcon";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "DD21 Tradings - Transparent Financial & Trading Solutions",
  description:
    "SEBI-registered research, investment, and planning services. Expert financial advisory with transparency and compliance.",
  generator: "sameer khan instagram:@abeysamm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">
        <WhatsAppIcon />
        {children}
      </body>
    </html>
  );
}
