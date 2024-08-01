import Post from '@/containers/post';
import { Database } from '@/types/supabase';
import { loginState, getUserId } from '@/utils/loginState';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];
type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

interface Props extends BoardDto {
  user_comment_rls: CommentDto[];
}

const fetchData = async (id: number) => {
  const curId = Number(id);
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post?id=${curId}`, {
    next: { tags: ['post'] },
  });

  return response.json();
};

async function PostPage({ params }: { params: { id: number } }) {
  const data: Props = await fetchData(params.id);
  const isLogin = loginState();
  const userId = await getUserId();

  return <Post data={data} isLogin={isLogin} userId={userId} />;
}

export default PostPage;
