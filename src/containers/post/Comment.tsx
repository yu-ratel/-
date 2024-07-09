'use client';

import { useState } from 'react';
import { FaRegPenToSquare as Pen } from 'react-icons/fa6';

function Comment() {
  const [isCommentWindow, SetCommentWindow] = useState(false);

  const onCommentWindow = () => {
    SetCommentWindow(true);
  };

  return (
    <section className="ml-2 mr-10 mt-10 h-4/5 w-2/5 bg-white *:m-2 *:h-10">
      <div>댓글</div>
      <div>댓글</div>
      <div>댓글</div>
      <div>댓글</div>
      <div>댓글</div>
      <div>댓글</div>
      <div>댓글</div>
      <div>댓글</div>
      <div className="flex items-center  rounded-md  border border-solid p-1.5">
        <Pen className="text-z mr-3" />
        <input
          type="text"
          className="w-full"
          placeholder="댓글을 작성해보세요."
          onClick={onCommentWindow}
        />
        {isCommentWindow && (
          <div className="border-gray-300 duration-350 ease absolute  bottom-0 right-[30px] z-[5] h-[200px] w-[38%] overflow-hidden rounded border bg-white transition-all">
            ㅎㅇ
          </div>
        )}
      </div>
    </section>
  );
}

export default Comment;
