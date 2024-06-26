import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Favicon from '/public/NavLogo.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joshua Baker Portfolio",
  description: "This is my portfolio",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {/* <StarsCanvas /> */}
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
