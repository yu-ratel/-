import { NextResponse } from 'next/server';

import creatServer from '@/lib/supabase/server';

const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  // 쿼리스트링(기본값 1) 받아오면서 -1 (0부터 인덱스 시작)
  const page = parseInt(searchParams.get('page') || '1', 10) - 1;
  const supabase = await creatServer();
  const limit = 2;
  // ex) page = 1 limit = 2 =>  0 - 1  page = 2 limit = 2 => 2 - 3
  const [startNum, endNum] = [page * limit, (page + 1) * limit - 1];

  const totalCount = await supabase
    .from('user_replies_ris')
    .select('*', { count: 'exact', head: true });
  const result = await supabase
    .from('user_replies_ris')
    .select('*')
    .order('id', { ascending: true })
    .range(startNum, endNum);

  return NextResponse.json({ totalCount: totalCount.count, result, limit });
};

export default GET;
