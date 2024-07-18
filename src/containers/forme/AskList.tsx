'use client';

import { useState, useEffect } from 'react';

import { Database } from '@/types/supabase';

type AskDto = Database['public']['Tables']['question']['Row'];

function AskList({ onClick }: { onClick: (ask: string) => void }) {
  const [data, setData] = useState<AskDto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/questionnaire`);
      const result = await response.json();
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <section className="m-10 grid h-[28rem] w-[30rem] overflow-auto bg-white">
      <h1 className="h-[5.5rem] content-center bg-deepBraun text-center text-white">
        나를 알아가보세요.
      </h1>
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
