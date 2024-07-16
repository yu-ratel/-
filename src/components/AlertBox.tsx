import Button from './Button';

interface Props {
  variant?: 'home' | 'login';
  onClose: () => void;
}

function AlertBox({ variant = 'login', onClose }: Props) {
  const ALERT = {
    home: {
      text: '작성하신 정보가 사라져요!',
      link: '홈으로',
    },
    login: {
      text: '로그인이 필요합니다!',
      link: '로그인',
    },
  };

  return (
    <div className="fixed left-0 top-0 z-50 grid h-full w-full items-center  justify-items-center bg-gray/50">
      <div className="flex h-1/4 w-2/4 flex-col rounded-lg bg-braun">
        <p className="h-2/4 w-full p-5 text-center text-xl text-white">{ALERT[variant].text}</p>
        <div className="flex">
          <Button>{ALERT[variant].link}</Button>
          <Button onClick={onClose}>닫기</Button>
        </div>
      </div>
    </div>
  );
}

export default AlertBox;
