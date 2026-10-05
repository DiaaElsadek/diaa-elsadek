import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScroll from "./_components/smooth-scroll";
import Loader from "./_components/loader";
import { ThemeProvider } from "./_components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://diaaelsadek.me"),
  title: "Diaa Elsadek — Full-Stack Developer | React, Next.js, ASP.NET Core",
  description:
    "Full-Stack Developer specializing in JavaScript/TypeScript and .NET: React, Next.js, ASP.NET Core, SQL Server, and MongoDB. Architecting production SaaS, healthcare marketplaces, and booking platforms. Based in Egypt.",
  keywords: [
    "Diaa Elsadek",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "ASP.NET Core",
    "C#",
    "TypeScript",
    "Node.js",
    "SQL Server",
    "MongoDB",
    "EduCenter",
    "Al-Anis",
    "Z-Sports",
    "Multi-Tenant SaaS",
    "Healthcare Marketplace",
  ],
  authors: [{ name: "Diaa Elsadek", url: "https://diaaelsadek.me" }],
  creator: "Diaa Elsadek",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Diaa Elsadek — Full-Stack Developer | React, Next.js, ASP.NET Core",
    description:
      "Full-Stack Developer specializing in JavaScript/TypeScript and .NET: React, Next.js, ASP.NET Core, SQL Server, and MongoDB. Owning production products end to end.",
    siteName: "Diaa Elsadek Portfolio",
    url: "https://diaaelsadek.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "Diaa Elsadek — Full-Stack Developer | React, Next.js, ASP.NET Core",
    description:
      "Full-Stack Developer specializing in JavaScript/TypeScript and .NET: React, Next.js, ASP.NET Core, SQL Server, and MongoDB.",
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
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#050505" />
      </head>
      <body className={`${GeistSans.className} min-h-screen bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Loader />
          <SmoothScroll />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

