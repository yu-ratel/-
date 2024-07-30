import Link from 'next/link';
import { FaRegTrashCan as TrashIcon } from 'react-icons/fa6';

import Button from '@/components/Button';
import { Database } from '@/types/supabase';
import { formatStrDate } from '@/utils/formatDate';

import MyPageBoard from '../MyPageBoard';

type BoardDto = Database['public']['Tables']['user_post_rls']['Row'];

interface Props {
  data: BoardDto[];
  totalCount: number;
  limit: number;
  page: number;
}

function MyPost({ data, totalCount, limit, page }: Props) {
  const startPostNumber = (page - 1) * limit + 1;

  return (
    <MyPageBoard isPost totalCount={totalCount} limit={limit}>
      {data.map((item, index) => {
        return (
          <ol key={item.id} className="mb-3 flex items-center text-center *:my-1.5">
            <Link href={`/post/${item.id}`} className="flex w-[96%] flex-grow *:w-[25%]">
              <li>{startPostNumber + index}</li>
              <li className="truncate">{item.question}</li>
              <li>{item.replie}</li>
              <li>{formatStrDate(item.updated_at)}</li>
            </Link>
            <Button variant="mypageClear">
              <TrashIcon />
            </Button>
          </ol>
        );
      })}
    </MyPageBoard>
  );
}

export default MyPost;
