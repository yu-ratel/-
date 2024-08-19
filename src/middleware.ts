import { RequestCookies, ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';

import createMiddleware from './lib/supabase/middleware';

const loginRequest = (response: NextResponse, request: NextRequest) => {
  const setCookies = new ResponseCookies(request.headers);
  const newReqHeaders = new Headers(response.headers);
  const newReqCookies = new RequestCookies(newReqHeaders);

  setCookies.set('isUser', 'true');

  setCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));

  const nextResponse = NextResponse.next({
    request: { headers: newReqHeaders },
  });

  nextResponse.cookies.set('isUser', 'true');

  return nextResponse;
};

async function middleware(request: NextRequest) {
  const supabase = createMiddleware(request);
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (request.nextUrl.pathname === '/') {
    if (session) {
      const response = NextResponse.next({});
      return loginRequest(response, request);
    }
  }

  if (request.nextUrl.pathname.startsWith('/mypage')) {
    if (session) {
      if (error?.status === 400 || error?.status === 401) {
        supabase.auth.signOut();
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/?redirected=true`);
      }
    }

    if (!session) {
      return NextResponse.redirect(`${process.env.NEXT_PUBLIC_BASE_URL}/`);
    }
  }

  return NextResponse.next({});
}

export default middleware;

export const config = {
  matcher: ['/mypage/:path*', '/'],
};
