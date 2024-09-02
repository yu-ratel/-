'use server';

import creatServer from '@/lib/supabase/server';
import onRevalidate from '@/utils/revalidate';

const revalidateTag = 'post';

export const create = async (postId: number, comment: string) => {
  const supabase = await creatServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const data = await supabase.from('profiles').select('name').eq('id', user!.id).single();

  const result = await supabase
    .from('user_comment_rls')
    .insert({
      post_id: postId,
      comment,
      nickname: data.data?.name as string,
    })
    .select();

  onRevalidate(revalidateTag);

  return result.data;
};

export const update = async (id: number, comment: string) => {
  const supabase = await creatServer();

  const result = await supabase
    .from('user_comment_rls')
    .update({
      comment,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select();

  onRevalidate(revalidateTag);

  return result.data;
};

export const deleted = async (id: number) => {
  const supabase = await creatServer();

  const result = await supabase.from('user_comment_rls').delete().eq('id', id);

  onRevalidate(revalidateTag);

  return result.data;
};
