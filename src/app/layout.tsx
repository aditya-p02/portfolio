import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DevPortfolio | Full Stack Developer",
    template: "%s | DevPortfolio",
  },
  description: "Full Stack Developer portfolio showcasing projects, skills, and experience in modern web development.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  publisher: "DevPortfolio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com",
    siteName: "DevPortfolio",
    title: "DevPortfolio | Full Stack Developer",
    description: "Full Stack Developer portfolio showcasing projects, skills, and experience in modern web development.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevPortfolio - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevPortfolio | Full Stack Developer",
    description: "Full Stack Developer portfolio showcasing projects, skills, and experience in modern web development.",
    images: ["/og-image.png"],
    creator: "@yourusername",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}