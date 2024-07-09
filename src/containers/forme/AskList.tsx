'use client';

import { useState, useEffect } from 'react';

import { Database } from '@/types/supabase';

type AskDto = Database['public']['Tables']['question']['Row'];

function AskList({ onClick }: { onClick: (ask: string) => void }) {
  const [data, setData] = useState<AskDto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/api/questionnaire');
      const result = await response.json();
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <section className="m-10 grid h-[28rem] w-[30rem] overflow-auto bg-white">
      <h1 className="h-[5.5rem] content-center bg-deepBraun text-center">나를 알아가보세요.</h1>
      <div className="overflow-auto p-2">
        {data.map((item) => {
          return (
            <button
              className="mb-5 w-full p-5 shadow-md"
              type="button"
              key={item.id}
              onClick={() => onClick(item.question)}
            >
              {item.question}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default AskList;

// 오늘 배운점
// SSR에서 routeHandler를 사용할때는 데이터를 패칭해오는 과정이 필요하다.
// serverAction이 굳이 필요한가? -> get안됌
// 에러에 대한 로딩도 공부해야할듯
// useClinet 로 설정했으니까 상호작용하는 onClick넣어도될듯
