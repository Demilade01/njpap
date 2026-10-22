import type { Metadata } from "next"
import { Geist, Geist_Mono, Oswald } from "next/font/google"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/content/site"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

/** Condensed display face, echoing the flyer's headline type. */
const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})

const fullTitle = `${site.name} (${site.shortName}) | ${site.host.short}`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: fullTitle,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  applicationName: site.shortName,
  authors: [
    {
      name: `${site.host.department}, ${site.host.university}`,
      url: site.url,
    },
  ],
  creator: `${site.host.department}, ${site.host.university}`,
  publisher: `${site.host.department}, ${site.host.university}`,
  category: "science",
  keywords: [
    "NJPAP",
    "Nigeria Journal of Pure and Applied Physics",
    "physics journal",
    "Nigeria",
    "FUTA",
    "Federal University of Technology Akure",
    "Department of Physics FUTA",
    "pure and applied physics",
    "peer-reviewed journal",
    "call for papers",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.url,
    siteName: `${site.name} (${site.shortName})`,
    title: fullTitle,
    description: site.description,
    images: [
      {
        url: "/screenshot.png",
        width: 1346,
        height: 648,
        alt: `${site.name} (${site.shortName}) – Hosted by ${site.host.short}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: site.description,
    images: ["/screenshot.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
