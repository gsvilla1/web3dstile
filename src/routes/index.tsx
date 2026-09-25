import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

import facadeAsset from "@/assets/originals/facade.png.asset.json";
import heroLobbyAsset from "@/assets/originals/hero-lobby.webp.asset.json";
import heroMotionAsset from "@/assets/originals/hero-motion.jpg.asset.json";
import heroPanelAsset from "@/assets/originals/hero-panel.jpg.asset.json";
import heroStadiumAsset from "@/assets/originals/hero-stadium.webp.asset.json";
import interiorAsset from "@/assets/originals/interior.png.asset.json";
import logoAsset from "@/assets/originals/logo-3dstile-clear.png.asset.json";
import marblePanelAsset from "@/assets/originals/panel-marble.jpg.asset.json";
import panelShowcaseAsset from "@/assets/originals/panel-showcase.jpg.asset.json";
import panelsAsset from "@/assets/originals/panels.jpg.asset.json";
import partnersAsset from "@/assets/originals/partners.webp.asset.json";
import processPrintAsset from "@/assets/originals/process-print.jpg.asset.json";
import projectFacadeAsset from "@/assets/originals/project-facade.png.asset.json";
import skolkovoAsset from "@/assets/originals/logo-skolkovo-clear.png.asset.json";
import projectInteriorAsset from "@/assets/originals/project-interior.png.asset.json";
import roundPanelAsset from "@/assets/originals/project-round-panel.jpg.asset.json";
import verticalAsset from "@/assets/originals/vertical.jpg.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "3DsTile — объёмные панели и плитка для архитектуры" },
      { name: "description", content: "Авторские отделочные материалы 3DsTile для фасадов, коммерческих и частных интерьеров, влажных помещений." },
      { property: "og:title", content: "3DsTile — архитектура объёма" },
      { property: "og:description", content: "Панели и плитка с эффектом глубины для фасадов и интерьеров." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const slides = [
  { title: "Фасады зданий", description: "Объёмные панели для облицовки фасадов. Глубина и фактура меняют восприятие архитектуры в зависимости от угла зрения и времени суток.", image: heroStadiumAsset.url, alt: "Современный фасад с объёмными панелями" },
  { title: "Коммерческий интерьер", description: "Авторские декоры для ресторанов, гостиничных лобби и входных групп бизнес-центров — выразительный акцент в общественном пространстве.", image: heroLobbyAsset.url, alt: "Лобби с рельефным настенным декором" },
  { title: "Интерьер частного дома", description: "Рельефные поверхности для спальни и гостиной. Декор создаёт глубину, работает со светом и собирает интерьер в единое целое.", image: heroPanelAsset.url, alt: "Гостиная частного дома с рельефной стеной" },
  { title: "Влажные помещения", description: "Практичный объёмный декор для ванной комнаты и санузла в частном доме — выразительная поверхность для ежедневного использования.", image: interiorAsset.url, alt: "Ванная комната с рельефной плиткой" },
];

const audiences = [
  ["Частные клиенты", "Спальни, гостиные и ванные в частном доме."],
  ["Отели и рестораны", "Лобби, входные группы и залы ресторанов."],
  ["Застройщики ЖК и БЦ", "Фасады и общественные пространства объектов."],
  ["Общественные пространства", "Торговые центры, аэропорты и музеи."],
];

const gallery = [
  { title: "Архитектурный фасад", category: "Фасадные панели", image: heroStadiumAsset.url, layout: "sm:col-span-2" },
  { title: "Бизнес-холл", category: "Напольная плитка", image: heroLobbyAsset.url },
  { title: "Глубина фактуры", category: "Интерьерные картины", image: heroPanelAsset.url },
  { title: "Живое изображение", category: "Арт-фото панно", image: heroMotionAsset.url },
  { title: "Премиальный интерьер", category: "Настенная плитка", image: interiorAsset.url, layout: "sm:row-span-2" },
  { title: "Геометрия фасада", category: "Фасадные панели", image: facadeAsset.url },
  { title: "Оптические слои", category: "Настенная плитка", image: panelsAsset.url },
  { title: "Круглое панно", category: "Интерьерные картины", image: roundPanelAsset.url },
  { title: "Динамическая поверхность", category: "Интерьерные панели", image: panelShowcaseAsset.url, layout: "sm:col-span-2" },
  { title: "Индивидуальное производство", category: "Плитка", image: processPrintAsset.url },
  { title: "Авторская фактура", category: "Интерьерные панели", image: marblePanelAsset.url },
  { title: "Вертикальное панно", category: "Арт-фото панно", image: verticalAsset.url },
  { title: "Входная группа", category: "Интерьерные панели", image: projectInteriorAsset.url },
  { title: "Фасадный ритм", category: "Фасадные панели", image: projectFacadeAsset.url },
];

function Index() {
  const [slide, setSlide] = useState(0);
  const current = slides[slide];
  const next = slides[(slide + 1) % slides.length];
  if (!current || !next) return null;

  const selectSlide = (direction: number) => {
    setSlide((value) => (value + direction + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <a href="#top" className="flex items-center gap-3" aria-label="3DsTile — на главную">
            <img src={logoAsset.url} alt="3DsTile" className="h-8 w-auto" />
            <span className="h-8 w-px bg-border" aria-hidden="true" />
            <img src={skolkovoAsset.url} alt="Резидент ИЦ Сколково" className="h-9 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Основная навигация">
            <a href="#gallery" className="text-sm text-steel hover:text-navy">Галерея</a>
            <a href="#technology" className="text-sm text-steel hover:text-navy">Технология</a>
            <a href="#applications" className="text-sm text-steel hover:text-navy">Решения</a>
            <a href="#contacts" className="text-sm text-steel hover:text-navy">Контакты</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+74956629850" className="hidden text-sm font-medium text-ink lg:block">+7 (495) 662-98-50</a>
            <Button variant="header" asChild><a href="mailto:info@3dstile.com?subject=Запрос каталога">Запросить каталог</a></Button>
            <Menu className="size-5 text-ink md:hidden" aria-hidden="true" />
          </div>
        </div>
      </header>

      <section id="top" className="bg-hero text-hero-foreground">
        <div className="mx-auto max-w-[1440px] px-5 py-12 lg:px-10 lg:py-20">
          <div className="grid grid-cols-12 items-end gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-5">
              <div className="mb-6 flex items-center gap-3">
                <span className="font-display text-2xl font-semibold leading-none">{String(slide + 1).padStart(2, "0")}</span>
                <span className="h-px w-10 bg-hero-foreground/40" />
                <span className="font-display text-2xl font-medium leading-none text-hero-foreground/50">04</span>
              </div>
              <h1 className="max-w-[9ch] text-balance font-display text-5xl font-semibold uppercase leading-none sm:text-6xl lg:text-7xl">{current.title}</h1>
              <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-hero-foreground/70">{current.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="hero" size="lg" asChild><a href="#gallery">Смотреть продукцию</a></Button>
                <Button variant="heroOutline" size="lg" asChild><a href="mailto:info@3dstile.com?subject=Запрос каталога">Получить каталог</a></Button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <img src={current.image} alt={current.alt} width={1672} height={941} className="h-auto w-full rounded-[8px]" />
            </div>
          </div>
          <div className="mt-10 flex items-center justify-between gap-5 border-t border-hero-foreground/15 pt-6">
            <div className="flex items-center gap-2">
              <Button variant="carousel" size="icon" onClick={() => selectSlide(-1)} aria-label="Предыдущий слайд"><ArrowLeft /></Button>
              <Button variant="carousel" size="icon" onClick={() => selectSlide(1)} aria-label="Следующий слайд"><ArrowRight /></Button>
            </div>
            <div className="flex min-w-0 items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2" aria-label={`Слайд ${slide + 1} из 4`}>
                {slides.map((item, index) => <button key={item.title} onClick={() => setSlide(index)} aria-label={`Показать слайд ${index + 1}`} className={`size-2 rounded-full ${index === slide ? "bg-hero-foreground" : "bg-hero-foreground/30"}`} />)}
              </div>
              <span className="truncate text-sm text-hero-foreground/50">Далее: {next.title}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="bg-paper">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-5 py-16 lg:gap-12 lg:px-10 lg:py-24">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-sm font-semibold uppercase text-navy">Технология</p>
            <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">Авторская технология объёма, глубины и динамики</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="max-w-[58ch] text-base leading-relaxed text-steel">Материалы 3DsTile создают ощущение глубины за счёт оптических слоёв и рельефа. При смене угла зрения поверхность раскрывается по-новому, сохраняя практичность архитектурного материала.</p>
            <div className="mt-10 grid grid-cols-2 overflow-hidden rounded-[8px] bg-border sm:grid-cols-4">
              {[['30', 'дней изготовление'], ['10', 'лет гарантии'], ['3D', 'эффект глубины'], ['360°', 'панорамный обзор']].map(([value, label]) => (
                <div key={label} className="m-px bg-paper p-6"><p className="font-display text-4xl font-semibold leading-none text-navy">{value}</p><p className="mt-2 text-sm text-steel">{label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="applications" className="bg-ink text-hero-foreground">
        <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
          <p className="text-sm font-semibold uppercase text-hero-foreground/50">Решения для пространства</p>
          <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Для кого мы создаём</h2>
          <div className="mt-10 grid grid-cols-1 overflow-hidden rounded-[8px] bg-hero-foreground/10 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map(([title, text], index) => <article key={title} className="m-px bg-ink p-6"><p className="font-display text-lg text-hero-foreground/40">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-4 font-display text-xl font-medium">{title}</h3><p className="mt-2 text-sm leading-relaxed text-hero-foreground/60">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-background">
        <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
          <p className="text-sm font-semibold uppercase text-navy">Галерея</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Материалы и реализованные проекты</h2>
          <div className="mt-10 grid auto-rows-[220px] grid-cols-1 gap-2 sm:grid-cols-3 sm:auto-rows-[250px] lg:auto-rows-[300px]">
            {gallery.map((item) => (
              <figure key={item.title} className={`group relative min-h-0 overflow-hidden rounded-[8px] bg-ink ${item.layout ?? ""}`}>
                <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/80 to-transparent" aria-hidden="true" />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-hero-foreground">
                  <b className="max-w-[58%] font-display text-lg font-semibold leading-tight sm:text-xl">{item.title}</b>
                  <span className="max-w-[42%] text-right text-xs uppercase leading-tight text-hero-foreground/80">{item.category}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper" aria-labelledby="partners-title">
        <div className="mx-auto max-w-[1440px] px-5 py-16 lg:px-10 lg:py-24">
          <p className="text-sm font-semibold uppercase text-navy">Признание и поддержка</p>
          <h2 id="partners-title" className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">Наши партнёры</h2>
          <img src={partnersAsset.url} alt="Партнёры и организации, поддерживающие 3DsTile" loading="lazy" className="mt-10 h-auto w-full rounded-[8px] border border-border bg-background" />
        </div>
      </section>

      <section id="contacts" className="bg-navy text-hero-foreground">
        <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 px-5 py-16 lg:gap-12 lg:px-10 lg:py-24">
          <div className="col-span-12 lg:col-span-6"><p className="text-sm font-semibold uppercase text-hero-foreground/50">Контакты</p><h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Обсудим ваш проект</h2><p className="mt-4 max-w-[44ch] leading-relaxed text-hero-foreground/70">Пришлём каталог, подберём декор под ваш объект и рассчитаем стоимость.</p></div>
          <div className="col-span-12 grid gap-8 sm:grid-cols-2 lg:col-span-6">
            <div><p className="text-sm text-hero-foreground/50">Телефон</p><a href="tel:+74956629850" className="mt-1 block font-display text-xl">+7 (495) 662-98-50</a><a href="tel:+79037858200" className="mt-1 block font-display text-xl text-hero-foreground/80">+7 (903) 785-82-00</a></div>
            <div><p className="text-sm text-hero-foreground/50">Почта</p><a href="mailto:info@3dstile.com" className="mt-1 block font-display text-xl">info@3dstile.com</a><p className="mt-5 text-sm text-hero-foreground/50">Статус</p><p className="mt-1 text-sm text-hero-foreground/80">Резидент ИЦ «Сколково»</p></div>
          </div>
        </div>
      </section>
    </main>
  );
}