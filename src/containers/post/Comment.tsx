'use client';

import { useState } from 'react';
import { BsPencil as UpdatePen } from 'react-icons/bs';
import { FaRegPenToSquare as Pen } from 'react-icons/fa6';
import { MdOutlineClear as Clear } from 'react-icons/md';

import AlertBox from '@/components/AlertBox';
import Button from '@/components/Button';
import useCommentController from '@/hooks/useCommentController';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

import CommentBox from './CommentBox';

type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

interface Props {
  data: CommentDto[];
  postId: number;
  isLogin: boolean;
}

function Comment({ data, postId, isLogin }: Props) {
  const userId = localStorage.getItem('user_id');
  const [isCommentWindow, setCommentWindow] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { deletedComment } = useCommentController();

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

  return (
    <section className="ml-2 mr-10 mt-10 h-4/5 w-2/5 bg-white">
      <div className="h-4/5 overflow-auto">
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
                    <Button variant="update" onClick={() => deletedComment(comment.id)}>
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
              </div>
            </div>
          ))
        ) : (
          <div className="m-10 text-center">소중한 댓글을 남겨주세요!</div>
        )}
      </div>
      <div className="mt-6 flex justify-center">
        <div className="flex w-4/5 items-center rounded-md  border border-[gray] p-1.5">
          <Pen className="mr-3 text-3xl" />
          <input
            type="text"
            className="w-full focus:outline-none"
            placeholder="댓글을 작성해보세요."
            onClick={onCommentWindow}
          />
          {isCommentWindow && isLogin && (
            <CommentBox postId={postId} closeCommentWindow={onClose} />
          )}
          {isCommentWindow && !isLogin && <AlertBox onClose={onClose} />}
        </div>
      </div>
    </section>
  );
}

export default Comment;
