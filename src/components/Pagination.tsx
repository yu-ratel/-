'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Props {
  totalCount: number;
  limit: number;
}

function Pagination({ totalCount, limit }: Props) {
  const { page } = useParams();
  const totalPage = Math.ceil(totalCount / limit);
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      {pageNumbers.map((number) => (
        <div
          className={`w-10 rounded-lg text-center ${Number(page) === number ? ' bg-white' : ''}`}
          key={number}
        >
          <Link href={`/board/${number}`}>{number}</Link>
        </div>
      ))}
    </div>
  );
}

export default Pagination;
