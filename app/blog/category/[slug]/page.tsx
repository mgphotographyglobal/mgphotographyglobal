import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import WhatsAppFloat from "../../../components/WhatsAppFloat";
import Breadcrumbs from "../../components/Breadcrumbs";
import BlogCard from "../../components/BlogCard";
import { getAllCategories, getPostsByCategory } from "../../../lib/blog";

type Params = { slug: string };

export const revalidate = 300;

export async function generateStaticParams() {
  return (await getAllCategories()).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const category = (await getAllCategories()).find((c) => c.slug === slug);
  if (!category) return {};

  return {
    title: `${category.name} Articles | MG Photography UAE Blog`,
    description: `Photography guides and stories in the ${category.name} category from MG Photography UAE.`,
    alternates: { canonical: `https://mgphotographyglobal.com/blog/category/${slug}/` },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = (await getAllCategories()).find((c) => c.slug === slug);
  if (!category) notFound();

  const posts = await getPostsByCategory(slug);

  return (
    <>
      <Header />
      <WhatsAppFloat />
      <section style={{ paddingTop: "8rem", paddingBottom: "3rem", background: "var(--black)" }}>
        <div className="container-luxury" style={{ maxWidth: "820px" }}>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog/" }, { label: category.name }]} />
          <div className="label" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div className="gold-line" /> Category
          </div>
          <h1 className="display-md" style={{ marginBottom: "1.25rem" }}>{category.name}</h1>
          <div className="gold-line-full" />
        </div>
      </section>
      <section style={{ paddingBottom: "6rem", background: "var(--black)" }}>
        <div className="container-luxury">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
