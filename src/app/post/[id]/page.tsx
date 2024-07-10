import Post from '@/containers/post';
import { Database } from '@/types/supabase';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];
type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

interface Props extends BoardDto {
  user_comment_rls: CommentDto[];
}

const fetchData = async (id: number) => {
  const curId = Number(id);
  const response = await fetch(`http://localhost:3000/api/post?id=${curId}`, { cache: 'no-store' });

  return response.json();
};

async function PostPage({ params }: { params: { id: number } }) {
  const data: Props = await fetchData(params.id);

  return <Post data={data} />;
}

export default PostPage;
