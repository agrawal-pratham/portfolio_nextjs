/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.agrawalpratham.in" }],
        destination: "https://agrawalpratham.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
