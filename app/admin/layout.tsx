import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Blog Admin", template: "%s | Blog Admin" },
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-neutral-50 text-neutral-900">{children}</div>;
}
