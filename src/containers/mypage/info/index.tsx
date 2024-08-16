'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { BsPencil as UpdatePen } from 'react-icons/bs';

import Button from '@/components/Button';

import lottieCookieJson from '../../../../public/Lottie/cookie.json';

const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

function Info() {
  const [isOpen, setIsOpen] = useState(false);
  const [isText, setText] = useState(false);

  const text = '오늘 하루 기운이 좋은걸요?';

  const onClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      setText(true);
    }, 2000);
  };

  return (
    <div className="h-full rounded-xl bg-white p-10 *:text-center">
      <section className="flex h-1/5 items-center justify-center text-xl">
        <div>
          안녕하세요, <span className="text-2xl text-deepBraun">이이이이이이</span>님
        </div>
        <Button variant="update">
          <UpdatePen />
        </Button>
      </section>
      <section className="h-1/5">행운의 포춘쿠키를 눌러 보세요! 😀</section>
      <Button className="flex w-full justify-center" variant="save" onClick={() => onClick()}>
        <Lottie
          className={`h-auto w-auto ${!isOpen ? 'animate-bounce' : ''}`}
          animationData={lottieCookieJson}
          play={isOpen}
          loop={false}
        />
      </Button>
      {isText && <div>{text}</div>}
    </div>
  );
}

export default Info;
