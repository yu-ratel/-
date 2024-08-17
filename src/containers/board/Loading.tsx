import SkeletonBoard from '@/components/SkeletonBoard';

async function Loading() {
  return (
    <>
      <section className="h-full">
        <SkeletonBoard count={5} />
      </section>
      <div className="flex justify-center">
        <div className="h-7 w-10 animate-pulse rounded-lg bg-gray text-center" />
      </div>
    </>
  );
}

export default Loading;
