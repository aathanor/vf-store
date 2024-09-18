/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,  // Your other Next.js configurations

  webpack(config, { isServer }) {
    if (!isServer) {
      // Disable Webpack cache for production builds to avoid large cache files
      config.cache = false;

      // Limit the size of each Webpack chunk to prevent large files
      config.optimization = {
        splitChunks: {
          chunks: 'all',
          maxSize: 250000,  // Limit each chunk to 250 KB
        },
      };
    }

    return config;
  },
};

export default nextConfig;
