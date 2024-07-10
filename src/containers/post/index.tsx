import { Database } from '@/types/supabase';

import Comment from './Comment';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];
type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

interface Props extends BoardDto {
  user_comment_rls: CommentDto[];
}

function Post({ data }: { data: Props }) {
  console.log(data.user_comment_rls);
  return (
    <main className="h-[80%]">
      <h1 className="text-center text-4xl text-white">우리들의 이야기</h1>
      <section className="flex h-full">
        <section className="ml-10 mt-10 h-4/5 w-3/5 bg-white *:m-5">
          <div>{data.question}</div>
          <div>
            {data.nickname} {data.updated_at}
          </div>
          <div>{data.replie}</div>
        </section>
        <Comment data={data.user_comment_rls} />
      </section>
    </main>
  );
}

export default Post;
