'use server';

import creatServer from '@/lib/supabase/server';

export const get = async () => {
  const supabase = await creatServer();

  const result = await supabase.from('user_replies_ris').select('*').is('deleted_at', null);

  return result.data;
};

export const create = async (question: string, replie: string) => {
  const supabase = await creatServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const result = await supabase
    .from('user_replies_ris')
    .insert({
      question,
      replie,
      nickname: user?.user_metadata.name,
    })
    .select();
  return result.data;
};

export const update = async (id: string, replie: string) => {
  const supabase = await creatServer();

  const result = await supabase
    .from('user_replies_ris')
    .update({
      replie,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select();

  return result.data;
};

export const deleted = async (id: string) => {
  const supabase = await creatServer();

  const result = await supabase
    .from('user_replies_ris')
    .update({
      deleted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select();

  return result.data;
};
