import { toPng } from 'html-to-image';
import { useRef, useState } from 'react';

import Button from '@/components/Button';
import { formatToday } from '@/utils/formatDate';

interface Props {
  title: string;
  reply: string;
  onClose: () => void;
  openToastSave: (message: string) => void;
}

function SaveFile({ title, reply, onClose, openToastSave }: Props) {
  const [isButton, setIsButton] = useState(false);
  const today = formatToday();
  const domRef = useRef<HTMLDivElement>(null);

  const onPng = () => {
    if (domRef.current) {
      setIsButton(true);

      toPng(domRef.current)
        .then((dataUrl: string) => {
          const link = document.createElement('a');
          link.download = `${title}-${today}.png`;
          link.href = dataUrl;
          link.click();
          openToastSave('저장 되었습니다!');
        })
        .catch((e) => {
          onClose();
          openToastSave('다시 시도해주세요.');
        })
        .finally(() => {
          onClose();
        });
    }
  };

  return (
    <div className=" fixed left-0 top-0 z-50 grid h-full w-full items-center justify-items-center bg-gray/50 *:text-white">
      <div
        ref={domRef}
        className="flex h-3/4 w-2/5 flex-col overflow-hidden rounded-lg bg-deepBraun"
      >
        <h2 className="mb-2 mt-4 text-gray">{today} 나를 알아보는 시간 </h2>
        <h3 className="text-lg">{title}</h3>
        <div className="note m-5 h-4/5 overflow-auto rounded-xl bg-white *:text-black">
          <p>{reply}</p>
        </div>
        <div>
          {!isButton && (
            <>
              <Button variant="save" onClick={onPng}>
                다운로드
              </Button>
              <Button variant="save" onClick={onClose}>
                닫기
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SaveFile;
