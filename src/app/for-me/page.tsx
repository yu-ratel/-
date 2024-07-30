import ForMe from '@/containers/forme';
import { Database } from '@/types/supabase';
import loginState from '@/utils/loginState';

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
