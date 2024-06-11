/** @type {import('next').NextConfig} */
/*const securityHeaders = [
  {
    key: 'Cache-Control',
    value: 'public, max-age=9999999999, must-revalidate',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Content-Security-Policy',
    value:
      "default-src 'self' vitals.vercel-insights.com https://www.google-analytics.com; frame-ancestors 'none'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.google-analytics.com https://ssl.google-analytics.com https://www.googletagmanager.com vitals.vercel-insights.com https://va.vercel-scripts.com; object-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;",
  },
];*/

const nextConfig = {
  poweredByHeader: false,
  images: {
    domains: ['images.unsplash.com'],
  }
};

export default nextConfig;
