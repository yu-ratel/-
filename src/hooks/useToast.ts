'use client';

import { useRef, useState } from 'react';

const useToast = () => {
  const [message, setMessage] = useState<string>('');
  const [isToast, setIsToast] = useState<boolean>(false);
  const toastTimer = useRef<NodeJS.Timeout | null>(null);

  const openToast = (text: string) => {
    setIsToast(true);
    setMessage(text);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setIsToast(false);
      setMessage('');
    }, 2000);

    toastTimer.current = timer;
  };

  return { isToast, message, openToast };
};

export default useToast;
