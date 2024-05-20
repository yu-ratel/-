import type { Metadata } from 'next';
import '@/styles/globals.css';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'beauty',
  description: '아름다움',
};

export default function RootLayout({
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
