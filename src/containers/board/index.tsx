import Link from 'next/link';

import Pagination from '@/components/Pagination';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];

interface Props {
  data: BoardDto[];
  totalCount: number;
  limit: number;
  page: number;
}

function Board({ data, totalCount, limit, page }: Props) {
  const titles = ['번호', '제목', '글쓴이', '작성일'];
  const startPostNumber = (page - 1) * limit + 1;

  return (
    <main className="h-[80%]">
      <h1 className="text-center text-4xl text-white">우리들의 이야기</h1>
      <section className="m-10 h-4/5 bg-white">
        <ol className="flex h-[10%] border-b-[1px] text-center *:mt-3 *:w-[25%]">
          {titles.map((title) => {
            return <li key={title}>{title}</li>;
          })}
        </ol>
        {data.map((item, index) => {
          return (
            <Link href={`/post/${item.id}`} key={item.id}>
              <ol className="mb-5 flex h-10 text-center *:my-1.5 *:w-[25%]">
                <li>{startPostNumber + index}</li>
                <li className="truncate">{item.question}</li>
                <li>{item.nickname}</li>
                <li>{formatStrDate(item.updated_at)}</li>
              </ol>
            </Link>
          );
        })}
      </section>
      <section>
        <Pagination totalCount={totalCount} limit={limit} />
      </section>
    </main>
  );
}

export default Board;
