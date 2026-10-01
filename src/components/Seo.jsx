import Head from "next/head";
import seoConfig from "@/lib/seo.config";

/**
 * Reusable SEO <Head> component for all pages.
 *
 * @param {Object} props
 * @param {string} props.title - Full page title (already formatted)
 * @param {string} props.description - Meta description (140-160 chars, unique per page)
 * @param {string} props.canonical - Canonical path, e.g. "/about" (will be prefixed with siteUrl)
 * @param {string} [props.ogTitle] - OG title override (defaults to title)
 * @param {string} [props.ogDescription] - OG description override (defaults to description)
 * @param {string} [props.ogImage] - Absolute URL to OG image (defaults to seoConfig.defaultOgImage)
 * @param {string} [props.ogImageAlt] - Alt text for OG image
 * @param {string} [props.ogType] - OG type: "profile", "website", or "article" (defaults to "website")
 * @param {React.ReactNode} [props.children] - Additional <Head> children (e.g., extra JSON-LD)
 */
export default function Seo({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogImageAlt,
  ogType = "website",
  children,
}) {
  const fullCanonical = canonical.startsWith("http")
    ? canonical
    : `${seoConfig.siteUrl}${canonical}`;
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;
  const resolvedOgImage = ogImage || seoConfig.defaultOgImage;
  const resolvedOgImageAlt =
    ogImageAlt || `${resolvedOgTitle} — ${seoConfig.siteName}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Pratham Agrawal" />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      {/* Canonical */}
      <link rel="canonical" href={fullCanonical} />

      {/* Favicons & Manifest */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#12151A" />
      <meta name="msapplication-TileColor" content="#12151A" />
      <meta name="theme-color" content="#12151A" />

      {/* Open Graph */}
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content={seoConfig.locale} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta
        property="og:image:width"
        content={String(seoConfig.ogImageWidth)}
      />
      <meta
        property="og:image:height"
        content={String(seoConfig.ogImageHeight)}
      />
      <meta property="og:image:alt" content={resolvedOgImageAlt} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={seoConfig.twitterHandle} />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {/* Extra children (JSON-LD, profile meta, etc.) */}
      {children}
    </Head>
  );
}
