'use client';

import Link from 'next/link';
import { FaRegTrashCan as TrashIcon } from 'react-icons/fa6';

import Button from '@/components/Button';
import useCommentController from '@/hooks/useCommentController';
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
  const { deletedComment } = useCommentController();

  return (
    <MyPageBoard isPost={false} totalCount={totalCount} limit={limit}>
      {data.map((item, index) => {
        return (
          <ol key={item.id} className="mb-3 flex items-center text-center *:my-1.5">
            <Link href={`/post/${item.post_id}`} className="flex w-[96%] flex-grow *:w-[25%]">
              <li>{startPostNumber + index}</li>
              <li className="truncate">{item.user_post_rls.question}</li>
              <li className="truncate">{item.comment}</li>
              <li>{formatStrDate(item.updated_at)}</li>
            </Link>
            <Button variant="mypageClear" onClick={() => deletedComment(item.id)}>
              <TrashIcon />
            </Button>
          </ol>
        );
      })}
    </MyPageBoard>
  );
}

export default MyComment;
