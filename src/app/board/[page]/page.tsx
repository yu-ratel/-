import { Metadata } from 'next';

import Board from '@/containers/board';
import { Database } from '@/types/supabase';

export const metadata: Metadata = {
  title: '우리들의 이야기',
  description: '우리들의 이야기를 구경해봐요. 😀',
};

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];

interface Props {
  data: BoardDto[];
  totalCount: number;
  limit: number;
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

async function BoardPage({ params }: { params: { page: number } }) {
  const { data, totalCount, limit }: Props = await fetchData(params.page);
  return <Board data={data} totalCount={totalCount} limit={limit} page={params.page} />;
}

export default BoardPage;
