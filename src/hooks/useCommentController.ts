import { create } from '@/actions/comment';

const useCommentController = () => {
  const createComment = async (id: number, comment: string) => {
    create(id, comment);
  };

  return {
    createComment,
  };
};

export default useCommentController;
