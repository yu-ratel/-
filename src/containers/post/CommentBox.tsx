'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import useCommentController from '@/hooks/useCommentController';

interface Props {
  postId: number;
  closeCommentWindow: () => void;
}

function CommentBox({ postId, closeCommentWindow }: Props) {
  const [text, setText] = useState('');
  const { createComment } = useCommentController();

  const onSubmit = () => {
    createComment(postId, text);
    setText('');
    closeCommentWindow();
  };

  return (
    <div className="border-gray-300 absolute right-[30px] z-[5] h-[200px] w-[40%] overflow-hidden rounded border bg-braun p-2.5">
      <textarea
        className=" mt-3 h-20 w-full resize-none rounded-xl"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-center bg-braun *:m-5">
        <Button onClick={onSubmit}>작성</Button>
        <Button onClick={closeCommentWindow}>닫기</Button>
      </div>
    </div>
  );
}

export default CommentBox;
