import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { GrainOverlay } from "@/components/visuals/GrainOverlay";
import { profile } from "@/lib/content/site";
import { siteUrl, socialImage } from "@/lib/seo";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.metaDescription,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  keywords: [
    "Al Shahriar Sowan",
    "Al Shahriar Sayon",
    "AI tools developer",
    "website developer",
    "software developer",
    "SeedCode CLI",
    "SeedCode Chat",
    "IntLLM",
    "Eagox Studio",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/`,
    siteName: `${profile.name} — Portfolio`,
    title,
    description: profile.metaDescription,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.metaDescription,
    images: [socialImage.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
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
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink font-display text-paper antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <GrainOverlay />
      </body>
    </html>
  );
}
