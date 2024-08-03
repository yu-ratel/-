import Image from 'next/image';

import ActiveLink from '@/components/ActiveLink';
import Button from '@/components/Button';

function Home() {
  return (
    <main>
      <h1 className="m-10 text-4xl text-white">아름다움</h1>
      <section className="grid grid-cols-2 gap-5">
        <div className="flex flex-col justify-between">
          <p className="m-10 text-2xl text-gray">
            “아름다움”의 어원은 나다움이라고 해요. 나와의 솔직한 대화, 나를 알아가는 서비스
          </p>
          <ActiveLink path="/for-me" className="relative text-center">
            <Button>for me</Button>
          </ActiveLink>
        </div>
        <figure className="relative h-96 w-96 justify-self-center">
          <Image
            src="/images/postCard.png"
            alt="postCard"
            fill
            priority
            className="object-cover"
            sizes="100%"
          />
        </figure>
      </section>
    </main>
  );
}

export default Home;
