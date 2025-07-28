/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable experimental features for Next.js 15
  experimental: {
    // Enable React 19 features
    reactCompiler: false, // Set to true when React Compiler is stable
  },
  // Suppress peer dependency warnings for AWS Amplify (temporary)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

module.exports = nextConfig
