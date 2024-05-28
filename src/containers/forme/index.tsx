import AskReply from './AskReply';

const ForMe = () => {
  return (
    <>
      <main className="flex">
        <AskReply />
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
