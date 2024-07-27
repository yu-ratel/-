import { NextResponse } from 'next/server';

import creatServer from '@/lib/supabase/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10) - 1;
  const supabase = await creatServer();

  const limit = 6;
  const [startNum, endNum] = [page * limit, (page + 1) * limit - 1];

  const totalCount = await supabase
    .from('user_comment_rls')
    .select('*', { count: 'exact', head: true });

  const data = await supabase
    .from('user_comment_rls')
    .select('*, user_post_rls (question)')
    .order('id', { ascending: true })
    .range(startNum, endNum);

  return NextResponse.json({ totalCount: totalCount.count, ...data, limit });
};
