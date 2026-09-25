import { useServerFn } from "@tanstack/react-start";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { submitContactRequest } from "@/lib/contact.functions";

type FormStatus = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const send = useServerFn(submitContactRequest);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const setErrorAndStatus = (message: string) => {
    setError(message);
    setStatus("error");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
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
        setErrorAndStatus(result.error);
      }
    } catch {
      setErrorAndStatus("Не удалось отправить заявку. Позвоните нам, пожалуйста.");
    }
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
        <label className="grid gap-1.5"><span className="text-xs font-semibold uppercase text-steel">Имя</span><input type="text" name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Как к вам обращаться" maxLength={100} className={inputClass} /></label>
        <label className="grid gap-1.5"><span className="text-xs font-semibold uppercase text-steel">Телефон</span><input type="tel" name="phone" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="+7 (___) ___-__-__" maxLength={20} className={inputClass} /></label>
        <label className="grid gap-1.5"><span className="text-xs font-semibold uppercase text-steel">Сообщение</span><textarea name="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Опишите ваш проект или вопрос" rows={4} maxLength={1000} className={inputClass} /></label>
      </div>
      {status === "error" && error ? <p role="alert" className="mt-4 text-sm font-medium text-navy">{error}</p> : null}
      <Button type="submit" variant="hero" size="lg" className="mt-6" disabled={status === "sending"}>{status === "sending" ? "Отправляем…" : "Отправить заявку"}</Button>
    </form>
  );
}
