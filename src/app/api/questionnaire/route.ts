import { creatServer } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const supabase = await creatServer();

  const result = await supabase.from('questionnaires').select('*');

  return NextResponse.json({ ...result });
};
