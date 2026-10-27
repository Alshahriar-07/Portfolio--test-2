# Al Shahriar Sowan — Portfolio

An experimental monochrome editorial portfolio for **Al Shahriar Sowan**, AI tools &
software developer. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and a
custom React Three Fiber sculpture.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run start
```

Checks:

```bash
npm run lint
npm run typecheck
```

## Content

`lib/content/site.ts` is the single source of truth for personal content. It was extracted
from `assets/Al_Shahriar_Sowan_Resume_Professional...pdf` and checked against the live project
sites and public repositories in October 2026.

- Name, professional title, availability, location, email
- GitHub, LinkedIn, portfolio links
- Professional summary and biography
- Skills groups, work experience, education
- Project showcase: Seed Code CLI, Seed Code Chat, IntLLM, Dorkey
- Secondary projects: OneClickMC, Hmouse
- Eagox Studio

### Source conflicts recorded

- The resume title is **Junior AI Tools & Software Developer**; the site displays the shorter
  **AI Tools & Software Developer** as a public label while keeping "junior" in the copy.
- The resume notes the alternate spelling **Al Shahriar Sayon**; the site uses **Al Shahriar
  Sowan**.
- The resume lists Seed Code CLI **v8.2.5**, while the public repository and installer page
  currently show **v9.1.1**. No version number is printed for that project.
- The resume describes Seed Code Chat as **Next.js / TypeScript / Tailwind**, while the public
  repository describes a **vanilla JavaScript** frontend. The site therefore makes no
  framework claim for that project.
- The resume's 987-test figure is not printed, since it refers to an older CLI version.

The phone number in the PDF is intentionally not published. The full street-level address is
not published either; the site uses Gazipur, Bangladesh.

## Assets

| Asset | Path | Notes |
| --- | --- | --- |
| Original resume | `assets/Al_Shahriar_Sowan_Resume_Professional...pdf` | Untouched |
| Downloadable resume | `public/Al-Shahriar-Sowan-Resume.pdf` | Byte-identical copy |
| Portrait | `assets/me.png` | Original preserved; served copy at `public/assets/me.png` |
| Project previews | `public/projects/*.webp` | Captured from the live project interfaces, Oct 2026 |
| Favicon | `app/icon.svg` | Monogram |

The hero download action points at `/Al-Shahriar-Sowan-Resume.pdf` with the
`download="Al-Shahriar-Sowan-Resume.pdf"` attribute.

## Sections

1. **Hero** — editorial headline, procedural 3D sculpture, metadata, resume download.
2. **Selected work** — four project features with real interface captures, status, facts,
   live links and repository links, plus secondary projects.
3. **About** — the supplied B&W portrait as a print-style composition, biography, facts and
   actions.
4. **Expertise** — four evidence-based categories from the resume, no scores or skill bars.
5. **Experience** — contract deployment role, independent practice, and education.
6. **Eagox Studio** — independent studio statement, studio-site link, published products.
7. **Contact** — email, GitHub, LinkedIn, resume, location and availability.
8. **Footer** — site index and secondary links.

Project links verified October 2026:

- https://seedcode-cli.vercel.app · https://github.com/Alshahriar-07/seedcode-cli
- https://seedcode-chat.vercel.app · https://github.com/Alshahriar-07/seedcode-chat
- https://intllm.vercel.app · https://github.com/Alshahriar-07/INTLLM
- https://dorkey.vercel.app · https://github.com/Alshahriar-07/Dorkey
- https://github.com/Alshahriar-07/OneClickMC
- https://github.com/Alshahriar-07/Hmouse
- https://eagoxstudio.vercel.app

The project previews are real screenshots of the live sites, converted to WebP.
They appear grayscale by default and reveal colour on hover or keyboard focus; mobile users
see the full grayscale preview without needing hover.

## Motion

- Hero text reveal and sculpture rotation respect `prefers-reduced-motion`.
- Section enter reveals use CSS scroll-driven animations, wrapped in
  `@supports (animation-timeline: view())`; content is static and visible where unsupported.
- No animation library was added.

## Remaining for stage 3

- Final visual polish and any approved copy changes
- Open Graph / social image and final metadata review
- Accessibility audit (focus order, contrast, reduced motion, screen reader pass)
- Performance pass and production deployment testing
- Replace any deliberately deferred project detail if new verified material is supplied
