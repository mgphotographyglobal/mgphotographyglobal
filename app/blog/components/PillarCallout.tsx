import Link from "next/link";
import type { BlogPost } from "../../lib/blog";

/**
 * Shown on a supporting article when its cluster has a designated pillar
 * guide — points the reader (and search engines) up to the hub article.
 * Only rendered when a pillar actually exists; never fabricates one.
 */
export default function PillarCallout({ pillar }: { pillar: BlogPost }) {
  return (
    <div
      style={{
        border: "1px solid rgba(201,168,76,0.25)",
        borderLeft: "3px solid var(--gold)",
        padding: "1.25rem 1.5rem",
        margin: "2.5rem 0",
        background: "rgba(201,168,76,0.04)",
      }}
    >
      <p className="body-sm" style={{ fontSize: "0.85rem", margin: 0 }}>
        Part of our complete guide —{" "}
        <Link href={`/blog/${pillar.slug}/`} style={{ color: "var(--gold)", textDecoration: "underline", textUnderlineOffset: "0.2em" }}>
          {pillar.title}
        </Link>
      </p>
    </div>
  );
}
