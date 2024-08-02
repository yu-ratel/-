'use client';

import { Dispatch, SetStateAction, createContext, useMemo, useState } from 'react';

import Loading from '@/components/Loading';

interface Props {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<Props>({
  isLoading: false,
  setLoading: () => {},
});

function LoadingContextProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setLoading] = useState(false);

  const value = useMemo(() => ({ isLoading, setLoading }), [isLoading]);

  return (
    <LoadingContext.Provider value={value}>
      {isLoading && (
        <div className="fixed top-0 mt-10 flex w-full flex-col items-center">
          <Loading />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingContextProvider;
