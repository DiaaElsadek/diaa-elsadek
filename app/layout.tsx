import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "./_components/smooth-scroll";
import Loader from "./_components/loader";

export const metadata: Metadata = {
  title: "Diaa Elsadek — Full-Stack Software Engineer",
  description:
    "Product-minded engineer building scalable SaaS systems, modern web applications, and educational technology platforms. Based in Egypt.",
  keywords: [
    "Diaa Elsadek",
    "Full-Stack Engineer",
    "Software Engineer",
    "SaaS",
    "Next.js",
    "React",
    "Node.js",
    "EduCenter",
  ],
  authors: [{ name: "Diaa Elsadek" }],
  creator: "Diaa Elsadek",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Diaa Elsadek — Full-Stack Software Engineer",
    description:
      "Product-minded engineer building scalable SaaS systems and educational technology platforms.",
    siteName: "Diaa Elsadek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diaa Elsadek — Full-Stack Software Engineer",
    description:
      "Product-minded engineer building scalable SaaS systems and educational technology platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <head>
        <meta name="theme-color" content="#050505" />
      </head>
      <body className={`${GeistSans.className} min-h-screen noise-overlay`}>
        <Loader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}

