import { Metadata } from 'next';

import MyPage from '@/containers/mypage';

export const metadata: Metadata = {
  title: 'myPage',
  description: '나의 정보, 게시글, 댓글을 살펴보세요. 😀',
};

function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MyPage>{children}</MyPage>;
}

export default MyPageLayout;
