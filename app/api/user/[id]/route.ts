//app/api/user/[id]/route.ts

import prisma from "@/app/lib/prisma";
import { verifyJwt } from "@/app/lib/jwt";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // 추가된 부분
  // get을 하기 전 토큰 검사
  const accessToken = request.headers.get("authorization"); // request.headers에서 authorization 부분에서 accessToken을 가져옴
  if (!accessToken || !verifyJwt(accessToken)) {
    // 토큰이 없거나 jwt함수를 통과하지 못한다면 오류
    return new Response(JSON.stringify({ error: "No Authorization" }), {
      status: 401,
    });
  }

  console.log(params);

  const id = Number(params.id);

  const userPosts = await prisma.post.findMany({
    // findMany를 이용해서 authorId가 id와 같은 모든 Post
    where: {
      authorId: id,
    },
    include: {
      author: {
        select: {
          email: true,
          name: true,
        },
      },
    },
  });
  return new Response(JSON.stringify(userPosts));
}
