import CookieBanner from "@/components/Cookie/Cookie";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeSummary from "@/components/HomeSummary";
import Seo from "@/components/Seo";

export default function Home() {
  return (
    <div>
      <Seo
        title="Pratham Agrawal | ServiceNow & AI Engineer"
        description="Pratham Agrawal — ServiceNow & AI Engineer at Infosys, specializing in GenAI, Agentic AI, AI Agent Studio, Now Assist, Glide APIs, and full-stack development."
        canonical="/"
        ogType="profile"
        ogImage="https://agrawalpratham.in/assets/og/home.png"
        ogImageAlt="Pratham Agrawal — ServiceNow & AI Engineer portfolio"
      >
        {/* Profile-specific OG tags */}
        <meta property="profile:first_name" content="Pratham" />
        <meta property="profile:last_name" content="Agrawal" />
        <meta property="profile:username" content="agrawalpratham" />

        {/* Search Console verification — do NOT remove */}
        <meta
          name="google-site-verification"
          content="xLgsNqKuFWO2leEq61qdWwQyEJutNxKKEZQX2alS95U"
        />
      </Seo>

      <Header />
      <main>
        <Hero />
        <HomeSummary />
        <CookieBanner />
      </main>
      <Footer />
    </div>
  );
}
