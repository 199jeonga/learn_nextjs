//app/signin/page.tsx

"use client";
// 📍 6:추가된 부분
import React, { useRef, useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";

function Login() {
  // input 엘리먼트에 useRef를 이용해서 사용자가 입력하는 email과 password를 관리
  // useRef는 클라이언트 사이드 훅이기 때문에 맨 첫 줄에 'use client' 빼먹으면 안 됩니다.
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // 📍 6:추가된 부분
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      // NextAuth의 헬퍼 유틸리티
      // getProviders() 함수는 비동기식으로 작동해야 하기 때문에 useEffect함수에서 익명 async 방식으로 코드를 구현
      console.log(res);
      setProviders(res);
    })();
  }, []);
  // 6: 추가된 부분

  const handleSubmit = async () => {
    // console.log(emailRef.current);
    // console.log(passwordRef.current);

    // 📍 5: Provider를 넣을 수 있습니다.
    // email과 password를 이용한 credentials 방식을 사용하기 때문에 위와 같이 credentials을 넣고 username과 password 등 각각의 항목을 넣으면 됩니다.
    // 로그인 성공 시!!!! redirect 부분과 callbackUrl을 넣는 부분이 있는데 redirect를 true로 하면 로그인 성공 시 callbackUrl로 이동
    const result = await signIn("credentials", {
      username: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: "/",
    });
    console.log(result);
  };

  // 📍6: 추가된 부분
  const handleKakao = async () => {
    const result = await signIn("kakao", {
      redirect: true,
      callbackUrl: "/",
    });
    console.log(result);
  };
  // 추가된 부분

  return (
    <main className="flex min-h-screen flex-col items-center space-y-10 p-24">
      <h1 className="text-4xl font-semibold">Login</h1>
      <div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>

          <div className="mt-1">
            <input
              ref={emailRef}
              onChange={(e: any) => {
                emailRef.current = e.target.value;
              }}
              id="email"
              name="email"
              type="email"
              required
              autoFocus={true}
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              type="password"
              id="password"
              name="password"
              ref={passwordRef}
              onChange={(e: any) => (passwordRef.current = e.target.value)}
              className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
            />
          </div>
        </div>

        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          >
            Log In
          </button>
        </div>
      </div>
      {/* 📍6: 추가된 부분 */}
      <div>
        <button
          className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          onClick={() => signIn("kakao", { redirect: true, callbackUrl: "/" })}
        >
          kakao login
        </button>
        <button
          className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          onClick={() => signIn("naver", { redirect: true, callbackUrl: "/" })}
        >
          naver login
        </button>
        <button
          className="w-full transform rounded-md bg-gray-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
          onClick={() => signIn("google", { redirect: true, callbackUrl: "/" })}
        >
          goolge login
        </button>
      </div>
      {/* 📍6: 추가된 부분 */}
    </main>
  );
}

export default Login;
