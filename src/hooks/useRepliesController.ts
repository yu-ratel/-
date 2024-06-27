'use client';

import { useEffect, useState } from 'react';
import { Database } from '@/types/supabase';
import { create, get } from '@/actions/replies';

type BoardDto = Database['public']['Tables']['user_replies_ris']['Row'];

const useRepliesController = () => {
  const [replies, setReplies] = useState<BoardDto[] | null>([]);

  const getReplies = async () => {
    const result = await get();
    setReplies(result);
  };

  useEffect(() => {
    getReplies();
  }, []);

  const createReplies = async (question: string, replie: string) => {
    await create(question, replie);
  };

  return {
    replies,
    createReplies,
  };
};

export default useRepliesController;
