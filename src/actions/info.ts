'use server';

import creatServer from '@/lib/supabase/server';
import onRevalidate from '@/utils/revalidate';

const revalidateTag = 'info';

const update = async (id: string, name: string) => {
  const supabase = await creatServer();

  const result = await supabase
    .from('profiles')
    .update({
      name,
    })
    .eq('id', id)
    .select();

  onRevalidate(revalidateTag);

  return result.data;
};

export default update;
