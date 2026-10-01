import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BLOG_URL = "https://blogs.agrawalpratham.in";

export default function BlogsPage() {
  useEffect(() => {
    // Immediate client-side redirect
    window.location.replace(BLOG_URL);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)]">
      <Head>
        <title>Blogs | Pratham Agrawal</title>
        <meta
          name="description"
          content="Redirecting to Pratham Agrawal's official tech blog and engineering articles."
        />
        <meta httpEquiv="refresh" content={`0;url=${BLOG_URL}`} />
        <link rel="canonical" href={BLOG_URL} />
      </Head>

      <Header />

      <main className="flex-1 flex items-center justify-center px-4 py-24 sm:py-32">
        <div className="max-w-md w-full text-center glass-card p-8 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-20 blur-2xl pointer-events-none"
            style={{ backgroundColor: "var(--accent-primary)" }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full opacity-20 blur-2xl pointer-events-none"
            style={{ backgroundColor: "var(--accent-secondary, #3b82f6)" }}
          />

          {/* Animated Spinner Icon */}
          <div className="w-16 h-16 mx-auto mb-6 relative flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-[var(--border-color)] border-t-[var(--accent-primary)] animate-spin" />
            <svg
              className="w-7 h-7 text-[var(--accent-primary)] absolute"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>

          <p className="text-xs font-semibold text-[var(--accent-primary)] uppercase tracking-wider mb-2">
            Engineering & Tech Articles
          </p>

          <h1 className="font-heading text-2xl sm:text-3xl font-bold mb-3 text-[var(--text-primary)]">
            Redirecting to Blogs
          </h1>

          <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
            Taking you to{" "}
            <span className="font-mono text-[var(--text-primary)] font-semibold text-xs sm:text-sm">
              blogs.agrawalpratham.in
            </span>
            ...
          </p>

          <div className="space-y-3">
            <a
              href={BLOG_URL}
              className="btn btn--bg btn--theme text-sm w-full py-2.5 px-4 rounded-xl font-semibold shadow-md inline-flex items-center justify-center gap-2 group transition-all duration-200"
            >
              <span>Go to Blogs Now</span>
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>

            <div>
              <Link
                href="/"
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] underline transition-colors"
              >
                Return to Portfolio Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
