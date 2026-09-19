import type { Metadata } from "next";
import { requireAdmin } from "@/lib/blog-admin/session";
import AdminNav from "../../AdminNav";
import BlogPostForm, { type BlogPostFormValues } from "../BlogPostForm";

export const metadata: Metadata = { title: "New Post" };

const EMPTY: BlogPostFormValues = {
  title: "",
  slug: "",
  seoTitle: "",
  metaDescription: "",
  excerpt: "",
  content: "",
  featuredImage: "",
  featuredImageAlt: "",
  category: "",
  tags: "",
  primaryService: "",
  cluster: "",
  author: "MG Photography UAE",
  canonicalUrl: "",
  ogImage: "",
  focusKeyword: "",
  isPillar: false,
  relatedPosts: "",
  status: "draft",
  publishedAt: "",
  scheduledPublishAt: "",
};

export default async function NewBlogPostPage() {
  const { supabase, email } = await requireAdmin();

  const [{ data: categories }, { data: posts }] = await Promise.all([
    supabase.from("blog_categories").select("slug, name").order("name"),
    supabase.from("blog_posts").select("slug, title").order("title"),
  ]);

  return (
    <>
      <AdminNav email={email} />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-semibold">New Post</h1>
        <BlogPostForm values={EMPTY} categories={categories ?? []} posts={posts ?? []} />
      </main>
    </>
  );
}
