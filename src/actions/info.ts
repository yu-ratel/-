'use server';

import creatServer from '@/lib/supabase/server';

const update = async (id: number, name: string) => {
  const supabase = await creatServer();

  const result = await supabase
    .from('profiles')
    .update({
      name,
    })
    .eq('id', id)
    .select();

  return result.data;
};

export default update;
