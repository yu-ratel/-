import Board from '@/containers/board';
import { Database } from '@/types/supabase';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];

interface Props {
  data: BoardDto[];
  totalCount: number;
  limit: number;
}

const fetchData = async (page: number) => {
  const curPage = Number(page);
  // cache: 'no-store',
  const response = await fetch(`http://localhost:3000/api/boardPost?page=${curPage}`, {
    cache: 'no-store',
  });

  return response.json();
};

async function BoardPage({ params }: { params: { page: number } }) {
  const { data, totalCount, limit }: Props = await fetchData(params.page);

  return <Board data={data} totalCount={totalCount} limit={limit} page={params.page} />;
}

export default BoardPage;
