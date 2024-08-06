import { headers } from 'next/headers';

import creatServer from '@/lib/supabase/server';

export const loginState = () => {
  return headers().get('isUser') === 'true';
};

export const getUserId = async () => {
  const supabase = await creatServer(true);
  const result = await supabase.auth.getUser();

  return result.data.user?.id;
};
