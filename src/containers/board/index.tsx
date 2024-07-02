import Link from 'next/link';

import Pagination from '@/components/Pagination';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

type BoardDto = Database['public']['Tables']['user_replies_ris']['Row'];

interface Props {
  data: BoardDto[];
  totalCount: number;
  limit: number;
}

function Board({ data, totalCount, limit }: Props) {
  const titles = ['번호', '제목', '글쓴이', '작성일'];

  return (
    <main className="h-[80%]">
      <h1 className="text-center text-4xl text-white">우리들의 이야기</h1>
      <section className="m-10 h-4/5 bg-white">
        <div className="flex h-[10%] border-b-[1px] text-center *:mt-3 *:w-[25%]">
          {titles.map((title) => {
            return <div key={title}>{title}</div>;
          })}
        </div>
        {data.map((item) => {
          return (
            <Link href={`/post/${item.id}`} key={item.id}>
              <div className="flex text-center *:my-1.5 *:w-[25%]">
                <div>{item.id}</div>
                <div>{item.question}</div>
                <div>{item.nickname}</div>
                <div>{formatStrDate(item.updated_at)}</div>
              </div>
            </Link>
          );
        })}
      </section>
      <footer>
        <Pagination totalCount={totalCount} limit={limit} />
      </footer>
    </main>
  );
}

export default Board;
