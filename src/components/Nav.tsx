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
    <nav className="flex h-[10%] justify-between">
      <LinkButton href="/" className="m-6">
        아름다움
      </LinkButton>
      <div className="m-6">
        <LinkButton href="/board/1" className="m-6">
          게시판
        </LinkButton>
        <LinkButton href={`/auth?${isUser}`} className="m-6">
          {loginText}
        </LinkButton>
      </div>
    </nav>
  );
};

export default Nav;
