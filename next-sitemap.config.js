module.exports = {
  siteUrl: "https://agrawalpratham.in",
  generateRobotsTxt: true,
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [],
  },
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Higher priority for key pages
    const highPriority = ["/", "/about", "/servicenow", "/ai"];
    const medPriority = ["/experience", "/projects"];
    let priority = 0.5;
    if (highPriority.includes(path)) priority = 1.0;
    else if (medPriority.includes(path)) priority = 0.8;
    else if (path.startsWith("/projects/")) priority = 0.7;

    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
