'use client';

import { useState } from 'react';
import { FaRegTrashCan as TrashIcon } from 'react-icons/fa6';

import ActiveLink from '@/components/ActiveLink';
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
  const [curId, setCurId] = useState(0);
  const { deletedComment } = useCommentController();
  const { onLoading } = useLoading();
  const { openToast } = useToast();

  const onDeletedComment = async (id: number) => {
    setAlert(false);
    await onLoading(() => deletedComment(id));
    openToast('삭제가 완료되었습니다.');
  };

  const openAlert = (id: number) => {
    setAlert(true);
    setCurId(id);
  };

  return (
    <MyPageBoard isPost={false} totalCount={totalCount} limit={limit}>
      {data.length ? (
        data.map((item, index) => {
          return (
            <ol
              key={item.id}
              className="mb-3 flex items-center text-center *:my-1.5 max-md:w-[95%] max-md:*:text-sm"
            >
              <ActiveLink
                path={`/post/${item.post_id}`}
                className="flex w-[95%] flex-grow *:mr-3 *:w-[25%] max-md:*:w-[30%]"
                active={false}
              >
                <li>{startPostNumber + index}</li>
                <li className="truncate">{item.user_post_rls.question}</li>
                <li className="truncate">{item.comment}</li>
                <li className="hidden md:block">{formatStrDate(item.updated_at)}</li>
              </ActiveLink>
              <Button variant="mypageClear" onClick={() => openAlert(item.id)}>
                <TrashIcon />
              </Button>
              {isAlert && (
                <AlertBox
                  variant="delete"
                  onClose={() => setAlert(false)}
                  onClick={() => onDeletedComment(curId)}
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
