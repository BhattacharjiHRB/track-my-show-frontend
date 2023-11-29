/** @type {import('next').NextConfig} */
const nextConfig = {
    // async rewrites (){
    //     return [
    //         {
    //             source: '/api/v1/:path*',
    //             destination: 'https://express-bf4s.onrender.com/api/v1/'
    //         }
    //     ]
        
    // },
    images: {
        domains: ['express-bf4s.onrender.com'], // Add the hostname here
      },
}

module.exports = nextConfig
