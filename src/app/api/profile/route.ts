import { NextResponse } from 'next/server';

import creatServer from '@/lib/supabase/server';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const supabase = await creatServer();

  const data = await supabase
    .from('profiles')
    .select('name')
    .eq('id', id as string)
    .single();

  return NextResponse.json({ ...data });
};
