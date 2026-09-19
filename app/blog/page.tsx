import type { Metadata } from "next";
import BlogIndex from "./BlogIndex";

// Time-based revalidation as a safety net; publishing from /admin/blog
// also explicitly revalidates this path on demand (see lib/blog-admin/
// actions.ts), so new posts normally appear immediately, not after a delay.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Photography Blog | Guides & Stories | MG Photography UAE",
  description:
    "Photography planning guides, tips and stories from MG Photography UAE — newborn, maternity, wedding & family photography across Dubai, Abu Dhabi & Sharjah.",
  alternates: { canonical: "https://mgphotographyglobal.com/blog/" },
  openGraph: {
    title: "Photography Blog | MG Photography UAE",
    description:
      "Photography planning guides, tips and stories from MG Photography UAE across Dubai, Abu Dhabi & Sharjah.",
    type: "website",
    url: "https://mgphotographyglobal.com/blog/",
  },
};

export default function BlogPage() {
  return <BlogIndex page={1} />;
}
