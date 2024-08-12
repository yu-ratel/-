function SkeletonBoard() {
  return (
    <>
      <div className="h-[10%] w-full bg-gray " />
      {Array.from({ length: 5 }).map((_, index) => (
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
