'use server';

import creatServer from '@/lib/supabase/server';
import onRevalidate from '@/utils/revalidate';

const revalidateTag = 'board';

export const create = async (question: string, replie: string) => {
  const supabase = await creatServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const result = await supabase
    .from('user_post_rls')
    .insert({
      question,
      replie,
      nickname: user?.user_metadata.name,
    })
    .select();

  onRevalidate(revalidateTag);

  return result.data;
};

export const update = async (id: number, replie: string) => {
  const supabase = await creatServer();

  const result = await supabase
    .from('user_post_rls')
    .update({
      replie,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select();

  onRevalidate(revalidateTag);

  return result.data;
};

export const deleted = async (id: number) => {
  const supabase = await creatServer();

  const result = await supabase.from('user_post_rls').delete().eq('id', id);

  onRevalidate(revalidateTag);

  return result.data;
};
