import { create, softDelete, update } from '@/actions/post';

const usePostController = () => {
  const createPost = async (question: string, replie: string) => {
    await create(question, replie);
  };

  const updatePost = async (id: number, replie: string) => {
    await update(id, replie);
  };

  const deletePost = async (id: number) => {
    await softDelete(id);
  };

  return {
    createPost,
    updatePost,
    deletePost,
  };
};

export default usePostController;
