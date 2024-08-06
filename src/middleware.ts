import { NextRequest, NextResponse } from 'next/server';

import createMiddleware from './lib/supabase/middleware';

async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const supabase = createMiddleware(request);

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (user) {
    requestHeaders.set('isUser', 'true');
  }
  if (user && error?.status === 400) {
    supabase.auth.signOut();
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/?redirected=true`);
  }

  if (!user && request.nextUrl.pathname.startsWith('/mypage')) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/`);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export default middleware;
