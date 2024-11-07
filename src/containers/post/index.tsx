'use client';

import { useState } from 'react';

import Button from '@/components/Button';
import useToast from '@/hooks/useToast';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

import SaveFile from '../forme/SaveFile';

import Comment from './Comment';
import PostBox from './PostBox';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];
type CommentDto = Database['public']['Tables']['user_comment_rls']['Row'];

interface Data extends BoardDto {
  user_comment_rls: CommentDto[];
}

interface Props {
  data: Data;
}

function Post({ data }: Props) {
  const [isUpdate, setUpdate] = useState(false);
  const [isSave, setSave] = useState(false);
  const { openToast } = useToast();
  const userId = localStorage.getItem('userId');

  const onUpdate = () => {
    setUpdate(true);
  };

  const handleSave = () => {
    return isSave ? openToast('저장이 완료 되었습니다.') : setSave(true);
  };

  const onUpdateClose = () => {
    setUpdate(false);
  };

  const onSaveclose = () => {
    setSave(false);
  };

  return (
    <main className="h-[80%]">
      <h1 className="max-md:text- text-center text-2xl text-white">
        {data.nickname}님의 이야기
        <div className="text-base text-gray">{formatStrDate(data.updated_at)}</div>
      </h1>
      <section className="flex h-full max-md:flex-col max-md:items-center max-md:*:m-3 max-md:*:w-[90%] max-md:*:rounded-lg">
        <section className="ml-10 mt-10 h-4/5 w-3/5 bg-white *:m-5 max-md:m-0">
          <h2 className="flex justify-between text-2xl max-md:justify-center max-md:text-xl">
            {data.question}
          </h2>
          <p className="flex h-[70%] flex-col justify-between overflow-auto whitespace-pre-line max-md:h-[50%] max-md:text-center max-md:text-sm">
            {data.replie}
            <div className="text-center">
              {userId === data.user_id && (
                <div className="flex justify-evenly max-md:*:text-sm">
                  <Button variant="update" className="text-lg text-[gray]" onClick={onUpdate}>
                    게시글 수정
                  </Button>
                  <Button variant="update" className="text-lg text-[gray]" onClick={handleSave}>
                    이미지 저장
                  </Button>
                  {isSave && (
                    <SaveFile title={data.question} reply={data.replie} onClose={onSaveclose} />
                  )}
                </div>
              )}
            </div>
          </p>
          {isUpdate && (
            <PostBox postId={data.id} comment={data.replie} closePostWindow={onUpdateClose} />
          )}
        </section>
        <Comment data={data.user_comment_rls} postId={data.id} userId={userId} />
      </section>
    </main>
  );
}

export default Post;
