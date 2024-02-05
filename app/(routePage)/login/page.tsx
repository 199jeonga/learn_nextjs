"use client"; //Client 사이드 로직이라 별도 컴포넌트를 만들고 그 컴포넌트에는 'use client'라고 명시
import { useRouter } from "next/navigation";
import Link from "next/link";
// import Loading from "./loading";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { IoLogoGoogle } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import React, { useRef, useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
// import SignInButton from "../../components/SignInButton";

export default function Page() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // 📍 6:추가된 부분
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      setProviders(res);
    })();
  }, []);
  // 6: 추가된 부분

  const handleSubmit = async () => {
    const result = await signIn("credentials", {
      email: emailRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="mx-auto w-full h-full">
      <div className="w-[24rem] mx-auto h-auto mt-[10%] border rounded-md border-solid border-slate-200 bg-white">
        <main className="px-3 py-6">
          <h1 className="text-center text-3xl font-semibold mb-10">로그인</h1>

          <div className="flex mb-8">
            <button
              className="flex justify-center w-1/3 rounded-md border border-gray-200 text-slate-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-sky-500 focus:outline-none mr-1"
              onClick={() =>
                signIn("kakao", { redirect: true, callbackUrl: "/" })
              }
            >
              <RiKakaoTalkFill className="mr-1 mt-1 text-slate-700" />
              <span className="text-slate-700">kakao</span>
            </button>
            <button
              className="flex justify-center w-1/3 rounded-md border border-gray-200 text-slate-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-sky-500 focus:outline-none mr-1"
              onClick={() =>
                signIn("naver", { redirect: true, callbackUrl: "/" })
              }
            >
              <SiNaver
                style={{ width: "12px" }}
                className="mr-1 mt-[5px] text-slate-700"
              />
              <span className="text-slate-700">naver</span>
            </button>
            <button
              className="flex justify-center w-1/3 rounded-md border border-gray-200 text-slate-700 px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-sky-500 focus:outline-none"
              onClick={() =>
                signIn("google", { redirect: true, callbackUrl: "/" })
              }
            >
              <IoLogoGoogle className="mr-1 mt-[5px] text-slate-700" />
              <span className="text-slate-700">google</span>
            </button>
          </div>

          <div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-800 dark:text-gray-200"
              >
                이메일
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
                비밀번호
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
            <div className="mr-2 mt-2 flex justify-end">
              <Link href={"/adduser"} className="w-[75px] flex justify-end">
                <span>회원가입</span>
                <FaArrowRight className="mt-[4px] ml-[4px] w-[12px]" />
              </Link>
            </div>
            <div className="mt-6">
              <button
                onClick={handleSubmit}
                className="w-full transform rounded-md bg-sky-500  px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
              >
                로그인
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
