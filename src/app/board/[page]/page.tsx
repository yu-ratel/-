import { Database } from '@/types/supabase';

import Board from '@/containers/board';

type BoardDto = Database['public']['Tables']['user_replies_ris']['Row'];

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

export default async function BoardPage({ params }: { params: { page: number } }) {
  const { data, totalCount, limit }: Props = await fetchData(params.page);

  return <Board data={data} totalCount={totalCount} limit={limit} />;
}
