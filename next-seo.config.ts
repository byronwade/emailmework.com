// next-seo.config.ts
import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: 'Emailmework',
  description: 'Emailmework.com is a platform connecting companies and customers with in-depth profiles, sophisticated rating algorithm for fair matching, and job ratings for quality. Eliminates limitations of traditional job boards and fosters respectful community.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.url.ie/a',
    title: 'Open Graph Title A',
    description: 'Emailmework.com is a platform connecting companies and customers with in-depth profiles, sophisticated rating algorithm for fair matching, and job ratings for quality. Eliminates limitations of traditional job boards and fosters respectful community.',
    images: [
      {
        url: 'https://www.test.ie/og-image-a-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt A',
        type: 'image/jpeg',
        secureUrl: 'https://www.test.ie/secure-og-image-a-01.jpg',
      },
    ],
    siteName: 'SiteName A',
  },
  twitter: {
    handle: '@handlea',
    site: '@sitea',
    cardType: 'summary_large_image',
  },
};