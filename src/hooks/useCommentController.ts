import { create, update, deleted } from '@/actions/comment';
import errorHandler from '@/utils/errorHandler';

const useCommentController = () => {
  const createComment = async (id: number, comment: string) => {
    try {
      await create(id, comment);
    } catch (error) {
      errorHandler();
    }
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
