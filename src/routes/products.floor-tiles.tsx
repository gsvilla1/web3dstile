import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/site/product-page";
import { productPages } from "@/data/site";
const page = productPages["/products/floor-tiles"];
export const Route = createFileRoute("/products/floor-tiles")({ head: () => ({ meta: [{ title: "Напольная плитка — 3DsTile" }, { name: "description", content: page.description }, { property: "og:title", content: "Напольная плитка — 3DsTile" }, { property: "og:description", content: page.description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }), component: () => <ProductPage {...page} /> });
