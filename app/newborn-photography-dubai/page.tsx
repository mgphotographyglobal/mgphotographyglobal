/**
 * /newborn-photography-dubai/
 *
 * CANONICAL: This page permanently redirects to /dubai-newborn-photography/
 * via Netlify 301 redirect (netlify.toml).
 *
 * This page file remains for dev-mode compatibility and adds:
 *  - noindex robots to prevent Google indexing during transition
 *  - canonical tag pointing to the canonical URL
 *  - JS-based redirect fallback
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newborn Photography Dubai | MG Photography UAE",
  description: "Luxury newborn photography in Dubai. Please visit our main page.",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    googleBot: { index: false, follow: false },
  },
  alternates: {
    canonical: "https://mgphotographyglobal.com/dubai-newborn-photography/",
  },
};

export default function NewbornPhotographyDubaiRedirect() {
  return (
    <>
      {/* Client-side redirect fallback — Netlify 301 handles most traffic */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace('/dubai-newborn-photography/');`,
        }}
      />
      <noscript>
        <meta httpEquiv="refresh" content="0;url=/dubai-newborn-photography/" />
      </noscript>
      <div style={{ padding: "4rem", textAlign: "center", fontFamily: "sans-serif" }}>
        <p>Redirecting to{" "}
          <a href="/dubai-newborn-photography/">Dubai Newborn Photography</a>...
        </p>
      </div>
    </>
  );
}
