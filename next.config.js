/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
   
    images:{
        unoptimized: true,
        domains:['lh3.googleusercontent.com','maps.googleapis.com']
    }
}

module.exports = nextConfig
