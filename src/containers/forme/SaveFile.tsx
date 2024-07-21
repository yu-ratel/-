import Button from '@/components/Button';
import { formatToday } from '@/utils/formatDate';

interface Props {
  title: string;
  reply: string;
  onClose: () => void;
}

function SaveFile({ title, reply, onClose }: Props) {
  const today = formatToday();

  return (
    <div className=" fixed left-0 top-0 z-50 grid h-full w-full items-center justify-items-center bg-gray/50 *:text-white">
      <div className="flex h-3/4 w-2/5 flex-col overflow-hidden rounded-lg bg-deepBraun">
        <h2 className="mb-2 mt-4 text-gray">{today} 나를 알아보는 시간 </h2>
        <h3 className="text-lg">{title}</h3>
        <div className="*:text-black note m-5 h-4/5 overflow-auto rounded-xl bg-white">
          <p>{reply}</p>
        </div>
        <div>
          <Button variant="save"> 다운로드 </Button>
          <Button variant="save" onClick={onClose}>
            닫기
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SaveFile;
