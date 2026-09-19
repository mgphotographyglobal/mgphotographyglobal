import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";
import BlogCard from "./components/BlogCard";
import Pagination from "./components/Pagination";
import { getPublishedPosts, POSTS_PER_PAGE } from "../lib/blog";

export default function BlogIndex({ page }: { page: number }) {
  const posts = getPublishedPosts();
  const totalPages = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  const start = (page - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(start, start + POSTS_PER_PAGE);
  const featured = page === 1 ? pagePosts[0] : undefined;
  const rest = page === 1 ? pagePosts.slice(1) : pagePosts;

  return (
    <>
      <Header />
      <WhatsAppFloat />

      <section style={{ paddingTop: "8rem", paddingBottom: "3rem", background: "var(--black)" }}>
        <div className="container-luxury" style={{ maxWidth: "820px" }}>
          <div className="label" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="gold-line" /> The Journal
          </div>
          <h1 className="display-md" style={{ marginBottom: "1.25rem" }}>
            Photography Guides &amp;<br /><span className="text-gold-gradient">Stories from Dubai</span>
          </h1>
          <p className="body-lg" style={{ marginBottom: "1.5rem" }}>
            Ideas, planning guides and behind-the-scenes stories from MG Photography UAE — for
            newborn, maternity, wedding and family sessions across Dubai, Abu Dhabi &amp; Sharjah.
          </p>
          <div className="gold-line-full" />
        </div>
      </section>

      <section style={{ paddingBottom: "6rem", background: "var(--black)" }} aria-label="Blog articles">
        <div className="container-luxury">
          {pagePosts.length === 0 ? (
            <p className="body-lg">New articles are on the way — check back soon.</p>
          ) : (
            <>
              {featured && (
                <div style={{ marginBottom: "3rem" }}>
                  <BlogCard post={featured} featured />
                </div>
              )}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "2rem",
                }}
              >
                {rest.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            </>
          )}
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      </section>

      <Footer />
    </>
  );
}
