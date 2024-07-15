import { Noto_Serif_KR } from 'next/font/google';

import Nav from '@/components/Nav';

import type { Metadata } from 'next';
import '@/styles/globals.css';

const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: '200',
});

export const metadata: Metadata = {
  title: 'beauty',
  description: '아름다움',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={notoSerifKr.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
