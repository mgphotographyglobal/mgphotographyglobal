import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Blog Admin Login",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string; error?: string }>;
}) {
  const params = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-sm rounded-lg border border-neutral-200 bg-white p-8 shadow-sm">
        <h1 className="mb-1 text-xl font-semibold text-neutral-900">Blog Admin</h1>
        <p className="mb-6 text-sm text-neutral-500">MG Photography Global</p>

        {params.error === "not_admin" && (
          <p className="mb-4 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-800">
            Your account isn&apos;t authorized for the blog admin yet.
          </p>
        )}

        <LoginForm next={params.next ?? "/admin/blog/"} />
      </div>
    </main>
  );
}
