import type { GalleryItem } from "@/data/site";

export function GalleryGrid({ items }: { items: readonly GalleryItem[] }) {
  return (
    <div className="grid auto-rows-[250px] grid-cols-1 gap-2 sm:grid-cols-2 lg:auto-rows-[320px]">
      {items.map((item) => (
        <figure key={item.title} className="relative min-h-0 overflow-hidden rounded-[8px] bg-ink">
          <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" aria-hidden="true" />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-hero-foreground">
            <b className="max-w-[60%] font-display text-xl font-semibold leading-tight">{item.title}</b>
            <span className="max-w-[40%] text-right text-xs uppercase leading-tight text-hero-foreground/80">{item.category}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
