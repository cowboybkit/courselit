/** @type {import('next').NextConfig} */

const cdn = process.env.MEDIALIT_SERVER
    ? process.env.MEDIALIT_CDN || process.env.MEDIALIT_SERVER
    : "medialit.sgp1.cdn.digitaloceanspaces.com";

const nextConfig = {
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: [cdn, 'hmbid.s3.ap-southeast-1.amazonaws.com'],
    },
};

module.exports = nextConfig;
