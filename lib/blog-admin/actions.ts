"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "./session";
import { validateForPublish, slugify } from "./validation";
import { tagSlug } from "@/app/lib/blog";
import { serviceForCategory } from "@/app/lib/services";

export interface ActionResult {
  ok: boolean;
  errors?: string[];
  id?: string;
  slug?: string;
}

function readFields(formData: FormData) {
  const get = (name: string) => String(formData.get(name) ?? "").trim();
  return {
    title: get("title"),
    slug: get("slug") || slugify(get("title")),
    seoTitle: get("seoTitle") || get("title"),
    metaDescription: get("metaDescription"),
    excerpt: get("excerpt"),
    content: get("content"),
    featuredImage: get("featuredImage"),
    featuredImageAlt: get("featuredImageAlt"),
    categorySlug: get("category"),
    tags: get("tags"),
    primaryService: get("primaryService"),
    cluster: get("cluster"),
    author: get("author") || "MG Photography UAE",
    canonicalUrl: get("canonicalUrl"),
    ogImage: get("ogImage"),
    focusKeyword: get("focusKeyword"),
    isPillar: formData.get("isPillar") === "on",
    relatedPosts: get("relatedPosts"),
    publishedAt: get("publishedAt"),
    scheduledPublishAt: get("scheduledPublishAt"),
  };
}

async function resolveCategoryId(supabase: Awaited<ReturnType<typeof requireAdmin>>["supabase"], slug: string) {
  if (!slug) return null;
  const { data } = await supabase.from("blog_categories").select("id").eq("slug", slug).maybeSingle();
  return data?.id ?? null;
}

async function syncTags(
  supabase: Awaited<ReturnType<typeof requireAdmin>>["supabase"],
  postId: string,
  tagsCsv: string
) {
  const names = tagsCsv
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  await supabase.from("blog_post_tags").delete().eq("post_id", postId);
  if (names.length === 0) return;

  for (const name of names) {
    const slug = tagSlug(name);
    await supabase.from("blog_tags").insert({ name, slug }).select("id").maybeSingle();
    const { data: tag } = await supabase.from("blog_tags").select("id").eq("slug", slug).maybeSingle();
    if (tag) {
      await supabase.from("blog_post_tags").insert({ post_id: postId, tag_id: tag.id });
    }
  }
}

async function resolveRelatedPostIds(
  supabase: Awaited<ReturnType<typeof requireAdmin>>["supabase"],
  slugsCsv: string
): Promise<string[]> {
  const slugs = slugsCsv
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  if (slugs.length === 0) return [];
  const { data } = await supabase.from("blog_posts").select("id, slug").in("slug", slugs);
  return (data ?? []).map((r) => r.id as string);
}

/** Mirrors the migration script's pillar resolution: match by cluster. */
async function resolvePillarPostId(
  supabase: Awaited<ReturnType<typeof requireAdmin>>["supabase"],
  cluster: string,
  isPillar: boolean,
  ownId: string | null
): Promise<string | null> {
  if (isPillar || !cluster) return null;
  const { data } = await supabase
    .from("blog_posts")
    .select("id")
    .eq("cluster", cluster)
    .eq("is_pillar", true)
    .neq("id", ownId ?? "00000000-0000-0000-0000-000000000000")
    .maybeSingle();
  return data?.id ?? null;
}

async function allOtherSlugs(supabase: Awaited<ReturnType<typeof requireAdmin>>["supabase"], excludeId?: string) {
  let query = supabase.from("blog_posts").select("id, slug");
  if (excludeId) query = query.neq("id", excludeId);
  const { data } = await query;
  return new Set((data ?? []).map((r) => r.slug as string));
}

async function revalidateForPost(slug: string, categorySlug: string, primaryServiceHref?: string) {
  revalidatePath(`/blog/${slug}/`);
  revalidatePath("/blog/");
  revalidatePath("/blog/page/[page]", "page");
  if (categorySlug) revalidatePath(`/blog/category/${categorySlug}/`);
  if (primaryServiceHref) revalidatePath(primaryServiceHref);
  revalidatePath("/sitemap.xml");
}

type Intent = "draft" | "review" | "approved" | "publish" | "schedule";

async function saveWithIntent(formData: FormData, intent: Intent): Promise<ActionResult> {
  const { supabase, user } = await requireAdmin();
  const postId = String(formData.get("postId") ?? "") || undefined;
  const fields = readFields(formData);

  const existingSlugs = await allOtherSlugs(supabase, postId);

  if (intent === "publish" || intent === "schedule" || intent === "approved") {
    const errors = validateForPublish(
      {
        title: fields.title,
        slug: fields.slug,
        seoTitle: fields.seoTitle,
        metaDescription: fields.metaDescription,
        excerpt: fields.excerpt,
        content: fields.content,
        featuredImage: fields.featuredImage,
        featuredImageAlt: fields.featuredImageAlt,
        categorySlug: fields.categorySlug,
      },
      existingSlugs
    );
    if (intent === "schedule" && !fields.scheduledPublishAt) {
      errors.push("Scheduled publish date/time is required.");
    }
    if (errors.length > 0) return { ok: false, errors };
  } else {
    // Even a draft needs a title and a non-colliding slug — otherwise there's
    // nothing to find it by later.
    if (!fields.title) return { ok: false, errors: ["Title is required."] };
    if (existingSlugs.has(fields.slug)) {
      return { ok: false, errors: [`Slug "${fields.slug}" is already used by another post.`] };
    }
  }

  const categoryId = await resolveCategoryId(supabase, fields.categorySlug);
  const cluster = fields.cluster ? slugify(fields.cluster) : fields.categorySlug;

  const status = { draft: "draft", review: "review", approved: "approved", publish: "published", schedule: "scheduled" }[
    intent
  ];

  const row: Record<string, unknown> = {
    title: fields.title,
    slug: fields.slug,
    seo_title: fields.seoTitle || null,
    meta_description: fields.metaDescription,
    excerpt: fields.excerpt,
    content: fields.content,
    featured_image_url: fields.featuredImage,
    featured_image_alt: fields.featuredImageAlt,
    og_image_url: fields.ogImage || null,
    category_id: categoryId,
    author: fields.author,
    status,
    canonical_url: fields.canonicalUrl || null,
    focus_keyword: fields.focusKeyword || null,
    primary_service: fields.primaryService || null,
    cluster: cluster || null,
    is_pillar: fields.isPillar,
    updated_by: user.id,
  };

  if (intent === "publish") {
    row.published_at = fields.publishedAt ? new Date(fields.publishedAt).toISOString() : new Date().toISOString();
    row.scheduled_publish_at = null;
  } else if (intent === "schedule") {
    row.scheduled_publish_at = new Date(fields.scheduledPublishAt).toISOString();
  }

  let id = postId;
  if (id) {
    const { error } = await supabase.from("blog_posts").update(row).eq("id", id);
    if (error) return { ok: false, errors: [error.message] };
  } else {
    row.created_by = user.id;
    const { data, error } = await supabase.from("blog_posts").insert(row).select("id").single();
    if (error) return { ok: false, errors: [error.message] };
    id = data.id as string;
  }

  await syncTags(supabase, id, fields.tags);

  const relatedIds = await resolveRelatedPostIds(supabase, fields.relatedPosts);
  const pillarId = await resolvePillarPostId(supabase, cluster, fields.isPillar, id);
  await supabase
    .from("blog_posts")
    .update({ related_post_ids: relatedIds, pillar_post_id: pillarId })
    .eq("id", id);

  if (status === "published") {
    const serviceHref = fields.primaryService || serviceForCategory(fields.categorySlug)?.href;
    await revalidateForPost(fields.slug, fields.categorySlug, serviceHref);
  }

  return { ok: true, id, slug: fields.slug };
}

/**
 * Single entry point for the create/edit form. Which of the six named
 * submit buttons (Save Draft / Submit for Review / Approve / Publish /
 * Schedule / Preview) was clicked arrives as `formData.get("intent")` — the
 * standard HTML "multiple submit buttons, one form" pattern, which is also
 * what makes each action reliably clickable by name for browser automation.
 * Bound to useActionState in BlogPostForm, so both success (redirect) and
 * failure (validation errors returned to the same form) are handled here.
 */
export async function submitPostAction(_prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  const intent = String(formData.get("intent") ?? "draft") as Intent | "preview";

  if (intent === "preview") {
    const result = await saveWithIntent(formData, "draft");
    if (result.ok && result.id) redirect(`/admin/blog/${result.id}/preview/`);
    return result;
  }

  const result = await saveWithIntent(formData, intent);
  if (result.ok && result.id) redirect(`/admin/blog/${result.id}/edit/?saved=${intent}`);
  return result;
}

export async function archivePostAction(formData: FormData) {
  const { supabase } = await requireAdmin();
  const id = String(formData.get("postId") ?? "");
  const { data: post } = await supabase.from("blog_posts").select("slug, status").eq("id", id).maybeSingle();
  await supabase.from("blog_posts").update({ status: "archived" }).eq("id", id);
  if (post?.status === "published" && post.slug) {
    revalidatePath(`/blog/${post.slug}/`);
    revalidatePath("/blog/");
    revalidatePath("/sitemap.xml");
  }
  redirect("/admin/blog/?tab=archived");
}

export async function deletePostAction(_prevState: ActionResult, formData: FormData): Promise<ActionResult> {
  const { supabase } = await requireAdmin();
  const id = String(formData.get("postId") ?? "");

  const { data: referencing } = await supabase
    .from("blog_posts")
    .select("slug")
    .or(`pillar_post_id.eq.${id},related_post_ids.cs.{${id}}`);

  if (referencing && referencing.length > 0) {
    return {
      ok: false,
      errors: [
        `Can't delete — referenced by: ${referencing.map((r) => r.slug).join(", ")}. Archive it instead, or remove those references first.`,
      ],
    };
  }

  const { data: post } = await supabase.from("blog_posts").select("slug, status, category_id").eq("id", id).maybeSingle();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) return { ok: false, errors: [error.message] };

  if (post?.status === "published" && post.slug) {
    revalidatePath(`/blog/${post.slug}/`);
    revalidatePath("/blog/");
    revalidatePath("/sitemap.xml");
  }
  redirect("/admin/blog/");
}
