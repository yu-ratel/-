import Board from '@/containers/board';

const fetchData = async (page: number) => {
  const curPage = Number(page);
  //cache: 'no-store',
  const response = await fetch(`http://localhost:3000/api/boardPost?page=${curPage}`);

  return response.json();
};

export default async function BoardPage({ params }: { params: { page: number } }) {
  const result = await fetchData(params.page);

  return <Board data={result.result.data} totalCount={result.totalCount} limit={result.limit} />;
}
