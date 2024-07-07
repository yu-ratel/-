import { create } from '@/actions/replies';

const useRepliesController = () => {
  const createReplies = async (question: string, replie: string) => {
    await create(question, replie);
  };

  return {
    createReplies,
  };
};

export default useRepliesController;
