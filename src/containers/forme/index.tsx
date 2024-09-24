'use client';

import React, { useCallback, useRef, useState } from 'react';

import AlertBox from '@/components/AlertBox';
import Button from '@/components/Button';
import usePostController from '@/hooks/usePostController';
import useToast from '@/hooks/useToast';
import { Database } from '@/types/supabase';

import AskList from './AskList';
import AskReply from './AskReply';
import SaveFile from './SaveFile';

type AskDto = Database['public']['Tables']['question']['Row'];

interface Props {
  data: AskDto[];
  isLogin: boolean;
}

type AskReplyHandle = {
  getText: () => string[];
  clearText: () => void;
  askClick: (ask: string) => void;
};

function ForMe({ data, isLogin }: Props) {
  const [[title, reply], setPost] = useState<[string, string]>(['', '']);
  const [isSave, setSave] = useState(false);
  const [isAlert, setAlert] = useState(false);
  const askReplyRef = useRef<AskReplyHandle>(null);
  const { createPost } = usePostController();
  const { openToast } = useToast();

  const onClose = () => {
    setSave(false);
  };

  const handleAsk = useCallback((ask: string) => {
    if (askReplyRef.current) {
      askReplyRef.current.askClick(ask);
    }
  }, []);

  const handleSubmit = (curTitle: string, curReply: string) => {
    openToast('작성이 완료되었습니다.');
    createPost(curTitle, curReply);
    askReplyRef.current!.clearText();
  };

  const handleSave = () => {
    return isSave ? openToast('저장이 완료 되었습니다.') : setSave(true);
  };

  const handleForme = (variant: string) => {
    if (askReplyRef.current) {
      const [curTitle, curReply] = askReplyRef.current.getText();
      setPost([curTitle, curReply]);

      if (curReply === '') {
        openToast('글을 작성해주세요.');
        return;
      }
      if (curTitle === '질문을 선택해주세요!') openToast('질문을 선택해주세요.');
      if (curTitle !== '질문을 선택해주세요!' && curReply) {
        if (variant === 'submit') {
          if (!isLogin) {
            setAlert(true);
            return;
          }
          handleSubmit(curTitle, curReply);
        }
        if (variant === 'save') {
          handleSave();
        }
      }
    }
  };

  return (
    <main>
      <section>
        <section className="flex max-md:flex-col-reverse max-md:items-center max-md:*:w-[90%]">
          <AskReply ref={askReplyRef} />
          <AskList onClick={handleAsk} data={data} />
        </section>
        <section className=" text-center max-md:*:mb-3">
          <Button onClick={() => handleForme('submit')}>게시글 작성</Button>
          <Button onClick={() => handleForme('save')}>이미지 저장</Button>
          {isSave && <SaveFile title={title} reply={reply} onClose={onClose} />}
          {isAlert && <AlertBox onClose={() => setAlert(false)} />}
        </section>
      </section>
    </main>
  );
}

export default ForMe;
