'use client';

import { useEffect, useState } from 'react';
import { BsPencil as UpdatePen } from 'react-icons/bs';

import Button from '@/components/Button';

import NicknameBox from './Nicknamebox';

function Nickname({ name }: { name: string | null }) {
  const [isGuest, setGuest] = useState(false);
  const [isUpdate, setUpdate] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = localStorage.getItem('userId');

      if (userId === 'aa3156f1-cab6-4045-abe2-0e755287190f') {
        setGuest(true);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <div>
        안녕하세요, <span className="text-2xl text-deepBraun">{name}</span>님
      </div>
      {!isGuest && (
        <Button variant="update" onClick={() => setUpdate(true)}>
          <UpdatePen />
        </Button>
      )}
      {isUpdate && <NicknameBox nickname={name} closeCommentWindow={() => setUpdate(false)} />}
    </>
  );
}

export default Nickname;
