import { NextResponse } from 'next/server';
import creatServer from '@/lib/supabase/server';

const GET = async () => {
  const supabase = await creatServer();

  const result = await supabase.from('questionnaires').select('*');

  return NextResponse.json({ ...result });
};

export default GET;
