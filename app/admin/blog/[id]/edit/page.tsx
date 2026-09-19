import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/blog-admin/session";
import AdminNav from "../../../AdminNav";
import BlogPostForm, { type BlogPostFormValues } from "../../BlogPostForm";

export const metadata: Metadata = { title: "Edit Post" };

const SAVED_LABEL: Record<string, string> = {
  draft: "Draft saved.",
  review: "Submitted for review.",
  approved: "Approved.",
  published: "Published.",
  scheduled: "Scheduled.",
};

export default async function EditBlogPostPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ saved?: string }>;
}) {
  const { id } = await params;
  const { saved } = await searchParams;
  const { supabase, email } = await requireAdmin();

  const [{ data: post }, { data: categories }, { data: posts }, { data: tagRows }] = await Promise.all([
    supabase
      .from("blog_posts")
      .select(
        "id, title, slug, seo_title, meta_description, excerpt, content, featured_image_url, featured_image_alt, category:blog_categories(slug), primary_service, cluster, author, canonical_url, og_image_url, focus_keyword, is_pillar, status, published_at, scheduled_publish_at, related_post_ids"
      )
      .eq("id", id)
      .maybeSingle(),
    supabase.from("blog_categories").select("slug, name").order("name"),
    supabase.from("blog_posts").select("slug, title").neq("id", id).order("title"),
    supabase.from("blog_post_tags").select("tag:blog_tags(name)").eq("post_id", id),
  ]);

  if (!post) notFound();

  const relatedSlugs: string[] = [];
  if (post.related_post_ids && post.related_post_ids.length > 0) {
    const { data: related } = await supabase.from("blog_posts").select("slug").in("id", post.related_post_ids);
    relatedSlugs.push(...(related ?? []).map((r) => r.slug as string));
  }

  const category = Array.isArray(post.category) ? post.category[0] : post.category;
  const tags = (tagRows ?? [])
    .map((t) => {
      const tag = Array.isArray(t.tag) ? t.tag[0] : t.tag;
      return tag?.name;
    })
    .filter((t): t is string => Boolean(t));

  const values: BlogPostFormValues = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    seoTitle: post.seo_title ?? "",
    metaDescription: post.meta_description ?? "",
    excerpt: post.excerpt ?? "",
    content: post.content ?? "",
    featuredImage: post.featured_image_url ?? "",
    featuredImageAlt: post.featured_image_alt ?? "",
    category: category?.slug ?? "",
    tags: tags.join(", "),
    primaryService: post.primary_service ?? "",
    cluster: post.cluster ?? "",
    author: post.author ?? "MG Photography UAE",
    canonicalUrl: post.canonical_url ?? "",
    ogImage: post.og_image_url ?? "",
    focusKeyword: post.focus_keyword ?? "",
    isPillar: post.is_pillar,
    relatedPosts: relatedSlugs.join(", "),
    status: post.status,
    publishedAt: post.published_at ?? "",
    scheduledPublishAt: post.scheduled_publish_at ?? "",
  };

  return (
    <>
      <AdminNav email={email} />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Edit Post</h1>
          {post.status === "published" && (
            <a href={`/blog/${post.slug}/`} target="_blank" rel="noreferrer" className="text-sm text-neutral-500 underline">
              View live →
            </a>
          )}
        </div>
        {saved && SAVED_LABEL[saved] && (
          <p className="mb-4 rounded-md bg-green-50 px-3 py-2 text-sm text-green-800">{SAVED_LABEL[saved]}</p>
        )}
        <BlogPostForm values={values} categories={categories ?? []} posts={posts ?? []} />
      </main>
    </>
  );
}
