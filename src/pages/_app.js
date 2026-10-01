import ScrollTop from "@/components/ScrollTop";
import "@/styles/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Space_Grotesk, DM_Sans } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${spaceGrotesk.variable} ${dmSans.variable} font-sans`}>
      <Script id="microsoft-clarity-analytics">
        {`
       (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "nf1egh153b");
  `}
      </Script>
      <Component {...pageProps} />
      <ScrollTop />
      <Analytics />
      <GoogleAnalytics gaId="G-4PGCTFP3XD" />
      <GoogleTagManager gtmId="GT-5TQWV24K" />
    </div>
  );
}
