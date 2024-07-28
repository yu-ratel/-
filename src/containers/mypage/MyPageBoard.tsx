import Pagination from '@/components/Pagination';

interface Props {
  totalCount: number;
  limit: number;
  children: React.ReactNode;
}

function MyPageBoard({ totalCount, limit, children }: Props) {
  const titles = ['번호', '제목', '댓글', '작성일'];

  return (
    <main>
      <section>
        <ol className="flex rounded-t-xl bg-deepBraun text-center text-white *:my-3 *:w-[25%]">
          {titles.map((title) => {
            return <li key={title}>{title}</li>;
          })}
        </ol>
      </section>
      {children}
      <section>
        <Pagination totalCount={totalCount} limit={limit} />
      </section>
    </main>
  );
}

export default MyPageBoard;
