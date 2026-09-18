import type { BlogPost } from "../../lib/blog";
import BlogCard from "./BlogCard";

export default function RelatedArticles({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-label="Related articles" style={{ marginTop: "4rem" }}>
      <div className="gold-line-full" style={{ marginBottom: "2.5rem" }} />
      <div className="label" style={{ marginBottom: "0.75rem" }}>Continue Reading</div>
      <h2 className="display-sm" style={{ marginBottom: "2rem" }}>Related Articles</h2>
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
