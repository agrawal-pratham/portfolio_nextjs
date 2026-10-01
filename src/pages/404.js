import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import seoConfig from "@/lib/seo.config";

export default function Custom404() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "ServiceNow", href: "/servicenow" },
    { label: "AI Engineering", href: "/ai" },
    { label: "Projects", href: "/projects" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)]">
      <Head>
        <title>404 — Page Not Found | Pratham Agrawal</title>
        <meta
          name="description"
          content="The page you are looking for does not exist on Pratham Agrawal's portfolio."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-24 sm:py-32">
        <div className="max-w-2xl w-full text-center glass-card p-8 sm:p-12">
          <p className="text-sm font-semibold text-[var(--accent-primary)] uppercase tracking-widest mb-2">
            Error 404
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[var(--text-primary)]">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] mb-8 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been moved, removed, or is temporarily unavailable.
          </p>

          <div className="mb-8">
            <Link href="/" className="btn btn--bg btn--theme text-sm sm:text-base inline-block">
              ← Back to Home
            </Link>
          </div>

          <div className="border-t border-[var(--border-color)] pt-6 mt-6">
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] font-medium mb-4">
              Or explore other sections:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-color)] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
