import { NextResponse } from 'next/server';

import creatServer from '@/lib/supabase/server';

export const GET = async () => {
  const supabase = await creatServer();

  function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  // 현재 쿠키 개수 min, max 설정
  const result = await supabase
    .from('fortune_cookie')
    .select('*')
    .eq('id', getRandomNumber(2, 79))
    .single();

  return NextResponse.json({ ...result });
};
