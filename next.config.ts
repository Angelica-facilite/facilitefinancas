import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'https://firebasestorage.googleapis.com',
      'firebasestorage.googleapis.com',
      'https://lh3.googleusercontent.com',
      'mir-s3-cdn-cf.behance.net',
      'avatar.iran.liara.run',
      `s3.amazonaws.com`,
     'images.pexels.com',
     'pixabay.com'
    ]
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule:any) =>
      rule.test?.test?.('.svg'),
    )

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
};

export default nextConfig;
