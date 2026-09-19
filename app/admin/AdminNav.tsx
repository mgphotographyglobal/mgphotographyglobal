import Link from "next/link";
import { logoutAction } from "./login/actions";

export default function AdminNav({ email }: { email: string }) {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/admin/blog/" className="text-sm font-semibold text-neutral-900">
            Blog Admin
          </Link>
          <Link href="/admin/blog/" className="text-sm text-neutral-600 hover:text-neutral-900">
            Dashboard
          </Link>
          <Link href="/admin/blog/new/" className="text-sm text-neutral-600 hover:text-neutral-900">
            New Post
          </Link>
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-500">
          <span>{email}</span>
          <form action={logoutAction}>
            <button type="submit" className="text-neutral-600 underline hover:text-neutral-900">
              Sign out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
