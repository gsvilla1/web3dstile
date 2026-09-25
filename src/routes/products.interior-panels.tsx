import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { productPages } from "@/data/site";
const page = productPages["/products/interior-panels"];
export const Route = createFileRoute("/products/interior-panels")({ head: () => ({ meta: [{ title: "Интерьерные панели — 3DsTile" }, { name: "description", content: page.description }, { property: "og:title", content: "Интерьерные панели — 3DsTile" }, { property: "og:description", content: page.description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: () => <ProductPage {...page} /> });
