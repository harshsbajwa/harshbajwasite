import './global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';
import { baseUrl } from './sitemap';
import { ThemeProvider } from 'next-themes';
import Cursor from './components/cursor';

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

const junicode = localFont({
  src: [
    {
      path: '../public/fonts/junicode/junicode-boldcondensed-webfont.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cx('text-black bg-white dark:text-white dark:bg-black', junicode.className)}>
    <body className="antialiased max-w-4xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider attribute="class">
          <Navbar />
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
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
