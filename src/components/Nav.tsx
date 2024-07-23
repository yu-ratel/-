import Link from 'next/link';

import loginState from '@/utils/loginState';

function Nav() {
  const isUser = loginState();
  const loginText = isUser ? '로그아웃' : '로그인';

  return (
    <nav className="flex h-[10%] justify-between">
      <Link href="/" className="m-6">
        아름다움
      </Link>
      <div className="m-6">
        <Link href="/board/1" className="m-6">
          게시판
        </Link>
        {isUser && (
          <Link href="/mypage/my-info" className="m-6">
            마이페이지
          </Link>
        )}
        <Link href={`/auth?${isUser}`} className="m-6">
          {loginText}
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
