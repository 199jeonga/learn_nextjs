import prisma from "@/app/lib/prisma";
// import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";

interface RequestBody {
  email: string;
  name: string;
  password: string;
}

const client = new PrismaClient();

export async function POST(request: Request) {
  console.log("post!");
  const body: RequestBody = await request.json();

  const user = await client.user.create({
    data: {
      email: body.email,
      name: body.name,
      password: await bcrypt.hash(body.password, 10),
    },
  });

  // if (user && (await bcrypt.compare(body.password, user.password))) {
  //   const { password, ...userWithoutPass } = user;

  //   // 추가된 부분
  //   const accessToken = signJwtAccessToken(userWithoutPass);
  //   const result = {
  //     ...userWithoutPass,
  //     accessToken,
  //   };
  console.log("POST :", user);
  return new Response(JSON.stringify(user));
  // JavaScript의 Response 클래스를 사용하여 HTTP 응답을 생성
  // 서버에서 클라이언트에게 응답을 보낼 때 사용
  // JavaScript 객체 result를 JSON 문자열로 변환하고, 그것을 Response 객체에 담아서 반환합니다.
  // } else return new Response(JSON.stringify(null));
}
