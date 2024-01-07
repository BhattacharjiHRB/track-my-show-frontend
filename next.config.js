/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
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
