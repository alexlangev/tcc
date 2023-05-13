/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
  },
  compiler: {
    styledComponents: {
      displayName: true,
      // ssr: true,
      fileName: true,
      namespace: "tcc",
    },
  },
};

module.exports = nextConfig;
