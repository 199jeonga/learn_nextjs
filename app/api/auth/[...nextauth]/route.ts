import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NaverProvider from "next-auth/providers/naver";
import KAKAOProvider from "next-auth/providers/kakao";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "이메일",
          type: "text",
          placeholder: "이메일 주소 입력 요망",
        },
        password: { label: "비밀번호", type: "password" },
      },

      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });
        const user = await res.json();
        if (user) {
          console.log(user);
          return user;
        } else {
          return null;
        }
      },
    }),

    KAKAOProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // 4: 로그인 폼에서 sybmit이 진행됐을 때 NextAuth의 authorize 함수에서 로그인 로직을 수행한 후지막으로 실행되는 부분
    // jwt,session는 NextAuth.js에서 제공하는 콜백 함수
    // 해당 콜백 함수는 여기서 실행되는 게 아닌 콜백들이 실행되는 컨텍스트에 필요한 데이터를 제공하기 위해 매개변수 작성

    // 📍 4: 토큰 생성 시 호출
    // jwt의 경우에는 토큰 생성 시에 필요한 token과 user 정보가 필요
    async jwt({ token, user }) {
      return { ...token, ...user }; // 토큰과 사용자 정보를 합쳐서 반환
    },

    // 📍 4: 사용자가 로그인 성공한 후 세션을 생성할 때 호출
    // session의 경우에는 현재 세션과 토큰이 필요
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
  // 📍 5: 여기가 추가된 부분
  // NextAuth가 signIn Page는 '/signin' 이란 경로를 사용하라고 알려줌
  // 기본으로 제공하는 NextAuth 로그인 페이지가 아니라 본인이 직접 만든 로그인 페이지로 이동
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
