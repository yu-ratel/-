import { headers } from 'next/headers';
import LinkButton from './LinkButton';

const Nav = () => {
  const isUser = headers().get('isUser') === 'true' ? true : false;
  const loginText = isUser ? '로그아웃' : '로그인';

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
