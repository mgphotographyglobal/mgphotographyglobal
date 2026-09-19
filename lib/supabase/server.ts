import { createServerClient } from "@supabase/ssr";
import { createClient as createJsClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

/**
 * Server-side Supabase client, still only the anon key — every request is
 * made as the signed-in user (via their session cookie), so Postgres RLS
 * is what actually decides what they can read/write. There is no
 * service-role/secret key anywhere in this app.
 */
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            for (const { name, value, options } of cookiesToSet) {
              cookieStore.set(name, value, options);
            }
          } catch {
            // Called from a Server Component that can't set cookies — safe
            // to ignore as long as middleware.ts is refreshing the session.
          }
        },
      },
    }
  );
}

/**
 * Public-facing reads (blog index, article pages, sitemap, service-page
 * "Helpful Guides") never need a user session — this avoids pulling in
 * next/headers for pages that don't otherwise need per-request cookies,
 * which keeps them eligible for static optimization/ISR.
 */
export function createPublicClient() {
  return createJsClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } }
  );
}
