import About from "@/components/About";
import CookieBanner from "@/components/Cookie/Cookie";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Head from "next/head";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Pratham Agrawal",
    alternateName: "Pratham",
    url: "https://agrawalpratham.in",
    image: "https://agrawalpratham.in/assets/png/og_img.png",
    jobTitle: "Associate Consultant",
    worksFor: {
      "@type": "Organization",
      name: "Infosys",
      url: "https://www.infosys.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "India",
    },
    sameAs: [
      "https://www.linkedin.com/in/agrawalpratham/",
      "https://github.com/agrawal-pratham",
      "https://www.instagram.com/agrawal___pratham/",
      "https://twitter.com/agrawal_2002",
      "http://blogs.agrawalpratham.in/",
      "https://solutions.agrawalpratham.in/",
    ],
    description:
      "Associate Consultant with 4+ years of experience in full-stack development, cloud technologies, and AI-driven automation. Currently delivering enterprise-grade ServiceNow solutions across GenAI, Agentic AI, Now Assist Skills, and AI Agent Studio, architecting scalable intelligent workflows.",
    knowsAbout: [
      "ServiceNow",
      "GenAI",
      "Agentic AI",
      "Now Assist Skills",
      "AI Agent Studio",
      "Moveworks",
      "Glide APIs",
      "Flow Designer",
      "UI Builder",
      "ITIL",
      "Next.js",
      "ReactJS",
      "Node.js",
      "Firebase",
      "GCP",
      "AWS",
      "Full Stack Development",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pratham Agrawal | Portfolio",
    url: "https://agrawalpratham.in",
    author: {
      "@type": "Person",
      name: "Pratham Agrawal",
    },
  };

  return (
    <div>
      <Head>
        {/* Primary Meta Tags */}
        <title>Pratham Agrawal | Associate Consultant at Infosys | ServiceNow & AI Engineer</title>
        <meta
          name="description"
          content="Associate Consultant at Infosys, Mumbai with 4+ years of experience in full-stack development, cloud technologies, and AI-driven automation. Delivering enterprise-grade ServiceNow solutions across GenAI, Agentic AI, Now Assist Skills, and AI Agent Studio."
        />
        <meta
          name="keywords"
          content="Pratham Agrawal, Associate Consultant, Infosys, Infosys Mumbai, ServiceNow, GenAI, Agentic AI, Now Assist Skills, AI Agent Studio, Moveworks, Glide APIs, Flow Designer, UI Builder, ITIL, Full Stack Web Developer, Next.js, ReactJS, Node.js, Firebase, GCP, AWS, Cloud Solutions"
        />
        <meta name="author" content="Pratham Agrawal" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Favicons & Manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#12151A" />
        <meta name="msapplication-TileColor" content="#12151A" />
        <meta name="theme-color" content="#12151A" />
        <meta name="google-site-verification" content="xLgsNqKuFWO2leEq61qdWwQyEJutNxKKEZQX2alS95U" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://agrawalpratham.in/" />

        {/* OpenGraph / Facebook Meta Tags */}
        <meta property="og:site_name" content="Pratham Agrawal Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content="Pratham" />
        <meta property="profile:last_name" content="Agrawal" />
        <meta property="profile:username" content="agrawalpratham" />
        <meta property="og:title" content="Pratham Agrawal | Associate Consultant at Infosys" />
        <meta
          property="og:description"
          content="Associate Consultant at Infosys, Mumbai with 4+ years of experience in full-stack development, cloud technologies, and AI-driven automation. Delivering enterprise-grade ServiceNow solutions across GenAI, Agentic AI, Now Assist Skills, and AI Agent Studio."
        />
        <meta property="og:image" content="https://agrawalpratham.in/assets/png/og_img.png" />
        <meta property="og:url" content="https://agrawalpratham.in/" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@agrawal_2002" />
        <meta name="twitter:creator" content="@agrawal_2002" />
        <meta name="twitter:title" content="Pratham Agrawal | Associate Consultant at Infosys" />
        <meta
          name="twitter:description"
          content="Associate Consultant at Infosys, Mumbai with 4+ years of experience in full-stack development, cloud technologies, and AI-driven automation. Delivering enterprise-grade ServiceNow solutions across GenAI, Agentic AI, Now Assist Skills, and AI Agent Studio."
        />
        <meta name="twitter:image" content="https://agrawalpratham.in/assets/png/og_img.png" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>

      <Header />
      <main>
        <Hero />
        <About />
        <WorkExperience />
        <Projects />
        <CookieBanner />
      </main>
      <Footer />
    </div>
  );
}
