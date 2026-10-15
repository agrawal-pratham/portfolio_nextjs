#!/usr/bin/env node

/**
 * Static RSS & Feed Generator Script
 *
 * Generates public/rss.xml, public/feed.xml, public/atom.xml, and public/feed.json
 * during build or on-demand.
 *
 * Usage:
 *   node scripts/generate-rss.js
 */

const fs = require("fs");
const path = require("path");
const { generateFeeds } = require("../src/lib/rss");

function generateStaticFeeds() {
  console.log("⚡ Generating RSS, Atom, and JSON feeds...");

  const publicDir = path.resolve(__dirname, "../public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const { rss2, atom1, json1 } = generateFeeds();

  const feedOutputs = [
    { filePath: path.join(publicDir, "rss.xml"), content: rss2, type: "RSS 2.0" },
    { filePath: path.join(publicDir, "feed.xml"), content: rss2, type: "RSS 2.0 (Alias)" },
    { filePath: path.join(publicDir, "atom.xml"), content: atom1, type: "Atom 1.0" },
    { filePath: path.join(publicDir, "feed.json"), content: json1, type: "JSON Feed 1.0" },
  ];

  for (const { filePath, content, type } of feedOutputs) {
    fs.writeFileSync(filePath, content, "utf-8");
    const sizeKb = (Buffer.byteLength(content, "utf-8") / 1024).toFixed(2);
    console.log(`  ✓ ${path.basename(filePath)} (${type}) generated [${sizeKb} KB]`);
  }

  console.log("✅ All feed formats successfully generated in public directory!\n");
}

if (require.main === module) {
  generateStaticFeeds();
}

module.exports = { generateStaticFeeds };
