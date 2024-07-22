function MyInfo() {
  return (
    <div className="h-[80%] px-10">
      <div className="flex h-1/6 w-full justify-center *:mx-10">
        <div>게시글 (눌리면 하얀색)</div>
        <div>댓글</div>
      </div>
      <div className="h-5/6 rounded-xl bg-white">요소들 (페이지네이션)- 삭제, 수정</div>
    </div>
  );
}

export default MyInfo;
