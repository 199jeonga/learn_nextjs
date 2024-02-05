//app/userposts/page.tsx

"use client"; //Client 사이드 로직이라 별도 컴포넌트를 만들고 그 컴포넌트에는 'use client'라고 명시
import { useSession, signIn, signOut } from "next-auth/react";

function UserPosts() {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      UserPosts
    </main>
  );
}

export default UserPosts;
