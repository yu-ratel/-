import { useContext } from 'react';

import { ToastContext } from '@/contexts/ToastContext';

const useToast = () => {
  const { openToast } = useContext(ToastContext);

  return { openToast };
};

export default useToast;
