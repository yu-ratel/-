import { NextResponse } from 'next/server';

import creatServer from '@/lib/supabase/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10) - 1;
  const supabase = await creatServer();
  const userId = request.headers.get('user_id') as string;

  const limit = 6;
  const [startNum, endNum] = [page * limit, (page + 1) * limit - 1];

  const totalCount = await supabase
    .from('user_post_rls')
    .select('*', { count: 'exact', head: true })
    .eq('user_id', userId);

  const data = await supabase
    .from('user_post_rls')
    .select('*')
    .order('updated_at', { ascending: false })
    .range(startNum, endNum)
    .eq('user_id', userId);

  return NextResponse.json({ totalCount: totalCount.count, ...data, limit });
};
