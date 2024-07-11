import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

import Comment from './Comment';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];
type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

interface Props extends BoardDto {
  user_comment_rls: CommentDto[];
}

function Post({ data }: { data: Props }) {
  return (
    <main className="h-[80%]">
      <h1 className="text-center text-4xl text-white">우리들의 이야기</h1>
      <section className="flex h-full">
        <section className="ml-10 mt-10 h-4/5 w-3/5 bg-white *:m-5">
          <h2 className="text-2xl">{data.question}</h2>
          <p className="h-[70%]">{data.replie}</p>
          <div className="text-center text-[gray]">
            {data.nickname}님의 이야기 {formatStrDate(data.updated_at)}
          </div>
        </section>
        <Comment data={data.user_comment_rls} />
      </section>
    </main>
  );
}

export default Post;
