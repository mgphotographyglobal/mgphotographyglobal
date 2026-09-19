import Link from "next/link";
import type { Metadata } from "next";
import { requireAdmin } from "@/lib/blog-admin/session";
import AdminNav from "../AdminNav";
import type { BlogStatus } from "@/app/lib/blog";

export const metadata: Metadata = { title: "Dashboard" };

const TABS: { key: BlogStatus | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "draft", label: "Draft" },
  { key: "review", label: "In Review" },
  { key: "approved", label: "Approved" },
  { key: "scheduled", label: "Scheduled" },
  { key: "published", label: "Published" },
  { key: "archived", label: "Archived" },
];

interface Row {
  id: string;
  slug: string;
  title: string;
  status: BlogStatus;
  updated_at: string;
  published_at: string | null;
  seo_title: string | null;
  meta_description: string | null;
  category: { name: string } | { name: string }[] | null;
}

function categoryName(row: Row): string {
  const c = row.category;
  if (!c) return "—";
  return Array.isArray(c) ? c[0]?.name ?? "—" : c.name;
}

function statusBadgeClass(status: BlogStatus): string {
  switch (status) {
    case "published":
      return "bg-green-100 text-green-800";
    case "scheduled":
      return "bg-blue-100 text-blue-800";
    case "approved":
      return "bg-teal-100 text-teal-800";
    case "review":
      return "bg-amber-100 text-amber-800";
    case "archived":
      return "bg-neutral-200 text-neutral-600";
    default:
      return "bg-neutral-100 text-neutral-700";
  }
}

export default async function AdminBlogDashboard({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { supabase, email } = await requireAdmin();
  const { tab } = await searchParams;
  const activeTab = (tab as BlogStatus | "all" | undefined) ?? "all";

  let query = supabase
    .from("blog_posts")
    .select("id, slug, title, status, updated_at, published_at, seo_title, meta_description, category:blog_categories(name)")
    .order("updated_at", { ascending: false });

  if (activeTab !== "all") query = query.eq("status", activeTab);

  const { data, error } = await query;
  const rows = (data ?? []) as unknown as Row[];

  return (
    <>
      <AdminNav email={email} />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Blog Posts</h1>
          <Link
            href="/admin/blog/new/"
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            New Post
          </Link>
        </div>

        <nav className="mb-6 flex flex-wrap gap-2 border-b border-neutral-200">
          {TABS.map((t) => (
            <Link
              key={t.key}
              href={t.key === "all" ? "/admin/blog/" : `/admin/blog/?tab=${t.key}`}
              className={`border-b-2 px-3 py-2 text-sm font-medium ${
                activeTab === t.key
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {t.label}
            </Link>
          ))}
        </nav>

        {error && <p className="text-sm text-red-700">Failed to load posts: {error.message}</p>}

        {!error && rows.length === 0 && (
          <p className="rounded-md border border-dashed border-neutral-300 px-4 py-8 text-center text-sm text-neutral-500">
            No posts in this view yet.
          </p>
        )}

        {rows.length > 0 && (
          <div className="overflow-x-auto rounded-md border border-neutral-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-neutral-50 text-xs uppercase tracking-wide text-neutral-500">
                <tr>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">SEO</th>
                  <th className="px-4 py-3">Updated</th>
                  <th className="px-4 py-3">Published</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {rows.map((row) => {
                  const seoOk = Boolean(row.seo_title && row.meta_description);
                  return (
                    <tr key={row.id} className="hover:bg-neutral-50">
                      <td className="px-4 py-3 font-medium text-neutral-900">
                        <Link href={`/admin/blog/${row.id}/edit/`} className="hover:underline">
                          {row.title}
                        </Link>
                        <div className="text-xs text-neutral-400">/blog/{row.slug}/</div>
                      </td>
                      <td className="px-4 py-3 text-neutral-600">{categoryName(row)}</td>
                      <td className="px-4 py-3">
                        <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusBadgeClass(row.status)}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {seoOk ? (
                          <span className="text-green-700">✓ complete</span>
                        ) : (
                          <span className="text-amber-700">missing fields</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-neutral-500">
                        {new Date(row.updated_at).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-neutral-500">
                        {row.published_at ? new Date(row.published_at).toLocaleDateString() : "—"}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <Link href={`/admin/blog/${row.id}/edit/`} className="text-neutral-600 hover:underline">
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </>
  );
}
