'use client';

import { useState } from 'react';
import { FaRegPenToSquare as Pen } from 'react-icons/fa6';

import Button from '@/components/Button';

function Comment() {
  const [isCommentWindow, SetCommentWindow] = useState(false);

  const onCommentWindow = () => {
    SetCommentWindow(true);
  };

  const closeCommentWindow = () => {
    SetCommentWindow(false);
  };

  return (
    <section className="ml-2 mr-10 mt-10 h-4/5 w-2/5 bg-white">
      <div className="h-4/5 *:h-16">
        <div>댓글1</div>
        <div>댓글2</div>
        <div>댓글3</div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-4/5 items-center rounded-md  border border-solid p-1.5">
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
