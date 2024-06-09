import ListData from './dummy';

const Board = () => {
  const titles = ['번호', '제목', '글쓴이', '작성일'];
  return (
    <main className="h-[80%]">
      <h1 className="text-center text-4xl text-white">우리들의 이야기</h1>
      <section className="m-10 h-4/5 bg-white">
        <div className="flex h-[10%] border-b-[1px] text-center *:mt-3 *:w-[25%]">
          {titles.map((title, idx) => {
            return <div key={idx}>{title}</div>;
          })}
        </div>
        {ListData.map((data, idx) => {
          return (
            <div key={idx} className="flex text-center *:my-1.5 *:w-[25%]">
              <div>{data.id}</div>
              <div>{data.title}</div>
              <div>{data.order}</div>
              <div>{data.time}</div>
            </div>
          );
        })}
      </section>
      <footer>
        <div className="text-center">페이지네이션</div>
      </footer>
    </main>
  );
};

export default Board;
