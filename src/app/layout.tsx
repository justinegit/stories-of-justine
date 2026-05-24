import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/components/utils/lenis-provider";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Stories of Justine | Cinematic Photography & Films",
  description: "Luxury storytelling-focused photography and filmmaking brand founded by Justine Paulson. We preserve memories, emotions, and once-in-a-lifetime moments through cinematic storytelling.",
  keywords: ["photography", "cinematography", "wedding films", "luxury photography", "Justine Paulson"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-[#050505] text-[#ededed] selection:bg-[#fff]/20 selection:text-white`}
      >
        <NoiseOverlay />
        <ReactLenis root>
          <Navbar />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
