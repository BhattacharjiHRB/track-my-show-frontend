/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns:[
          {
            protocol: 'https',
            hostname: 'express-bf4s.onrender.com',
            pathname: '**'
          }
        ]
      },
}

module.exports = nextConfig
