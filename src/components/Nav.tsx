'use client';

import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';
import LinkButton from './LinkButton';

const Nav = () => {
  const [isUser, setIsUser] = useState<boolean>(false);
  const [loginText, setLoginText] = useState<string>('로그인');
  const supabase = createClient();

  const userInfo = async () => {
    const result = await supabase.auth.getUser();

    if (result?.data?.user) {
      setIsUser(true);
      setLoginText('로그아웃');
    }
  };

  useEffect(() => {
    userInfo();
  }, [supabase]);

  return (
    <nav className="flex justify-between">
      <LinkButton href="/" className="m-6">
        아름다움
      </LinkButton>
      <LinkButton href={`/auth?${isUser}`} className="m-6">
        {loginText}
      </LinkButton>
    </nav>
  );
};

export default Nav;
