import { create, deleted, update } from '@/actions/post';
import errorHandler from '@/utils/errorHandler';

const usePostController = () => {
  const createPost = async (question: string, replie: string) => {
    return errorHandler(create(question, replie));
  };

  const updatePost = async (id: number, replie: string) => {
    return errorHandler(update(id, replie));
  };

  const deletePost = async (id: number) => {
    return errorHandler(deleted(id));
  };

  return {
    createPost,
    updatePost,
    deletePost,
  };
};

export default usePostController;
