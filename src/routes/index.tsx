import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import heroLobbyAsset from "@/assets/originals/hero-lobby.webp.asset.json";
import heroPanelAsset from "@/assets/originals/hero-panel.jpg.asset.json";
import heroStadiumAsset from "@/assets/originals/hero-stadium.webp.asset.json";
import heroMotionAsset from "@/assets/originals/hero-motion.jpg.asset.json";
import interiorAsset from "@/assets/originals/interior.png.asset.json";
import marblePanelAsset from "@/assets/originals/panel-marble.jpg.asset.json";
import partnersAsset from "@/assets/originals/partners.webp.asset.json";
import panelsAsset from "@/assets/originals/panels.jpg.asset.json";
import processPrintAsset from "@/assets/originals/process-print.jpg.asset.json";
import { ContactForm } from "@/components/site/contact-form";
import { GalleryGrid } from "@/components/site/gallery-grid";
import { Messengers } from "@/components/site/messengers";
import { PageShell } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { gallery } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "3DsTile — материалы с 3D-эффектом" },
    { name: "description", content: "Материалы с 3D-эффектом, которые меняют восприятие пространства вместе с углом зрения." },
    { property: "og:title", content: "3DsTile — делаем красивый дизайн уникальным" },
    { property: "og:description", content: "Авторская технология. Объём, глубина и динамика." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const slides = [
  { title: "Интерьерные и фасадные панели", description: "Объёмные 3D-панели для акцентных стен. Панель формирует живую поверхность, которая «движется» при смене точки зрения и источника света.", image: heroStadiumAsset.url, alt: "Современный фасад с объёмными панелями" },
  { title: "Напольная и настенная плитка", description: "3D-плитка: от плоского к впечатляющему. Идеально подходит для ванных комнат, кухонь и общественных зон.", image: interiorAsset.url, alt: "Интерьер с настенной плиткой 3DsTile" },
  { title: "Интерьерные картины и фото", description: "Объём, эмоция, движение. Декор, который притягивает взгляд.", image: heroPanelAsset.url, alt: "Интерьерная картина с объёмным изображением" },
];

const productGroups = [
  { title: "Интерьерные и фасадные панели", text: "Панели от компании 3DsTile — универсальный дизайнерский приём: от жилых интерьеров и офисов до наружной отделки фасадов. Легко монтируются и идеально подходят для акцентных стен.", image: heroStadiumAsset.url },
  { title: "Напольная и настенная плитка", text: "Трёхмерная плитка для стен и пола — актуальный тренд в дизайне интерьеров. Доступна в готовых сериях и под индивидуальный заказ.", image: heroLobbyAsset.url },
  { title: "Интерьерные картины и фото", text: "Авторские картины и печать ваших фото в нашей технологии гармонично дополнят интерьер, подчеркнув уникальный стиль и индивидуальность вашего дома и рабочего пространства.", image: heroPanelAsset.url },
];

const technologyEffects = [
  { title: "Объёмный эффект", text: "Панорамная широта, многомерный обзор.", image: panelsAsset.url, alt: "Объёмный эффект панелей 3DsTile" },
  { title: "Эффект глубины и погружения", text: "Визуальное увеличение пространства.", image: marblePanelAsset.url, alt: "Эффект глубины и погружения материала 3DsTile" },
  { title: "«Живой» эффект", text: "Смена изображения и сюжета.", image: heroMotionAsset.url, alt: "«Живой» эффект — смена изображения и сюжета" },
];

const audiences = [
  ["Частные клиенты", "Спальни, гостиные и ванные в частном доме."],
  ["Отели и рестораны", "Лобби, входные группы и залы ресторанов."],
  ["Застройщики ЖК и БЦ", "Фасады и общественные пространства объектов."],
  ["Общественные пространства", "Торговые центры, аэропорты и музеи."],
];

function Index() {
  const [slide, setSlide] = useState(0);
  const current = slides[slide];
  const next = slides[(slide + 1) % slides.length];
  if (!current || !next) return null;
  const selectSlide = (direction: number) => setSlide((value) => (value + direction + slides.length) % slides.length);

  return (
    <PageShell>
      <section className="bg-hero text-hero-foreground">
        <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-20">
          <div className="grid grid-cols-12 items-end gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <p className="text-sm font-semibold uppercase text-hero-foreground/55">Авторская технология 3DsTile</p>
              <h1 className="mt-5 max-w-[11ch] text-balance font-display text-5xl font-semibold uppercase leading-none sm:text-6xl lg:text-7xl">Мы делаем красивый дизайн уникальным</h1>
              <p className="mt-6 max-w-[45ch] text-base leading-relaxed text-hero-foreground/70">Материалы с 3D-эффектом, которые меняют восприятие пространства вместе с углом зрения. Авторская технология. Объём / Глубина / Динамика.</p>
               <div className="mt-8 flex flex-wrap gap-3"><Button variant="hero" size="lg" asChild><a href="#gallery">Смотреть галерею</a></Button><Button variant="heroOutline" size="lg" asChild><a href="#technology">О технологии</a></Button></div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="relative overflow-hidden rounded-[8px]"><img src={current.image} alt={current.alt} width={1672} height={941} className="h-auto w-full" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-5 pb-5 pt-24"><p className="font-display text-2xl font-semibold uppercase">{current.title}</p><p className="mt-2 max-w-[64ch] text-sm leading-relaxed text-hero-foreground/80">{current.description}</p></div></div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between gap-5 border-t border-hero-foreground/15 pt-6">
            <div className="flex items-center gap-2"><Button variant="carousel" size="icon" onClick={() => selectSlide(-1)} aria-label="Предыдущий слайд"><ArrowLeft /></Button><Button variant="carousel" size="icon" onClick={() => selectSlide(1)} aria-label="Следующий слайд"><ArrowRight /></Button></div>
            <div className="flex min-w-0 items-center gap-4"><span className="font-display text-xl">{String(slide + 1).padStart(2, "0")} / 03</span><span className="truncate text-sm text-hero-foreground/50">Далее: {next.title}</span></div>
          </div>
        </div>
      </section>

      <section id="products" className="scroll-mt-20 bg-background"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><p className="text-sm font-semibold uppercase text-navy">Наша продукция</p><h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Материалы для уникального пространства</h2><div className="mt-10 grid gap-8 lg:grid-cols-3">{productGroups.map((item) => <article key={item.title} className="border-t border-border pt-5"><img src={item.image} alt={item.title} className="aspect-[4/3] w-full rounded-[8px] object-cover" /><h3 className="mt-6 font-display text-2xl font-semibold text-ink">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-steel">{item.text}</p></article>)}</div></div></section>

      <section id="technology" className="scroll-mt-20 bg-paper"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[3fr_2fr] lg:items-end"><div><p className="text-sm font-semibold uppercase text-navy">О технологии</p><h2 className="mt-4 font-display text-4xl font-semibold text-ink sm:text-5xl">Авторская технология «3DsTile»</h2></div><p className="max-w-[52ch] text-lg leading-relaxed text-steel">Производство объёмных, «живых» дизайнов собственных дизайнерских идей, а также воплощение самых смелых идей заказчиков.</p></div><div className="mt-12 grid gap-8 lg:grid-cols-3">{technologyEffects.map((item) => <article key={item.title} className="border-t border-border pt-5"><img src={item.image} alt={item.alt} className="aspect-[4/3] w-full rounded-[8px] object-cover" /><h3 className="mt-6 font-display text-2xl font-semibold text-ink">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-steel">{item.text}</p></article>)}</div><div className="mt-16 grid gap-10 border-t border-border pt-14 lg:grid-cols-2 lg:items-center"><div><h3 className="font-display text-3xl font-semibold text-ink sm:text-4xl">3DsTile — это не просто картинка на стене.</h3><p className="mt-4 font-display text-2xl font-semibold text-navy">Это технология, которая меняет восприятие пространства!</p></div><img src={processPrintAsset.url} alt="Производство объёмных дизайнов 3DsTile" loading="lazy" className="h-full min-h-[320px] w-full rounded-[8px] object-cover" /></div></div></section>

      <section className="bg-ink text-hero-foreground"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><p className="text-sm font-semibold uppercase text-hero-foreground/50">Решения для пространства</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Для кого мы создаём</h2><div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[8px] bg-hero-foreground/10 sm:grid-cols-2 lg:grid-cols-4">{audiences.map(([title, text], index) => <article key={title} className="bg-ink p-6"><p className="font-display text-lg text-hero-foreground/40">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-hero-foreground/60">{text}</p></article>)}</div></div></section>

      <section id="gallery" className="scroll-mt-20 bg-background"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><p className="text-sm font-semibold uppercase text-navy">Галерея</p><h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Материалы и реализованные проекты</h2><div className="mt-10"><GalleryGrid items={gallery} /></div><div className="sr-only">{["interior-panels", "facade-panels", "wall-tiles", "floor-tiles", "interior-art", "art-photo-panels"].map((id) => <span key={id} id={id} />)}</div></div></section>

      <section id="awards" className="scroll-mt-20 bg-paper"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[1fr_2fr]"><div><p className="text-sm font-semibold uppercase text-navy">Признание и поддержка</p><h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Наши награды и партнёры</h2></div><div><h3 className="font-display text-2xl font-semibold text-ink">Резидент ИЦ «Сколково»</h3><p className="mt-4 max-w-[62ch] leading-relaxed text-steel">Авторская технология объёмных и динамических изображений развивается при поддержке российских институтов инноваций, экспорта и промышленности.</p></div></div><img src={partnersAsset.url} alt="Партнёры и организации, поддерживающие 3DsTile" loading="lazy" className="mt-10 h-auto w-full rounded-[8px] border border-border bg-background" /></div></section>

      <section id="contacts" className="scroll-mt-20 bg-navy text-hero-foreground"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><div className="mb-12"><p className="text-sm font-semibold uppercase text-hero-foreground/50">Связаться с нами</p><h2 className="mt-4 font-display text-4xl font-semibold">Контакты и реквизиты</h2><p className="mt-4 max-w-[52ch] text-hero-foreground/70">Расскажите о проекте — подберём материал, подготовим расчёт и ответим на вопросы о технологии.</p></div><div className="grid grid-cols-12 gap-10 lg:gap-12"><div className="col-span-12 lg:col-span-6"><h3 className="font-display text-3xl font-semibold">ООО «ЗД сТайл»</h3><p className="mt-3 max-w-[48ch] leading-relaxed text-hero-foreground/70">Материалы от ООО «ЗД сТайл» с 3D и динамическими изображениями</p><dl className="mt-8 grid gap-6 text-sm"><div><dt className="text-hero-foreground/50">Юридический адрес</dt><dd className="mt-1 max-w-[52ch] leading-relaxed">121205, Москва, ИЦ «Сколково», Большой Бульвар, 42, стр. 1, пом. 709, раб. 5</dd></div><div><dt className="text-hero-foreground/50">Офис</dt><dd className="mt-1">105318, Москва, м. Семёновская, ул. Ткацкая, 1, офис 51–53</dd></div><div className="grid gap-6 sm:grid-cols-2"><div><dt className="text-hero-foreground/50">ИНН / КПП</dt><dd className="mt-1">9731006269 / 773101001</dd></div><div><dt className="text-hero-foreground/50">ОГРН</dt><dd className="mt-1">1187746681814</dd></div></div><div className="grid gap-6 sm:grid-cols-2"><div><dt className="text-hero-foreground/50">Телефон</dt><dd className="mt-1"><a href="tel:+74956629850">+7 (495) 662-98-50</a></dd></div><div><dt className="text-hero-foreground/50">Почта</dt><dd className="mt-1"><a href="mailto:info@3dstile.ru">info@3dstile.ru</a></dd></div></div></dl><div className="mt-10"><Messengers /></div><p className="mt-12 border-t border-hero-foreground/15 pt-6 text-sm text-hero-foreground/50">ООО «ЗД сТайл» · 2018–2024</p></div><div className="col-span-12 lg:col-span-6"><ContactForm /></div></div></div></section>
    </PageShell>
  );
}
