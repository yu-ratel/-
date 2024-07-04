'use client';

import { useRef } from 'react';
import { IoAlertCircleOutline as AlertIcon } from 'react-icons/io5';

import useRepliesController from '@/hooks/useRepliesController';
import useToast from '@/hooks/useToast';

import AskReply from './AskReply';

type AskReplyHandle = {
  getText: () => string[];
};

function ForMe() {
  const askReplyRef = useRef<AskReplyHandle>();
  const { createReplies } = useRepliesController();
  const { isToast, message, openToast } = useToast();

  const handleSubmit = () => {
    if (askReplyRef.current) {
      const [title, reply] = askReplyRef.current.getText();

      if (reply === '') openToast('글을 작성해주세요.');
      if (title === '질문을 선택해주세요!') openToast('질문을 선택해주세요.');
      if (title && reply) createReplies(title, reply);
    }
  };

  const handleSave = () => {
    openToast('저장이 완료 되었습니다.');
  };

  return (
    <main>
      <section>
        <AskReply ref={askReplyRef} />
        <section className="m-10 text-center">
          <button
            className=" bottom-36 mx-20 h-16  w-44 content-center justify-self-center bg-deepBraun text-center text-white shadow-xl"
            type="button"
            onClick={handleSubmit}
          >
            작성하기
          </button>
          <button
            className=" bottom-36 mx-20 h-16  w-44 content-center justify-self-center bg-deepBraun text-center text-white shadow-xl"
            type="button"
            onClick={handleSave}
          >
            공유하기
            {isToast && (
              <div className="absolute bottom-24 flex w-44 items-center justify-evenly rounded-md  border border-solid p-1.5 text-xs">
                <AlertIcon className="text-2xl" />
                {message}
              </div>
            )}
          </button>
        </section>
      </section>
    </main>
  );
}

export default ForMe;
