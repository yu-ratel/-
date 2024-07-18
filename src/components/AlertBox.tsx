import { useRouter } from 'next/navigation';

import Button from './Button';

interface Props {
  variant?: 'home' | 'login';
  onClose: () => void;
}

function AlertBox({ variant = 'login', onClose }: Props) {
  const router = useRouter();

  const ALERT = {
    home: {
      title: '작성하신 정보가 사라져요!',
      text: '홈으로',
      link: '/',
    },
    login: {
      title: '로그인이 필요합니다!',
      text: '로그인',
      link: '/auth',
    },
  };

  const onRedirect = () => {
    router.push(ALERT[variant].link);
  };

  return (
    <div className="fixed left-0 top-0 z-50 grid h-full w-full items-center justify-items-center bg-gray/50">
      <div className="flex h-1/4 w-2/4 flex-col rounded-lg bg-braun">
        <h3 className="h-2/4 w-full p-5 text-center text-xl text-white">{ALERT[variant].title}</h3>
        <div className="flex">
          <Button onClick={onRedirect}>{ALERT[variant].text}</Button>
          <Button onClick={onClose}>닫기</Button>
        </div>
      </div>
    </div>
  );
}

export default AlertBox;
