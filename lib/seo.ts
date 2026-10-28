import type { Metadata } from "next";
import { products, profile } from "@/lib/content/site";

export const siteUrl = profile.links.portfolio.replace(/\/$/, "");

export const socialImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${profile.name} — ${profile.role}`,
} as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: "/" | "/products" | "/contact";
};

export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const url = path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: `${profile.name} — Portfolio`,
      title,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

export function homeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: `${siteUrl}/`,
        name: `${profile.name} — ${profile.role}`,
        description: profile.metaDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        alternateName: profile.alternateName,
        url: `${siteUrl}/`,
        image: `${siteUrl}/assets/me.png`,
        jobTitle: "Independent Developer",
        description: profile.summary,
        sameAs: [profile.links.github, profile.links.linkedin],
        knowsAbout: [
          "AI tools",
          "LLM integration",
          "Web development",
          "Software development",
          "Python",
          "Next.js",
          "TypeScript",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Eagox Studio",
          url: "https://eagoxstudio.vercel.app",
        },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#webpage`,
        url: `${siteUrl}/`,
        name: `${profile.name} — ${profile.role}`,
        description: profile.metaDescription,
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
        inLanguage: "en",
      },
    ],
  };
}

export function productsStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/products#webpage`,
        url: `${siteUrl}/products`,
        name: `Products — ${profile.name}`,
        description:
          "Seven independent projects across AI development tools, AI chat, Android, web development, email technology, and browser-based tools.",
        isPartOf: { "@type": "WebSite", name: `${profile.name} — Portfolio`, url: `${siteUrl}/` },
        inLanguage: "en",
        mainEntity: { "@id": `${siteUrl}/products#products` },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/products#products`,
        name: `${profile.name} — Selected products`,
        numberOfItems: products.length,
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: product.name,
            applicationCategory: product.category,
            description: product.description,
            url: product.website,
          },
        })),
      },
    ],
  };
}

export function contactStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${siteUrl}/contact#webpage`,
        url: `${siteUrl}/contact`,
        name: `Contact — ${profile.name}`,
        description: `Contact ${profile.name} about websites, software, AI tools, and independent product work.`,
        isPartOf: { "@type": "WebSite", name: `${profile.name} — Portfolio`, url: `${siteUrl}/` },
        inLanguage: "en",
        about: {
          "@type": "Person",
          name: profile.name,
          url: `${siteUrl}/`,
          sameAs: [profile.links.github, profile.links.linkedin],
        },
      },
    ],
  };
}
