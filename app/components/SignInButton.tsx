"use client"; //Client 사이드 로직이라 별도 컴포넌트를 만들고 그 컴포넌트에는 'use client'라고 명시
import { useSession, signIn, signOut } from "next-auth/react";

export default function SignInButton() {
  const { data: session } = useSession(); //세션 정보를 가져옴

  if (session && session.user) {
    return (
      <button
        className="px-12 py-4 border rounded-xl bg-red-300"
        onClick={() => signOut()}
      >
        로그아웃
      </button>
    );
  } else {
    return (
      <button
        className="px-12 py-4 border rounded-xl bg-yellow-300"
        onClick={() => signIn()}
      >
        로그인
      </button>
    );
  }
}
