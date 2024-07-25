import ActiveLink from '@/components/ActiveLink';

function MyPageNav() {
  return (
    <section className="flex h-1/6 w-full justify-center *:mx-10">
      <ActiveLink path="/mypage/info">나의 정보</ActiveLink>
      <ActiveLink path="/mypage/post/1">게시글</ActiveLink>
      <ActiveLink path="/mypage/comment">댓글</ActiveLink>
    </section>
  );
}

export default MyPageNav;
