import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import logoAsset from "@/assets/originals/logo-3dstile-clear.png.asset.json";
import skolkovoAsset from "@/assets/originals/logo-skolkovo-clear.png.asset.json";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/site";

const navItems = [
  { label: "Галерея", to: "/#gallery" },
  { label: "О технологии", to: "/technology" },
  { label: "Наши награды", to: "/awards" },
  { label: "Контакты", to: "/contacts" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-border bg-background">
      <div className="mx-auto flex min-h-16 max-w-[1440px] items-center justify-between gap-5 px-5 py-3 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="3DsTile — на главную">
          <img src={logoAsset.url} alt="3DsTile" className="h-8 w-auto" />
          <span className="h-8 w-px bg-border" aria-hidden="true" />
          <img src={skolkovoAsset.url} alt="Резидент ИЦ Сколково" className="h-9 w-auto" />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Основная навигация">
          <div className="group relative">
            <button type="button" className="flex h-10 items-center gap-1 text-xs font-semibold uppercase text-ink" aria-haspopup="true">
              Наша продукция <ChevronDown className="size-4" aria-hidden="true" />
            </button>
            <div className="invisible absolute left-0 top-full w-64 border border-border bg-background p-2 opacity-0 shadow-lg group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {productCategories.map((item) => (
                <Link key={item.to} to={item.to} className="block px-3 py-2.5 text-xs font-semibold uppercase text-steel hover:bg-paper hover:text-navy">{item.label}</Link>
              ))}
            </div>
          </div>
          {navItems.map((item) => <Link key={item.label} to={item.to} className="text-xs font-semibold uppercase text-steel hover:text-navy">{item.label}</Link>)}
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+74956629850" className="hidden text-sm font-medium text-ink lg:block">+7 (495) 662-98-50</a>
          <Button variant="header" asChild className="hidden sm:inline-flex"><a href="mailto:info@3dstile.ru?subject=Стать партнёром">Стать партнёром</a></Button>
          <Button variant="ghost" size="icon" className="xl:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Закрыть меню" : "Открыть меню"}>{open ? <X /> : <Menu />}</Button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-background px-5 py-4 xl:hidden" aria-label="Мобильная навигация">
          <details className="border-b border-border pb-3">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-xs font-semibold uppercase text-ink">Наша продукция <ChevronDown className="size-4" /></summary>
            <div className="grid gap-1 pt-2">
              {productCategories.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="py-2 pl-3 text-xs font-semibold uppercase text-steel">{item.label}</Link>)}
            </div>
          </details>
          <div className="grid gap-1 pt-3">
            {navItems.map((item) => <Link key={item.label} to={item.to} onClick={() => setOpen(false)} className="py-2 text-xs font-semibold uppercase text-steel">{item.label}</Link>)}
            <Button variant="header" asChild className="mt-3 sm:hidden"><a href="mailto:info@3dstile.ru?subject=Стать партнёром">Стать партнёром</a></Button>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
