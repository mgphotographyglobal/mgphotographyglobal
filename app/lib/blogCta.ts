import type { BlogCta } from "./blog";
import { categorySlug } from "./blog";
import { serviceForCategory } from "./services";

const WHATSAPP_BASE = "https://wa.me/971588764748?text=";

function whatsappHref(message: string): string {
  return `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
}

/**
 * Default CTA copy per category. The link target (`buttonHref`) is NOT
 * duplicated here — it's resolved from app/lib/services.ts, the single
 * source of truth for service page URLs, so this table only needs to hold
 * editorial copy. A post's own `cta` frontmatter always takes priority.
 */
const CATEGORY_CTA_COPY: Record<string, Omit<BlogCta, "buttonHref">> = {
  "newborn-photography": {
    title: "Planning a Newborn Shoot in Dubai?",
    text: "See our newborn photography collections and book your session.",
    buttonLabel: "View Newborn Collections",
  },
  "baby-photography": {
    title: "Ready for Your Baby's Milestone Shoot?",
    text: "Explore our baby & milestone photography packages in Dubai.",
    buttonLabel: "View Baby Photography",
  },
  "maternity-photography": {
    title: "Celebrate This Chapter",
    text: "Book a maternity session designed around your story.",
    buttonLabel: "View Maternity Photography",
  },
  "wedding-photography": {
    title: "Planning Your Wedding Day?",
    text: "Discover our wedding photography coverage across the UAE.",
    buttonLabel: "View Wedding Photography",
  },
  "pre-wedding-photography": {
    title: "Dreaming Up Your Pre-Wedding Shoot?",
    text: "See our pre-wedding photography locations and packages.",
    buttonLabel: "View Pre-Wedding Photography",
  },
  "outdoor-photography": {
    title: "Looking for a Family Outdoor Session?",
    text: "Explore our outdoor & family photography experiences.",
    buttonLabel: "View Outdoor Photography",
  },
  "birthday-photography": {
    title: "Celebrating a Birthday or Event?",
    text: "See how we capture birthdays and milestone celebrations.",
    buttonLabel: "View Birthday Photography",
  },
  "real-estate-photography": {
    title: "Need Property Photography?",
    text: "See our real estate & architecture photography services.",
    buttonLabel: "View Real Estate Photography",
  },
  "architecture-photography": {
    title: "Need Architecture Photography?",
    text: "See our interior, exterior & commercial photography work.",
    buttonLabel: "View Architecture Photography",
  },
};

const DEFAULT_CTA: BlogCta = {
  title: "Ready to Book Your Session?",
  text: "Talk to MG Photography and let's plan something beautiful.",
  buttonLabel: "Talk to MG Photography",
  buttonHref: "/contact/",
};

export function resolveCta(category: string, override?: BlogCta): Required<BlogCta> {
  const copy = CATEGORY_CTA_COPY[categorySlug(category)];
  const href = serviceForCategory(category)?.href;
  const base: BlogCta = copy && href ? { ...copy, buttonHref: href } : DEFAULT_CTA;
  const merged = { ...DEFAULT_CTA, ...base, ...override };
  return merged as Required<BlogCta>;
}

export function ctaHref(href: string): string {
  if (href.startsWith("http") || href.startsWith("/")) return href;
  return whatsappHref(href);
}
