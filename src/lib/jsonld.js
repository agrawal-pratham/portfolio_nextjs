import seoConfig from "@/lib/seo.config";

/**
 * Build the Person schema (used on the home page and referenced by @id elsewhere).
 */
export function buildPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${seoConfig.siteUrl}/#person`,
    name: "Pratham Agrawal",
    givenName: "Pratham",
    familyName: "Agrawal",
    alternateName: "Pratham",
    url: seoConfig.siteUrl,
    image: `${seoConfig.siteUrl}/assets/png/me.jpg`,
    jobTitle: "Associate Consultant — ServiceNow & AI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Infosys",
      url: "https://www.infosys.com",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SIES College of Arts, Commerce and Science",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    email: `mailto:${seoConfig.email}`,
    description:
      "ServiceNow & AI Engineer at Infosys with 4+ years of experience in full-stack development, cloud technologies, and AI-driven automation. Delivering enterprise-grade ServiceNow solutions across GenAI, Agentic AI, Now Assist Skills, and AI Agent Studio.",
    knowsAbout: [
      "ServiceNow",
      "Generative AI",
      "Agentic AI",
      "ServiceNow AI Agent Studio",
      "Now Assist",
      "Glide API",
      "Flow Designer",
      "Next.js",
      "React",
      "Node.js",
    ],
    sameAs: [
      seoConfig.socialProfiles.linkedin,
      seoConfig.socialProfiles.github,
      seoConfig.socialProfiles.twitter,
      seoConfig.socialProfiles.instagram,
      seoConfig.socialProfiles.blog,
    ],
  };
}

/**
 * Build the WebSite schema.
 */
export function buildWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}/#website`,
    url: seoConfig.siteUrl,
    name: seoConfig.siteName,
    publisher: { "@id": `${seoConfig.siteUrl}/#person` },
    inLanguage: "en",
  };
}

/**
 * Build the ProfilePage schema for the home page.
 */
export function buildProfilePageSchema() {
  return {
    "@type": "ProfilePage",
    "@id": `${seoConfig.siteUrl}/#profilepage`,
    url: seoConfig.siteUrl,
    mainEntity: { "@id": `${seoConfig.siteUrl}/#person` },
    isPartOf: { "@id": `${seoConfig.siteUrl}/#website` },
  };
}

/**
 * Build a BreadcrumbList schema for inner pages.
 * @param {Array<{name: string, url: string}>} items - Breadcrumb items (first = Home, last = current page)
 */
export function buildBreadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Build a CreativeWork schema for project case-study pages.
 * @param {Object} opts
 * @param {string} opts.name - Project name
 * @param {string} opts.description - Project description
 * @param {string} opts.url - Canonical URL
 * @param {string} [opts.image] - Absolute image URL
 * @param {string[]} [opts.keywords] - Tech stack / keywords
 */
export function buildCreativeWorkSchema({ name, description, url, image, keywords }) {
  return {
    "@type": "CreativeWork",
    name,
    description,
    url,
    author: { "@id": `${seoConfig.siteUrl}/#person` },
    ...(image && { image }),
    ...(keywords && { keywords: keywords.join(", ") }),
  };
}

/**
 * Build an AboutPage schema.
 */
export function buildAboutPageSchema() {
  return {
    "@type": "AboutPage",
    url: `${seoConfig.siteUrl}/about`,
    mainEntity: { "@id": `${seoConfig.siteUrl}/#person` },
    isPartOf: { "@id": `${seoConfig.siteUrl}/#website` },
  };
}
