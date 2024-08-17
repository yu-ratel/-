import { Suspense } from 'react';

import Loading from './Loading';
import Posts from './Posts';

function Board({ page }: { page: number }) {
  const titles = ['번호', '제목', '글쓴이', '작성일'];

  return (
    <main className="h-[80%]">
      <h1 className="text-center text-4xl text-white">우리들의 이야기</h1>
      <section className="m-10 h-4/5 bg-white">
        <ol className="flex h-[10%] border-b-[1px] bg-deepBraun text-center text-white *:mt-3 *:w-[25%]">
          {titles.map((title) => {
            return <li key={title}>{title}</li>;
          })}
        </ol>
        <Suspense fallback={<Loading />}>
          <Posts page={page} />
        </Suspense>
      </section>
    </main>
  );
}

export default Board;
