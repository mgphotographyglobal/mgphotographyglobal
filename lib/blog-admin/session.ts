import "server-only";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

/**
 * Loads the signed-in admin for a Server Component or Server Action.
 * `middleware.ts` already keeps signed-out visitors out of /admin/*, so a
 * missing session here mainly happens for a Server Action invoked after a
 * session expired — this covers that case with the same redirect.
 */
export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: admin } = await supabase
    .from("blog_admin_users")
    .select("role, email")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!admin) redirect("/admin/login?error=not_admin");

  return { supabase, user, role: admin.role as string, email: admin.email as string };
}
