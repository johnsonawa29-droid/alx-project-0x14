/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',              // where to output the service worker
  register: true,              // auto-register the service worker
  skipWaiting: true,           // activate SW immediately after update
  disable: process.env.NODE_ENV === 'development', // disable PWA in dev mode
});

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
