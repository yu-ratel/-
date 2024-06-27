export default function PostPage() {
  return (
    <main className="h-[80%]">
      <h1 className="text-center text-4xl text-white">우리들의 이야기</h1>
      <section className="flex h-full">
        <section className="ml-10 mt-10 h-4/5 w-3/5 bg-white *:m-5">
          <div>제목</div>
          <div>이름 날짜</div>
          <div>글</div>
        </section>
        <section className="ml-2 mr-10 mt-10 h-4/5 w-2/5 bg-white *:m-5">
          <div>댓글창</div>
          <div>dd</div>
        </section>
      </section>
    </main>
  );
}
