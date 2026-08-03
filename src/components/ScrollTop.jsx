import { useEffect, useState } from "react";

export const scrollUP = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollUP}
      className={`fixed bottom-16 sm:bottom-5 right-3 sm:right-5 z-40 p-3 rounded-xl transition-all duration-300 shadow-lg border border-[var(--border-color)] ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{
        backgroundColor: "var(--bg-surface)",
        color: "var(--accent-primary)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
