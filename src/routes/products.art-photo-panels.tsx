import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { productPages } from "@/data/site";
const page = productPages["/products/art-photo-panels"];
export const Route = createFileRoute("/products/art-photo-panels")({ head: () => ({ meta: [{ title: "Арт-фото панно — 3DsTile" }, { name: "description", content: page.description }, { property: "og:title", content: "Арт-фото панно — 3DsTile" }, { property: "og:description", content: page.description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: () => <ProductPage {...page} /> });
