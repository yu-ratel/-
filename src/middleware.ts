import { NextRequest, NextResponse } from 'next/server';

import creatServer from './lib/supabase/server';

async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const supabase = await creatServer();
  const { data, error } = await supabase.auth.getSession();

  requestHeaders.set('isUser', data.session ? 'true' : 'false');

  if (error) request.headers.set('isUser', 'false');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export default middleware;
