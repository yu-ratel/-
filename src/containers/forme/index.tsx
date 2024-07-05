'use client';

import { useRef } from 'react';

import Button from '@/components/Button';
import useRepliesController from '@/hooks/useRepliesController';
import useToast from '@/hooks/useToast';

import AskReply from './AskReply';
import ToastPopUp from './ToastPopUp';

type AskReplyHandle = {
  getText: () => string[];
};

function ForMe() {
  const askReplyRef = useRef<AskReplyHandle>();
  const { createReplies } = useRepliesController();
  const { isToast: isToastSubmit, message: messageSubmit, openToast: openToastSubmit } = useToast();
  const { isToast: isToastSave, message: messageSave, openToast: openToastSave } = useToast();

  const handleSubmit = () => {
    if (askReplyRef.current) {
      const [title, reply] = askReplyRef.current.getText();

      if (reply === '') openToastSubmit('글을 작성해주세요.');
      if (title === '질문을 선택해주세요!') openToastSubmit('질문을 선택해주세요.');
      if (title && reply) {
        openToastSubmit('작성 되었습니다.');
        createReplies(title, reply);
      }
    }
  };

  const handleSave = () => {
    openToastSave('저장이 완료 되었습니다.');
  };

  return (
    <main>
      <section>
        <AskReply ref={askReplyRef} />
        <section className="m-10 text-center">
          <Button onClick={handleSubmit}>
            작성하기
            {isToastSubmit && <ToastPopUp message={messageSubmit} />}
          </Button>
          <Button onClick={handleSave}>
            공유하기
            {isToastSave && <ToastPopUp message={messageSave} />}
          </Button>
        </section>
      </section>
    </main>
  );
}

export default ForMe;
