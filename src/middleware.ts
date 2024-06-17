import { NextResponse, NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
   const validPaths = ['/', '/auth', '/contact'];

   //check static file
   if (request.nextUrl.pathname.startsWith('/_next/static/')) {
      return NextResponse.next();
   }

   if (!validPaths.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL('/', request.url));
   }

   return NextResponse.next();
}

export const config = {
   matcher: '/:path*',
};
