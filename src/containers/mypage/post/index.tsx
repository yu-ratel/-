'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaRegTrashCan as TrashIcon } from 'react-icons/fa6';

import AlertBox from '@/components/AlertBox';
import Button from '@/components/Button';
import useLoading from '@/hooks/useLoading';
import usePostController from '@/hooks/usePostController';
import useToast from '@/hooks/useToast';
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
  const [isAlert, setAlert] = useState(false);
  const [curId, setCurId] = useState(0);
  const { deletePost } = usePostController();
  const { onLoading } = useLoading();
  const { openToast } = useToast();

  const onDelete = async (id: number) => {
    setAlert(false);
    await onLoading(() => deletePost(id));
    openToast('삭제가 완료되었습니다.');
  };

  const openAlert = (id: number) => {
    setAlert(true);
    setCurId(id);
  };

  return (
    <MyPageBoard isPost totalCount={totalCount} limit={limit}>
      {data.length ? (
        data.map((item, index) => {
          return (
            <ol key={item.id} className="mb-3 flex items-center text-center *:my-1.5">
              <Link href={`/post/${item.id}`} className="flex w-[96%] flex-grow *:w-[25%]">
                <li>{startPostNumber + index}</li>
                <li className="truncate">{item.question}</li>
                <li className="truncate">{item.replie}</li>
                <li>{formatStrDate(item.updated_at)}</li>
              </Link>
              <Button variant="mypageClear" onClick={() => openAlert(item.id)}>
                <TrashIcon />
              </Button>
              {isAlert && (
                <AlertBox
                  variant="delete"
                  onClose={() => setAlert(false)}
                  onClick={() => onDelete(curId)}
                />
              )}
            </ol>
          );
        })
      ) : (
        <div className="h-full content-center text-center">새로운 게시글을 남겨주세요 📝</div>
      )}
    </MyPageBoard>
  );
}

export default MyPost;
