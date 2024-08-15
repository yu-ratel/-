import SkeletonBoard from '@/components/SkeletonBoard';

async function Loading() {
  return (
    <main className="h-[80%]">
      <div className="h-[8%]" />
      <section className="m-10 h-4/5 bg-white">
        <SkeletonBoard count={5} />
      </section>
      <section />
      <div className="flex justify-center">
        <div className="h-7 w-10 animate-pulse rounded-lg bg-gray text-center" />
      </div>
    </main>
  );
}

export default Loading;
