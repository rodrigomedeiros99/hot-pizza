import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AosProvider from '@/components/AosProvider';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hot Pizza',
  description: 'The best pizza in town',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AosProvider>
          <Navbar />
          {children}
        </AosProvider>
      </body>
    </html>
  );
}