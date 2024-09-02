'use client';

import { useEffect, useState } from 'react';
import { BsPencil as UpdatePen } from 'react-icons/bs';

import Button from '@/components/Button';
import { Database } from '@/types/supabase';

import NicknameBox from './NickNamebox';

type ProfileDto = Database['public']['Tables']['profiles']['Row'];

interface Props {
  data: ProfileDto;
}

const profileFetchData = async (userId: string | null) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile?id=${userId}`);

  return response.json();
};

function Nickname() {
  const [nickname, setNickname] = useState('');
  const [isGuest, setGuest] = useState(false);
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = localStorage.getItem('userId');
      const { data }: Props = await profileFetchData(userId);

      if (userId === null) {
        window.location.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`);
      }

      if (userId === 'aa3156f1-cab6-4045-abe2-0e755287190f') {
        setGuest(true);
      }

      if (data.name) {
        setNickname(data.name);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <div>
        안녕하세요, <span className="text-2xl text-deepBraun">{nickname}</span>님
      </div>
      {!isGuest && (
        <Button variant="update" onClick={() => setUpdate(true)}>
          <UpdatePen />
        </Button>
      )}
      {isUpdate && <NicknameBox nickname={nickname} closeCommentWindow={() => setUpdate(false)} />}
    </>
  );
}

export default Nickname;
