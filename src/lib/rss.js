const { Feed } = require("feed");
const { feedMetadata, feedItems } = require("./feed-data");

/**
 * Builds and populates a new Feed instance with portfolio items.
 *
 * @returns {Feed} Configured Feed instance
 */
function buildFeed() {
  const feed = new Feed({
    title: feedMetadata.title,
    description: feedMetadata.description,
    id: feedMetadata.id,
    link: feedMetadata.link,
    language: feedMetadata.language,
    image: feedMetadata.image,
    favicon: feedMetadata.favicon,
    copyright: feedMetadata.copyright,
    updated: feedMetadata.updated,
    generator: "Next.js & Feed for Node.js",
    feedLinks: feedMetadata.feedLinks,
    author: feedMetadata.author,
  });

  feedItems.forEach((item) => {
    feed.addItem({
      title: item.title,
      id: item.id,
      link: item.link,
      description: item.description,
      content: item.content.trim(),
      author: item.author,
      date: item.date,
      image: item.image,
      category: item.category,
    });
  });

  return feed;
}

/**
 * Generates XML and JSON feed strings.
 *
 * @returns {{ rss2: string, atom1: string, json1: string }}
 */
function generateFeeds() {
  const feed = buildFeed();
  return {
    rss2: feed.rss2(),
    atom1: feed.atom1(),
    json1: feed.json1(),
  };
}

module.exports = {
  buildFeed,
  generateFeeds,
};
