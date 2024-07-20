'use client';

import { useRef, useState } from 'react';

import Button from '@/components/Button';
import useRepliesController from '@/hooks/useRepliesController';
import useToast from '@/hooks/useToast';

import AskReply from './AskReply';
import SaveFile from './SaveFile';
import ToastPopUp from './ToastPopUp';

type AskReplyHandle = {
  getText: () => string[];
  clearText: () => void;
};

function ForMe() {
  const [[title, reply], setPost] = useState<[string, string]>(['', '']);
  const [isSave, setSave] = useState(false);
  const askReplyRef = useRef<AskReplyHandle>();
  const { createReplies } = useRepliesController();
  const { isToast: isToastSubmit, message: messageSubmit, openToast: openToastSubmit } = useToast();
  const { isToast: isToastSave, message: messageSave, openToast: openToastSave } = useToast();

  const handleSubmit = () => {
    openToastSubmit('작성 되었습니다.');
    createReplies(title, reply);
    askReplyRef.current!.clearText();
  };

  const handleSave = () => {
    setSave(true);
    openToastSave('저장이 완료 되었습니다.');
  };

  const handleForme = (variant: string, onClicked: (message: string) => void) => {
    if (askReplyRef.current) {
      const [curTitle, curReply] = askReplyRef.current.getText();
      setPost([curTitle, curReply]);

      if (reply === '') onClicked('글을 작성해주세요.');
      if (title === '질문을 선택해주세요!') onClicked('질문을 선택해주세요.');
      if (title !== '질문을 선택해주세요!' && reply) {
        if (variant === 'submit') {
          handleSubmit();
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
        <AskReply ref={askReplyRef} />
        <section className="m-10 text-center">
          <Button onClick={() => handleForme('submit', openToastSubmit)}>
            작성하기
            {isToastSubmit && <ToastPopUp message={messageSubmit} />}
          </Button>
          <Button onClick={() => handleForme('save', openToastSave)}>
            공유하기
            {isSave && <SaveFile title={title} reply={reply} />}
            {isToastSave && <ToastPopUp message={messageSave} />}
          </Button>
        </section>
      </section>
    </main>
  );
}

export default ForMe;
