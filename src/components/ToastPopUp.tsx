import { IoAlertCircleOutline as AlertIcon } from 'react-icons/io5';

interface Props {
  message: string;
}

function ToastPopUp({ message }: Props) {
  return (
    <div className="m-1 flex w-[300px] animate-pulse items-center justify-evenly rounded-md border  border-solid p-1.5 text-lg text-white">
      <AlertIcon />
      {message}
    </div>
  );
}

export default ToastPopUp;
