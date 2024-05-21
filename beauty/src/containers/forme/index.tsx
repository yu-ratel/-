const ForMe = () => {
  return (
    <>
      <main className="flex">
        <section className=" m-10 h-[28rem] w-[55rem] bg-white">
          <header className="h-24 bg-deepBraun">
            <div className="h-full content-center text-center">
              <h3>
                나는 1년 후 어떤 사람이 되어있을 것 같나요?
                <span className="ml-10 text-gray">(2024.05.21)</span>
              </h3>
            </div>
          </header>
          <form>
            <input type="text" placeholder="Some text" />
          </form>
        </section>
        <section className="m-10 grid h-[28rem] w-[30rem] bg-white">
          <button className="bg-deepBraun" type="button">
            나를 알아가보세요.
          </button>
          <button type="button">질문</button>
          <button type="button">질문</button>
          <button type="button">질문</button>
          <button type="button">질문</button>
        </section>
      </main>
      <section className="m-10 text-center">
        <button
          className=" bottom-36 mx-20 h-16  w-44 content-center justify-self-center bg-deepBraun text-center text-white shadow-xl"
          type="button"
        >
          작성하기
        </button>
        <button
          className=" bottom-36 mx-20 h-16  w-44 content-center justify-self-center bg-deepBraun text-center text-white shadow-xl"
          type="button"
        >
          공유하기
        </button>
      </section>
    </>
  );
};

export default ForMe;
