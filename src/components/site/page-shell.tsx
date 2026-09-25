import type { ReactNode } from "react";

import { SiteHeader } from "@/components/site/site-header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      {children}
    </main>
  );
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="bg-navy text-hero-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
        <p className="text-sm font-semibold uppercase text-hero-foreground/55">{eyebrow}</p>
        <h1 className="mt-4 max-w-[14ch] text-balance font-display text-5xl font-semibold uppercase leading-none sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-hero-foreground/70">{description}</p>
      </div>
    </section>
  );
}
