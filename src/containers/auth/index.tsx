'use client';

import { CgSpinner as Spinner } from 'react-icons/cg';
import { MdOutlineClear as Clear } from 'react-icons/md';

import ActiveLink from '@/components/ActiveLink';
import Button from '@/components/Button';
import createClient from '@/lib/supabase/client';
import { useSearchParams } from 'next/navigation';

function Auth() {
  const supabase = createClient();
  const isLogin = useSearchParams().get('login');

  const kakaoLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    });
  };

  const login = async () => {
    const { data } = await supabase.auth.signInWithPassword({
      email: 'dbdudals100@gmail.com',
      password: 'aaaaaa',
    });

    localStorage.setItem('userId', `${data.user?.id}`);

    window.location.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`);

    return data;
  };

  const logout = async () => {
    localStorage.removeItem('userId');
    window.location.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`);
  };

  if (isLogin === 'true') {
    logout();
  }

  return isLogin === 'false' ? (
    <div className="fixed left-0 top-0 z-50 grid h-full w-full items-center justify-items-center bg-gray/50">
      <div className="flex h-96 w-96 flex-col rounded-lg bg-white *:p-2">
        <ActiveLink path="/" className="self-end text-2xl text-gray">
          <Clear />
        </ActiveLink>
        <div className="animate-pulse text-center text-xl text-deepBraun">나를 찾아가는 여정</div>
        <div className="h-3/6 text-center text-xl">아름다움에 오신걸 환영합니다.</div>
        <section className="flex h-full flex-col items-center *:mb-10">
          <Button
            className="block h-[30%] w-[80%] content-center rounded-xl bg-deepBraun text-center text-white shadow-xl"
            onClick={() => kakaoLogin()}
          >
            카카오 로그인
          </Button>
          <Button
            className="block h-[30%] w-[80%] content-center rounded-xl bg-deepBraun text-center text-white shadow-xl"
            onClick={() => login()}
          >
            체험용 로그인
          </Button>
        </section>
      </div>
    </div>
  ) : (
    <div className="fixed left-0 top-0 grid h-full w-full items-center justify-items-center">
      <div className="h-[5%] w-[5%] animate-spin">
        <Spinner className="h-full w-full" />
      </div>
    </div>
  );
}

export default Auth;
