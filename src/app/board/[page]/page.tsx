import { Metadata } from 'next';

import Board from '@/containers/board';

export const metadata: Metadata = {
  title: '우리들의 이야기',
  description: '우리들의 이야기를 구경해봐요. 😀',
};

async function BoardPage({ params }: { params: { page: number } }) {
  return <Board page={params.page} />;
}

export default BoardPage;
