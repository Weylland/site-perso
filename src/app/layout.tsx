import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { JsonLd } from "@/components/JsonLd";
import { ViewTransitionsRouter } from "@/components/ViewTransitionsRouter";
import { siteConfig, buildMetadata } from "@/lib/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...buildMetadata({ title: siteConfig.title, description: siteConfig.description, path: "/" }),
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  formatDetection: { email: false, address: false, telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <ViewTransitionsRouter />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
