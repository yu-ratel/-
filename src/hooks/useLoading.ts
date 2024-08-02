import { useContext } from 'react';

import { LoadingContext } from '@/contexts/LoadingContext';

const useLoading = () => {
  const { setLoading } = useContext(LoadingContext);

  const onLoading = async (action: () => Promise<void>) => {
    setLoading(true);

    try {
      await action();
    } catch (e) {
      return;
    } finally {
      setLoading(false);
    }
  };

  return { onLoading };
};

export default useLoading;
