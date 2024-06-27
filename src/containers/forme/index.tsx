'use client';

import useRepliesController from '@/hooks/useRepliesController';
import { useRef } from 'react';
import AskReply from './AskReply';

type AskReplyHandle = {
  getText: () => string[];
};

const ForMe = () => {
  const askReplyRef = useRef<AskReplyHandle>();
  const { createReplies } = useRepliesController();

  const handleSubmit = () => {
    if (askReplyRef.current) {
      const [title, reply] = askReplyRef.current.getText();
      createReplies(title, reply);
    }
  };

  return (
    <>
      <main className="flex">
        <AskReply ref={askReplyRef} />
      </main>
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
        >
          공유하기
        </button>
      </section>
    </>
  );
};

export default ForMe;
