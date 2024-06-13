import Link from 'next/link';
import { useParams } from 'next/navigation';

type Props = {
  totalCount: number;
  limit: number;
};

const Pagination = ({ totalCount, limit }: Props) => {
  const { page } = useParams();
  const totalPage = Math.ceil(totalCount / limit);
  const pageNumbers = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      {pageNumbers.map((number, index) => (
        <div
          className={`w-10 rounded-lg text-center ${Number(page) === number ? ' bg-white' : ''}`}
          key={index}
        >
          <Link href={`/board/${number}`}>{number}</Link>
        </div>
      ))}
    </div>
  );
};

export default Pagination;