'use client';

import { useEffect, useState } from 'react';
import { BsPencil as UpdatePen } from 'react-icons/bs';

import Button from '@/components/Button';
import { Database } from '@/types/supabase';

type ProfileDto = Database['public']['Tables']['profiles']['Row'];

interface Props {
  data: ProfileDto;
}

const profileFetchData = async (userId: string | null) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/profile?id=${userId}`);

  return response.json();
};

function NickName() {
  const [nickName, setNickName] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = localStorage.getItem('userId');
      const { data }: Props = await profileFetchData(userId);

      if (userId === null) {
        window.location.replace(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/logout`);
      }

      if (data.name) {
        setNickName(data.name);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <div>
        안녕하세요, <span className="text-2xl text-deepBraun">{nickName}</span>님
      </div>
      <Button variant="update">
        <UpdatePen />
      </Button>
    </>
  );
}

export default NickName;
