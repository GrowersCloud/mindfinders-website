import type { Metadata } from "next";
import { Libre_Franklin, PT_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

import TopBar from "@/components/TopBar";

export const metadata: Metadata = {
  title: "MindFinders AI - Growth and Strategic Advisor",
  description: "MindFinders helps organizations redesign work, upskill talent, and deploy AI-ready teams that deliver measurable performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreFranklin.variable} ${ptSerif.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <TopBar />
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
