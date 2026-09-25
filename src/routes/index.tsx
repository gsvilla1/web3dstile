import { createFileRoute, useServerFn } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Menu, MessageCircle } from "lucide-react";
import { useState } from "react";

import { submitContactRequest } from "@/lib/contact.functions";

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
          <div className="col-span-12 lg:col-span-6">
            <p className="text-sm font-semibold uppercase text-hero-foreground/50">Контакты</p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Обсудим ваш проект</h2>
            <p className="mt-4 max-w-[44ch] leading-relaxed text-hero-foreground/70">Пришлём каталог, подберём декор под ваш объект и рассчитаем стоимость.</p>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-sm text-hero-foreground/50">Телефон</p>
                <a href="tel:+74956629850" className="mt-1 block font-display text-xl">+7 (495) 662-98-50</a>
                <a href="tel:+79037858200" className="mt-1 block font-display text-xl text-hero-foreground/80">+7 (903) 785-82-00</a>
                <a href="tel:+79035930855" className="mt-1 block font-display text-xl text-hero-foreground/80">+7 (903) 593-08-55</a>
              </div>
              <div>
                <p className="text-sm text-hero-foreground/50">Почта</p>
                <a href="mailto:info@3dstile.com" className="mt-1 block font-display text-xl">info@3dstile.com</a>
                <p className="mt-5 text-sm text-hero-foreground/50">Статус</p>
                <p className="mt-1 text-sm text-hero-foreground/80">Резидент ИЦ «Сколково»</p>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-sm text-hero-foreground/50">Мы в мессенджерах — +7 (903) 593-08-55</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {messengers.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} — написать на +7 (903) 593-08-55`}
                    className="inline-flex items-center gap-2 rounded-[3px] border border-hero-foreground/30 px-4 py-2.5 text-sm text-hero-foreground hover:border-hero-foreground hover:bg-hero-foreground hover:text-navy"
                  >
                    <item.icon className="size-4" aria-hidden="true" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}

const messengers = [
  { label: "MAX", href: "https://max.ru", icon: MessageCircle },
  { label: "Telegram", href: "https://t.me/+79035930855", icon: TelegramIcon },
  { label: "WhatsApp", href: "https://wa.me/79035930855", icon: WhatsAppIcon },
];

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M9.04 15.51 8.9 19.1c.4 0 .57-.17.78-.38l1.87-1.8 3.88 2.85c.71.39 1.22.19 1.4-.66l2.56-12.01c.23-1.06-.38-1.47-1.08-1.21L3.6 10.7c-1.03.4-1.02.97-.18 1.23l3.78 1.18 8.78-5.54c.41-.27.79-.12.48.15z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.14-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.6h-.01a9.55 9.55 0 0 1-4.87-1.34l-.35-.2-3.62.94.97-3.52-.23-.36a9.53 9.53 0 0 1-1.46-5.08c0-5.27 4.3-9.56 9.58-9.56 2.56 0 4.96 1 6.77 2.8a9.5 9.5 0 0 1 2.8 6.77c0 5.28-4.3 9.57-9.58 9.57m8.15-17.72A11.4 11.4 0 0 0 12.05.5C5.8.5.72 5.58.72 11.82c0 2 .52 3.96 1.52 5.68L.5 23.5l6.15-1.61a11.3 11.3 0 0 0 5.4 1.37h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01" />
    </svg>
  );
}

type FormStatus = "idle" | "sending" | "sent" | "error";

function ContactForm() {
  const send = useServerFn(submitContactRequest);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    const name = form.name.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name) return setErrorAndStatus("Укажите ваше имя");
    if (name.length > 100) return setErrorAndStatus("Имя слишком длинное");
    if (!/^[0-9+()\-\s]{7,20}$/.test(phone)) return setErrorAndStatus("Укажите корректный номер телефона");
    if (message.length > 1000) return setErrorAndStatus("Сообщение слишком длинное");

    setError("");
    setStatus("sending");
    try {
      const result = await send({ data: { name, phone, message } });
      if (result.ok) {
        setStatus("sent");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setError(result.error);
        setStatus("error");
      }
    } catch {
      setError("Не удалось отправить заявку. Позвоните нам, пожалуйста.");
      setStatus("error");
    }
  };

  const setErrorAndStatus = (message: string) => {
    setError(message);
    setStatus("error");
  };

  const inputClass = "w-full rounded-[3px] border border-border bg-paper px-4 py-3 text-sm text-ink placeholder:text-steel/60 focus:border-navy focus:outline-none";

  if (status === "sent") {
    return (
      <div className="rounded-[8px] bg-background p-8 lg:p-10">
        <p className="font-display text-2xl font-semibold text-ink">Заявка отправлена</p>
        <p className="mt-3 max-w-[44ch] leading-relaxed text-steel">Спасибо! Мы получили ваше сообщение и свяжемся с вами в ближайшее время.</p>
        <Button variant="header" className="mt-8" onClick={() => setStatus("idle")}>Отправить ещё одну заявку</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[8px] bg-background p-8 lg:p-10" noValidate>
      <p className="font-display text-2xl font-semibold text-ink">Форма обратной связи</p>
      <p className="mt-3 text-sm leading-relaxed text-steel">Оставьте заявку — ответим и пришлём каталог.</p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase text-steel">Имя</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            placeholder="Как к вам обращаться"
            maxLength={100}
            className={inputClass}
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase text-steel">Телефон</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={(event) => setForm({ ...form, phone: event.target.value })}
            placeholder="+7 (___) ___-__-__"
            maxLength={20}
            className={inputClass}
          />
        </label>
        <label className="grid gap-1.5">
          <span className="text-xs font-semibold uppercase text-steel">Сообщение</span>
          <textarea
            name="message"
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            placeholder="Опишите ваш проект или вопрос"
            rows={4}
            maxLength={1000}
            className={inputClass}
          />
        </label>
      </div>
      {status === "error" && error ? (
        <p role="alert" className="mt-4 text-sm font-medium text-navy">{error}</p>
      ) : null}
      <Button type="submit" variant="hero" size="lg" className="mt-6" disabled={status === "sending"}>
        {status === "sending" ? "Отправляем…" : "Отправить заявку"}
      </Button>
    </form>
  );
}