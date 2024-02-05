"use client";
import { FormProvider, useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

interface HookFormTypes {
  _name: string;
  _email: string;
  _password: string;
  _passwordCk: string;
}

export default function Page() {
  const methods = useForm<HookFormTypes>();
  const { register, handleSubmit, getValues, watch } = methods;

  const [providers, setProviders] = useState(null);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      console.log(res);
      setProviders(res);
    })();
  }, []);

  const fnSubmit = async () => {
    const res = await fetch(
      `http://localhost:3000/api/adduser`,
      // `${process.env.NEXT_PUBLIC__NEXTAUTH_URL}/api/adduser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: watch("_name"),
          email: watch("_email"),
          password: watch("_password"),
        }),
      }
    );
    const user = await res.json();
    if (user) {
      router.push("/login");
      return user;
    } else {
      return null;
    }
  };

  return (
    <div className="mx-auto w-full h-full">
      <div className="w-[24rem] mx-auto h-auto mt-[10%] border rounded-md border-solid border-slate-200 bg-white">
        <main className="px-3 py-6">
          <h1 className="text-center text-3xl font-semibold mb-10">회원가입</h1>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(fnSubmit)}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  이름
                </label>

                <div className="mt-1">
                  <input
                    {...register("_name")}
                    id="name"
                    required
                    autoFocus={true}
                    className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  이메일
                </label>

                <div className="mt-1">
                  <input
                    {...register("_email")}
                    id="email"
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
                    {...register("_password")}
                    type="password"
                    id="password"
                    className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="passwordCk"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  비밀번호 확인
                </label>
                <div className="mt-1">
                  <input
                    {...register("_passwordCk")}
                    type="password"
                    id="passwordCk"
                    className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                  />
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full transform rounded-md bg-sky-500  px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
                >
                  회원가입
                </button>
              </div>
            </form>
          </FormProvider>
        </main>
      </div>
    </div>
  );
}
