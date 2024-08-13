function SkeletonBoard({ count }: { count: number }) {
  return (
    <>
      <div className="h-[10%] w-full bg-gray" />
      {Array.from({ length: count }).map((_, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ol className="flex *:m-6 *:h-5 *:animate-pulse *:rounded *:bg-gray" key={index}>
          <li className="w-[10%]" />
          <li className="w-[50%]" />
          <li className="w-[15%]" />
          <li className="w-[25%]" />
        </ol>
      ))}
    </>
  );
}

export default SkeletonBoard;
