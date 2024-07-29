import { IoAlertCircleOutline as AlertIcon } from 'react-icons/io5';

interface Props {
  message: string;
}

function ToastPopUp({ message }: Props) {
  return (
    <div>
      <AlertIcon className="mt-[-80px] flex w-44 animate-bounce items-center justify-evenly rounded-md  border border-solid p-1.5 text-xs" />
      {message}
    </div>
  );
}

export default ToastPopUp;
