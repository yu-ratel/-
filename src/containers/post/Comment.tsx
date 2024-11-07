'use client';

import { useState } from 'react';
import { BsPencil as UpdatePen } from 'react-icons/bs';
import { FaRegPenToSquare as Pen } from 'react-icons/fa6';
import { MdOutlineClear as Clear } from 'react-icons/md';

import AlertBox from '@/components/AlertBox';
import Button from '@/components/Button';
import useCommentController from '@/hooks/useCommentController';
import useLoading from '@/hooks/useLoading';
import useToast from '@/hooks/useToast';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

import CommentBox from './CommentBox';

type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

interface Props {
  data: CommentDto[];
  postId: number;
  userId: string | null;
}

function Comment({ data, postId, userId }: Props) {
  const [isCommentWindow, setCommentWindow] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isAlert, setAlert] = useState(false);
  const [curId, setCurId] = useState(0);
  const { deletedComment } = useCommentController();
  const { onLoading } = useLoading();
  const { openToast } = useToast();

  const onCommentWindow = () => {
    setCommentWindow(true);
  };

  const onClose = () => {
    setCommentWindow(false);
    setSelectedId(null);
  };

  const onUpdate = (id: number) => {
    setSelectedId(id);
  };

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
    <section className="ml-2 mr-10 mt-10 h-4/5 w-2/5 bg-white">
      <div className="h-4/5 overflow-auto max-md:*:text-sm">
        {data.length ? (
          data.map((comment) => (
            <div key={comment.id} className="m-5 rounded-md shadow shadow-braun *:p-2">
              <div className="flex justify-between">
                {comment.nickname}
                <span className=" text-[gray]">{formatStrDate(comment.updated_at)}</span>
              </div>
              <div className="flex">
                <div className="w-[90%]">{comment.comment}</div>
                {userId === comment.user_id && (
                  <>
                    <Button variant="update" onClick={() => onUpdate(comment.id)}>
                      <UpdatePen />
                    </Button>
                    <Button variant="update" onClick={() => openAlert(comment.id)}>
                      <Clear />
                    </Button>
                  </>
                )}
                {selectedId === comment.id && (
                  <CommentBox
                    curId={comment.id}
                    comment={comment.comment}
                    closeCommentWindow={onClose}
                  />
                )}
                {isAlert && (
                  <AlertBox
                    variant="delete"
                    onClose={() => setAlert(false)}
                    onClick={() => onDeletedComment(curId)}
                  />
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="m-10 text-center">소중한 댓글을 남겨주세요!</div>
        )}
      </div>
      <div className="mt-6 flex justify-center max-md:mt-0">
        <div className="flex w-4/5 items-center rounded-md  border border-[gray] p-1.5">
          <Pen className="mr-3 text-3xl" />
          <input
            type="text"
            className="w-full focus:outline-none"
            placeholder="댓글을 작성해보세요."
            onClick={onCommentWindow}
          />
          {isCommentWindow && userId && <CommentBox postId={postId} closeCommentWindow={onClose} />}
          {isCommentWindow && !userId && <AlertBox onClose={onClose} />}
        </div>
      </div>
    </section>
  );
}

export default Comment;
