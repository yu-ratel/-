import Link from 'next/link';

import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

import MyPageBoard from '../MyPageBoard';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];

interface Props {
  data: BoardDto[];
  totalCount: number;
  limit: number;
  page: number;
}

function MyPost({ data, totalCount, limit, page }: Props) {
  const startPostNumber = (page - 1) * limit + 1;

  return (
    <MyPageBoard totalCount={totalCount} limit={limit}>
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
    </MyPageBoard>
  );
}

export default MyPost;
