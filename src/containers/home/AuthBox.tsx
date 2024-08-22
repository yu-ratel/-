import { MdOutlineClear as Clear } from 'react-icons/md';

import ActiveLink from '@/components/ActiveLink';
import Button from '@/components/Button';

function AuthBox() {
  return (
    <div className="fixed left-0 top-0 z-50 grid h-full w-full items-center justify-items-center bg-gray/50">
      <div className="flex h-96 w-96 flex-col rounded-lg bg-white *:p-2">
        <Button variant="update">
          <Clear className="self-end text-lg" />
        </Button>
        <div className="animate-pulse text-center text-xl text-deepBraun">나를 찾아가는 여정</div>
        <div className="h-3/6 text-center text-xl">아름다움에 오신걸 환영합니다.</div>
        <section className="flex h-full flex-col items-center *:mb-10">
          <ActiveLink
            path=""
            className="block h-[30%] w-[80%] content-center rounded-xl bg-deepBraun text-center text-white shadow-xl"
          >
            카카오 로그인
          </ActiveLink>
          <ActiveLink
            path=""
            className="block h-[30%] w-[80%] content-center rounded-xl bg-deepBraun text-center text-white shadow-xl"
          >
            체험용 로그인
          </ActiveLink>
        </section>
      </div>
    </div>
  );
}

export default AuthBox;
