'use client';

import { useRef, useState } from 'react';

import Button from '@/components/Button';
import useRepliesController from '@/hooks/useRepliesController';
import useToast from '@/hooks/useToast';
import { Database } from '@/types/supabase';

import AskList from './AskList';
import AskReply from './AskReply';
import SaveFile from './SaveFile';
import ToastPopUp from './ToastPopUp';

type AskDto = Database['public']['Tables']['question']['Row'];

interface Props {
  data: AskDto[];
}

type AskReplyHandle = {
  getText: () => string[];
  clearText: () => void;
  askClick: (ask: string) => void;
};

function ForMe({ data }: Props) {
  const [[title, reply], setPost] = useState<[string, string]>(['', '']);
  const [isSave, setSave] = useState(false);
  const askReplyRef = useRef<AskReplyHandle>(null);
  const { createReplies } = useRepliesController();
  const { isToast: isToastSubmit, message: messageSubmit, openToast: openToastSubmit } = useToast();
  const { isToast: isToastSave, message: messageSave, openToast: openToastSave } = useToast();

  const onClose = () => {
    setSave(false);
  };

  const handleAsk = (ask: string) => {
    if (askReplyRef.current) {
      askReplyRef.current.askClick(ask);
    }

    return null;
  };

  const handleSubmit = (curTitle: string, curReply: string) => {
    openToastSubmit('작성 되었습니다.');
    createReplies(curTitle, curReply);
    askReplyRef.current!.clearText();
  };

  const handleSave = () => {
    return isSave ? openToastSave('저장이 완료 되었습니다.') : setSave(true);
  };

  const handleForme = (variant: string, onClicked: (message: string) => void) => {
    if (askReplyRef.current) {
      const [curTitle, curReply] = askReplyRef.current.getText();
      setPost([curTitle, curReply]);

      if (curReply === '') onClicked('글을 작성해주세요.');
      if (curTitle === '질문을 선택해주세요!') onClicked('질문을 선택해주세요.');
      if (curTitle !== '질문을 선택해주세요!' && curReply) {
        if (variant === 'submit') {
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
        <section className="flex">
          <AskReply ref={askReplyRef} />
          <AskList onClick={handleAsk} data={data} />
        </section>
        <section className="m-10 text-center">
          <Button onClick={() => handleForme('submit', openToastSubmit)}>
            작성하기
            {isToastSubmit && <ToastPopUp message={messageSubmit} />}
          </Button>
          <Button onClick={() => handleForme('save', openToastSave)}>
            저장하기
            {isToastSave && <ToastPopUp message={messageSave} />}
          </Button>
          {isSave && (
            <SaveFile title={title} reply={reply} onClose={onClose} openToastSave={openToastSave} />
          )}
        </section>
      </section>
    </main>
  );
}

export default ForMe;
