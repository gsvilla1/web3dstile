import { GalleryGrid } from "@/components/site/gallery-grid";
import { PageIntro, PageShell } from "@/components/site/page-shell";
import type { GalleryItem } from "@/data/site";

export function ProductPage({ title, description, items }: { title: string; description: string; items: readonly GalleryItem[] }) {
  return (
    <PageShell>
      <PageIntro eyebrow="Наша продукция" title={title} description={description} />
      <section className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
          <GalleryGrid items={items} />
        </div>
      </section>
    </PageShell>
  );
}
