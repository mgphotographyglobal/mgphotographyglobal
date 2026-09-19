import Link from "next/link";
import Image from "next/image";
import type { BlogPostSummary } from "../../lib/blog";
import { categorySlug } from "../../lib/blog";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPostSummary;
  featured?: boolean;
}) {
  return (
    <article
      className="hover-lift"
      style={{
        display: "flex",
        flexDirection: "column",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(201,168,76,0.12)",
        overflow: "hidden",
      }}
    >
      <Link
        href={`/blog/${post.slug}/`}
        className="img-luxury"
        style={{
          position: "relative",
          display: "block",
          aspectRatio: featured ? "16/9" : "4/3",
          background: "#1a1a1a",
        }}
      >
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes={featured ? "(min-width: 1024px) 800px, 100vw" : "(min-width: 1024px) 400px, 100vw"}
          style={{ objectFit: "cover" }}
        />
      </Link>
      <div style={{ padding: featured ? "1.75rem" : "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
          <Link href={`/blog/category/${categorySlug(post.category)}/`} className="label" style={{ textDecoration: "none" }}>
            {post.category}
          </Link>
          <span style={{ color: "rgba(250,246,238,0.3)", fontSize: "0.7rem" }}>&middot;</span>
          <span className="body-sm" style={{ fontSize: "0.72rem" }}>{post.readingTimeMinutes} min read</span>
        </div>
        <h3
          style={{
            fontSize: featured ? "1.4rem" : "1.1rem",
            marginBottom: "0.75rem",
            lineHeight: 1.25,
          }}
        >
          <Link href={`/blog/${post.slug}/`} style={{ color: "var(--cream)", textDecoration: "none" }}>
            {post.title}
          </Link>
        </h3>
        <p className="body-sm" style={{ fontSize: "0.88rem", marginBottom: "1.25rem", flex: 1 }}>
          {post.excerpt}
        </p>
        <time dateTime={post.publishedAt} className="body-sm" style={{ fontSize: "0.75rem" }}>
          {formatDate(post.publishedAt)}
        </time>
      </div>
    </article>
  );
}
