import LinkButton from './LinkButton';

const Nav = () => {
  return (
    <nav className="flex justify-between">
      <LinkButton href="/" className="m-6">
        아름다움
      </LinkButton>
      <LinkButton href="/login" className="m-6">
        로그인
      </LinkButton>
    </nav>
  );
};

export default Nav;
