import { Metadata } from 'next';

import MyPageNav from '@/containers/mypage/MyPageNav';

export const metadata: Metadata = {
  title: 'myPage',
  description: '나의 정보, 게시글, 댓글을 살펴보세요. 😀',
};

function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-[80%] px-10">
      <MyPageNav />
      <section className="h-4/5 rounded-xl bg-white">{children}</section>
    </main>
  );
}

export default MyPageLayout;
