import type { Metadata } from "next";

export function serviceMetadata(base: Metadata, service: {
  title: string;
  canonicalPath: string;
  heroImage?: { src: string; alt: string };
  gallery?: { src: string; alt: string }[];
}): Metadata {
  const image = service.heroImage ?? service.gallery?.[0];
  return {
    ...base,
    openGraph: {
      type: "website",
      locale: "en_AE",
      siteName: "MG Photography UAE",
      title: base.title ?? service.title,
      description: base.description ?? undefined,
      url: `https://mgphotographyglobal.com${service.canonicalPath}`,
      images: image ? [{ url: image.src, alt: image.alt }] : [],
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: base.title ?? service.title,
      description: base.description ?? undefined,
      images: image ? [image.src] : [],
    },
  };
}
