import { create, deleted } from '@/actions/comment';

const useCommentController = () => {
  const createComment = async (id: number, comment: string) => {
    await create(id, comment);
  };

  const deletedComment = async (id: number) => {
    await deleted(id);
  };

  return {
    createComment,
    deletedComment,
  };
};

export default useCommentController;
