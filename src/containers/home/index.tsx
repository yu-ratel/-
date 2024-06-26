import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
  return (
    <main>
      <h1 className="m-10 text-4xl text-white">아름다움</h1>
      <section className="grid grid-cols-2 gap-5">
        <p className="m-10 text-2xl text-gray">
          “아름다움”의 어원은 나다움이라고 해요. 나와의 솔직한 대화, 나를 알아가는 서비스
        </p>
        <figure className="relative h-96 w-96 justify-self-center">
          <Image src="/images/postCard.png" alt="postCard" layout="fill" objectFit="cover"></Image>
        </figure>
        <Link
          className="relative bottom-36 h-16  w-44 content-center justify-self-center bg-deepBraun text-center text-white shadow-xl"
          href="/for-me"
        >
          for me
        </Link>
      </section>
    </main>
  );
};

export default Home;
