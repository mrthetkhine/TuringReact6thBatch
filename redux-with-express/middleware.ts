"use client";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    console.log('Middleware execute ,redirect to login');
    return NextResponse.redirect(new URL('/login', request.url))
    //return NextResponse.rewrite(new URL('/login', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/movie'],
}