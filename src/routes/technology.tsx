import { createFileRoute } from "@tanstack/react-router";

import panelsAsset from "@/assets/originals/panels.jpg.asset.json";
import processPrintAsset from "@/assets/originals/process-print.jpg.asset.json";
import { PageIntro, PageShell } from "@/components/site/page-shell";

const description = "Авторская технология 3DsTile создаёт объёмные и динамические изображения, меняющие восприятие поверхности вместе с углом зрения.";
export const Route = createFileRoute("/technology")({
  head: () => ({ meta: [{ title: "Авторская технология 3DsTile" }, { name: "description", content: description }, { property: "og:title", content: "Авторская технология 3DsTile" }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: TechnologyPage,
});
function TechnologyPage() {
  return <PageShell><PageIntro eyebrow="О технологии" title="Авторская технология 3DsTile" description={description} />
    <section className="bg-paper"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-2 lg:px-10 lg:py-24"><img src={panelsAsset.url} alt="Оптические слои материала 3DsTile" className="h-full min-h-[360px] w-full rounded-[8px] object-cover" /><div className="self-center"><p className="text-sm font-semibold uppercase text-navy">Объём / Глубина / Динамика</p><h2 className="mt-4 font-display text-4xl font-semibold text-ink">Поверхность меняется вместе с вами</h2><p className="mt-6 max-w-[56ch] leading-relaxed text-steel">Изображение формируется из нескольких оптических слоёв. При движении зрителя рисунок получает глубину, меняет ритм и создаёт эффект живой архитектурной поверхности.</p><div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] bg-border"><div className="bg-background p-6"><b className="font-display text-4xl text-navy">3D</b><p className="mt-2 text-sm text-steel">эффект глубины</p></div><div className="bg-background p-6"><b className="font-display text-4xl text-navy">360°</b><p className="mt-2 text-sm text-steel">панорамное восприятие</p></div></div></div></div></section>
    <section className="bg-background"><div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 lg:grid-cols-2 lg:px-10 lg:py-24"><div className="self-center"><p className="text-sm font-semibold uppercase text-navy">Производство</p><h2 className="mt-4 font-display text-4xl font-semibold text-ink">Индивидуальный рисунок для проекта</h2><p className="mt-6 max-w-[56ch] leading-relaxed text-steel">Разрабатываем изображение под конкретный интерьер или фасад, переносим его на выбранный материал и контролируем визуальный эффект готовой поверхности.</p></div><img src={processPrintAsset.url} alt="Производство материалов 3DsTile" className="h-full min-h-[360px] w-full rounded-[8px] object-cover" /></div></section>
  </PageShell>;
}
