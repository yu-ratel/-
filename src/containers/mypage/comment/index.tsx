'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaRegTrashCan as TrashIcon } from 'react-icons/fa6';

import AlertBox from '@/components/AlertBox';
import Button from '@/components/Button';
import useCommentController from '@/hooks/useCommentController';
import useLoading from '@/hooks/useLoading';
import useToast from '@/hooks/useToast';
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
  const [isAlert, setAlert] = useState(false);
  const { deletedComment } = useCommentController();
  const { onLoading } = useLoading();
  const { openToast } = useToast();

  const onDeletedComment = async (id: number) => {
    setAlert(false);
    await onLoading(() => deletedComment(id));
    openToast('삭제가 완료되었습니다.');
  };

  return (
    <MyPageBoard isPost={false} totalCount={totalCount} limit={limit}>
      {data.length ? (
        data.map((item, index) => {
          return (
            <ol key={item.id} className="mb-3 flex items-center text-center *:my-1.5">
              <Link href={`/post/${item.post_id}`} className="flex w-[96%] flex-grow *:w-[25%]">
                <li>{startPostNumber + index}</li>
                <li className="truncate">{item.user_post_rls.question}</li>
                <li className="truncate">{item.comment}</li>
                <li>{formatStrDate(item.updated_at)}</li>
              </Link>
              <Button variant="mypageClear" onClick={() => setAlert(true)}>
                <TrashIcon />
              </Button>
              {isAlert && (
                <AlertBox
                  variant="delete"
                  onClose={() => setAlert(false)}
                  onClick={() => onDeletedComment(item.id)}
                />
              )}
            </ol>
          );
        })
      ) : (
        <div className="h-full content-center text-center">새로운 댓글을 남겨주세요 📝</div>
      )}
    </MyPageBoard>
  );
}

export default MyComment;
