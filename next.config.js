/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
