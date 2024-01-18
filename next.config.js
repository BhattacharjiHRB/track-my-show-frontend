/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns:[
          {
            protocol: 'https',
            hostname: 'track.holycareschool.com',
            pathname: '**'
          }
        ]
      },
}

module.exports = nextConfig
