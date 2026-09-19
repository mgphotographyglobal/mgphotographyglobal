import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/blog-admin/session";
import { renderMarkdown } from "@/app/lib/blog";
import AdminNav from "../../../AdminNav";

export const metadata: Metadata = { title: "Preview", robots: { index: false, follow: false } };

export default async function PreviewPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { supabase, email } = await requireAdmin();

  const { data: post } = await supabase
    .from("blog_posts")
    .select(
      "title, excerpt, content, featured_image_url, featured_image_alt, author, status, meta_description, seo_title, category:blog_categories(name)"
    )
    .eq("id", id)
    .maybeSingle();

  if (!post) notFound();
  const category = Array.isArray(post.category) ? post.category[0] : post.category;

  return (
    <>
      <AdminNav email={email} />
      <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-sm text-amber-800">
        Draft preview — status: <strong>{post.status}</strong>. Not indexed, not in the sitemap, not publicly linked.
      </div>
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="mb-2 text-xs uppercase tracking-wide text-neutral-500">{category?.name ?? "Uncategorized"}</p>
        <h1 className="mb-4 text-3xl font-semibold text-neutral-900">{post.title}</h1>
        <p className="mb-6 text-neutral-600">{post.excerpt}</p>
        {post.featured_image_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.featured_image_url}
            alt={post.featured_image_alt ?? ""}
            className="mb-8 aspect-[16/9] w-full rounded-lg object-cover"
          />
        )}
        <div
          className="admin-prose"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content ?? "") }}
        />
        <div className="mt-10 space-y-1 rounded-md border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-500">
          <p>SEO title: {post.seo_title || "—"}</p>
          <p>Meta description: {post.meta_description || "—"}</p>
          <p>Author: {post.author}</p>
        </div>
      </main>
    </>
  );
}
