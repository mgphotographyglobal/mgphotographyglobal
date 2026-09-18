import type { BlogCta } from "./blog";
import { categorySlug } from "./blog";

const WHATSAPP_BASE = "https://wa.me/971588764748?text=";

function whatsappHref(message: string): string {
  return `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
}

/**
 * Default calls-to-action per category, so every article gets a relevant
 * CTA (and an internal link to the matching service page) without any
 * author having to specify one. A post's own `cta` frontmatter always
 * takes priority — this is only the fallback.
 */
const CATEGORY_CTAS: Record<string, BlogCta> = {
  "newborn-photography": {
    title: "Planning a Newborn Shoot in Dubai?",
    text: "See our newborn photography collections and book your session.",
    buttonLabel: "View Newborn Collections",
    buttonHref: "/dubai-newborn-photography/",
  },
  "baby-photography": {
    title: "Ready for Your Baby's Milestone Shoot?",
    text: "Explore our baby & milestone photography packages in Dubai.",
    buttonLabel: "View Baby Photography",
    buttonHref: "/baby-photography-dubai/",
  },
  "maternity-photography": {
    title: "Celebrate This Chapter",
    text: "Book a maternity session designed around your story.",
    buttonLabel: "View Maternity Photography",
    buttonHref: "/maternity-photography-dubai/",
  },
  "wedding-photography": {
    title: "Planning Your Wedding Day?",
    text: "Discover our wedding photography coverage across the UAE.",
    buttonLabel: "View Wedding Photography",
    buttonHref: "/wedding-photography-dubai/",
  },
  "pre-wedding-photography": {
    title: "Dreaming Up Your Pre-Wedding Shoot?",
    text: "See our pre-wedding photography locations and packages.",
    buttonLabel: "View Pre-Wedding Photography",
    buttonHref: "/pre-wedding-photography-dubai/",
  },
  "outdoor-photography": {
    title: "Looking for a Family Outdoor Session?",
    text: "Explore our outdoor & family photography experiences.",
    buttonLabel: "View Outdoor Photography",
    buttonHref: "/outdoor-photography-dubai/",
  },
  "birthday-photography": {
    title: "Celebrating a Birthday or Event?",
    text: "See how we capture birthdays and milestone celebrations.",
    buttonLabel: "View Birthday Photography",
    buttonHref: "/birthday-photography-dubai/",
  },
  "real-estate-photography": {
    title: "Need Property Photography?",
    text: "See our real estate & architecture photography services.",
    buttonLabel: "View Real Estate Photography",
    buttonHref: "/real-estate-photography-dubai/",
  },
  "architecture-photography": {
    title: "Need Architecture Photography?",
    text: "See our interior, exterior & commercial photography work.",
    buttonLabel: "View Architecture Photography",
    buttonHref: "/architecture-photography-dubai/",
  },
};

const DEFAULT_CTA: BlogCta = {
  title: "Ready to Book Your Session?",
  text: "Talk to MG Photography and let's plan something beautiful.",
  buttonLabel: "Talk to MG Photography",
  buttonHref: "/contact/",
};

export function resolveCta(category: string, override?: BlogCta): Required<BlogCta> {
  const base = CATEGORY_CTAS[categorySlug(category)] ?? DEFAULT_CTA;
  const merged = { ...DEFAULT_CTA, ...base, ...override };
  return merged as Required<BlogCta>;
}

export function ctaHref(href: string): string {
  if (href.startsWith("http") || href.startsWith("/")) return href;
  return whatsappHref(href);
}
