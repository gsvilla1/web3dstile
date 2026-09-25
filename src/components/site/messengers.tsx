import { MessageCircle } from "lucide-react";

const messengers = [
  { label: "MAX", href: "https://max.ru", icon: MessageCircle },
  { label: "Telegram", href: "https://t.me/+79035930855", icon: TelegramIcon },
  { label: "WhatsApp", href: "https://wa.me/79035930855", icon: WhatsAppIcon },
];

export function Messengers() {
  return (
    <div>
      <p className="text-sm text-hero-foreground/50">Мы в мессенджерах — +7 (903) 593-08-55</p>
      <div className="mt-3 flex flex-wrap gap-3">
        {messengers.map((item) => (
          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label} — написать на +7 (903) 593-08-55`} className="inline-flex items-center gap-2 rounded-[3px] border border-hero-foreground/30 px-4 py-2.5 text-sm text-hero-foreground hover:border-hero-foreground hover:bg-hero-foreground hover:text-navy">
            <item.icon className="size-4" aria-hidden="true" />{item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M9.04 15.51 8.9 19.1c.4 0 .57-.17.78-.38l1.87-1.8 3.88 2.85c.71.39 1.22.19 1.4-.66l2.56-12.01c.23-1.06-.38-1.47-1.08-1.21L3.6 10.7c-1.03.4-1.02.97-.18 1.23l3.78 1.18 8.78-5.54c.41-.27.79-.12.48.15z" /></svg>;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.4-1.48a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.14-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.38-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35M12.05 21.6h-.01a9.55 9.55 0 0 1-4.87-1.34l-.35-.2-3.62.94.97-3.52-.23-.36a9.53 9.53 0 0 1-1.46-5.08c0-5.27 4.3-9.56 9.58-9.56 2.56 0 4.96 1 6.77 2.8a9.5 9.5 0 0 1 2.8 6.77c0 5.28-4.3 9.57-9.58 9.57m8.15-17.72A11.4 11.4 0 0 0 12.05.5C5.8.5.72 5.58.72 11.82c0 2 .52 3.96 1.52 5.68L.5 23.5l6.15-1.61a11.3 11.3 0 0 0 5.4 1.37h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01" /></svg>;
}
