import { NextResponse } from 'next/server';

import creatServer from '@/lib/supabase/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  // 쿼리스트링(기본값 1) 받아오면서 -1 (0부터 인덱스 시작)
  const page = parseInt(searchParams.get('page') || '1', 10) - 1;
  const supabase = await creatServer();

  const limit = 6;
  // ex) page = 1 limit = 2 =>  0 - 1  page = 2 limit = 2 => 2 - 3
  const [startNum, endNum] = [page * limit, (page + 1) * limit - 1];

  const totalCount = await supabase
    .from('user_post_rls')
    .select('*', { count: 'exact', head: true });

  const data = await supabase
    .from('user_post_rls')
    .select('*')
    .order('created_at', { ascending: false })
    .range(startNum, endNum);

  return NextResponse.json({ totalCount: totalCount.count, ...data, limit });
};
