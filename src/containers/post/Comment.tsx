'use client';

import { useState } from 'react';
import { BsPencil as UpdatePen } from 'react-icons/bs';
import { FaRegPenToSquare as Pen } from 'react-icons/fa6';
import { MdOutlineClear as Clear } from 'react-icons/md';

import Button from '@/components/Button';
import useCommentController from '@/hooks/useCommentController';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

import CommentBox from './CommentBox';

type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

function Comment({ data, postId }: { data: CommentDto[]; postId: number }) {
  const [isCommentWindow, SetCommentWindow] = useState(false);
  const { deletedComment } = useCommentController();

  const onCommentWindow = () => {
    SetCommentWindow(true);
  };

  const closeCommentWindow = () => {
    SetCommentWindow(false);
  };

  const onClear = (id: number) => {
    deletedComment(id);
  };

  return (
    <section className="ml-2 mr-10 mt-10 h-4/5 w-2/5 bg-white">
      <div className="h-4/5 overflow-auto *:h-20">
        {data.length ? (
          data.map((comment) => (
            <div key={comment.id} className="m-5 rounded-md shadow shadow-braun *:p-2">
              <div className="flex justify-between">
                {comment.nickname}
                <span className=" text-[gray]">{formatStrDate(comment.updated_at)}</span>
              </div>
              <div className="flex">
                <div className="w-[90%]">{comment.comment}</div>
                <Button variant="update">
                  <UpdatePen />
                </Button>
                <Button variant="update" onClick={() => onClear(comment.id)}>
                  <Clear />
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className="m-10 text-center">소중한 댓글을 남겨주세요!</div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="flex w-4/5 items-center rounded-md  border border-[gray] p-1.5">
          <Pen className="mr-3 text-3xl" />
          <input
            type="text"
            className="w-full"
            placeholder="댓글을 작성해보세요."
            onClick={onCommentWindow}
          />
          {isCommentWindow && (
            <CommentBox postId={postId} closeCommentWindow={closeCommentWindow} />
          )}
        </div>
      </div>
    </section>
  );
}

export default Comment;
