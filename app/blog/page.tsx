import type { Metadata } from "next";
import BlogIndex from "./BlogIndex";

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
