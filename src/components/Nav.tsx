import { headers } from 'next/headers';
import Link from 'next/link';

function Nav() {
  const isUser = headers().get('isUser') === 'true';
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
        <Link href={`/auth?${isUser}`} className="m-6">
          {loginText}
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
