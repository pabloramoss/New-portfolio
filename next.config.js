/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/rpablo_dev',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/pabloramoss',
        permanent: true,
      },
    ]
  },
  
}

module.exports = nextConfig
