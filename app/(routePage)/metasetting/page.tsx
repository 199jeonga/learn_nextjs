//app/userposts/page.tsx

"use client"; //Client 사이드 로직이라 별도 컴포넌트를 만들고 그 컴포넌트에는 'use client'라고 명시
import { useSession } from "next-auth/react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface HookFormTypes {
  _title: string;
  _keyword: string;
  _telnum: string;
  _authorId: Number;
}

function UserPosts() {
  const router = useRouter();
  const session: any = useSession();
  const methods = useForm<HookFormTypes>();
  const { register, handleSubmit, getValues, watch } = methods;

  const fnSubmit = async () => {
    const res = await fetch(
      `http://localhost:3000/api/metasetting`,
      // `${process.env.NEXT_PUBLIC__NEXTAUTH_URL}/api/adduser`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: watch("_title"),
          keyword: watch("_keyword"),
          telnum: watch("_telnum"),
          authorId: session.data.user.id,
        }),
      }
    );
    const metasetting = await res.json();
    if (metasetting) {
      router.push("/mainsetting");
      return metasetting;
    } else {
      return null;
    }
  };

  return (
    <div className="mx-auto w-full h-full">
      <div className="w-[24rem] mx-auto h-auto mt-[10%] border rounded-md border-solid border-slate-200 bg-white">
        <main className="px-3 py-6">
          <h1 className="text-center text-3xl font-semibold mb-10">정보입력</h1>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(fnSubmit)}>
              <div className="mb-3">
                <label
                  htmlFor="title"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  홈페이지 이름
                </label>
                <input
                  id="title"
                  type="text"
                  {...register("_title")}
                  required
                  autoFocus={true}
                  className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="keyword"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  키워드
                </label>

                <input
                  id="keyword"
                  type="text"
                  {...register("_keyword")}
                  required
                  autoFocus={true}
                  className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="telnum"
                  className="block text-sm text-gray-800 dark:text-gray-200"
                >
                  연락처
                </label>

                <input
                  id="telnum"
                  type="text"
                  {...register("_telnum")}
                  required
                  autoFocus={true}
                  className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:focus:border-blue-300"
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full transform rounded-md bg-sky-500  px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-gray-600 focus:outline-none"
                >
                  저장
                </button>
              </div>
            </form>
          </FormProvider>
        </main>
      </div>
    </div>
  );
}

export default UserPosts;
