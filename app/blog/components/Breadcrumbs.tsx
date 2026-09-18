import Link from "next/link";
import { BLOG_SITE_URL } from "../../lib/blog";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${BLOG_SITE_URL}${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
        <ol
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem",
            listStyle: "none",
            fontSize: "0.78rem",
            color: "rgba(250,246,238,0.45)",
          }}
        >
          {items.map((item, i) => (
            <li key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              {item.href ? (
                <Link href={item.href} style={{ color: "rgba(250,246,238,0.45)", textDecoration: "none" }} className="hover-gold">
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: "rgba(250,246,238,0.7)" }}>{item.label}</span>
              )}
              {i < items.length - 1 && <span aria-hidden="true">/</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
