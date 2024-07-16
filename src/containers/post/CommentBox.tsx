'use client';

import { useState, useEffect, useRef, ChangeEvent } from 'react';

import Button from '@/components/Button';
import useCommentController from '@/hooks/useCommentController';

interface Props {
  postId?: number;
  curId?: number;
  comment?: string;
  closeCommentWindow: () => void;
}
function CommentBox({ postId, curId, comment, closeCommentWindow }: Props) {
  const [text, setText] = useState('');
  const { updateComment, createComment } = useCommentController();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (comment) setText(comment);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [comment]);

  const handleComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const maxLength = 100;

    if (event.target.value.length <= maxLength) {
      setText(event.target.value);
    }
  };

  const onSubmit = () => {
    if (postId) {
      createComment(postId, text);
    }
    if (curId) {
      updateComment(curId, text);
    }
    setText('');
    closeCommentWindow();
  };

  return (
    <div className="border-gray-300 absolute bottom-3 right-[30px] h-[200px] w-[40%] overflow-hidden rounded border bg-braun p-2.5">
      <textarea
        ref={inputRef}
        className="mt-3 h-20 w-full resize-none rounded-xl p-2 focus:outline-none"
        value={text}
        onChange={(e) => handleComment(e)}
      />
      <div className="flex justify-center bg-braun *:m-5">
        {curId ? (
          <Button onClick={onSubmit}>수정</Button>
        ) : (
          <Button onClick={onSubmit}>작성</Button>
        )}
        <Button onClick={closeCommentWindow}>닫기</Button>
      </div>
    </div>
  );
}

export default CommentBox;
