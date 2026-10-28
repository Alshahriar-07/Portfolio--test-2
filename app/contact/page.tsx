import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { JsonLd } from "@/components/seo/JsonLd";
import { ContactForm } from "@/components/sections/ContactForm";
import { ArrowLeft, Github, Mail } from "@/components/ui/icons";
import { profile } from "@/lib/content/site";
import { contactStructuredData, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: `Contact — ${profile.name}`,
  description: `Contact ${profile.name} about websites, software, AI tools, and independent product work.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactStructuredData()} />
      <SiteHeader />
      <main id="main" className="min-h-screen pt-[var(--header-h)]">
        <section aria-labelledby="contact-page-title" className="border-b border-line/60">
          <div className="shell pb-10 pt-8 md:pb-14 md:pt-12">
            <Link href="/" className="inline-flex min-h-10 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper">
              <ArrowLeft aria-hidden="true" className="size-4" />
              Back home
            </Link>
            <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end">
              <h1 id="contact-page-title" className="font-display text-[clamp(3.7rem,12vw,9.5rem)] font-medium uppercase leading-[0.8] tracking-[-0.07em] text-paper md:col-span-8">
                Let&apos;s<br /><span className="outline-type pl-[9%]">talk.</span>
              </h1>
              <div className="max-w-sm md:col-span-4 md:pb-2">
                <p className="text-sm leading-relaxed text-muted">
                  Have a project, an idea, or a question about something I&apos;ve built? Send a note. A little context helps me give you a thoughtful reply.
                </p>
                <p className="meta mt-5">Websites / Software / Independent products</p>
              </div>
            </div>
          </div>
        </section>

        <section className="shell grid gap-12 py-12 md:grid-cols-12 md:gap-10 md:py-20">
          <aside className="md:col-span-4">
            <p className="meta">Direct contact</p>
            <a href={`mailto:${profile.email}`} className="mt-4 inline-flex min-h-11 items-start gap-3 text-sm leading-relaxed text-paper transition-colors hover:text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper">
              <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              <span className="break-all">{profile.email}</span>
            </a>
            <a href={profile.links.github} target="_blank" rel="noreferrer noopener" aria-label="Visit GitHub profile (opens in a new tab)" className="mt-5 flex min-h-11 w-fit items-center gap-3 border border-line px-4 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:border-paper/60 hover:bg-paper/[0.04] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper">
              <Github aria-hidden="true" className="size-4" />
              GitHub profile
            </a>
            <div className="mt-10 border-t border-line/60 pt-5">
              <p className="meta">Usually open to</p>
              <p className="mt-3 text-sm leading-relaxed text-paper">Junior and internship opportunities, thoughtful collaborations, and conversations about useful software.</p>
            </div>
          </aside>

          <div className="md:col-span-7 md:col-start-6">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-line/60 pb-4">
              <h2 className="font-display text-xl font-medium uppercase tracking-[-0.03em] text-paper">Send a message</h2>
              <span className="meta">Secure form / Web3Forms</span>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
