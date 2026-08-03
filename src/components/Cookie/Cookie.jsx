import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showConsent, setShowConsent] = useState(true);

  const onClick = () => {
    localStorage.setItem("showCookieConsent", "false");
    setShowConsent(false);
  };

  useEffect(() => {
    let toShow = localStorage.getItem("showCookieConsent");
    if (toShow === "false") {
      setShowConsent(false);
    }
  }, []);

  if (!showConsent) {
    return null;
  }

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between z-40 px-6 py-4 glass-card border-t border-[var(--border-color)] text-[var(--text-primary)] fixed bottom-0 w-full gap-4 shadow-2xl rounded-none">
      <div className="flex items-center w-full">
        <p className="text-sm font-medium leading-normal text-[var(--text-secondary)]">
          This website uses analytics services that utilize cookies to analyze website traffic and optimize your experience.
        </p>
      </div>
      <div className="flex justify-end shrink-0">
        <button
          className="btn btn--med btn--theme whitespace-nowrap uppercase tracking-wider text-xs"
          onClick={onClick}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
