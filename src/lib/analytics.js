import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { track } from "@vercel/analytics";

/**
 * Checks if the window was opened from an external website (via window.opener or external referrer)
 * and automatically captures the event in all configured analytics services:
 * - Google Analytics (gtag and @next/third-parties)
 * - Google Tag Manager (dataLayer and @next/third-parties)
 * - Vercel Analytics (track)
 * - Microsoft Clarity (clarity event and custom tags)
 *
 * @returns {{ hasOpener: boolean, isDifferentWebsite: boolean, openerOrigin: string, referrer: string } | null}
 */
export function captureWindowOpenerAnalytics() {
  if (typeof window === "undefined") return null;

  try {
    let hasOpener = false;
    let isDifferentWebsite = false;
    let openerOrigin = "unknown";
    const referrer = document.referrer || "";

    // Check if window.opener exists and is not self
    if (window.opener && window.opener !== window) {
      hasOpener = true;
      try {
        // If same-origin, accessing location succeeds
        if (window.opener.location && window.opener.location.origin) {
          openerOrigin = window.opener.location.origin;
          isDifferentWebsite = openerOrigin !== window.location.origin;
        }
      } catch (err) {
        // Cross-Origin SecurityError: The browser strictly blocks access to window.opener.location
        // across origins, confirming window.opener is from a DIFFERENT website.
        isDifferentWebsite = true;
        if (referrer) {
          try {
            openerOrigin = new URL(referrer).origin;
          } catch {
            openerOrigin = referrer;
          }
        } else {
          openerOrigin = "cross-origin-external";
        }
      }
    } else if (referrer) {
      // Also detect external referrers if opener was stripped by browser default
      try {
        const refOrigin = new URL(referrer).origin;
        if (refOrigin && refOrigin !== window.location.origin) {
          isDifferentWebsite = true;
          openerOrigin = refOrigin;
        }
      } catch {
        // Ignore malformed referrer URLs
      }
    }

    if (isDifferentWebsite) {
      // Prevent duplicate event emission within the same browser tab session
      const sessionKey = "captured_external_opener_analytics";
      if (!sessionStorage.getItem(sessionKey)) {
        sessionStorage.setItem(sessionKey, "true");

        const eventData = {
          event: "external_opener_detected",
          has_opener: hasOpener,
          opener_origin: openerOrigin,
          referrer: referrer || "none",
          page_path: window.location.pathname,
          timestamp: new Date().toISOString(),
        };

        // 1. Google Analytics / Google Tag Manager dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(eventData);

        // 2. Google Analytics gtag event if already loaded
        if (typeof window.gtag === "function") {
          window.gtag("event", "external_opener_detected", {
            event_category: "External Traffic",
            event_label: openerOrigin,
            has_opener: hasOpener,
            opener_origin: openerOrigin,
            referrer: referrer,
          });
        }

        // 3. @next/third-parties Google Analytics helper
        try {
          sendGAEvent({
            event: "external_opener_detected",
            opener_origin: openerOrigin,
            has_opener: hasOpener,
          });
        } catch (e) {
          // Handled gracefully if GA is not yet mounted
        }

        // 4. @next/third-parties Google Tag Manager helper
        try {
          sendGTMEvent(eventData);
        } catch (e) {
          // Handled gracefully if GTM is not yet mounted
        }

        // 5. Vercel Analytics track
        try {
          track("external_opener_detected", {
            openerOrigin,
            hasOpener,
            referrer,
          });
        } catch (e) {
          // Handled gracefully if Vercel Analytics is disabled/local
        }

        // 6. Microsoft Clarity
        if (typeof window.clarity === "function") {
          window.clarity("event", "external_opener_detected");
          if (openerOrigin) {
            window.clarity("set", "opener_origin", openerOrigin);
          }
        }
      }
    }

    return {
      hasOpener,
      isDifferentWebsite,
      openerOrigin,
      referrer,
    };
  } catch (error) {
    console.warn("Error running captureWindowOpenerAnalytics:", error);
    return null;
  }
}
