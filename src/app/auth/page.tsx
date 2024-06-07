'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect } from 'react';

const page = () => {
  //추후 타 플랫폼 추가를 위해 일단은 kakao default
  const kakaoLogin = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });
  };

  useEffect(() => {
    kakaoLogin();
  }, []);

  return <div>로그인중입니다.</div>;
};

export default page;
