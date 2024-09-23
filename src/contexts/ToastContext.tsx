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
  const toastIdRef = useRef(0);

  const openToast = useCallback(
    (message: string) => {
      if (toasts.length < 2) {
        // eslint-disable-next-line no-plusplus
        const id = toastIdRef.current++;
        const newToast = { id, message };
        setToasts((prev) => [...prev, newToast]);

        setTimeout(() => {
          setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 3000);
      }
    },
    [toasts],
  );

  const value = useMemo(() => ({ openToast }), [openToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-0 mt-10 flex w-full flex-col items-center">
        {toasts.map((toast) => (
          <ToastPopUp key={toast.id} message={toast.message} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export default ToastContextProvider;
