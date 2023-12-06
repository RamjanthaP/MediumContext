/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['sv'],
    defaultLocale: 'sv',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
      },
    ],
  },
  output: 'standalone',
};

module.exports = nextConfig;
