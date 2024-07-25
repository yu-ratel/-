'use client';

import { useEffect, useState } from 'react';

import MyPost from '@/containers/mypage/post';
import { Database } from '@/types/supabase';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];

interface Props {
  data: BoardDto[];
  totalCount: number;
  limit: number;
}

const fetchData = async (page: number) => {
  const curPage = Number(page);
  const userId = localStorage.getItem('user_id');
  const headers: HeadersInit = {
    user_id: userId || '',
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/boardPost?page=${curPage}`,
    {
      next: { tags: ['board'] },
      headers,
    },
  );

  return response.json();
};

function MyPostPage({ params }: { params: { page: number } }) {
  const [state, setState] = useState<Props>({
    data: [],
    totalCount: 0,
    limit: 0,
  });

  useEffect(() => {
    const fetch = async () => {
      const result: Props = await fetchData(params.page);
      setState({
        data: result.data,
        totalCount: result.totalCount,
        limit: result.limit,
      });
    };
    fetch();
  }, [params.page]);

  return (
    <MyPost
      data={state.data}
      totalCount={state.totalCount}
      limit={state.limit}
      page={params.page}
    />
  );
}

export default MyPostPage;
