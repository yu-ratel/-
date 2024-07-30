import Pagination from '@/components/Pagination';

interface Props {
  totalCount: number;
  limit: number;
  children: React.ReactNode;
  isPost: boolean;
}

function MyPageBoard({ totalCount, limit, children, isPost }: Props) {
  const variant = {
    post: ['번호', '제목', '내용', '작성일'],
    comment: ['번호', '제목', '댓글', '작성일'],
  };

  const titles = isPost ? variant.post : variant.comment;

  return (
    <>
      <section className="h-4/5">
        <div>
          <ol className="flex rounded-t-xl bg-deepBraun text-center text-white *:my-3 *:w-[24%]">
            {titles.map((title) => {
              return <li key={title}>{title}</li>;
            })}
            <div className="!w-[4%]" />
          </ol>
        </div>
        {children}
      </section>
      <section>
        <Pagination totalCount={totalCount} limit={limit} />
      </section>
    </>
  );
}

export default MyPageBoard;
