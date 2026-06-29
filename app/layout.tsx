import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import PageTransition from "./components/PageTransition";
import ParallaxGrid from "./components/ParallaxGrid";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Srithansh Mundlapudi",
  description: "Software engineer & ML enthusiast — projects, code, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${mono.variable} ${grotesk.variable} antialiased relative`}
      >
        <ParallaxGrid />
        <Nav />
        <div className="md:ml-56 relative z-10">
          <PageTransition>{children}</PageTransition>
        </div>
      </body>
    </html>
  );
}