import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';

// RouteHandler, ServerAction 기본설정 rsc 있을 시 쿠키제어 x
const creatServer = async (rsc = false) => {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (key: string) => cookieStore.get(key)?.value,
        set: (key: string, value: string, options: CookieOptions) => {
          if (rsc) return;
          cookieStore.set(key, value, options);
        },
        remove: (key: string, options: CookieOptions) => {
          if (rsc) return;
          cookieStore.set(key, options);
        },
      },
    },
  );
};

export default creatServer;
