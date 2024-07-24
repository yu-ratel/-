'use client';

/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  path: string;
}

function ActiveLink({ path, children, ...props }: Props) {
  const router = usePathname();

  const isActive = (curPath: string) => router === curPath;
  return (
    <Link href={path} className={isActive(path) ? 'text-white' : 'text-black'} {...props}>
      {children}
    </Link>
  );
}

export default ActiveLink;
