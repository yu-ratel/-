import { cookies } from 'next/headers';

import creatServer from '@/lib/supabase/server';

export const loginState = () => {
  const getCookie = cookies().get('isUser');

  return getCookie?.name === 'isUser' ? true : false;
};

export const getUserId = async () => {
  const supabase = await creatServer(true);
  const result = await supabase.auth.getUser();

  return result.data.user?.id;
};

export const logoutWithCookiesDelete = async () => {
  const supabase = await creatServer(true);

  supabase.auth.signOut({});
};
