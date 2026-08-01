// Short URL alias for /dubai-newborn-photography/ (the canonical content page)
// Both routes serve identical content — short URL for UX, long URL for SEO.
// NOTE: intentionally does NOT point at /newborn-photography-dubai/, which is a
// redirect-stub page (301→/dubai-newborn-photography/ via netlify.toml) built only
// to catch legacy direct links. Re-exporting from a redirect stub broke client-side
// navigation, since dangerouslySetInnerHTML <script> redirects don't execute during
// React client-side routing — visitors saw "Redirecting…" and it never completed.
export { default } from "../dubai-newborn-photography/page";
export { metadata } from "../dubai-newborn-photography/page";
