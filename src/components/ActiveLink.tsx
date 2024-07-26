'use client';

/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnchorHTMLAttributes } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  path: string;
  myPage?: boolean;
}

function ActiveLink({ path, myPage, children, ...props }: Props) {
  const router = usePathname();

  const isActive = (curPath: string) => {
    if (myPage && router.includes('mypage')) return true;

    return router === curPath;
  };

  return (
    <Link href={path} className={isActive(path) ? 'text-white' : 'text-black'} {...props}>
      {children}
    </Link>
  );
}

export default ActiveLink;
