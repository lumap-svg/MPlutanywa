import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MPLutanywa | Full-Stack Developer",
    template: "%s | MPLutanywa",
  },
  description:
    "Portfolio of Peter Lutanywa (MPLutanywa) — Full-stack developer skilled in Django, Next.js, React, Python, and system networking.",
  keywords: [
    "MPLutanywa",
    "Peter Lutanywa",
    "Full-Stack Developer",
    "Django",
    "Next.js",
    "React",
    "Python",
    "Networking",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Peter Lutanywa", url: "https://github.com/lumap-svg" }],
  creator: "Peter Lutanywa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mplutanywa.dev",
    siteName: "MPLutanywa Portfolio",
    title: "MPLutanywa | Full-Stack Developer",
    description:
      "Full-stack developer bridging backend logic with frontend magic using Django, Next.js, and modern networking.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-[#f1f3f5] text-slate-800 selection:bg-cyan-600/20 selection:text-cyan-950`}
      >
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
