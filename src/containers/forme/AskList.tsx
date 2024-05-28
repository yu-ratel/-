import React from 'react';

const datas = [
  {
    id: 1,
    ask: '1년 후 내 모습은 어떨 것 같나요?',
  },
  {
    id: 2,
    ask: '3년 후 내 모습은 어떨 것 같나요?',
  },
  {
    id: 3,
    ask: '10년 후 내 모습은 어떨 것 같나요?',
  },
  {
    id: 4,
    ask: '나의 장점은 무엇인가요?',
  },
  {
    id: 5,
    ask: '최근 세운 나의 목표가 있나요?',
  },
];

const AskList = ({ onClick }: { onClick: (ask: string) => void }) => {
  return (
    <section className="m-10 grid h-[28rem] w-[30rem] bg-white">
      <h1 className="h-20 content-center bg-deepBraun text-center">나를 알아가보세요.</h1>
      {datas.map((data) => {
        return (
          <button type="button" key={data.id} onClick={() => onClick(data.ask)}>
            {data.ask}
          </button>
        );
      })}
    </section>
  );
};

export default AskList;
