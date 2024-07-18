'use client';

import { forwardRef, useImperativeHandle, useState } from 'react';

import { formatToday } from '@/utils/formatDate';

import AskList from './AskList';

const AskReply = forwardRef((_, ref) => {
  const today = formatToday();
  const [title, setTitle] = useState('질문을 선택해주세요!');
  const [text, setText] = useState('');

  const askClick = (ask: string) => {
    setTitle(ask);
  };

  useImperativeHandle(ref, () => ({
    getText: () => [title, text],
    clearText: () => setText(''),
  }));

  return (
    <section className="flex">
      <section className=" m-10 h-[28rem] w-[55rem] bg-white">
        <header className="h-1/5 bg-deepBraun">
          <div className="flex h-full items-center justify-evenly">
            <h3 className="text-white">{title}</h3>
            <div className=" text-gray">{today}</div>
          </div>
        </header>
        <form className="h-4/5">
          <textarea
            className="h-full w-full resize-none focus:outline-none"
            placeholder="Some text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </section>
      <AskList onClick={askClick} />
    </section>
  );
});

AskReply.displayName = 'AskReply';

export default AskReply;
