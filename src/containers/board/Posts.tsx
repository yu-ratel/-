import ActiveLink from '@/components/ActiveLink';
import Pagination from '@/components/Pagination';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];

interface Props {
  data: BoardDto[];
  totalCount: number;
  limit: number;
  page: number;
}

const fetchData = async (page: number) => {
  const curPage = Number(page);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/boardPost?page=${curPage}`,
    {
      next: { tags: ['board'] },
    },
  );

  return response.json();
};

async function Posts({ page }: { page: number }) {
  const { data, totalCount, limit }: Props = await fetchData(page);
  const startPostNumber = (page - 1) * limit + 1;

  return (
    <>
      <section className="h-full">
        {data.map((item, index) => {
          return (
            <ActiveLink path={`/post/${item.id}`} key={item.id} active={false}>
              <ol className="mb-3 flex h-[12%] items-center text-center *:my-1.5 *:w-[25%]">
                <li>{startPostNumber + index}</li>
                <li className="truncate">{item.question}</li>
                <li>{item.nickname}</li>
                <li>{formatStrDate(item.updated_at)}</li>
              </ol>
            </ActiveLink>
          );
        })}
      </section>
      <section>
        <Pagination totalCount={totalCount} limit={limit} />
      </section>
    </>
  );
}

export default Posts;
