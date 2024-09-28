'use client';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button';

function NotFoundPage() {
  const router = useRouter();

  const onClickHome = () => {
    router.push('/');
  };

  return (
    <section className="h-full w-full text-center *:m-5">
      <div className="text-9xl text-white">404</div>
      <div className="text-xl">요청하신 페이지를 찾을 수 없습니다 😅</div>
      <Button variant="primary" onClick={onClickHome}>
        홈페이지 가기
      </Button>
    </section>
  );
}

export default NotFoundPage;
