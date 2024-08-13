import asyncDelay from '@/utils/delay';

async function Loading() {
  const commentStyle = 'm-5 h-[20%] rounded-md bg-gray max-md:h-[25%]';
  await asyncDelay();

  return (
    <main className="h-[80%]">
      <div className="h-[10%]" />
      <section className="flex h-full max-md:flex-col max-md:items-center max-md:*:m-3 max-md:*:w-[90%] max-md:*:rounded-lg">
        <section className="ml-10 mt-10 h-4/5 w-3/5 bg-white *:m-5 *:h-5 *:animate-pulse *:bg-gray max-md:m-0 max-md:*:justify-center">
          <div className="!h-14 w-4/6" />
          <div className="w-6/6" />
          <div className="w-6/6" />
          <div className="w-4/6" />
          <div className="w-6/6" />
          <div className="w-3/6" />
        </section>
        <section className="ml-2 mr-10 mt-10 h-4/5 w-2/5 bg-white *:animate-pulse">
          <div className={commentStyle} />
          <div className={commentStyle} />
          <div className="h-[30%] max-md:h-0" />
          <div className="flex h-[10%] justify-center max-md:h-[15%]">
            <div className="w-4/5 items-center rounded-md bg-gray" />
          </div>
        </section>
      </section>
    </main>
  );
}

export default Loading;
