import type { Metadata } from 'next';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Navbar } from '@/components/nav';

export const metadata: Metadata = {
  metadataBase: new URL('https://uwiragiye.com'),
  title: {
    default: 'Janvier Uwiragiye',
    template: '%s | Janvier Uwiragiye',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Janvier Uwiragiye',
    description: 'Developer, writer, and creator.',
    url: 'https://uwiragiye.com',
    siteName: 'Janvier Uwiragiye',
    locale: 'en_US',
    type: 'website',
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

/**
 * Root layout component.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render.
 * @returns {JSX.Element} The rendered root layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="forest"
      className={cx(GeistSans.variable, GeistMono.variable)}
    >
      <body className="antialiased max-w-2xl mb-40 flex flex-col mx-4  mt-8 lg:mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
