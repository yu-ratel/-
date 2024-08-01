'use client';

import { useState, useEffect, useRef, ChangeEvent } from 'react';

import Button from '@/components/Button';
import usePostController from '@/hooks/usePostController';

interface Props {
  postId: number;
  comment: string;
  closeCommentWindow: () => void;
}
function PostBox({ postId, comment, closeCommentWindow }: Props) {
  const [text, setText] = useState('');
  const { updatePost } = usePostController();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (comment) setText(comment);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [comment]);

  const handlePost = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const maxLength = 500;

    if (event.target.value.length <= maxLength) {
      setText(event.target.value);
    }
  };

  const onSubmit = () => {
    updatePost(postId, text);
    closeCommentWindow();
  };

  return (
    <div className="border-gray-300 relative bottom-[400px] h-[80%] w-full overflow-hidden rounded border bg-braun p-2.5">
      <textarea
        ref={inputRef}
        className="mt-3 h-[70%] w-full resize-none rounded-xl p-2 focus:outline-none"
        value={text}
        onChange={(e) => handlePost(e)}
      />
      <div className="flex justify-center bg-braun *:m-5">
        <Button onClick={onSubmit}>수정</Button>
        <Button onClick={closeCommentWindow}>닫기</Button>
      </div>
    </div>
  );
}

export default PostBox;
