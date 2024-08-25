'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';

import Button from '@/components/Button';
import { Database } from '@/types/supabase';

import lottieCookieJson from '../../../../public/Lottie/cookie.json';

type FortuneCookieDto = Database['public']['Tables']['fortune_cookie']['Row'];

interface Props {
  data: FortuneCookieDto[];
}

const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});

function FortuneCookie({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isText, setText] = useState(false);

  const onClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      setText(true);
    }, 2000);
  };

  return (
    <>
      <section className="h-1/5">행운의 포춘쿠키를 눌러 보세요! 😀</section>
      <Button className="flex w-full justify-center" variant="save" onClick={() => onClick()}>
        <Lottie
          className={`h-auto w-auto ${!isOpen ? 'animate-bounce' : ''}`}
          animationData={lottieCookieJson}
          play={isOpen}
          loop={false}
        />
      </Button>
      {isText && <div>{data[0].text}</div>}
    </>
  );
}

export default FortuneCookie;
