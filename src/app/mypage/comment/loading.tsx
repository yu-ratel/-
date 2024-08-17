import SkeletonBoard from '@/components/SkeletonBoard';

async function Loading() {
  return (
    <>
      <section className="h-4/5">
        <section className="flex h-[3%] rounded-t-xl bg-gray" />
        <SkeletonBoard count={4} isMyPage />
      </section>
      <div className="flex justify-center">
        <div className="h-7 w-10 animate-pulse rounded-lg bg-gray text-center" />
      </div>
      <section />
    </>
  );
}

export default Loading;
