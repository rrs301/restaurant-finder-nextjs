/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    unoptimized: true,
    images:{
        domains:['lh3.googleusercontent.com','maps.googleapis.com']
    }
}

module.exports = nextConfig
