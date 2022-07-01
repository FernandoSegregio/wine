/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.wine.com.br', 'img.wine.com.br'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
