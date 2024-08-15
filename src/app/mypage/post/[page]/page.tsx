import MyPost from '@/containers/mypage/post';
import { Database } from '@/types/supabase';
import { getUserId } from '@/utils/loginState';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];

interface Props {
  data: BoardDto[];
  totalCount: number;
  limit: number;
}

const fetchData = async (page: number) => {
  const curPage = Number(page);
  const userId = await getUserId();

  const headers: HeadersInit = {
    user_id: userId as string,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/mypageBoardPost?page=${curPage}`,
    {
      next: { tags: ['board'] },
      headers,
    },
  );

  return response.json();
};

async function MyPostPage({ params }: { params: { page: number } }) {
  const { data, totalCount, limit }: Props = await fetchData(params.page);

  return <MyPost data={data} totalCount={totalCount} limit={limit} page={params.page} />;
}

export default MyPostPage;
