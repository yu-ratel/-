import { NextResponse } from 'next/server';

import creatServer from '@/lib/supabase/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get('id') || '1', 10);
  const supabase = await creatServer();

  const { data } = await supabase
    .from('user_post_rls')
    .select('*, user_comment_rls (*)')
    .order('updated_at', { referencedTable: 'user_comment_rls', ascending: false })
    .is('deleted_at', null)
    .eq('id', id)
    .single();

  return NextResponse.json(data);
};
