import ForMe from '@/containers/forme';
import { Database } from '@/types/supabase';

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

  return <ForMe data={data} />;
}

export default ForMePage;
