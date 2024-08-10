import { Metadata } from 'next';

import ForMe from '@/containers/forme';
import { Database } from '@/types/supabase';
import { loginState } from '@/utils/loginState';

export const metadata: Metadata = {
  title: 'forMe',
  description: '질문에 답하여 나에 대해 알아보고 공유하고 저장해봐요. 😀',
};

type AskDto = Database['public']['Tables']['question']['Row'];

interface Props {
  data: AskDto[];
}

const fetchData = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/questionnaire`);

  return response.json();
};

async function ForMePage() {
  const { data }: Props = await fetchData();
  const isLogin = loginState();

  return <ForMe data={data} isLogin={isLogin} />;
}

export default ForMePage;
