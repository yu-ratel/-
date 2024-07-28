'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

interface Props {
  totalCount: number;
  limit: number;
}

function Pagination({ totalCount, limit }: Props) {
  const { page } = useParams();
  const basePath = usePathname().split('/').slice(0, -1).join('/');
  const totalPage = Math.ceil(totalCount / limit);
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <ol className="flex justify-center">
      {pageNumbers.map((number) => (
        <li
          className={`w-10 rounded-lg text-center ${Number(page) === number ? ' bg-white' : ''}`}
          key={number}
        >
          <Link href={`${basePath}/${number}`}>{number}</Link>
        </li>
      ))}
    </ol>
  );
}

export default Pagination;
