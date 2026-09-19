import type { BlogPost } from "../../lib/blog";
import BlogCard from "./BlogCard";

export default function RelatedArticles({
  posts,
  heading = "Related Articles",
  label = "Continue Reading",
}: {
  posts: BlogPost[];
  heading?: string;
  label?: string;
}) {
  if (posts.length === 0) return null;

  return (
    <section aria-label={heading} style={{ marginTop: "4rem" }}>
      <div className="gold-line-full" style={{ marginBottom: "2.5rem" }} />
      <div className="label" style={{ marginBottom: "0.75rem" }}>{label}</div>
      <h2 className="display-sm" style={{ marginBottom: "2rem" }}>{heading}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
