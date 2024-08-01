'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

import Comment from './Comment';
import PostBox from './PostBox';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];
type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

interface Data extends BoardDto {
  user_comment_rls: CommentDto[];
}

interface Props {
  data: Data;
  isLogin: boolean;
  userId: string | undefined;
}

function Post({ data, isLogin, userId }: Props) {
  const [isUpdate, setUpdate] = useState(false);

  const onUpdate = () => {
    setUpdate(true);
  };

  const onClose = () => {
    setUpdate(false);
  };

  return (
    <main className="h-[80%]">
      <h1 className="text-center text-2xl text-white">
        {data.nickname}님의 이야기
        <div className="text-base text-gray">{formatStrDate(data.updated_at)}</div>
      </h1>
      <section className="flex h-full">
        <section className="ml-10 mt-10 h-4/5 w-3/5 bg-white *:m-5">
          <h2 className="flex justify-between text-2xl">{data.question}</h2>
          <p className="h-[70%]">{data.replie}</p>
          <div className="text-center">
            {userId === data.user_id && (
              <Button variant="update" className="text-lg text-[gray]" onClick={onUpdate}>
                수정하기
              </Button>
            )}
          </div>
          {isUpdate && (
            <PostBox postId={data.id} comment={data.replie} closeCommentWindow={onClose} />
          )}
        </section>
        <Comment data={data.user_comment_rls} postId={data.id} isLogin={isLogin} userId={userId} />
      </section>
    </main>
  );
}

export default Post;
