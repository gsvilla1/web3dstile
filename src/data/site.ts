import facadeAsset from "@/assets/originals/facade.png.asset.json";
import heroLobbyAsset from "@/assets/originals/hero-lobby.webp.asset.json";
import heroMotionAsset from "@/assets/originals/hero-motion.jpg.asset.json";
import heroPanelAsset from "@/assets/originals/hero-panel.jpg.asset.json";
import heroStadiumAsset from "@/assets/originals/hero-stadium.webp.asset.json";
import interiorAsset from "@/assets/originals/interior.png.asset.json";
import marblePanelAsset from "@/assets/originals/panel-marble.jpg.asset.json";
import panelShowcaseAsset from "@/assets/originals/panel-showcase.jpg.asset.json";
import panelsAsset from "@/assets/originals/panels.jpg.asset.json";
import processPrintAsset from "@/assets/originals/process-print.jpg.asset.json";
import projectFacadeAsset from "@/assets/originals/project-facade.png.asset.json";
import projectInteriorAsset from "@/assets/originals/project-interior.png.asset.json";
import roundPanelAsset from "@/assets/originals/project-round-panel.jpg.asset.json";
import verticalAsset from "@/assets/originals/vertical.jpg.asset.json";

export const productCategories = [
  { label: "Интерьерные панели", to: "/products/interior-panels" as const },
  { label: "Фасадные панели", to: "/products/facade-panels" as const },
  { label: "Настенная плитка", to: "/products/wall-tiles" as const },
  { label: "Напольная плитка", to: "/products/floor-tiles" as const },
  { label: "Интерьерные картины", to: "/products/interior-art" as const },
  { label: "Арт-фото панно", to: "/products/art-photo-panels" as const },
] as const;

export type GalleryItem = {
  title: string;
  category: string;
  image: string;
  layout?: string;
};

export const gallery: GalleryItem[] = [
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

export const productPages = {
  "/products/interior-panels": {
    title: "Интерьерные панели",
    description: "Декоративные поверхности с эффектом объёма и движения для частных и общественных интерьеров.",
    items: gallery.filter((item) => item.category === "Интерьерные панели"),
  },
  "/products/facade-panels": {
    title: "Фасадные панели",
    description: "Архитектурные панели, рисунок которых меняется вместе с углом обзора и естественным светом.",
    items: gallery.filter((item) => item.category === "Фасадные панели"),
  },
  "/products/wall-tiles": {
    title: "Настенная плитка",
    description: "Настенные материалы с оптическими слоями, глубиной фактуры и выразительным 3D-эффектом.",
    items: gallery.filter((item) => item.category === "Настенная плитка"),
  },
  "/products/floor-tiles": {
    title: "Напольная плитка",
    description: "Износостойкие декоративные решения для лобби, входных групп и коммерческих пространств.",
    items: gallery.filter((item) => item.category === "Напольная плитка" || item.category === "Плитка"),
  },
  "/products/interior-art": {
    title: "Интерьерные картины",
    description: "Объёмные произведения для интерьера, раскрывающиеся по-разному при смене точки наблюдения.",
    items: gallery.filter((item) => item.category === "Интерьерные картины"),
  },
  "/products/art-photo-panels": {
    title: "Арт-фото панно",
    description: "Фотографические композиции с динамическим изображением и эффектом визуального погружения.",
    items: gallery.filter((item) => item.category === "Арт-фото панно"),
  },
} as const;
