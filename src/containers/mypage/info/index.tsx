import { Database } from '@/types/supabase';

import FortuneCookie from './FortuneCookie';
import NickName from './NickName';

type FortuneCookieDto = Database['public']['Tables']['fortune_cookie']['Row'];

interface Props {
  data: FortuneCookieDto[];
}

const fetchData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fortuneCookie`, {
    cache: 'no-cache',
  });

  return response.json();
};

async function Info() {
  const { data }: Props = await fetchData();

  return (
    <div className="h-full rounded-xl bg-white p-10 *:text-center">
      <section className="flex h-1/5 items-center justify-center text-xl">
        <NickName />
      </section>
      <FortuneCookie data={data} />
    </div>
  );
}

export default Info;
