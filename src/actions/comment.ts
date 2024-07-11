'use server';

import creatServer from '@/lib/supabase/server';

export const create = async (id: number, comment: string) => {
  const supabase = await creatServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const result = await supabase
    .from('user_comment_rls')
    .insert({
      post_id: id,
      comment,
      nickname: user?.user_metadata.name,
    })
    .select();
  return result.data;
};

export const update = async (id: string, comment: string) => {
  const supabase = await creatServer();

  const result = await supabase
    .from('user_comment_rls')
    .update({
      comment,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select();

  return result.data;
};

export const deleted = async (id: string) => {
  const supabase = await creatServer();

  const result = await supabase
    .from('user_comment_rls')
    .update({
      deleted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select();

  return result.data;
};
