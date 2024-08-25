import { BsPencil as UpdatePen } from 'react-icons/bs';

import Button from '@/components/Button';
import { Database } from '@/types/supabase';

import FortuneCookie from './FortuneCookie';

type FortuneCookieDto = Database['public']['Tables']['fortune_cookie']['Row'];

interface Props {
  data: FortuneCookieDto[];
}

const fetchData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/fortuneCookie`);

  return response.json();
};

async function Info() {
  const { data }: Props = await fetchData();

  return (
    <div className="h-full rounded-xl bg-white p-10 *:text-center">
      <section className="flex h-1/5 items-center justify-center text-xl">
        <div>
          안녕하세요, <span className="text-2xl text-deepBraun">이이이이이이</span>님
        </div>
        <Button variant="update">
          <UpdatePen />
        </Button>
      </section>
      <FortuneCookie data={data} />
    </div>
  );
}

export default Info;
