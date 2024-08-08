import { NextRequest, NextResponse } from 'next/server';

import createMiddleware from './lib/supabase/middleware';

async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const supabase = createMiddleware(request);
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (session) {
    requestHeaders.set('isUser', 'true');

    if (error?.status === 400 || error?.status === 401) {
      supabase.auth.signOut();
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/?redirected=true`);
    }
  }

  if (!session && request.nextUrl.pathname.startsWith('/mypage')) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/`);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export default middleware;
