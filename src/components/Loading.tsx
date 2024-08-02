import { CgSpinner as Spinner } from 'react-icons/cg';

function Loading() {
  return (
    <div className="animate-spin text-3xl">
      <Spinner />
    </div>
  );
}

export default Loading;
