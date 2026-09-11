import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/Cookie/Cookie";

/**
 * Reusable page layout for all non-homepage pages.
 * Provides consistent Head metadata, JSON-LD, Header, and Footer.
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.canonical - Canonical URL path (e.g. "/about")
 * @param {string} [props.ogTitle] - OG title override (defaults to title)
 * @param {string} [props.ogDescription] - OG description override (defaults to description)
 * @param {string} [props.jsonLdType] - JSON-LD @type (default: "WebPage")
 * @param {React.ReactNode} props.children
 */
export default function PageLayout({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  jsonLdType = "WebPage",
  children,
}) {
  const fullCanonical = `https://agrawalpratham.in${canonical}`;
  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDescription = ogDescription || description;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": jsonLdType,
    name: title,
    description: description,
    url: fullCanonical,
    author: {
      "@type": "Person",
      "@id": "https://agrawalpratham.in/#person",
      name: "Pratham Agrawal",
    },
    isPartOf: {
      "@type": "WebSite",
      url: "https://agrawalpratham.in/",
    },
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content="Pratham Agrawal" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <link rel="canonical" href={fullCanonical} />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#12151A" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Pratham Agrawal Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={resolvedOgTitle} />
        <meta property="og:description" content={resolvedOgDescription} />
        <meta
          property="og:image"
          content="https://agrawalpratham.in/assets/png/og_img.png"
        />
        <meta property="og:url" content={fullCanonical} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@agrawal_2002" />
        <meta name="twitter:creator" content="@agrawal_2002" />
        <meta name="twitter:title" content={resolvedOgTitle} />
        <meta name="twitter:description" content={resolvedOgDescription} />
        <meta
          name="twitter:image"
          content="https://agrawalpratham.in/assets/png/og_img.png"
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      </Head>

      <Header />
      <main className="pt-24 sm:pt-28 min-h-screen bg-[var(--bg-main)]">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
