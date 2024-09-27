'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import useToast from '@/hooks/useToast';

export default function Error() {
  const router = useRouter();
  const { openToast } = useToast();

  useEffect(() => {
    openToast('예기치 못한 오류가 발생했습니다.');
    router.push('/');
  }, []);

  return null;
}
