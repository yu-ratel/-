import MyComment from '@/containers/mypage/comment';
import { Database } from '@/types/supabase';

type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'] & {
  user_post_rls: {
    question: string;
  };
};

interface Props {
  data: CommentDto[];
  totalCount: number;
  limit: number;
}

const fetchData = async (page: number) => {
  const curPage = Number(page);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/mypageComment?page=${curPage}`,
    {
      next: { tags: ['post'] },
    },
  );

  return response.json();
};

async function MyCommentPage({ params }: { params: { page: number } }) {
  const { data, totalCount, limit }: Props = await fetchData(params.page);

  return <MyComment data={data} totalCount={totalCount} limit={limit} page={params.page} />;
}

export default MyCommentPage;
