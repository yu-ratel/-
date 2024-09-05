import { Database } from '@/types/supabase';
import { getUserId } from '@/utils/loginState';

import FortuneCookie from './FortuneCookie';
import Nickname from './Nickname';

type ProfileDto = {
  data: Database['public']['Tables']['profiles']['Row'];
};

type FortuneCookieDto = {
  data: Database['public']['Tables']['fortune_cookie']['Row'];
};

const fetchFortuneCookie = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fortuneCookie`, {
    cache: 'no-cache',
  });

  return response.json();
};

const fetchNickname = async () => {
  const userId = await getUserId();
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile?id=${userId}`, {
    next: { tags: ['info'] },
  });

  return response.json();
};

async function Info() {
  const { data: nickname }: ProfileDto = await fetchNickname();
  const { data: fortuneCookie }: FortuneCookieDto = await fetchFortuneCookie();

  return (
    <div className="h-full rounded-xl bg-white p-10 *:text-center">
      <section className="flex h-1/5 items-center justify-center text-xl">
        <Nickname name={nickname.name} />
      </section>
      <FortuneCookie text={fortuneCookie.text} />
    </div>
  );
}

export default Info;
