import { create, update, deleted } from '@/actions/comment';
import errorHandler from '@/utils/errorHandler';

const useCommentController = () => {
  const createComment = (id: number, comment: string) => {
    return errorHandler(create(id, comment));
  };

  const updateComment = async (id: number, comment: string) => {
    return errorHandler(update(id, comment));
  };

  const deletedComment = async (id: number) => {
    return errorHandler(deleted(id));
  };

  return {
    createComment,
    updateComment,
    deletedComment,
  };
};

export default useCommentController;
