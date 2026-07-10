import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const siteUrl = "https://www.starboardrealtors.co.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Starboard Realtors - Premium Real Estate Advisory in Pune",
    template: "%s | Starboard Realtors",
  },
  description: "Boutique real estate advisory in Pune for commercial leasing, retail spaces, investment opportunities, and luxury residential properties.",
  applicationName: "Starboard Realtors",
  keywords: [
    "Starboard Realtors",
    "real estate advisory Pune",
    "commercial property Pune",
    "luxury residential Pune",
    "retail leasing Pune",
    "investment advisory Pune",
  ],
  authors: [{ name: "Starboard Realtors" }],
  creator: "Starboard Realtors",
  publisher: "Starboard Realtors",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Starboard Realtors",
    title: "Starboard Realtors - Premium Real Estate Advisory in Pune",
    description: "Commercial, retail, investment, and luxury residential real estate advisory across Pune.",
    images: [
      {
        url: "/images/FEATURED OPPORTUNITIES/ChatGPT Image Jul 4, 2026, 08_40_14 PM.webp",
        width: 1200,
        height: 630,
        alt: "Starboard Realtors premium real estate advisory in Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starboard Realtors - Premium Real Estate Advisory in Pune",
    description: "Commercial, retail, investment, and luxury residential real estate advisory across Pune.",
    images: ["/images/FEATURED OPPORTUNITIES/ChatGPT Image Jul 4, 2026, 08_40_14 PM.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/Favicon/favicon-16x16.webp', sizes: '16x16', type: 'image/png' },
      { url: '/images/Favicon/favicon-32x32.webp', sizes: '32x32', type: 'image/png' },
      { url: '/images/Favicon/favicon.ico' },
    ],
    apple: [
      { url: '/images/Favicon/apple-touch-icon.webp', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/images/Favicon/android-chrome-192x192.webp', sizes: '192x192', type: 'image/png' },
      { url: '/images/Favicon/android-chrome-512x512.webp', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/images/Favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jost.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden font-sans" suppressHydrationWarning>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
