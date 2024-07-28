import { NextResponse } from 'next/server';

import creatServer from '@/lib/supabase/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  // 쿼리스트링(기본값 1) 받아오면서 -1 (0부터 인덱스 시작)
  const page = parseInt(searchParams.get('page') || '1', 10) - 1;
  const supabase = await creatServer();
  const userId = request.headers.get('user_id');

  const limit = 6;
  // ex) page = 1 limit = 2 =>  0 - 1  page = 2 limit = 2 => 2 - 3
  const [startNum, endNum] = [page * limit, (page + 1) * limit - 1];

  const getTotalCount = () => {
    const data = supabase
      .from('user_post_rls')
      .select('*', { count: 'exact', head: true })
      .is('deleted_at', null);

    if (userId) data.eq('user_id', userId);

    return data;
  };

  const getData = () => {
    const data = supabase
      .from('user_post_rls')
      .select('*')
      .is('deleted_at', null)
      .order('updated_at', { ascending: false })
      .range(startNum, endNum);

    if (userId) data.eq('user_id', userId);

    return data;
  };

  const totalCountData = await getTotalCount();
  const data = await getData();
  const totalCount = totalCountData.count;

  return NextResponse.json({ totalCount, ...data, limit });
};
