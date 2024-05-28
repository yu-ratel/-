'use client';

import FormatToday from '@/components/FormatToday';
import { useState } from 'react';
import AskList from './AskList';

const AskReply = () => {
  const today = FormatToday();
  const [text, setText] = useState('질문을 선택해주세요!');

  const askClick = (ask: string): void => {
    setText(ask);
  };

  return (
    <>
      <section className=" m-10 h-[28rem] w-[55rem] bg-white">
        <header className="h-24 bg-deepBraun">
          <div className="flex h-full items-center justify-evenly">
            <h3>{text}</h3>
            <div className=" text-gray">{today}</div>
          </div>
        </header>
        <form>
          <input type="text" placeholder="Some text" />
        </form>
      </section>
      <AskList onClick={askClick} />
    </>
  );
};

export default AskReply;
