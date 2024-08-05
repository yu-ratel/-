import { useRouter } from 'next/navigation';

import Button from './Button';

interface Props {
  variant?: 'login' | 'delete';
  onClose: () => void;
  onClick?: () => void;
}

function AlertBox({ variant = 'login', onClose, onClick }: Props) {
  const router = useRouter();

  const ALERT = {
    login: {
      title: '로그인이 필요해요.',
      text: '나의 이야기를 공유하고 간직해봐요.',
      access: '로그인',
      link: '/auth',
    },
    delete: {
      title: '삭제 하시겠습니까?',
      text: '확인을 누르시면 삭제됩니다.',
      access: '확인',
      link: '',
    },
  };

  const onRedirect = () => {
    router.push(ALERT[variant].link);
  };

  return (
    <div className="fixed left-0 top-0 z-50 grid h-full w-full items-center justify-items-center bg-gray/50">
      <div className="flex h-48 w-96 flex-col rounded-lg bg-white *:p-5">
        <h3 className="h-1/4 w-full text-left text-xl font-bold text-black">
          {ALERT[variant].title}
        </h3>
        <p className="h-1/4 text-left text-[gray]">{ALERT[variant].text}</p>
        <div className="flex h-2/4 justify-between">
          <Button
            className="mb-4 w-[45%] rounded bg-braun text-sm text-white shadow-lg"
            onClick={onClick || onRedirect}
          >
            {ALERT[variant].access}
          </Button>
          <Button
            className="mb-4 w-[45%] rounded border border-gray text-sm text-black"
            onClick={onClose}
          >
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AlertBox;
