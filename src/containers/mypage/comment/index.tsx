import Link from 'next/link';

import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

import MyPageBoard from '../MyPageBoard';

type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'] & {
  user_post_rls: {
    question: string;
  };
};

interface Props {
  data: CommentDto[];
  totalCount: number;
  limit: number;
  page: number;
}

function MyComment({ data, totalCount, limit, page }: Props) {
  const startPostNumber = (page - 1) * limit + 1;

  return (
    <MyPageBoard totalCount={totalCount} limit={limit}>
      {data.map((item, index) => {
        return (
          <Link href={`/post/${item.post_id}`} key={item.id}>
            <ol className="mb-3 flex items-center text-center *:my-1.5 *:w-[25%]">
              <li>{startPostNumber + index}</li>
              <li className="truncate">{item.user_post_rls.question}</li>
              <li>{item.comment}</li>
              <li>{formatStrDate(item.updated_at)}</li>
            </ol>
          </Link>
        );
      })}
    </MyPageBoard>
  );
}

export default MyComment;
