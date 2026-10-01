/**
 * Central SEO configuration — single source of truth for the entire site.
 * Every page's <Head> metadata draws from these values.
 */

const SITE_URL = "https://agrawalpratham.in";
const SITE_NAME = "Pratham Agrawal";

const seoConfig = {
  siteUrl: SITE_URL,
  siteName: SITE_NAME,
  titleTemplate: "%s | Pratham Agrawal",
  defaultTitle: "Pratham Agrawal | ServiceNow & AI Engineer",
  defaultDescription:
    "Pratham Agrawal — ServiceNow & AI Engineer at Infosys, specializing in GenAI, Agentic AI, AI Agent Studio, Now Assist, Glide APIs, and full-stack development.",
  defaultOgImage: `${SITE_URL}/assets/og/home.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  locale: "en_US",
  twitterHandle: "@agrawal_2002",
  socialProfiles: {
    linkedin: "https://www.linkedin.com/in/agrawalpratham/",
    github: "https://github.com/agrawal-pratham",
    twitter: "https://twitter.com/agrawal_2002",
    instagram: "https://www.instagram.com/agrawal___pratham/",
    blog: "https://blogs.agrawalpratham.in/",
  },
  email: "pratham@agrawalpratham.in",
  resumeUrl:
    "https://drive.google.com/file/d/1OVrswJHsqFC_02D2gdEcuPfqEBbmFOj8/view",
};

export default seoConfig;
