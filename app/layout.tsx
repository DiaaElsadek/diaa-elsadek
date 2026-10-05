import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/app/_components/layout/ThemeProvider'
import { Navbar } from '@/app/_components/layout/Navbar'
import { Footer } from '@/app/_components/layout/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fcfcfd' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0f12' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://diaaelsadek.me'),
  title: {
    default: 'Diaa Elsadek — Full-Stack Developer | React, Next.js & ASP.NET Core',
    template: '%s | Diaa Elsadek',
  },
  description:
    'Personal engineering portfolio of Diaa Elsadek, a Full-Stack Developer specializing in React, Next.js, and ASP.NET Core. Architecting multi-tenant SaaS platforms, REST APIs, and scalable web products.',
  keywords: [
    'Diaa Elsadek',
    'Full-Stack Developer',
    'Software Engineer',
    'React',
    'Next.js',
    'ASP.NET Core',
    'TypeScript',
    'C#',
    'SQL Server',
    'Node.js',
    'EduCenter',
    'Al-Anis',
    'Egypt Developer',
  ],
  authors: [{ name: 'Diaa Elsadek', url: 'https://diaaelsadek.me' }],
  creator: 'Diaa Elsadek',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://diaaelsadek.me',
    title: 'Diaa Elsadek — Full-Stack Developer | React, Next.js & ASP.NET Core',
    description:
      'Engineering production web products: multi-tenant SaaS, healthcare service platforms, and RESTful systems with React, Next.js, and ASP.NET Core.',
    siteName: 'Diaa Elsadek Portfolio',
    images: [
      {
        url: '/projects/educenter-cover.svg',
        width: 1200,
        height: 675,
        alt: 'Diaa Elsadek Portfolio — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diaa Elsadek — Full-Stack Developer',
    description:
      'Full-Stack Developer specializing in React, Next.js, and ASP.NET Core. Shipped multi-tenant SaaS and service marketplaces.',
    images: ['/projects/educenter-cover.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const t = localStorage.getItem('diaa-theme') || 'dark';
                document.documentElement.setAttribute('data-theme', t);
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <ThemeProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
