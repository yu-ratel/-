'use client';

/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { AnchorHTMLAttributes } from 'react';

import { formatBasePath } from '@/utils/formatDate';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  path: string;
  myPage?: boolean;
  active?: boolean;
}

function ActiveLink({ path, myPage, children, active = true, ...props }: Props) {
  const router = usePathname();
  const { page } = useParams();

  const isActive = (curPath: string) => {
    if (myPage && router.includes('mypage')) return true;

    if (page) {
      return formatBasePath(router) === formatBasePath(curPath);
    }

    return router === curPath;
  };

  return (
    <Link
      href={path}
      prefetch
      className={active && isActive(path) ? 'text-white' : 'text-black'}
      {...props}
    >
      {children}
    </Link>
  );
}

export default ActiveLink;
