// middleware는 app 폴더와 같은 레벨의 경로에 생성해야 함
// NextAuth에서는 Next.js에 맞는 미들웨어를 제공
export { default } from "next-auth/middleware";
// 바로 첫 번째 줄만 적어도 미들웨어가 작동됩니다.

export const config = {
  matcher: ["/userposts/:path*"], // matcher 부분을 추가해서 로그인한 상태만 볼 수 있는 페이지를 계속 추가
};
