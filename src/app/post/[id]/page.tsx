import { Database } from '@/types/supabase';

type BoardDto = Database['public']['Tables']['user_replies_ris']['Row'];

const fetchData = async (id: number) => {
  const curId = Number(id);
  const response = await fetch(`http://localhost:3000/api/post?id=${curId}`);

  return response.json();
};

async function PostPage({ params }: { params: { id: number } }) {
  const data: BoardDto = await fetchData(params.id);

  return (
    <main className="h-[80%]">
      <h1 className="text-center text-4xl text-white">우리들의 이야기</h1>
      <section className="flex h-full">
        <section className="ml-10 mt-10 h-4/5 w-3/5 bg-white *:m-5">
          <div>{data.question}</div>
          <div>
            {data.nickname} {data.updated_at}
          </div>
          <div>{data.replie}</div>
        </section>
        <section className="ml-2 mr-10 mt-10 h-4/5 w-2/5 bg-white *:m-5">
          <div>댓글창</div>
          <div>dd</div>
        </section>
      </section>
    </main>
  );
}

export default PostPage;
