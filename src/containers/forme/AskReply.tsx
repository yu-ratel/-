'use client';

import { useState } from 'react';
import AskList from './AskList';
import { formatToday } from '@/utils/formatDate';

const AskReply = () => {
  const today = formatToday();
  const [text, setText] = useState('질문을 선택해주세요!');

  const askClick = (ask: string): void => {
    setText(ask);
  };

  return (
    <>
      <section className=" m-10 h-[28rem] w-[55rem] bg-white">
        <header className="h-1/5 bg-deepBraun">
          <div className="flex h-full items-center justify-evenly">
            <h3>{text}</h3>
            <div className=" text-gray">{today}</div>
          </div>
        </header>
        <form className="h-4/5">
          <textarea className="h-full w-full " placeholder="Some text" />
        </form>
      </section>
      <AskList onClick={askClick} />
    </>
  );
};

export default AskReply;
