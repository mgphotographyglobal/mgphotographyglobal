import Link from "next/link";
import type { BlogCta } from "../../lib/blog";

export default function ArticleCTA({ cta }: { cta: Required<BlogCta> }) {
  const isExternal = cta.buttonHref.startsWith("http");

  return (
    <div className="glass-card" style={{ padding: "2.5rem", marginTop: "3.5rem", textAlign: "center" }}>
      <div className="label" style={{ marginBottom: "0.75rem" }}>MG Photography UAE</div>
      <h2 className="display-sm" style={{ marginBottom: "1.25rem" }}>{cta.title}</h2>
      <p className="body-lg" style={{ marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
        {cta.text}
      </p>
      {isExternal ? (
        <a href={cta.buttonHref} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex" }}>
          {cta.buttonLabel}
        </a>
      ) : (
        <Link href={cta.buttonHref} className="btn-primary" style={{ display: "inline-flex" }}>
          {cta.buttonLabel}
        </Link>
      )}
    </div>
  );
}
