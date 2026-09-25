import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

import heroLobbyAsset from "@/assets/originals/hero-lobby.webp.asset.json";
import heroPanelAsset from "@/assets/originals/hero-panel.jpg.asset.json";
import heroStadiumAsset from "@/assets/originals/hero-stadium.webp.asset.json";
import interiorAsset from "@/assets/originals/interior.png.asset.json";
import partnersAsset from "@/assets/originals/partners.webp.asset.json";
import { GalleryGrid } from "@/components/site/gallery-grid";
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
  { title: "Фасады зданий", image: heroStadiumAsset.url, alt: "Современный фасад с объёмными панелями" },
  { title: "Коммерческий интерьер", image: heroLobbyAsset.url, alt: "Лобби с рельефным декором" },
  { title: "Интерьер частного дома", image: heroPanelAsset.url, alt: "Интерьер с объёмной декоративной поверхностью" },
  { title: "Влажные помещения", image: interiorAsset.url, alt: "Интерьер с настенной плиткой 3DsTile" },
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
              <div className="mt-8 flex flex-wrap gap-3"><Button variant="hero" size="lg" asChild><a href="#gallery">Смотреть галерею</a></Button><Button variant="heroOutline" size="lg" asChild><Link to="/technology">О технологии</Link></Button></div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="relative overflow-hidden rounded-[8px]"><img src={current.image} alt={current.alt} width={1672} height={941} className="h-auto w-full" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-5 pb-5 pt-20"><p className="font-display text-2xl font-semibold uppercase">{current.title}</p></div></div>
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between gap-5 border-t border-hero-foreground/15 pt-6">
            <div className="flex items-center gap-2"><Button variant="carousel" size="icon" onClick={() => selectSlide(-1)} aria-label="Предыдущий слайд"><ArrowLeft /></Button><Button variant="carousel" size="icon" onClick={() => selectSlide(1)} aria-label="Следующий слайд"><ArrowRight /></Button></div>
            <div className="flex min-w-0 items-center gap-4"><span className="font-display text-xl">{String(slide + 1).padStart(2, "0")} / 04</span><span className="truncate text-sm text-hero-foreground/50">Далее: {next.title}</span></div>
          </div>
        </div>
      </section>

      <section className="bg-paper"><div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-5 py-16 lg:gap-12 lg:px-10 lg:py-24"><div className="col-span-12 lg:col-span-4"><p className="text-sm font-semibold uppercase text-navy">Технология</p><h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">Объём. Глубина. Динамика.</h2></div><div className="col-span-12 lg:col-span-8"><p className="max-w-[58ch] leading-relaxed text-steel">Материалы 3DsTile создают ощущение глубины за счёт оптических слоёв и рельефа. При смене угла зрения поверхность раскрывается по-новому.</p><div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[8px] bg-border sm:grid-cols-4">{[["30", "дней изготовление"], ["10", "лет гарантии"], ["3D", "эффект глубины"], ["360°", "панорамный обзор"]].map(([value, label]) => <div key={label} className="bg-paper p-6"><p className="font-display text-4xl font-semibold text-navy">{value}</p><p className="mt-2 text-sm text-steel">{label}</p></div>)}</div></div></div></section>

      <section className="bg-ink text-hero-foreground"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><p className="text-sm font-semibold uppercase text-hero-foreground/50">Решения для пространства</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Для кого мы создаём</h2><div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[8px] bg-hero-foreground/10 sm:grid-cols-2 lg:grid-cols-4">{audiences.map(([title, text], index) => <article key={title} className="bg-ink p-6"><p className="font-display text-lg text-hero-foreground/40">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 font-display text-xl">{title}</h3><p className="mt-2 text-sm leading-relaxed text-hero-foreground/60">{text}</p></article>)}</div></div></section>

      <section id="gallery" className="bg-background"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><p className="text-sm font-semibold uppercase text-navy">Галерея</p><h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Материалы и реализованные проекты</h2><div className="mt-10"><GalleryGrid items={gallery} /></div></div></section>

      <section className="bg-paper"><div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-semibold uppercase text-navy">Признание и поддержка</p><h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Наши партнёры</h2></div><Button variant="header" asChild><Link to="/awards">Наши награды</Link></Button></div><img src={partnersAsset.url} alt="Партнёры и организации, поддерживающие 3DsTile" loading="lazy" className="mt-10 h-auto w-full rounded-[8px] border border-border bg-background" /></div></section>

      <section className="bg-navy text-hero-foreground"><div className="mx-auto flex max-w-[1440px] flex-col items-start justify-between gap-8 px-5 py-16 sm:flex-row sm:items-end lg:px-10 lg:py-20"><div><p className="text-sm font-semibold uppercase text-hero-foreground/50">Контакты</p><h2 className="mt-4 font-display text-4xl font-semibold">Обсудим ваш проект</h2><p className="mt-4 max-w-[48ch] text-hero-foreground/70">Подберём материал, подготовим расчёт и ответим на вопросы о технологии.</p></div><Button variant="hero" size="lg" asChild><Link to="/contacts">Контакты и реквизиты</Link></Button></div></section>
    </PageShell>
  );
}
