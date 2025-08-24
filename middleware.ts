import {
  NextResponse,
} from "next/server";
import type {
  MiddlewareConfig,
  NextRequest
} from "next/server"


const publicRoutes = [
  { path: "/sign-in", whenAuthenticated: "redirect" },
  { path: "/register", whenAuthenticated: "redirect" },
  { path: "/link-na-bio", whenAuthenticated: "next" },
] as const;

const privateRoutes = [
  { path: "/emails", whenAuthenticated: "next" },
  { path: "/links", whenAuthenticated: "next" },
] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = "/";

export function middleware(request: NextRequest) {
  // const path = request.nextUrl.pathname;
  // const privateRoute = privateRoutes.find(route => route.path === path);
  // const authToken = request.cookies.get("token");

  // if (authToken && privateRoute) {
  //   console.log('ta logado')

  //   return NextResponse.next()
  // }

  // if (!authToken && privateRoute) {
  //   console.log('entrou sem auttentication')
  //   const redirectUrl = request.nextUrl.clone();
  //   redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;
  //   return NextResponse.redirect(redirectUrl);
  // }

  // if (authToken && publicRoute && publicRoute.whenAuthenticated === "redirect") {
  //   const redirectUrl = request.nextUrl.clone();
  //   redirectUrl.pathname = "/";
  //   return NextResponse.redirect(redirectUrl);
  // }

  // if (authToken && !publicRoute) {
  //   // Checar se o JWT está EXPIRADO

  //   // Se sim, remover o cookie e redirecionar o usuário pro login

  //   // Aplicar uma estratégia de refresh

  //   return NextResponse.next();
  // }

  return NextResponse.next();

}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}
