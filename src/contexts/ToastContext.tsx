'use client';

import { createContext, useCallback, useRef, useState, useMemo } from 'react';

import ToastPopUp from '@/components/ToastPopUp';

interface ToastProps {
  id: number;
  message: string;
}

interface Props {
  openToast: (message: string) => void;
}

export const ToastContext = createContext<Props>({
  openToast: () => {},
});

function ToastContextProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);
  const toastTimer = useRef<NodeJS.Timeout>();
  const toastIdRef = useRef(0);

  const openToast = useCallback((message: string) => {
    // eslint-disable-next-line no-plusplus
    const id = toastIdRef.current++;
    const newToast = { id, message };
    setToasts((prev) => [...prev, newToast]);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    toastTimer.current = setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, 2000);
  }, []);

  const value = useMemo(() => ({ openToast }), [openToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toasts.map((toast) => (
        <ToastPopUp key={toast.id} message={toast.message} />
      ))}
    </ToastContext.Provider>
  );
}

export default ToastContextProvider;
