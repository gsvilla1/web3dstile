import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Укажите имя").max(100, "Имя слишком длинное"),
  phone: z
    .string()
    .trim()
    .min(7, "Укажите телефон")
    .max(20, "Телефон слишком длинный")
    .regex(/^[0-9+()\-\s]+$/, "Некорректный телефон"),
  message: z.string().trim().max(1000, "Сообщение слишком длинное").optional().default(""),
});

export const submitContactRequest = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"]!;
    const supabasePublic = createClient(
      process.env["SUPABASE_URL"]!,
      key,
      {
        auth: { persistSession: false, autoRefreshToken: false },
        global: {
          fetch: (input, init) => {
            const h = new Headers(init?.headers);
            if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) h.delete("Authorization");
            h.set("apikey", key);
            return fetch(input, { ...init, headers: h });
          },
        },
      },
    );

    const { error } = await supabasePublic.from("contact_requests").insert({
      name: data.name,
      phone: data.phone,
      message: data.message ?? "",
    });

    if (error) {
      console.error("contact_requests insert failed:", error.message);
      return { ok: false as const, error: "Не удалось отправить заявку. Позвоните нам, пожалуйста." };
    }

    return { ok: true as const };
  });
