import { Noto_Serif_KR } from 'next/font/google';

import Nav from '@/components/Nav';
import LoadingContextProvider from '@/contexts/LoadingContext';
import ToastContextProvider from '@/contexts/ToastContext';

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
        <ToastContextProvider>
          <LoadingContextProvider>
            <Nav />
            {children}
          </LoadingContextProvider>
        </ToastContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
