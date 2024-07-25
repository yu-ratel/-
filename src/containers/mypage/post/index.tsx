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

function MyPost({ data, totalCount, limit, page }: Props) {
  const titles = ['번호', '제목', '글쓴이', '작성일'];
  const startPostNumber = (page - 1) * limit + 1;

  return (
    <main>
      <section>
        <ol className="flex rounded-t-xl bg-deepBraun text-center text-white *:my-3 *:w-[25%]">
          {titles.map((title) => {
            return <li key={title}>{title}</li>;
          })}
        </ol>
        {data.map((item, index) => {
          return (
            <Link href={`/post/${item.id}`} key={item.id}>
              <ol className="mb-3 flex items-center text-center *:my-1.5 *:w-[25%]">
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

export default MyPost;
