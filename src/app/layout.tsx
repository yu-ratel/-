import Nav from '@/components/Nav';

import type { Metadata } from 'next';
import '@/styles/globals.css';

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
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
