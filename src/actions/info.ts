'use server';

import creatServer from '@/lib/supabase/server';
import onRevalidate from '@/utils/revalidate';

const revalidateTags = ['info', 'post', 'board'];

const update = async (id: string, name: string) => {
  const supabase = await creatServer();

  const result = await supabase
    .from('profiles')
    .update({
      name,
    })
    .eq('id', id)
    .select();

  revalidateTags.map((tag) => {
    return onRevalidate(tag);
  });

  return result.data;
};

export default update;
