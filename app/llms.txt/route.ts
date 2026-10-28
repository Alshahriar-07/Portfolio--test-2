import { products, profile, siteUpdatedAt, studio } from "@/lib/content/site";
import { siteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const productLines = products
    .map((product, index) => {
      const source = product.github ? ` Source: ${product.github}` : "";
      return `${index + 1}. [${product.name}](${product.website}) — ${product.description}${source}`;
    })
    .join("\n");

  const body = `# ${profile.name}

> Independent developer building websites, software, and AI-related tools under ${studio.name}.

## About

${profile.summary}

The portfolio documents seven independent products across AI development tools, chat applications, Android, web development, email technology, and browser-based tools. Work is designed and released under ${studio.name} (${studio.url}).

## Products

${productLines}

## Website Pages

- [Home](${siteUrl}/): introduction, selected products, about, expertise, experience, studio, and contact sections.
- [Products](${siteUrl}/products): the full index of all seven products with links to each live project and public repository.
- [About section](${siteUrl}/#about): a professional biography, education, and development focus on the homepage.
- [Contact](${siteUrl}/contact): email, WhatsApp, GitHub, and the contact form.

## Contact

- [Contact page](${siteUrl}/contact)
- [WhatsApp](https://wa.me/8801893134718)
- [GitHub](${profile.links.github})
- [LinkedIn](${profile.links.linkedin})

## Notes

- Canonical domain: ${siteUrl}/
- Sitemap: ${siteUrl}/sitemap.xml
- Content last reviewed: ${siteUpdatedAt}
- No public About route exists; the professional biography is on the homepage.
- This file describes only publicly available portfolio content.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
