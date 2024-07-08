import Post from '@/containers/post';
import { Database } from '@/types/supabase';

type BoardDto = Database['public']['Tables']['user_replies_ris']['Row'];

const fetchData = async (id: number) => {
  const curId = Number(id);
  const response = await fetch(`http://localhost:3000/api/post?id=${curId}`);

  return response.json();
};

async function PostPage({ params }: { params: { id: number } }) {
  const data: BoardDto = await fetchData(params.id);

  return <Post data={data} />;
}

export default PostPage;
