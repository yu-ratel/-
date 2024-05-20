import LinkButton from './LinkButton';

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <LinkButton href="/">아름다움</LinkButton>
      <LinkButton href="/login">로그인</LinkButton>
    </nav>
  );
};

export default Nav;
