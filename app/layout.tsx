import './global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'harsh bajwa.',
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'harsh bajwa.',
  openGraph: {
    title: 'harsh bajwa.',
    description: 'the site of harsh bajwa.',
    url: baseUrl,
    siteName: 'harshbajwa',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

const cmun = localFont({
  src: [
    {
      path: '../public/fonts/cmun/cmunrm.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/cmun/cmunti.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/cmun/cmunbx.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/cmun/cmunbi.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx('text-black bg-white dark:text-white dark:bg-black', cmun.className)}>
      <body className="">
          <ThemeProvider attribute="class">
            <Navbar />
            <main className="">
              {children}
            </main>
            <Footer />
            <Analytics />
            <SpeedInsights />
          </ThemeProvider>
      </body>
    </html>
  );
}
