/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['a.storyblok.com', 'unsplash.it'],
  },
  output: 'standalone',
};

module.exports = nextConfig;
