"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#work-experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "https://blogs.agrawalpratham.in/", label: "Blogs" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.setAttribute("data-theme", "dark");
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const applyTheme = (nextTheme) => {
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  };

  const toggleTheme = (e) => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);

    const nextTheme = theme === "dark" ? "light" : "dark";

    if (typeof document !== "undefined" && document.startViewTransition) {
      const x = e?.clientX ?? window.innerWidth / 2;
      const y = e?.clientY ?? window.innerHeight / 2;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.style.setProperty("--theme-x", `${x}px`);
      document.documentElement.style.setProperty("--theme-y", `${y}px`);
      document.documentElement.style.setProperty("--theme-r", `${endRadius}px`);

      document.startViewTransition(() => {
        applyTheme(nextTheme);
      });
    } else {
      applyTheme(nextTheme);
    }
  };

  const toggleMenu = () => setIsMenuOpen((p) => !p);

  return (
    <header
      id="header"
      className={`fixed w-full z-50 transition-all duration-300 px-4 md:px-8 ${scrolled
          ? "py-3 shadow-lg border-b border-[var(--border-color)]"
          : "py-5"
        }`}
      style={{
        backgroundColor: scrolled ? "var(--header-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="rounded-xl overflow-hidden ring-1 ring-[var(--border-color)] group-hover:ring-[var(--accent-primary)] transition-all duration-300">
            <Image
              src="/assets/png/personal_logo.png"
              alt="Pratham"
              width={40}
              height={36}
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-heading text-base font-bold text-[var(--text-primary)]">
              Pratham Agrawal
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <nav className="flex items-center gap-1 mr-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme Switcher Button with Spin & Circular Reveal */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] border border-transparent hover:border-[var(--border-color)] transition-all duration-300 relative group"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <div className={`transition-transform duration-500 ease-out ${isRotating ? "rotate-[360deg] scale-125" : ""}`}>
              {theme === "dark" ? (
                /* Sun Icon */
                <svg className="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                /* Moon Icon */
                <svg className="w-5 h-5 text-teal-600 group-hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </div>
          </button>

          <Link
            href="https://drive.google.com/file/d/1OVrswJHsqFC_02D2gdEcuPfqEBbmFOj8/view?usp=drive_link"
            target="_blank"
            className="ml-2 px-4 py-2 text-sm font-semibold rounded-lg btn--theme shadow-md"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger & Theme Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            <div className={`transition-transform duration-500 ease-out ${isRotating ? "rotate-[360deg] scale-125" : ""}`}>
              {theme === "dark" ? (
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </div>
          </button>

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-[var(--bg-surface)] transition-colors"
          >
            <span
              className={`bg-[var(--text-primary)] block h-0.5 w-5 rounded-sm transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
            />
            <span
              className={`bg-[var(--text-primary)] block h-0.5 w-5 rounded-sm transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`bg-[var(--text-primary)] block h-0.5 w-5 rounded-sm transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? "max-h-96 mt-3" : "max-h-0"
          }`}
        onClick={toggleMenu}
      >
        <nav className="glass-card p-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block px-4 py-3 rounded-xl text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-[var(--border-color)] my-2" />
          <Link
            href="https://drive.google.com/file/d/1OVrswJHsqFC_02D2gdEcuPfqEBbmFOj8/view?usp=drive_link"
            target="_blank"
            className="block px-4 py-3 rounded-xl text-sm font-semibold text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] transition-all duration-200"
          >
            📄 Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}
