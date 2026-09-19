import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogIndex from "../../BlogIndex";
import { getPublishedPosts, POSTS_PER_PAGE } from "../../../lib/blog";

type Params = { page: string };

export function generateStaticParams() {
  const totalPages = Math.max(1, Math.ceil(getPublishedPosts().length / POSTS_PER_PAGE));
  // Static export requires at least one generated param for this route to
  // exist at all. Once there's genuinely only one page of posts, "page 2"
  // still needs a static param to satisfy that constraint — the page
  // component itself calls notFound() for any page beyond what exists, so
  // this never produces a real, linkable dead page.
  const extraPages = Math.max(1, totalPages - 1);
  return Array.from({ length: extraPages }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Photography Blog — Page ${page} | MG Photography UAE`,
    description: "Photography planning guides, tips and stories from MG Photography UAE.",
    alternates: { canonical: `https://mgphotographyglobal.com/blog/page/${page}/` },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPagePaginated({ params }: { params: Promise<Params> }) {
  const { page: pageParam } = await params;
  const page = Number(pageParam);
  const totalPages = Math.max(1, Math.ceil(getPublishedPosts().length / POSTS_PER_PAGE));

  if (!Number.isInteger(page) || page < 2 || page > totalPages) notFound();

  return <BlogIndex page={page} />;
}
