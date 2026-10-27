import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { GrainOverlay } from "@/components/visuals/GrainOverlay";
import { profile } from "@/lib/content/site";
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
  title,
  description: profile.metaDescription,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: profile.links.github }],
  creator: profile.name,
  keywords: [
    "Al Shahriar Sowan",
    "AI tools developer",
    "software developer",
    "Seed Code CLI",
    "Eagox Studio",
    "Bangladesh developer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: `${profile.name} — Portfolio`,
    title,
    description: profile.metaDescription,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
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
