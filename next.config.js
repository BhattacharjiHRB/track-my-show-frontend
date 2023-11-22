/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites (){
        return [
            {
                source: '/api/v1/:path*',
                destination: 'https://express-bf4s.onrender.com/api/v1/'
            }
        ]

    }
}

module.exports = nextConfig
