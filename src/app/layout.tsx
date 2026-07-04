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

export const metadata: Metadata = {
  title: "Starboard Realtors - Premium Real Estate Advisory in Pune",
  description: "Starboard Realtors is a boutique real estate advisory firm specializing in commercial real estate, retail spaces, and luxury residential properties across Pune.",
  icons: {
    icon: [
      { url: '/images/Favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/Favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/Favicon/favicon.ico' },
    ],
    apple: [
      { url: '/images/Favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/images/Favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/Favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
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
