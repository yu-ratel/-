import { NextRequest, NextResponse } from 'next/server';

import createMiddleware from './lib/supabase/middleware';

async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const supabase = createMiddleware(request);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  requestHeaders.set('isUser', 'true');
  if (!user) {
    requestHeaders.set('isUser', 'false');
    if (request.nextUrl.pathname.startsWith('/mypage')) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/`);
    }
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export default middleware;
