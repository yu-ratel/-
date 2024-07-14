import { create, update, deleted } from '@/actions/comment';

const useCommentController = () => {
  const createComment = async (id: number, comment: string) => {
    await create(id, comment);
  };

  const updateComment = async (id: number, comment: string) => {
    await update(id, comment);
  };

  const deletedComment = async (id: number) => {
    await deleted(id);
  };

  return {
    createComment,
    updateComment,
    deletedComment,
  };
};

export default useCommentController;
