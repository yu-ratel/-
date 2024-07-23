import Link from 'next/link';

function MyPageNav() {
  return (
    <section className="flex h-1/6 w-full justify-center *:mx-10">
      <Link href="/mypage/my-info" className="active: text-white">
        나의 정보
      </Link>
      <Link href="/mypage/post" className="target: text-white">
        게시글
      </Link>
      <Link href="/mypage/comment" className="target: text-white">
        댓글
      </Link>
    </section>
  );
}

export default MyPageNav;
