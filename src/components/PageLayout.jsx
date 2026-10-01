import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/Cookie/Cookie";

/**
 * Reusable page layout for all non-homepage pages.
 * Provides consistent SEO metadata, Header, and Footer.
 *
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description
 * @param {string} props.canonical - Canonical URL path (e.g. "/about")
 * @param {string} [props.ogTitle] - OG title override (defaults to title)
 * @param {string} [props.ogDescription] - OG description override (defaults to description)
 * @param {string} [props.ogType] - OG type override (defaults to "website")
 * @param {string} [props.ogImage] - Absolute OG image URL override
 * @param {string} [props.ogImageAlt] - OG image alt text override
 * @param {React.ReactNode} [props.headChildren] - Extra children for <Head> (JSON-LD, etc.)
 * @param {React.ReactNode} props.children
 */
export default function PageLayout({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogType = "website",
  ogImage,
  ogImageAlt,
  headChildren,
  children,
}) {
  return (
    <div>
      <Seo
        title={title}
        description={description}
        canonical={canonical}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogType={ogType}
        ogImage={ogImage}
        ogImageAlt={ogImageAlt}
      >
        {headChildren}
      </Seo>

      <Header />
      <main className="pt-24 sm:pt-28 min-h-screen bg-[var(--bg-main)]">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
