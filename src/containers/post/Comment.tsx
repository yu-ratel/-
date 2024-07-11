'use client';

import { useState } from 'react';
import { FaRegPenToSquare as Pen } from 'react-icons/fa6';

import Button from '@/components/Button';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

function Comment({ data }: { data: CommentDto[] }) {
  const [isCommentWindow, SetCommentWindow] = useState(false);

  const onCommentWindow = () => {
    SetCommentWindow(true);
  };

  const closeCommentWindow = () => {
    SetCommentWindow(false);
  };

  return (
    <section className="ml-2 mr-10 mt-10 h-4/5 w-2/5 bg-white">
      <div className="h-4/5 *:h-20">
        {data.length ? (
          data.map((comment) => (
            <div key={comment.id} className="m-5 rounded-md border border-[gray] *:m-2">
              <div className="flex justify-between">
                {comment.nickname}
                <span className=" text-[gray]">{formatStrDate(comment.updated_at)}</span>
              </div>
              <div>{comment.comment}</div>
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
            <div className="border-gray-300 absolute right-[30px] z-[5] h-[200px] w-[40%] overflow-hidden rounded border bg-braun p-2.5">
              <textarea className=" mt-3 h-20 w-full resize-none rounded-xl" />
              <div className="flex justify-center bg-braun *:m-5">
                <Button onClick={closeCommentWindow}>작성</Button>
                <Button onClick={closeCommentWindow}>닫기</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Comment;
