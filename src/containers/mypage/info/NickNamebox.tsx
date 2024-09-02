'use client';

import { useState, useEffect, useRef, ChangeEvent } from 'react';

import update from '@/actions/info';
import Button from '@/components/Button';
import useLoading from '@/hooks/useLoading';
import useToast from '@/hooks/useToast';

interface Props {
  nickname?: string;
  closeCommentWindow: () => void;
}
function NicknameBox({ nickname, closeCommentWindow }: Props) {
  const [name, setName] = useState('');
  const userId = localStorage.getItem('userId');
  const { onLoading } = useLoading();
  const { openToast } = useToast();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (nickname) setName(nickname);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [nickname]);

  const handleComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const maxLength = 6;

    if (event.target.value.length <= maxLength) {
      setName(event.target.value);
    }
  };

  const updateNickname = async () => {
    if (userId) {
      await update(userId, name);
    }
  };

  const onSubmit = async () => {
    if (inputRef.current?.value === '') {
      openToast('닉네임을 입력해 주세요.');
      return;
    }

    await onLoading(() => updateNickname());
    openToast('수정이 완료되었습니다.');

    window.location.reload();
    setName('');
    closeCommentWindow();
  };

  return (
    <div className="border-gray-300 absolute right-[80px] h-[200px] w-[30%] overflow-hidden rounded border bg-braun p-2.5 max-md:fixed max-md:w-[50%] ">
      <textarea
        ref={inputRef}
        className="mt-3 h-20 w-full resize-none rounded-xl p-2 focus:outline-none"
        value={name}
        onChange={(e) => handleComment(e)}
      />
      <div className="flex justify-center bg-braun *:m-5">
        <Button onClick={onSubmit}>수정</Button>
        <Button onClick={closeCommentWindow}>닫기</Button>
      </div>
    </div>
  );
}

export default NicknameBox;
