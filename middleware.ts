import { NextResponse, NextRequest } from "next/server";
export function middleware(req: NextRequest) {
  const token = req.cookies.get("access-token")?.value;
  console.log(token);
  const validateToken = (token) => !!token;
  const isUserAuthenticated = validateToken(token);

  if (!isUserAuthenticated && !req.nextUrl.pathname.startsWith("/auth")) {
    const signinUrl = new URL("/auth/login", req.url);
    return NextResponse.redirect(`${signinUrl}`);
  }

  if (isUserAuthenticated && req.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/auth/:path*"],
};
