import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Toaster } from 'sonner';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Prince',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} bg-background font-sans antialiased`}>
        <div className="min-h-screen max-w-4xl mx-auto px-4">
          <div className="py-4">{children}</div>
          <div className="sticky top-[100vh] pt-32 pb-4">
            <Footer />
          </div>
        </div>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
