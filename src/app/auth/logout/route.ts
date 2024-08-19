import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const GET = async () => {
  const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/`);

  cookies()
    .getAll()
    .forEach((cookie) => {
      response.cookies.delete(cookie.name);
    });

  return response;
};
