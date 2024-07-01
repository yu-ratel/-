import { NextRequest, NextResponse } from 'next/server';

function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  const loginCookie = request.cookies.get('sb-rovcvqfcrtakgsbepdzj-auth-token-code-verifier');
  requestHeaders.set('isUser', loginCookie ? 'true' : 'false');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export default middleware;
