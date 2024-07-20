import Button from '@/components/Button';
import { formatToday } from '@/utils/formatDate';

interface Props {
  title: string;
  reply: string;
}

function SaveFile({ title, reply }: Props) {
  const today = formatToday();
  return (
    <div className=" fixed left-0 top-0 z-50 grid h-full w-full items-center justify-items-center bg-gray/50">
      <div className="flex h-3/4 w-2/5 flex-col rounded-lg bg-deepBraun">
        <h2 className="mt-4">{today} 나를 알아보는 시간</h2>
        <div className=" *:text-black m-10 h-4/5 rounded-xl bg-white">
          <h3 className="text-lg">{title}</h3>
          <p className="underline">{reply}</p>
        </div>
        <div>
          <Button variant="update"> 다운로드 </Button>
          <Button variant="update"> 닫기 </Button>
        </div>
      </div>
    </div>
  );
}

export default SaveFile;
