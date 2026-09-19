"use client";

import { useActionState } from "react";
import { submitPostAction, archivePostAction, deletePostAction, type ActionResult } from "@/lib/blog-admin/actions";
import ImagePicker from "./ImagePicker";

export interface CategoryOption {
  slug: string;
  name: string;
}

export interface PostOption {
  slug: string;
  title: string;
}

export interface BlogPostFormValues {
  id?: string;
  title: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  tags: string;
  primaryService: string;
  cluster: string;
  author: string;
  canonicalUrl: string;
  ogImage: string;
  focusKeyword: string;
  isPillar: boolean;
  relatedPosts: string;
  status: string;
  publishedAt: string;
  scheduledPublishAt: string;
}

const initialState: ActionResult = { ok: true };

function toLocalDatetime(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

export default function BlogPostForm({
  values,
  categories,
  posts,
}: {
  values: BlogPostFormValues;
  categories: CategoryOption[];
  posts: PostOption[];
}) {
  const [state, formAction, pending] = useActionState(submitPostAction, initialState);

  return (
    <form action={formAction} className="space-y-8 pb-24">
      {values.id && <input type="hidden" name="postId" value={values.id} />}

      {state.errors && state.errors.length > 0 && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          <p className="mb-1 font-semibold">Couldn&apos;t save:</p>
          <ul className="list-inside list-disc space-y-0.5">
            {state.errors.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      )}

      <section className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Content</h2>

        <Field label="Title" htmlFor="title">
          <input
            id="title"
            name="title"
            defaultValue={values.title}
            required
            className="admin-input"
          />
        </Field>

        <Field label="Slug" htmlFor="slug" hint="Lowercase, hyphenated. Leave blank to auto-generate from title.">
          <input id="slug" name="slug" defaultValue={values.slug} className="admin-input font-mono" />
        </Field>

        <Field label="Excerpt" htmlFor="excerpt">
          <textarea id="excerpt" name="excerpt" defaultValue={values.excerpt} rows={2} className="admin-input" />
        </Field>

        <Field label="Content (Markdown)" htmlFor="content">
          <textarea
            id="content"
            name="content"
            defaultValue={values.content}
            rows={20}
            className="admin-input font-mono text-sm"
          />
        </Field>
      </section>

      <section className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">SEO</h2>

        <Field label="SEO Title" htmlFor="seoTitle">
          <input id="seoTitle" name="seoTitle" defaultValue={values.seoTitle} className="admin-input" />
        </Field>

        <Field label="Meta Description" htmlFor="metaDescription" hint="160 characters or fewer.">
          <textarea
            id="metaDescription"
            name="metaDescription"
            defaultValue={values.metaDescription}
            rows={2}
            maxLength={160}
            className="admin-input"
          />
        </Field>

        <Field label="Focus Keyword" htmlFor="focusKeyword">
          <input id="focusKeyword" name="focusKeyword" defaultValue={values.focusKeyword} className="admin-input" />
        </Field>

        <Field label="Canonical URL" htmlFor="canonicalUrl" hint="Leave blank unless this post duplicates another URL.">
          <input id="canonicalUrl" name="canonicalUrl" defaultValue={values.canonicalUrl} className="admin-input" />
        </Field>

        <Field label="OG Image" htmlFor="ogImage" hint="Optional — falls back to the featured image.">
          <input id="ogImage" name="ogImage" defaultValue={values.ogImage} className="admin-input" />
        </Field>
      </section>

      <section className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Content Relationships</h2>

        <Field label="Category" htmlFor="category">
          <select id="category" name="category" defaultValue={values.category} required className="admin-input">
            <option value="">Select a category…</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Tags" htmlFor="tags" hint="Comma-separated, e.g. Dubai, newborn photography, safety">
          <input id="tags" name="tags" defaultValue={values.tags} className="admin-input" />
        </Field>

        <Field label="Primary Service" htmlFor="primaryService" hint="The commercial page this article should link to.">
          <select id="primaryService" name="primaryService" defaultValue={values.primaryService} className="admin-input">
            <option value="">Auto (from category)</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Cluster" htmlFor="cluster" hint="Leave blank to use the category as the cluster key.">
          <input id="cluster" name="cluster" defaultValue={values.cluster} className="admin-input" />
        </Field>

        <Field label="Related Posts" htmlFor="relatedPosts" hint="Comma-separated slugs. Leave blank for automatic related-post selection.">
          <input id="relatedPosts" name="relatedPosts" defaultValue={values.relatedPosts} className="admin-input" list="post-slugs" />
          <datalist id="post-slugs">
            {posts.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
          </datalist>
        </Field>

        <label className="flex items-center gap-2 text-sm text-neutral-700">
          <input type="checkbox" name="isPillar" defaultChecked={values.isPillar} />
          This is the pillar (hub) article for its cluster
        </label>
      </section>

      <section className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Image</h2>
        <ImagePicker name="featuredImage" label="Featured Image" defaultValue={values.featuredImage} />
        <Field label="Featured Image Alt Text" htmlFor="featuredImageAlt">
          <input id="featuredImageAlt" name="featuredImageAlt" defaultValue={values.featuredImageAlt} className="admin-input" />
        </Field>
      </section>

      <section className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Publishing</h2>

        <Field label="Author" htmlFor="author">
          <input id="author" name="author" defaultValue={values.author} className="admin-input" />
        </Field>

        <div className="text-sm text-neutral-500">
          Current status: <span className="font-medium text-neutral-800">{values.status}</span>
        </div>

        <Field label="Published Date/Time" htmlFor="publishedAt" hint="Only used by the Publish action. Leave blank to publish now.">
          <input
            id="publishedAt"
            name="publishedAt"
            type="datetime-local"
            defaultValue={toLocalDatetime(values.publishedAt)}
            className="admin-input"
          />
        </Field>

        <Field label="Scheduled Publish Date/Time" htmlFor="scheduledPublishAt" hint="Required for the Schedule action.">
          <input
            id="scheduledPublishAt"
            name="scheduledPublishAt"
            type="datetime-local"
            defaultValue={toLocalDatetime(values.scheduledPublishAt)}
            className="admin-input"
          />
        </Field>
      </section>

      <div className="sticky bottom-0 flex flex-wrap gap-3 border-t border-neutral-200 bg-white/95 px-6 py-4 backdrop-blur">
        <button type="submit" name="intent" value="draft" disabled={pending} className="admin-btn-secondary">
          Save Draft
        </button>
        <button type="submit" name="intent" value="preview" disabled={pending} className="admin-btn-secondary">
          Preview
        </button>
        <button type="submit" name="intent" value="review" disabled={pending} className="admin-btn-secondary">
          Submit for Review
        </button>
        <button type="submit" name="intent" value="approved" disabled={pending} className="admin-btn-secondary">
          Approve
        </button>
        <button type="submit" name="intent" value="schedule" disabled={pending} className="admin-btn-secondary">
          Schedule
        </button>
        <button type="submit" name="intent" value="publish" disabled={pending} className="admin-btn-primary">
          Publish
        </button>
      </div>

      {values.id && <DangerZone postId={values.id} />}
    </form>
  );
}

function DangerZone({ postId }: { postId: string }) {
  const [deleteState, deleteAction] = useActionState(deletePostAction, initialState);

  return (
    <div className="border-t border-neutral-200 pt-4 text-sm">
      {deleteState.errors && deleteState.errors.length > 0 && (
        <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-red-800">{deleteState.errors[0]}</p>
      )}
      <div className="flex gap-4">
        <form action={archivePostAction}>
          <input type="hidden" name="postId" value={postId} />
          <button type="submit" className="text-neutral-500 underline hover:text-neutral-800">
            Archive
          </button>
        </form>
        <form
          action={deleteAction}
          onSubmit={(e) => {
            if (!confirm("Permanently delete this post? This can't be undone.")) e.preventDefault();
          }}
        >
          <input type="hidden" name="postId" value={postId} />
          <button type="submit" className="text-red-600 underline hover:text-red-800">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-neutral-700">
        {label}
      </label>
      {children}
      {hint && <p className="mt-1 text-xs text-neutral-400">{hint}</p>}
    </div>
  );
}
