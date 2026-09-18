import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppFloat from "../../components/WhatsAppFloat";
import Breadcrumbs from "../components/Breadcrumbs";
import RelatedArticles from "../components/RelatedArticles";
import ArticleCTA from "../components/ArticleCTA";
import {
  getPublishedPosts,
  getPostBySlug,
  getRelatedPosts,
  categorySlug,
  tagSlug,
  postCanonicalUrl,
  postUrl,
  BLOG_SITE_URL,
} from "../../lib/blog";
import { resolveCta } from "../../lib/blogCta";

type Params = { slug: string };

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonical = postCanonicalUrl(post);
  const title = post.seoTitle ?? post.title;
  const ogImage = post.ogImage ?? post.featuredImage;

  return {
    title,
    description: post.metaDescription,
    alternates: { canonical },
    authors: [{ name: post.author ?? "MG Photography UAE" }],
    openGraph: {
      type: "article",
      locale: "en_AE",
      siteName: "MG Photography UAE",
      title,
      description: post.metaDescription,
      url: canonical,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author ?? "MG Photography UAE"],
      images: [{ url: ogImage, alt: post.featuredImageAlt, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.metaDescription,
      images: [ogImage],
    },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const cta = resolveCta(post.category, post.cta);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl(post.slug)}#article`,
    headline: post.title,
    description: post.metaDescription,
    image: {
      "@type": "ImageObject",
      url: post.featuredImage.startsWith("http") ? post.featuredImage : `${BLOG_SITE_URL}${post.featuredImage}`,
    },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author ?? "MG Photography UAE",
      url: BLOG_SITE_URL,
    },
    publisher: { "@id": `${BLOG_SITE_URL}/#organization` },
    mainEntityOfPage: { "@type": "WebPage", "@id": postCanonicalUrl(post) },
    articleSection: post.category,
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
  };

  const formattedPublished = new Date(post.publishedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const showUpdated = post.updatedAt && post.updatedAt !== post.publishedAt;
  const formattedUpdated = showUpdated
    ? new Date(post.updatedAt as string).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <Header />
      <WhatsAppFloat />

      <article>
        <header style={{ paddingTop: "8rem", paddingBottom: "2rem", background: "var(--black)" }}>
          <div className="container-luxury" style={{ maxWidth: "760px" }}>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog/" },
                { label: post.category, href: `/blog/category/${categorySlug(post.category)}/` },
                { label: post.title },
              ]}
            />
            <div className="label" style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div className="gold-line" /> {post.category}
            </div>
            <h1 className="display-md" style={{ marginBottom: "1.25rem" }}>{post.title}</h1>
            <p className="body-lg" style={{ marginBottom: "1.5rem" }}>{post.excerpt}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 1.5rem", alignItems: "center" }} className="body-sm">
              <span>By {post.author ?? "MG Photography UAE"}</span>
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.publishedAt}>{formattedPublished}</time>
              {formattedUpdated && (
                <>
                  <span aria-hidden="true">&middot;</span>
                  <span>Updated {formattedUpdated}</span>
                </>
              )}
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTimeMinutes} min read</span>
            </div>
          </div>
        </header>

        <div className="container-luxury" style={{ maxWidth: "760px", marginBottom: "2.5rem" }}>
          <div className="img-luxury" style={{ position: "relative", aspectRatio: "16/9", background: "#1a1a1a" }}>
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              fill
              priority
              sizes="(min-width: 900px) 760px, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <section style={{ paddingBottom: "5rem", background: "var(--black)" }}>
          <div className="container-luxury" style={{ maxWidth: "760px" }}>
            <div className="article-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            {post.tags && post.tags.length > 0 && (
              <nav aria-label="Article tags" style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "2.5rem" }}>
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tagSlug(tag)}/`}
                    className="label"
                    style={{
                      textDecoration: "none",
                      border: "1px solid rgba(201,168,76,0.25)",
                      padding: "0.4rem 0.9rem",
                      fontSize: "0.62rem",
                    }}
                  >
                    #{tag}
                  </Link>
                ))}
              </nav>
            )}

            <ArticleCTA cta={cta} />
            <RelatedArticles posts={related} />
          </div>
        </section>
      </article>

      <Footer />
    </>
  );
}
