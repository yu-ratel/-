import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
