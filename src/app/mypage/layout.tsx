import MyPageNav from '@/containers/mypage/MyPageNav';

function MyPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-[80%] px-10">
      <MyPageNav />
      <section className="h-5/6 rounded-xl bg-white">{children}</section>
    </main>
  );
}

export default MyPageLayout;
